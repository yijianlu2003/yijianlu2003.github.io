// Variant B — "Swiss technical". Strict grid, sticky rail, numbered sections,
// mono metadata. Reads like a research-group page.

import { esc, up, authors, venueLine, doiLink, codeLink, contactLinks, head } from '../lib.mjs';

export const id = 'b';
export const label = { en: 'Swiss technical', zh: '瑞士技术风' };

const navKeys = ['about', 'research', 'publications', 'education', 'experience', 'awards', 'contact'];

function pubRow(p, t, lang, n) {
  const status = t.publications.statusLabels[p.status];
  return `<article class="row" id="pub-${esc(p.id)}">
  <div class="row-num"><span>${String(n).padStart(2, '0')}</span></div>
  <div class="row-main">
    <h3 class="row-title">${
      p.url ? `<a href="${esc(p.url)}" rel="noopener">${esc(p.title)}</a>` : esc(p.title)
    }</h3>
    <p class="row-authors">${authors(p.authors)}</p>
    <p class="row-venue">${venueLine(p, lang)}</p>
    <p class="row-summary">${esc(p.summary[lang])}</p>
    <p class="row-result"><span class="mono-label">${esc(t.publications.resultLabel)}</span>${esc(
      p.result[lang]
    )}</p>
    ${p.doi || p.code ? `<p class="row-links">${doiLink(p)}${codeLink(p, lang)}</p>` : ''}
  </div>
  <div class="row-meta">
    <span class="status status--${esc(p.status)}">${esc(status)}</span>
    <span class="mono">${esc(p.year)}</span>
    ${p.indexed ? `<span class="mono dim">${esc(p.indexed[lang])}</span>` : ''}
    ${p.role ? `<span class="mono dim">${esc(p.role[lang])}</span>` : ''}
  </div>
</article>`;
}

function expBlock(e) {
  return `<article class="block">
  <div class="block-meta">
    <span class="mono">${esc(e.period)}</span>
    <span class="mono dim">${esc(e.place)}</span>
  </div>
  <div class="block-main">
    <h4>${esc(e.org)}</h4>
    ${e.unit ? `<p class="block-unit">${esc(e.unit)}</p>` : ''}
    <p class="block-role">${esc(e.role)}</p>
    <p>${esc(e.detail)}</p>
    ${e.detail2 ? `<p>${esc(e.detail2)}</p>` : ''}
  </div>
</article>`;
}

export function render(t, site, opts) {
  const { depth, altHref, previewBar = '' } = opts;
  const prefix = up(depth);
  const year = new Date().getFullYear();
  const links = contactLinks(t, site, prefix);
  const num = (i) => String(i + 1).padStart(2, '0');

  const sectionTitle = (i, text, extra = '') =>
    `<h2 class="sec-title"><span class="sec-num">${num(i)}</span><span class="sec-text">${esc(
      text
    )}</span>${extra}</h2>`;

  return `<!doctype html>
<html lang="${esc(t.htmlLang)}">
<head>
${head(t, site, { depth, variantId: id, altHref })}
</head>
<body class="v-b">
<a class="skip" href="#about">${t.lang === 'en' ? 'Skip to content' : '跳到正文'}</a>
${previewBar}

<div class="shell">

  <aside class="rail">
    <div class="rail-inner">
      <div class="rail-id">
        <img class="rail-portrait" src="${prefix}assets/${esc(site.portraitSquare)}" alt="${esc(
    t.name
  )}" width="639" height="639">
        <h1 class="rail-name">${esc(t.name)}</h1>
        <p class="rail-alt mono">${esc(t.nameAlt)}</p>
        <p class="rail-role">${esc(t.role)}</p>
        <p class="rail-affil">${esc(t.affiliation)}<br><span class="dim">${esc(
    t.location
  )}</span></p>
      </div>

      <nav class="rail-nav" aria-label="${t.lang === 'en' ? 'Sections' : '章节导航'}">
        <ol>
          ${navKeys
            .map(
              (k, i) =>
                `<li><a data-spy href="#${k}"><span class="mono">${num(i)}</span>${esc(
                  t.nav[k]
                )}</a></li>`
            )
            .join('\n          ')}
        </ol>
      </nav>

      <div class="rail-foot">
        <a class="rail-cv" href="${prefix}assets/${esc(site.cv)}">${esc(t.nav.cv)} <span aria-hidden="true">↓</span></a>
        <a class="rail-lang" href="${esc(altHref.otherRel)}" title="${esc(
    t.altTitle
  )}" hreflang="${t.lang === 'en' ? 'zh-Hans' : 'en'}">${esc(t.altLabel)}</a>
      </div>
    </div>
  </aside>

  <main class="content">

    <header class="hero">
      <p class="hero-status"><span class="pulse" aria-hidden="true"></span>${esc(t.seeking)}</p>
      <p class="hero-tagline">${esc(t.tagline)}</p>
    </header>

    <section id="about" class="sec" data-reveal>
      ${sectionTitle(0, t.about.heading)}
      <div class="prose">
        <p class="lead">${esc(t.about.lead)}</p>
        ${t.about.body.map((p) => `<p>${esc(p)}</p>`).join('\n        ')}
      </div>
    </section>

    <section id="research" class="sec" data-reveal>
      ${sectionTitle(1, t.research.heading)}
      <p class="sec-intro">${esc(t.research.intro)}</p>
      <div class="grid-themes">
        ${t.research.themes
          .map(
            (th) => `<article class="theme">
          <span class="mono theme-n">${esc(th.n)}</span>
          <h3>${esc(th.title)}</h3>
          <p>${esc(th.body)}</p>
        </article>`
          )
          .join('\n        ')}
      </div>
      <ul class="kw">
        ${t.research.keywords.map((k) => `<li class="mono">${esc(k)}</li>`).join('\n        ')}
      </ul>
    </section>

    <section id="publications" class="sec" data-reveal>
      ${sectionTitle(
        2,
        t.publications.heading,
        `<span class="sec-count mono">${esc(
          t.publications.count(
            t.publications.published.length + t.publications.working.length
          )
        )}</span>`
      )}

      <h3 class="sub">${esc(t.publications.publishedHeading)}</h3>
      <div class="rows">
        ${t.publications.published.map((p, i) => pubRow(p, t, t.lang, i + 1)).join('\n        ')}
      </div>

      <h3 class="sub">${esc(t.publications.workingHeading)}</h3>
      <p class="sub-note">${esc(t.publications.workingNote)}</p>
      <div class="rows">
        ${t.publications.working
          .map((p, i) => pubRow(p, t, t.lang, i + 1 + t.publications.published.length))
          .join('\n        ')}
      </div>
    </section>

    <section id="education" class="sec" data-reveal>
      ${sectionTitle(3, t.education.heading)}
      <div class="blocks">
        ${t.education.items
          .map(
            (e) => `<article class="block">
          <div class="block-meta">
            <span class="mono">${esc(e.period)}</span>
            <span class="mono dim">${esc(e.place)}</span>
          </div>
          <div class="block-main">
            <h4>${esc(e.school)}</h4>
            <p class="block-unit">${esc(e.note)}</p>
            <p class="block-role">${esc(e.degree)}</p>
            <p>${esc(e.detail)}</p>
          </div>
        </article>`
          )
          .join('\n        ')}
      </div>
    </section>

    <section id="experience" class="sec" data-reveal>
      ${sectionTitle(4, t.experience.heading)}
      <p class="sec-intro">${esc(t.experience.note)}</p>
      ${t.experience.groups
        .map(
          (g, gi) => `<h3 class="sub">${esc(g.label)}</h3>
      <div class="blocks">
        ${g.items.map(expBlock).join('\n        ')}
      </div>
      ${
        gi === 0
          ? `<figure class="candid">
        <img src="${prefix}assets/${esc(site.candid)}" alt="${esc(
              t.candidCaption
            )}" width="1024" height="781" loading="lazy">
        <figcaption class="mono">${esc(t.candidCaption)}</figcaption>
      </figure>`
          : ''
      }`
        )
        .join('\n      ')}
    </section>

    <section id="awards" class="sec" data-reveal>
      ${sectionTitle(5, t.awards.heading)}
      <div class="grid-awards">
        ${t.awards.groups
          .map(
            (g) => `<div class="awards-col">
          <h3 class="mono-label">${esc(g.label)}</h3>
          <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </div>`
          )
          .join('\n        ')}
      </div>

      <h3 class="sub">${esc(t.skills.heading)}</h3>
      <table class="skills-table">
        <tbody>
          ${t.skills.groups
            .map(
              (g) =>
                `<tr><th scope="row" class="mono">${esc(g.label)}</th><td>${g.items
                  .map((i) => `<span class="chip">${esc(i)}</span>`)
                  .join('')}</td></tr>`
            )
            .join('\n          ')}
        </tbody>
      </table>

      <h3 class="sub">${esc(t.beyond.heading)}</h3>
      <p class="prose-p">${esc(t.beyond.body)}</p>
    </section>

    <section id="contact" class="sec" data-reveal>
      ${sectionTitle(6, t.contact.heading)}
      <p class="sec-intro">${esc(t.contact.body)}</p>
      <ul class="contact">
        ${links
          .map(
            (l) =>
              `<li><a href="${esc(l.href)}"${
                l.kind === 'email' ? '' : ' rel="noopener"'
              }><span class="mono-label">${esc(l.kind)}</span><span class="c-val">${esc(
                l.label
              )}</span></a></li>`
          )
          .join('\n        ')}
      </ul>
    </section>

    <footer class="foot">
      <p class="mono">${esc(t.footer.rights(year))}</p>
      <p class="mono dim">${esc(t.footer.built)} — ${esc(t.footer.updated(site.updated))}</p>
    </footer>

  </main>
</div>

<script src="${prefix}assets/site.js" defer></script>
</body>
</html>`;
}
