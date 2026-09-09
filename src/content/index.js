// Registry of every page on the site. Reordering this array reorders the
// navigation; removing an entry removes the page entirely.

import { about } from './about.js';
import { research } from './research.js';
import { publications } from './publications.js';
import { education } from './education.js';
import { experience } from './experience.js';
import { awards } from './awards.js';
import { contact } from './contact.js';

export { site, identity, ui } from './site.js';

export const pages = [
  { ...about, kind: 'about' },
  { ...research, kind: 'research' },
  { ...publications, kind: 'publications' },
  { ...education, kind: 'education' },
  { ...experience, kind: 'experience' },
  { ...awards, kind: 'awards' },
  { ...contact, kind: 'contact' },
];

export const LOCALES = ['en', 'zh'];
