// Shared rendering helpers.

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Relative prefix back to the site root, so pages work at any depth. */
export const up = (depth) => (depth === 0 ? '' : '../'.repeat(depth));

/**
 * Inline emphasis for prose written in the content files. HTML is escaped
 * first, so only these two markers can produce tags:
 *   ***text***  bold italic
 *   **text**    bold
 */
export function inline(s) {
  return esc(s)
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** Author list in bibliographic form; the site owner is emphasised. */
export function authorList(list) {
  return list
    .map((a) => {
      const star = a.star ? '<sup class="star">*</sup>' : '';
      return a.me
        ? `<strong class="self">${esc(a.name)}</strong>${star}`
        : `${esc(a.name)}${star}`;
    })
    .join(', ');
}

/** Contact rows, skipping any profile that has not been filled in. */
export function contactRows(t, site) {
  const rows = [
    { kind: 'email', label: t.labels.email, value: site.email, href: `mailto:${site.email}` },
    {
      kind: 'github',
      label: t.labels.github,
      value: `@${site.githubHandle}`,
      href: site.github,
    },
  ];
  if (site.orcid)
    rows.push({ kind: 'orcid', label: t.labels.orcid, value: site.orcidId, href: site.orcid });
  if (site.scholar)
    rows.push({
      kind: 'scholar',
      label: t.labels.scholar,
      value: t.labels.scholar,
      href: site.scholar,
    });
  if (site.linkedin)
    rows.push({
      kind: 'linkedin',
      label: t.labels.linkedin,
      value: t.labels.linkedin,
      href: site.linkedin,
    });
  return rows;
}

/** Structured data describing the person and any published work. */
export function jsonLd(ctx) {
  const { site, identity, pubs, url } = ctx;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: identity.name,
    alternateName: identity.nameAlt,
    url: site.url,
    mainEntityOfPage: url,
    email: `mailto:${site.email}`,
    jobTitle: identity.role,
    affiliation: { '@type': 'CollegeOrUniversity', name: identity.affiliation },
    sameAs: [site.github, site.orcid, site.scholar, site.linkedin].filter(Boolean),
  };
  if (pubs && pubs.length) {
    data.subjectOf = pubs.map((p) => ({
      '@type': 'ScholarlyArticle',
      headline: p.title,
      datePublished: p.year,
      identifier: p.doi ? `https://doi.org/${p.doi}` : undefined,
      isPartOf: { '@type': 'Periodical', name: p.venue },
      author: p.authors.map((a) => ({ '@type': 'Person', name: a.name })),
    }));
  }
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}
