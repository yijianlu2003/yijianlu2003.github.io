// Variant C — "Classic academic". Cream ground, oxblood accent, classical
// serif, centred section rules, numbered bibliography, drop cap.

import { esc, up, authors, venueLine, doiLink, codeLink, contactLinks, head } from '../lib.mjs';

export const id = 'c';
export const label = { en: 'Classic academic', zh: '古典学院风' };

const navKeys = ['about', 'research', 'publications', 'education', 'experience', 'awards', 'contact'];

function pubEntry(p, t, lang, n) {
  const status = t.publications.statusLabels[p.status];
  return `<li class="cite" id="pub-${esc(p.id)}">
  <span class="cite-n">[${n}]</span>
  <div class="cite-body">
    <p class="cite-line">${authors(p.authors)} (${esc(p.year)}).
      ${
        p.url
          ? `<a class="cite-title" href="${esc(p.url)}" rel="noopener">${esc(p.title)}</a>`
          : `<span class="cite-title">${esc(p.title)}</span>`
      }
      ${venueLine(p, lang)}.</p>
    <p class="cite-tags">
      <span class="status status--${esc(p.status)}">${esc(status)}</span>
      ${p.indexed ? `<span class="tag">${esc(p.indexed[lang])}</span>` : ''}
      ${p.role ? `<span class="tag tag--role">${esc(p.role[lang])}</span>` : ''}
    </p>
    <p class="cite-summary">${esc(p.summary[lang])}</p>
    <p class="cite-result"><span class="rlabel">${esc(
      t.publications.resultLabel
    )}.</span> ${esc(p.result[lang])}</p>
    ${p.doi || p.code ? `<p class="cite-links">${doiLink(p)}${codeLink(p, lang)}</p>` : ''}
  </div>
</li>`;
}

function expItem(e) {
  return `<li class="entry">
  <div class="entry-head">
    <h4>${esc(e.org)}</h4>
    <span class="entry-period">${esc(e.period)}</span>
  </div>
  <p class="entry-sub">${
    e.unit ? `${esc(e.unit)} <span class="mid">·</span> ` : ''
  }<em>${esc(e.role)}</em> <span class="mid">·</span> ${esc(e.place)}</p>
  <p class="entry-detail">${esc(e.detail)}</p>
  ${e.detail2 ? `<p class="entry-detail">${esc(e.detail2)}</p>` : ''}
</li>`;
}

export function render(t, site, opts) {
  const { depth, altHref, previewBar = '' } = opts;
  const prefix = up(depth);
  const year = new Date().getFullYear();
  const links = contactLinks(t, site, prefix);

  const secTitle = (text, extra = '') =>
    `<h2 class="rule-title"><span>${esc(text)}</span></h2>${extra}`;

  return `<!doctype html>
<html lang="${esc(t.htmlLang)}">
<head>
${head(t, site, { depth, variantId: id, altHref })}
</head>
<body class="v-c">
<a class="skip" href="#about">${t.lang === 'en' ? 'Skip to content' : '跳到正文'}</a>
${previewBar}

<header class="plate">
  <div class="wrap">
    <div class="plate-grid">
      <figure class="frame">
        <img src="${prefix}assets/${esc(site.portrait)}" alt="${esc(
    t.name
  )}" width="639" height="822">
      </figure>
      <div class="plate-text">
        <h1 class="name">${esc(t.name)}</h1>
        <p class="name-alt">${esc(t.nameAlt)}</p>
        <div class="flourish" aria-hidden="true"><span></span><span class="diamond"></span><span></span></div>
        <p class="role">${esc(t.role)}</p>
        <p class="affil">${esc(t.affiliation)} <span class="mid">·</span> ${esc(t.location)}</p>
        <p class="tagline">${esc(t.tagline)}</p>
        <p class="seeking">${esc(t.seeking)}</p>
      </div>
    </div>
  </div>
</header>

<nav class="topnav" aria-label="${t.lang === 'en' ? 'Sections' : '章节导航'}">
  <div class="wrap">
    <ul>
      ${navKeys
        .map((k) => `<li><a data-spy href="#${k}">${esc(t.nav[k])}</a></li>`)
        .join('\n      ')}
      <li class="topnav-cv"><a href="${prefix}assets/${esc(site.cv)}">${esc(t.nav.cv)}</a></li>
      <li class="topnav-lang"><a href="${esc(altHref.otherRel)}" title="${esc(
    t.altTitle
  )}" hreflang="${t.lang === 'en' ? 'zh-Hans' : 'en'}">${esc(t.altLabel)}</a></li>
    </ul>
  </div>
</nav>

<main class="wrap">

  <section id="about" class="sheet" data-reveal>
    ${secTitle(t.about.heading)}
    <div class="prose prose--dropcap">
      <p class="lead">${esc(t.about.lead)}</p>
      ${t.about.body.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
    </div>
  </section>

  <section id="research" class="sheet" data-reveal>
    ${secTitle(t.research.heading)}
    <p class="sheet-intro">${esc(t.research.intro)}</p>
    <div class="themes">
      ${t.research.themes
        .map(
          (th) => `<article class="theme">
        <h3><span class="theme-n">${esc(th.n)}</span>${esc(th.title)}</h3>
        <p>${esc(th.body)}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
    <p class="kw-line"><span class="kw-label">${
      t.lang === 'en' ? 'Keywords' : '关键词'
    }</span>${t.research.keywords.map((k) => esc(k)).join(' <span class="mid">·</span> ')}</p>
  </section>

  <section id="publications" class="sheet" data-reveal>
    ${secTitle(t.publications.heading)}

    <h3 class="sub">${esc(t.publications.publishedHeading)}</h3>
    <ol class="cites">
      ${t.publications.published.map((p, i) => pubEntry(p, t, t.lang, i + 1)).join('\n      ')}
    </ol>

    <h3 class="sub">${esc(t.publications.workingHeading)}</h3>
    <p class="sub-note">${esc(t.publications.workingNote)}</p>
    <ol class="cites">
      ${t.publications.working
        .map((p, i) => pubEntry(p, t, t.lang, i + 1 + t.publications.published.length))
        .join('\n      ')}
    </ol>
  </section>

  <section id="education" class="sheet" data-reveal>
    ${secTitle(t.education.heading)}
    <ul class="entries">
      ${t.education.items
        .map(
          (e) => `<li class="entry">
        <div class="entry-head">
          <h4>${esc(e.school)}</h4>
          <span class="entry-period">${esc(e.period)}</span>
        </div>
        <p class="entry-sub"><em>${esc(e.degree)}</em> <span class="mid">·</span> ${esc(
            e.place
          )}</p>
        <p class="entry-note">${esc(e.note)}</p>
        <p class="entry-detail">${esc(e.detail)}</p>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </section>

  <section id="experience" class="sheet" data-reveal>
    ${secTitle(t.experience.heading)}
    <p class="sheet-intro">${esc(t.experience.note)}</p>
    ${t.experience.groups
      .map(
        (g, gi) => `<h3 class="sub">${esc(g.label)}</h3>
    <ul class="entries">
      ${g.items.map(expItem).join('\n      ')}
    </ul>
    ${
      gi === 0
        ? `<figure class="candid">
      <img src="${prefix}assets/${esc(site.candid)}" alt="${esc(
            t.candidCaption
          )}" width="1024" height="781" loading="lazy">
      <figcaption>${esc(t.candidCaption)}</figcaption>
    </figure>`
        : ''
    }`
      )
      .join('\n    ')}
  </section>

  <section id="awards" class="sheet" data-reveal>
    ${secTitle(t.awards.heading)}
    <div class="awards">
      ${t.awards.groups
        .map(
          (g) => `<div class="awards-col">
        <h3>${esc(g.label)}</h3>
        <ol>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>
      </div>`
        )
        .join('\n      ')}
    </div>

    <h3 class="sub">${esc(t.skills.heading)}</h3>
    <dl class="skills">
      ${t.skills.groups
        .map(
          (g) =>
            `<dt>${esc(g.label)}</dt><dd>${g.items
              .map((i) => esc(i))
              .join(' <span class="mid">·</span> ')}</dd>`
        )
        .join('\n      ')}
    </dl>

    <h3 class="sub">${esc(t.beyond.heading)}</h3>
    <p class="beyond">${esc(t.beyond.body)}</p>
  </section>

  <section id="contact" class="sheet" data-reveal>
    ${secTitle(t.contact.heading)}
    <p class="sheet-intro sheet-intro--center">${esc(t.contact.body)}</p>
    <ul class="contact">
      ${links
        .map(
          (l) =>
            `<li><a href="${esc(l.href)}"${
              l.kind === 'email' ? '' : ' rel="noopener"'
            }>${esc(l.label)}</a></li>`
        )
        .join('\n      ')}
    </ul>
  </section>

</main>

<footer class="colophon">
  <div class="wrap">
    <div class="flourish" aria-hidden="true"><span></span><span class="diamond"></span><span></span></div>
    <p>${esc(t.footer.rights(year))}</p>
    <p class="colophon-meta">${esc(t.footer.built)} <span class="mid">·</span> ${esc(
    t.footer.updated(site.updated)
  )}</p>
  </div>
</footer>

<script src="${prefix}assets/site.js" defer></script>
</body>
</html>`;
}
