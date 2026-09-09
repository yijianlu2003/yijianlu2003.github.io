// Variant A — "Editorial". Warm paper ground, fine serif, hairline rules,
// bibliography set with hanging indents. Reads like a printed journal page.

import { esc, up, authors, venueLine, doiLink, codeLink, contactLinks, head } from '../lib.mjs';

export const id = 'a';
export const label = { en: 'Editorial', zh: '期刊印刷风' };

const navKeys = ['about', 'research', 'publications', 'education', 'experience', 'awards', 'contact'];

function pubEntry(p, t, lang) {
  const status = t.publications.statusLabels[p.status];
  return `<li class="pub" id="pub-${esc(p.id)}">
  <div class="pub-marker">
    <span class="status status--${esc(p.status)}">${esc(status)}</span>
    <span class="pub-year">${esc(p.year)}</span>
  </div>
  <div class="pub-body">
    <p class="pub-authors">${authors(p.authors)}</p>
    <h3 class="pub-title">${
      p.url
        ? `<a href="${esc(p.url)}" rel="noopener">${esc(p.title)}</a>`
        : esc(p.title)
    }</h3>
    <p class="pub-venue">${venueLine(p, lang)}${
      p.indexed ? ` <span class="sep">·</span> <span class="indexed">${esc(p.indexed[lang])}</span>` : ''
    }</p>
    ${p.role ? `<p class="pub-role">${esc(p.role[lang])}</p>` : ''}
    <p class="pub-summary">${esc(p.summary[lang])}</p>
    <p class="pub-result"><span class="rlabel">${esc(t.publications.resultLabel)}</span>${esc(
      p.result[lang]
    )}</p>
    ${
      p.doi || p.code
        ? `<p class="pub-links">${doiLink(p)}${codeLink(p, lang)}</p>`
        : ''
    }
  </div>
</li>`;
}

function expItem(e) {
  return `<li class="exp">
  <div class="exp-meta">
    <span class="exp-period">${esc(e.period)}</span>
    <span class="exp-place">${esc(e.place)}</span>
  </div>
  <div class="exp-body">
    <h4 class="exp-org">${esc(e.org)}${e.unit ? ` <span class="exp-unit">${esc(e.unit)}</span>` : ''}</h4>
    <p class="exp-role">${esc(e.role)}</p>
    <p class="exp-detail">${esc(e.detail)}</p>
    ${e.detail2 ? `<p class="exp-detail">${esc(e.detail2)}</p>` : ''}
  </div>
</li>`;
}

export function render(t, site, opts) {
  const { depth, altHref, previewBar = '' } = opts;
  const prefix = up(depth);
  const year = new Date().getFullYear();
  const links = contactLinks(t, site, prefix);

  return `<!doctype html>
<html lang="${esc(t.htmlLang)}">
<head>
${head(t, site, { depth, variantId: id, altHref })}
</head>
<body class="v-a">
<a class="skip" href="#about">${t.lang === 'en' ? 'Skip to content' : '跳到正文'}</a>
${previewBar}

<header class="masthead">
  <div class="wrap">
    <div class="masthead-grid">
      <div class="identity">
        <p class="eyebrow">${esc(t.location)}</p>
        <h1 class="name">${esc(t.name)}<span class="name-alt">${esc(t.nameAlt)}</span></h1>
        <p class="role">${esc(t.role)}</p>
        <p class="affil">${esc(t.affiliation)}</p>
        <p class="tagline">${esc(t.tagline)}</p>
        <p class="seeking"><span class="dot" aria-hidden="true"></span>${esc(t.seeking)}</p>
      </div>
      <figure class="portrait">
        <img src="${prefix}assets/${esc(site.portrait)}" alt="${esc(t.name)}" width="639" height="822">
      </figure>
    </div>

    <nav class="nav" aria-label="${t.lang === 'en' ? 'Sections' : '章节导航'}">
      <ul>
        ${navKeys
          .map(
            (k) =>
              `<li><a data-spy href="#${k}">${esc(t.nav[k])}</a></li>`
          )
          .join('\n        ')}
      </ul>
      <div class="nav-aux">
        <a class="cv-link" href="${prefix}assets/${esc(site.cv)}">${esc(t.nav.cv)}</a>
        <a class="lang-link" href="${esc(altHref.otherRel)}" title="${esc(t.altTitle)}" hreflang="${
    t.lang === 'en' ? 'zh-Hans' : 'en'
  }">${esc(t.altLabel)}</a>
      </div>
    </nav>
  </div>
</header>

<main class="wrap">

  <section id="about" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.about.heading)}</span></h2>
    <div class="prose">
      <p class="lead">${esc(t.about.lead)}</p>
      ${t.about.body.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
    </div>
  </section>

  <section id="research" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.research.heading)}</span></h2>
    <p class="section-intro">${esc(t.research.intro)}</p>
    <ol class="themes">
      ${t.research.themes
        .map(
          (th) => `<li class="theme">
        <span class="theme-n">${esc(th.n)}</span>
        <div>
          <h3>${esc(th.title)}</h3>
          <p>${esc(th.body)}</p>
        </div>
      </li>`
        )
        .join('\n      ')}
    </ol>
    <ul class="keywords">
      ${t.research.keywords.map((k) => `<li>${esc(k)}</li>`).join('\n      ')}
    </ul>
  </section>

  <section id="publications" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.publications.heading)}</span>
      <span class="section-count">${esc(
        t.publications.count(t.publications.published.length + t.publications.working.length)
      )}</span>
    </h2>

    <h3 class="subhead">${esc(t.publications.publishedHeading)}</h3>
    <ol class="pub-list">
      ${t.publications.published.map((p) => pubEntry(p, t, t.lang)).join('\n      ')}
    </ol>

    <h3 class="subhead">${esc(t.publications.workingHeading)}</h3>
    <p class="subnote">${esc(t.publications.workingNote)}</p>
    <ol class="pub-list">
      ${t.publications.working.map((p) => pubEntry(p, t, t.lang)).join('\n      ')}
    </ol>
  </section>

  <section id="education" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.education.heading)}</span></h2>
    <ul class="edu-list">
      ${t.education.items
        .map(
          (e) => `<li class="edu">
        <div class="edu-meta">
          <span class="edu-period">${esc(e.period)}</span>
          <span class="edu-place">${esc(e.place)}</span>
        </div>
        <div class="edu-body">
          <h3 class="edu-school">${esc(e.school)}</h3>
          <p class="edu-note">${esc(e.note)}</p>
          <p class="edu-degree">${esc(e.degree)}</p>
          <p class="edu-detail">${esc(e.detail)}</p>
        </div>
      </li>`
        )
        .join('\n      ')}
    </ul>
  </section>

  <section id="experience" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.experience.heading)}</span></h2>
    <p class="section-intro">${esc(t.experience.note)}</p>
    ${t.experience.groups
      .map(
        (g, i) => `<h3 class="subhead">${esc(g.label)}</h3>
    <ul class="exp-list">
      ${g.items.map(expItem).join('\n      ')}
    </ul>
    ${
      i === 0
        ? `<figure class="candid">
      <img src="${prefix}assets/${esc(site.candid)}" alt="${esc(t.candidCaption)}" width="1024" height="781" loading="lazy">
      <figcaption>${esc(t.candidCaption)}</figcaption>
    </figure>`
        : ''
    }`
      )
      .join('\n    ')}
  </section>

  <section id="awards" class="section" data-reveal>
    <h2 class="section-title"><span>${esc(t.awards.heading)}</span></h2>
    <div class="award-groups">
      ${t.awards.groups
        .map(
          (g) => `<div class="award-group">
        <h3>${esc(g.label)}</h3>
        <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>`
        )
        .join('\n      ')}
    </div>

    <h3 class="subhead">${esc(t.skills.heading)}</h3>
    <dl class="skills">
      ${t.skills.groups
        .map(
          (g) =>
            `<dt>${esc(g.label)}</dt><dd>${g.items.map((i) => esc(i)).join(' <span class="sep">·</span> ')}</dd>`
        )
        .join('\n      ')}
    </dl>

    <div class="beyond">
      <h3 class="subhead">${esc(t.beyond.heading)}</h3>
      <p>${esc(t.beyond.body)}</p>
    </div>
  </section>

  <section id="contact" class="section section--contact" data-reveal>
    <h2 class="section-title"><span>${esc(t.contact.heading)}</span></h2>
    <p class="contact-body">${esc(t.contact.body)}</p>
    <ul class="contact-list">
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

<footer class="footer">
  <div class="wrap">
    <p>${esc(t.footer.rights(year))}</p>
    <p class="footer-meta">${esc(t.footer.built)} <span class="sep">·</span> ${esc(
    t.footer.updated(site.updated)
  )}</p>
  </div>
</footer>

<script src="${prefix}assets/site.js" defer></script>
</body>
</html>`;
}
