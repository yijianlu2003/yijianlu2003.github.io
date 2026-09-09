// Static site generator.
//
//   npm run build
//
// Emits one directory per content module, in English at the root and Chinese
// under /zh/. Photo albums are discovered by scanning assets/photos/<dir>.

import { mkdir, writeFile, rm, readdir, readFile } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

import { pages, site, identity, ui, LOCALES } from './content/index.js';
import { renderPage } from './page.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PHOTO_ROOT = join(ROOT, 'assets', 'photos');
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

/** Scan assets/photos/* so dropping a file in a folder is all it takes. */
async function discoverAlbums() {
  const albums = {};
  let dirs = [];
  try {
    dirs = (await readdir(PHOTO_ROOT, { withFileTypes: true }))
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return albums;
  }

  for (const dir of dirs) {
    const abs = join(PHOTO_ROOT, dir);
    const files = (await readdir(abs))
      .filter((f) => IMAGE_EXT.has(extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

    let captions = {};
    try {
      captions = JSON.parse(await readFile(join(abs, 'captions.json'), 'utf8'));
    } catch {
      /* captions are optional */
    }

    albums[dir] = files.map((file) => ({ file, caption: captions[file] || null }));
  }
  return albums;
}

async function emit(relPath, contents) {
  const abs = join(ROOT, relPath);
  await mkdir(dirname(abs), { recursive: true });
  await writeFile(abs, contents, 'utf8');
  return relPath;
}

/** URL and output path for a page in a given language. */
function locate(page, locale) {
  const seg = page.slug ? `${page.slug}/` : '';
  if (locale === 'en') {
    return {
      url: `/${seg}`,
      out: `${seg}index.html`,
      depth: page.slug ? 1 : 0,
    };
  }
  return {
    url: `/zh/${seg}`,
    out: `zh/${seg}index.html`,
    depth: page.slug ? 2 : 1,
  };
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#f1ead9"/>
  <path d="M8 9v7.5a4.5 4.5 0 0 0 4.5 4.5H16" stroke="#6e1d1d" stroke-width="2" fill="none"/>
  <path d="M16 21h3.5A4.5 4.5 0 0 0 24 16.5V9" stroke="#241f1a" stroke-width="2" fill="none"/>
  <circle cx="8" cy="9" r="2.4" fill="#241f1a"/>
  <circle cx="24" cy="9" r="2.4" fill="#6e1d1d"/>
  <circle cx="16" cy="21" r="2.4" fill="#241f1a"/>
</svg>`;

const SITE_JS = `/* Photo album lightbox. */
(function () {
  var box = document.getElementById('lightbox');
  if (!box) return;
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var shots = [], index = -1, lastFocus = null;

  function collect() {
    shots = Array.prototype.slice.call(document.querySelectorAll('.shot'));
  }

  function show(i) {
    if (i < 0) i = shots.length - 1;
    if (i >= shots.length) i = 0;
    index = i;
    var s = shots[index];
    img.src = s.getAttribute('data-src');
    var c = s.getAttribute('data-caption') || '';
    cap.textContent = c;
    cap.hidden = !c;
  }

  function open(i) {
    lastFocus = document.activeElement;
    collect();
    show(i);
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    box.querySelector('.lb-close').focus();
  }

  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.documentElement.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  collect();
  shots.forEach(function (s, i) {
    s.addEventListener('click', function () { open(i); });
  });

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { show(index - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(index + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
  });
})();
`;

function robots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
}

function sitemap(entries) {
  const urls = entries
    .map(
      (e) =>
        `  <url><loc>${site.url}${e.url}</loc><xhtml:link rel="alternate" hreflang="${
          e.locale === 'en' ? 'zh-Hans' : 'en'
        }" href="${site.url}${e.altUrl}"/></url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

/**
 * Short content hash appended to the stylesheet and script URLs. GitHub Pages
 * serves them with a ten-minute cache, so without this a style change can go
 * unseen; with it the filename changes and the browser must refetch.
 */
async function assetVersion() {
  const css = await readFile(join(ROOT, 'styles', 'site.css'), 'utf8');
  return createHash('sha256').update(css).update(SITE_JS).digest('hex').slice(0, 8);
}

async function main() {
  const albums = await discoverAlbums();
  const version = await assetVersion();
  const pubs = (pages.find((p) => p.kind === 'publications') || {}).en?.items || [];

  // Clear previously generated directories so removed pages disappear.
  for (const p of pages) {
    if (p.slug) await rm(join(ROOT, p.slug), { recursive: true, force: true });
  }
  await rm(join(ROOT, 'zh'), { recursive: true, force: true });

  const written = [];
  const entries = [];

  for (const locale of LOCALES) {
    for (const page of pages) {
      const here = locate(page, locale);
      const other = locate(page, locale === 'en' ? 'zh' : 'en');

      // Relative link to the same page in the other language.
      const altRel = `${'../'.repeat(here.depth)}${
        locale === 'en' ? `zh/${page.slug ? page.slug + '/' : ''}` : page.slug ? page.slug + '/' : ''
      }`;

      const nav = pages.map((n) => {
        const loc = locate(n, locale);
        return {
          label: n[locale].navLabel,
          href: `${'../'.repeat(here.depth)}${
            locale === 'zh' ? 'zh/' : ''
          }${n.slug ? n.slug + '/' : ''}`,
          current: n.slug === page.slug,
        };
      });

      const html = renderPage({
        page,
        locale,
        depth: here.depth,
        identity: identity[locale],
        site,
        ui: ui[locale],
        nav,
        selfUrl: here.url,
        altUrl: other.url,
        altRel,
        albums,
        pubs,
        version,
      });

      written.push(await emit(here.out, html));
      entries.push({ url: here.url, altUrl: other.url, locale });
    }
  }

  written.push(await emit('assets/site.js', SITE_JS));
  written.push(await emit('assets/favicon.svg', FAVICON));
  written.push(await emit('robots.txt', robots()));
  written.push(await emit('sitemap.xml', sitemap(entries)));
  written.push(await emit('.nojekyll', ''));

  const albumSummary = Object.entries(albums)
    .map(([k, v]) => `${k}:${v.length}`)
    .join('  ');
  console.log(`Built ${written.length} files across ${pages.length} modules × ${LOCALES.length} languages`);
  console.log(`Albums → ${albumSummary || '(none)'}`);
  written.forEach((f) => console.log(`  ${f}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
