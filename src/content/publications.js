// ---------------------------------------------------------------------------
// PUBLICATIONS  —  /publications/  and  /zh/publications/
//
// Only peer-reviewed, published work is listed. To add a paper once it is
// accepted, copy an entry in `items` and fill in the fields:
//   authors  — set `me: true` on your own name, `star: true` for corresponding
//   summary  — one short paragraph, language-specific
//   doi/url  — omit both if there is no DOI yet
// ---------------------------------------------------------------------------

const items = [
  {
    id: 'algorithms-2026-731',
    authors: [
      { name: 'Zihan Zhang' },
      { name: 'Jiani Li' },
      { name: 'Haoyu Yang' },
      { name: 'Zengji Zheng', star: true },
      { name: 'Yijian Lu', me: true, star: true },
    ],
    year: '2026',
    title:
      'A Tolerance-Aware Pricing Certificate for Stabilized Dantzig–Wolfe Branch-and-Price in Unit Commitment',
    venue: 'Algorithms',
    venueDetail: '19(9), 731',
    indexed: { en: 'EI · IF 2.6', zh: 'EI 收录 · IF 2.6' },
    doi: '10.3390/a19090731',
    url: 'https://doi.org/10.3390/a19090731',
    role: { en: 'Corresponding author', zh: '通讯作者' },
    published: { en: 'Published 31 August 2026', zh: '2026 年 8 月 31 日出版' },
    summary: {
      en: 'A conditional, tolerance-adjusted node-pricing bound for deterministic unit commitment. At the unstabilized restricted-master dual, the method applies a Phase-II cascade of a period-separable operational-envelope bound, a chronology-preserving ramp-relaxed dynamic-programming bound, and an exact mixed-integer pricing fallback, so that stabilized pricing can still certify branch-and-price node termination.',
      zh: '针对确定性机组组合问题，提出一种带容差修正的条件性节点定价界。方法在未稳定化的受限主问题对偶点上应用二阶段级联：分时段可分的运行包络界、保持时序的爬坡松弛动态规划界，以及精确混合整数定价兜底，从而使稳定化定价仍能为分支定价的节点终止提供证书。',
    },
  },
];

export const publications = {
  slug: 'publications',
  en: {
    navLabel: 'Publications',
    title: 'Publications',
    metaTitle: 'Publications — Yijian Lu',
    metaDescription:
      'Peer-reviewed publications of Yijian Lu in operations research and discrete optimization.',
    intro: null,
    resultLabel: 'Result',
    doiLabel: 'DOI',
    emptyNote: 'No entries yet.',
    items,
  },
  zh: {
    navLabel: '论文发表',
    title: '论文发表',
    metaTitle: '论文发表 — 卢一健',
    metaDescription: '卢一健在运筹学与离散优化领域的同行评审论文。',
    intro: null,
    resultLabel: '主要结果',
    doiLabel: 'DOI',
    emptyNote: '暂无内容。',
    items,
  },
};
