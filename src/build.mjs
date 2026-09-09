// Static site generator. Renders every variant in both languages to plain HTML
// so the published pages need no JavaScript to be readable or indexable.
//
//   node src/build.mjs              → preview build (all three variants)
//   node src/build.mjs --final=a    → ship variant A at the site root

import { mkdir, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, L } from './content.js';
import { behaviourScript, esc } from './lib.mjs';
import * as A from './variants/a.mjs';
import * as B from './variants/b.mjs';
import * as C from './variants/c.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VARIANTS = { a: A, b: B, c: C };
const LOCALES = ['en', 'zh'];

const finalArg = process.argv.find((a) => a.startsWith('--final='));
const FINAL = finalArg ? finalArg.split('=')[1] : null;

if (FINAL && !VARIANTS[FINAL]) {
  console.error(`Unknown variant "${FINAL}". Expected one of: ${Object.keys(VARIANTS).join(', ')}`);
  process.exit(1);
}

async function emit(relPath, contents) {
  const abs = join(ROOT, relPath);
  await mkdir(dirname(abs), { recursive: true });
  await writeFile(abs, contents, 'utf8');
  return relPath;
}

/** Where each page lives, and how it points at its translation. */
function plan() {
  const pages = [];
  if (FINAL) {
    pages.push({
      variant: FINAL,
      locale: 'en',
      out: 'index.html',
      depth: 0,
      selfUrl: '/',
      otherUrl: '/zh/',
      otherRel: 'zh/',
    });
    pages.push({
      variant: FINAL,
      locale: 'zh',
      out: 'zh/index.html',
      depth: 1,
      selfUrl: '/zh/',
      otherUrl: '/',
      otherRel: '../',
    });
    return pages;
  }
  for (const v of Object.keys(VARIANTS)) {
    pages.push({
      variant: v,
      locale: 'en',
      out: `${v}/index.html`,
      depth: 1,
      selfUrl: `/${v}/`,
      otherUrl: `/${v}/zh/`,
      otherRel: 'zh/',
    });
    pages.push({
      variant: v,
      locale: 'zh',
      out: `${v}/zh/index.html`,
      depth: 2,
      selfUrl: `/${v}/zh/`,
      otherUrl: `/${v}/`,
      otherRel: '../',
    });
  }
  return pages;
}

/** Variant/language switcher shown only in the preview build. */
function previewBar(page, t) {
  const back = '../'.repeat(page.depth);
  const tail = page.locale === 'zh' ? 'zh/' : '';
  const items = Object.entries(VARIANTS)
    .map(([key, mod]) => {
      const current = key === page.variant;
      return `<a href="${back}${key}/${tail}"${current ? ' aria-current="true"' : ''}>${esc(
        key.toUpperCase()
      )} · ${esc(mod.label[page.locale])}</a>`;
    })
    .join('');
  return `<div class="preview-bar" role="region" aria-label="Design preview">
  <strong>${page.locale === 'en' ? 'Choose a design' : '选择设计方案'}</strong>
  ${items}
  <a href="${esc(page.otherRel)}">${esc(t.altLabel)}</a>
</div>`;
}

/** Landing page listing the three designs, preview build only. */
function chooser() {
  const cards = Object.entries(VARIANTS)
    .map(
      ([key, mod]) => `      <li>
        <a href="${key}/">
          <span class="k">${key.toUpperCase()}</span>
          <span class="n">${esc(mod.label.zh)}</span>
          <span class="e">${esc(mod.label.en)}</span>
        </a>
        <a class="zh" href="${key}/zh/">中文版 →</a>
      </li>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="zh-Hans">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>选择设计方案 — ${esc(L.zh.name)}</title>
<style>
  :root { color-scheme: light dark; }
  body {
    margin: 0; min-height: 100vh; display: grid; place-items: center;
    background: #101010; color: #f2f0ec;
    font: 400 15px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif;
    padding: 3rem 1.5rem;
  }
  .box { width: 100%; max-width: 40rem; }
  h1 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 0.4rem; }
  p.sub { margin: 0 0 2rem; color: #8f8a83; font-size: 0.9rem; }
  ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 1px; background: #262626; border: 1px solid #262626; }
  li { display: flex; align-items: stretch; background: #101010; }
  li a:first-child {
    flex: 1 1 auto; display: flex; align-items: baseline; gap: 1rem;
    padding: 1.15rem 1.25rem; text-decoration: none; color: inherit; transition: background .16s;
  }
  li a:first-child:hover { background: #191919; }
  .k { font: 600 0.72rem/1 ui-monospace, Menlo, monospace; letter-spacing: .12em; color: #e8703f; width: 1.2rem; }
  .n { font-weight: 500; }
  .e { color: #8f8a83; font-size: 0.85rem; }
  a.zh {
    flex: none; display: grid; place-items: center; padding: 0 1.1rem;
    border-left: 1px solid #262626; text-decoration: none; color: #8f8a83; font-size: 0.78rem;
    transition: color .16s, background .16s;
  }
  a.zh:hover { color: #f2f0ec; background: #191919; }
  footer { margin-top: 1.5rem; color: #6b6660; font-size: 0.8rem; }
</style>
</head>
<body>
  <div class="box">
    <h1>三个设计方案</h1>
    <p class="sub">内容完全相同，只有排版与气质不同。点开看完整页面，然后告诉我选哪一个。每个方案内都可以直接切换中英文。</p>
    <ul>
${cards}
    </ul>
    <footer>确定之后我会把选中的方案放到网站根目录，删掉另外两个，再推到 GitHub Pages。</footer>
  </div>
</body>
</html>`;
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#1b1815"/>
  <path d="M8 9v7.5a4.5 4.5 0 0 0 4.5 4.5H16" stroke="#96442e" stroke-width="2" fill="none"/>
  <path d="M16 21h3.5A4.5 4.5 0 0 0 24 16.5V9" stroke="#e3dccd" stroke-width="2" fill="none"/>
  <circle cx="8" cy="9" r="2.4" fill="#e3dccd"/>
  <circle cx="24" cy="9" r="2.4" fill="#96442e"/>
  <circle cx="16" cy="21" r="2.4" fill="#e3dccd"/>
</svg>`;

function robots() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
}

function sitemap(pages) {
  const urls = pages
    .map(
      (p) =>
        `  <url><loc>${site.url}${p.selfUrl}</loc><xhtml:link rel="alternate" hreflang="${
          p.locale === 'en' ? 'zh-Hans' : 'en'
        }" href="${site.url}${p.otherUrl}"/></url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

async function main() {
  const pages = plan();
  const written = [];

  if (FINAL) {
    // The preview scaffolding must not survive into the published site.
    for (const v of Object.keys(VARIANTS)) {
      await rm(join(ROOT, v), { recursive: true, force: true });
    }
  } else {
    await rm(join(ROOT, 'zh'), { recursive: true, force: true });
  }

  for (const page of pages) {
    const mod = VARIANTS[page.variant];
    const t = L[page.locale];
    const html = mod.render(t, site, {
      depth: page.depth,
      altHref: {
        self: page.selfUrl,
        other: page.otherUrl,
        otherRel: page.otherRel,
      },
      previewBar: FINAL ? '' : previewBar(page, t),
    });
    written.push(await emit(page.out, html));
  }

  if (!FINAL) written.push(await emit('index.html', chooser()));

  written.push(await emit('assets/site.js', behaviourScript.trim() + '\n'));
  written.push(await emit('assets/favicon.svg', FAVICON));
  written.push(await emit('robots.txt', robots()));
  written.push(await emit('sitemap.xml', sitemap(pages)));
  written.push(await emit('.nojekyll', ''));

  const mode = FINAL ? `final (variant ${FINAL.toUpperCase()})` : 'preview (a, b, c)';
  console.log(`Built ${written.length} files — mode: ${mode}`);
  written.forEach((f) => console.log(`  ${f}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
