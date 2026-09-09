// Shared rendering helpers used by every variant template.

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Relative prefix so pages work from any depth, including file:// previews. */
export const up = (depth) => (depth === 0 ? '' : '../'.repeat(depth));

/**
 * Author list in the usual bibliographic form. The subject of the site is
 * emphasised; corresponding authors carry an asterisk.
 */
export function authors(list) {
  return list
    .map((a) => {
      const star = a.star ? '<sup class="star">*</sup>' : '';
      return a.me
        ? `<strong class="self">${esc(a.name)}</strong>${star}`
        : `${esc(a.name)}${star}`;
    })
    .join(', ');
}

/** Venue line: journal, issue detail, indexing. */
export function venueLine(p, lang) {
  const bits = [`<em>${esc(p.venue[lang])}</em>`];
  if (p.venueDetail) bits.push(esc(p.venueDetail));
  return bits.join(', ');
}

export function doiLink(p) {
  if (!p.doi) return '';
  return `<a class="doi" href="${esc(p.url)}" rel="noopener">doi:${esc(p.doi)}</a>`;
}

export function codeLink(p, lang) {
  if (!p.code) return '';
  const label = p.codeLabel ? p.codeLabel[lang] : 'Code';
  return `<a class="code-link" href="${esc(p.code)}" rel="noopener">${esc(label)}</a>`;
}

/** Contact links, skipping any profile the site owner has not supplied yet. */
export function contactLinks(t, site, prefix) {
  const out = [
    { href: `mailto:${site.email}`, label: site.email, kind: 'email' },
    { href: site.github, label: `@${site.githubHandle}`, kind: 'github' },
    { href: `${prefix}assets/${site.cv}`, label: t.contact.cvLabel, kind: 'cv' },
  ];
  if (site.scholar)
    out.push({ href: site.scholar, label: t.contact.scholarLabel, kind: 'scholar' });
  if (site.orcid) out.push({ href: site.orcid, label: t.contact.orcidLabel, kind: 'orcid' });
  if (site.linkedin)
    out.push({ href: site.linkedin, label: t.contact.linkedinLabel, kind: 'linkedin' });
  return out;
}

/** Structured data so search engines and Scholar read the page correctly. */
export function jsonLd(t, site, pubs) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.name,
    alternateName: t.nameAlt,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: t.role,
    description: t.meta.description,
    image: `${site.url}/assets/${site.portrait}`,
    affiliation: { '@type': 'CollegeOrUniversity', name: t.affiliation },
    alumniOf: t.education.items.map((e) => ({
      '@type': 'CollegeOrUniversity',
      name: e.school,
    })),
    knowsAbout: t.research.keywords,
    sameAs: [site.github, site.scholar, site.orcid, site.linkedin].filter(Boolean),
    subjectOf: pubs.map((p) => ({
      '@type': 'ScholarlyArticle',
      headline: p.title,
      datePublished: p.year,
      identifier: p.doi ? `https://doi.org/${p.doi}` : undefined,
      isPartOf: { '@type': 'Periodical', name: p.venue.en },
      author: p.authors.map((a) => ({ '@type': 'Person', name: a.name })),
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

/** Shared <head> contents. */
export function head(t, site, opts) {
  const { depth, cssHref, variantId, altHref, extraHead = '' } = opts;
  const prefix = up(depth);
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t.meta.title)}</title>
<meta name="description" content="${esc(t.meta.description)}">
<meta name="author" content="${esc(t.name)}">
<link rel="canonical" href="${esc(site.url)}${esc(altHref.self)}">
<link rel="alternate" hreflang="${t.lang === 'en' ? 'zh-Hans' : 'en'}" href="${esc(site.url)}${esc(altHref.other)}">
<link rel="alternate" hreflang="${t.htmlLang}" href="${esc(site.url)}${esc(altHref.self)}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(t.meta.title)}">
<meta property="og:description" content="${esc(t.meta.description)}">
<meta property="og:image" content="${esc(site.url)}/assets/${esc(site.portraitSquare)}">
<meta property="og:url" content="${esc(site.url)}${esc(altHref.self)}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">
<link rel="preload" as="image" href="${prefix}assets/${esc(site.portrait)}">
<link rel="stylesheet" href="${prefix}styles/${variantId}.css">
${extraHead}
${jsonLd(t, site, [...t.publications.published, ...t.publications.working])}`;
}

/** Progressive enhancement: scroll-spy nav + reduced-motion-safe reveal. */
export const behaviourScript = `
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-spy]'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);
  if (sections.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle('is-current', l.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  var reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); ro.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  reveals.forEach(function (el) { ro.observe(el); });
})();
`;
