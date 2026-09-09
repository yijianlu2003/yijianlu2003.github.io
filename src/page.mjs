// Renders one page. Each content module maps to a `kind`, handled below.

import { esc, up, authorList, contactRows, jsonLd } from './lib.mjs';

/* ------------------------------- sections ------------------------------- */

function sectionAbout(t, ctx) {
  const v = ctx.site.visitors || {};
  const showFlags = Boolean(v.flagSrc && v.flagHref);

  return `<div class="prose prose--dropcap">
  <p class="lead">${esc(t.lead)}</p>
  ${t.body.map((p) => `<p>${esc(p)}</p>`).join('\n  ')}
</div>

${
  t.highlights && t.highlights.length
    ? `<dl class="facts">
  ${t.highlights
    .map((h) => `<dt>${esc(h.label)}</dt><dd>${esc(h.value)}</dd>`)
    .join('\n  ')}
</dl>`
    : ''
}

${
  showFlags
    ? `<div class="rule-soft"></div>
<h2 class="sub">${esc(t.visitorsLabel)}</h2>
<div class="visitors">
  <a href="${esc(v.flagHref)}" rel="noopener nofollow" aria-label="${esc(t.visitorsLabel)}">
    <img src="${esc(v.flagSrc)}" alt="${esc(t.visitorsLabel)}" loading="lazy" decoding="async">
  </a>
</div>`
    : ''
}`;
}

function sectionResearch(t) {
  return `<div class="themes">
  ${t.themes
    .map(
      (th) => `<article class="theme">
    <h3><span class="theme-n">${esc(th.n)}</span>${esc(th.title)}</h3>
    <p>${esc(th.body)}</p>
  </article>`
    )
    .join('\n  ')}
</div>

<div class="rule-soft"></div>

${
  t.software
    ? `<h3 class="sub">${esc(t.software.label)}</h3>
<dl class="facts facts--tight">
  ${t.software.groups
    .map(
      (g) =>
        `<dt>${esc(g.label)}</dt><dd>${g.items
          .map((i) => `<span class="chip">${esc(i)}</span>`)
          .join('')}</dd>`
    )
    .join('\n  ')}
</dl>`
    : ''
}

${
  t.keywords && t.keywords.length
    ? `<h3 class="sub">${esc(t.keywordsLabel)}</h3>
<p class="kw-line">${t.keywords.map((k) => esc(k)).join(' <span class="mid">·</span> ')}</p>`
    : ''
}`;
}

function sectionPublications(t, ctx) {
  if (!t.items.length) return `<p class="empty">${esc(t.emptyNote)}</p>`;
  const lang = ctx.locale;
  return `<ol class="cites">
  ${t.items
    .map(
      (p, i) => `<li class="cite" id="${esc(p.id)}">
    <span class="cite-n">[${i + 1}]</span>
    <div class="cite-body">
      <p class="cite-line">${authorList(p.authors)} (${esc(p.year)}).
        ${
          p.url
            ? `<a class="cite-title" href="${esc(p.url)}" rel="noopener">${esc(p.title)}</a>`
            : `<span class="cite-title">${esc(p.title)}</span>`
        }
        <em>${esc(p.venue)}</em>${p.venueDetail ? `, ${esc(p.venueDetail)}` : ''}.</p>
      <p class="cite-tags">
        ${p.indexed ? `<span class="tag">${esc(p.indexed[lang])}</span>` : ''}
        ${p.role ? `<span class="tag tag--role">${esc(p.role[lang])}</span>` : ''}
        ${p.published ? `<span class="tag">${esc(p.published[lang])}</span>` : ''}
      </p>
      <p class="cite-summary">${esc(p.summary[lang])}</p>
      ${
        p.result
          ? `<p class="cite-result"><span class="rlabel">${esc(
              t.resultLabel
            )}.</span> ${esc(p.result[lang])}</p>`
          : ''
      }
      ${
        p.doi
          ? `<p class="cite-links"><a href="${esc(p.url)}" rel="noopener">doi:${esc(
              p.doi
            )}</a></p>`
          : ''
      }
    </div>
  </li>`
    )
    .join('\n  ')}
</ol>`;
}

function sectionEducation(t, ctx) {
  return `<ul class="entries">
  ${t.items
    .map(
      (e) => `<li class="entry">
    <div class="entry-head">
      <h3>${esc(e.school)}</h3>
      <span class="entry-period">${esc(e.period)}</span>
    </div>
    <p class="entry-sub"><em>${esc(e.degree)}</em> <span class="mid">·</span> ${esc(e.place)}</p>
    <p class="entry-note">${esc(e.note)}</p>
    ${e.detail ? `<p class="entry-detail">${esc(e.detail)}</p>` : ''}
    ${
      e.courses && e.courses.length
        ? `<ul class="courses">${e.courses.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>`
        : ''
    }
    ${e.photoDir ? album(e, ctx) : ''}
  </li>`
    )
    .join('\n  ')}
</ul>

${
  t.languages
    ? `<div class="rule-soft"></div>
<h3 class="sub">${esc(t.languages.label)}</h3>
<ul class="plain-list">${t.languages.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
    : ''
}`;
}

function album(item, ctx, opts = {}) {
  const shots = (ctx.albums && ctx.albums[item.photoDir]) || [];
  if (!shots.length) return '';
  const { root, locale, ui } = ctx;
  return `<figure class="album">
  ${
    opts.noHeading
      ? ''
      : `<figcaption class="album-heading">${esc(ui.galleryHeading)}</figcaption>`
  }
  <ul class="album-grid">
    ${shots
      .map((s) => {
        const src = `${root}assets/photos/${item.photoDir}/${s.file}`;
        const cap = s.caption ? s.caption[locale] || s.caption.en || '' : '';
        return `<li>
      <button type="button" class="shot" data-src="${esc(src)}" data-caption="${esc(cap)}">
        <img src="${esc(src)}" alt="${esc(cap || item.org || item.school || '')}" loading="lazy" decoding="async">
      </button>
      ${cap ? `<span class="shot-cap">${esc(cap)}</span>` : ''}
    </li>`;
      })
      .join('\n    ')}
  </ul>
</figure>`;
}

function sectionExperience(t, ctx) {
  return t.groups
    .map(
      (g) => `<h3 class="sub">${esc(g.label)}</h3>
<ul class="entries">
  ${g.items
    .map(
      (e) => `<li class="entry">
    <div class="entry-head">
      <h4>${esc(e.org)}</h4>
      <span class="entry-period">${esc(e.period)}</span>
    </div>
    <p class="entry-sub">${
      e.unit ? `${esc(e.unit)} <span class="mid">·</span> ` : ''
    }<em>${esc(e.role)}</em> <span class="mid">·</span> ${esc(e.place)}</p>
    ${
      e.bullets && e.bullets.length
        ? `<ul class="entry-bullets">${e.bullets
            .map((b) => `<li>${esc(b)}</li>`)
            .join('')}</ul>`
        : ''
    }
    ${e.photoDir ? album(e, ctx) : ''}
  </li>`
    )
    .join('\n  ')}
</ul>`
    )
    .join('\n\n');
}

function sectionAwards(t, ctx) {
  return `<div class="awards">
  ${t.groups
    .map(
      (g) => `<div class="awards-col">
    <h3>${esc(g.label)}</h3>
    <ol>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>
  </div>`
    )
    .join('\n  ')}
</div>

${
  t.photoDir
    ? `<div class="rule-soft"></div>
<h3 class="sub">${esc(t.albumLabel)}</h3>
<div class="album-wide">${album(t, ctx, { noHeading: true })}</div>`
    : ''
}`;
}

function sectionContact(t, ctx) {
  const rows = contactRows(t, ctx.site);
  return `<dl class="facts facts--contact">
  ${rows
    .map(
      (r) =>
        `<dt>${esc(r.label)}</dt><dd><a href="${esc(r.href)}"${
          r.kind === 'email' ? '' : ' rel="noopener"'
        }>${esc(r.value)}</a></dd>`
    )
    .join('\n  ')}
</dl>`;
}

const SECTIONS = {
  about: sectionAbout,
  research: sectionResearch,
  publications: sectionPublications,
  education: sectionEducation,
  experience: sectionExperience,
  awards: sectionAwards,
  contact: sectionContact,
};

/* --------------------------------- shell -------------------------------- */

export function renderPage(ctx) {
  const { page, locale, depth, identity, site, ui, nav, altUrl, selfUrl, pubs } = ctx;
  const t = page[locale];
  const root = up(depth);
  const year = new Date().getFullYear();
  const isHome = page.kind === 'about';

  const body = SECTIONS[page.kind](t, { ...ctx, root });

  const navHtml = nav
    .map(
      (n) =>
        `<li><a href="${esc(n.href)}"${
          n.current ? ' aria-current="page"' : ''
        }>${esc(n.label)}</a></li>`
    )
    .join('\n        ');

  return `<!doctype html>
<html lang="${esc(ui.htmlLang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.metaTitle)}</title>
<meta name="description" content="${esc(t.metaDescription)}">
<meta name="author" content="${esc(identity.name)}">
<link rel="canonical" href="${esc(site.url)}${esc(selfUrl)}">
<link rel="alternate" hreflang="${locale === 'en' ? 'zh-Hans' : 'en'}" href="${esc(
    site.url
  )}${esc(altUrl)}">
<link rel="alternate" hreflang="${esc(ui.htmlLang)}" href="${esc(site.url)}${esc(selfUrl)}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(t.metaTitle)}">
<meta property="og:description" content="${esc(t.metaDescription)}">
<meta property="og:image" content="${esc(site.url)}/${esc(site.portraitSquare)}">
<meta property="og:url" content="${esc(site.url)}${esc(selfUrl)}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${root}styles/site.css">
${jsonLd({ site, identity, pubs, url: `${site.url}${selfUrl}` })}
</head>
<body class="${isHome ? 'is-home' : 'is-page'}">
<a class="skip" href="#main">${esc(ui.skip)}</a>

<header class="masthead">
  <div class="wrap">
    <div class="plate">
      <a class="frame" href="${root}${locale === 'zh' ? 'zh/' : ''}" aria-label="${esc(ui.home)}">
        <img src="${root}${esc(site.portrait)}" alt="${esc(identity.name)}" width="639" height="822">
      </a>
      <div class="plate-text">
        <p class="name"><a href="${root}${locale === 'zh' ? 'zh/' : ''}">${esc(
    identity.name
  )}</a></p>
        <p class="name-alt">${esc(identity.nameAlt)}</p>
        <div class="flourish" aria-hidden="true"><span></span><span class="diamond"></span><span></span></div>
        <p class="role">${esc(identity.role)}</p>
        <p class="affil">${esc(identity.affiliation)} <span class="mid">·</span> ${esc(
    identity.location
  )}</p>
      </div>
    </div>
  </div>
</header>

<nav class="topnav" aria-label="${esc(ui.home)}">
  <div class="wrap">
    <ul>
        ${navHtml}
      <li class="topnav-lang"><a href="${esc(ctx.altRel)}" hreflang="${
    locale === 'en' ? 'zh-Hans' : 'en'
  }" title="${esc(ui.altTitle)}">${esc(ui.altLabel)}</a></li>
    </ul>
  </div>
</nav>

<main id="main" class="wrap">
  <section class="sheet">
    <h1 class="rule-title"><span>${esc(t.title)}</span></h1>
    ${t.intro ? `<p class="sheet-intro">${esc(t.intro)}</p>` : ''}
    ${body}
  </section>
</main>

<footer class="colophon">
  <div class="wrap">
    <div class="flourish" aria-hidden="true"><span></span><span class="diamond"></span><span></span></div>
    <p>${esc(ui.rights(year))}</p>
    <p class="colophon-meta">${esc(ui.updated(site.updated))}</p>
  </div>
</footer>

<div class="lightbox" id="lightbox" hidden>
  <button class="lb-close" type="button" aria-label="Close">&times;</button>
  <button class="lb-prev" type="button" aria-label="Previous">&#8249;</button>
  <figure class="lb-figure">
    <!-- No src attribute: an empty one makes the browser refetch the page. -->
    <img id="lb-img" alt="">
    <figcaption id="lb-cap"></figcaption>
  </figure>
  <button class="lb-next" type="button" aria-label="Next">&#8250;</button>
</div>

<script src="${root}assets/site.js" defer></script>
</body>
</html>`;
}
