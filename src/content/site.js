// ---------------------------------------------------------------------------
// Global settings. Edit names, contact details and profile links here.
// ---------------------------------------------------------------------------

export const site = {
  url: 'https://yijianlu2003.github.io',
  email: 'yijianlu@connect.hku.hk',
  github: 'https://github.com/yijianlu2003',
  githubHandle: 'yijianlu2003',

  orcid: 'https://orcid.org/0009-0004-3344-8378',
  orcidId: '0009-0004-3344-8378',

  // Add these when you have them; they are skipped while null.
  scholar: null,
  linkedin: null,

  portrait: 'assets/portrait.jpg',
  portraitSquare: 'assets/portrait-square.jpg',

  updated: '2026-09',

  // -------------------------------------------------------------------------
  // VISITOR FLAGS (bottom of the home page)
  //
  // Uses flagcounter.com, which needs no account. To switch it on:
  //   1. Go to https://flagcounter.com/ and click "Get your flag counter".
  //   2. In the options, turn OFF every count — "Number of visitors",
  //      "Pageviews" and "Show counts per flag" — and turn ON country
  //      labels. Pick 8 columns and a transparent or #F1EAD9 background so
  //      it sits well against the cream page.
  //   3. It gives you an HTML snippet containing an <img src="..."> and a
  //      surrounding <a href="...">. Paste those two URLs below.
  //   4. Save the private management link it shows you — that is where your
  //      own per-country totals stay visible, without appearing on the site.
  //
  // While either value is null the whole section is omitted from the page.
  // -------------------------------------------------------------------------
  visitors: {
    flagSrc: null,
    flagHref: null,
  },
};

export const identity = {
  en: {
    name: 'Yijian Lu',
    nameAlt: '卢一健',
    role: 'MSc(Eng) Industrial Engineering & Logistics Management',
    affiliation: 'The University of Hong Kong',
    location: 'Hong Kong SAR',
    tagline: 'Exact and hybrid algorithms for large-scale discrete optimization.',
  },
  zh: {
    name: '卢一健',
    nameAlt: 'Yijian Lu',
    role: '工业工程与物流管理 硕士（MSc(Eng)）',
    affiliation: '香港大学',
    location: '中国香港',
    tagline: '面向大规模离散优化的精确算法与混合算法。',
  },
};

export const ui = {
  en: {
    htmlLang: 'en',
    skip: 'Skip to content',
    altLabel: '中文',
    altTitle: 'Switch to Chinese',
    home: 'Home',
    backToTop: 'Back to top',
    rights: (y) => `© ${y} Yijian Lu`,
    updated: (d) => `Last updated ${d}`,
    galleryHeading: 'Photographs',
    metaDescriptionSuffix:
      'Yijian Lu — discrete optimization and transportation systems, The University of Hong Kong.',
  },
  zh: {
    htmlLang: 'zh-Hans',
    skip: '跳到正文',
    altLabel: 'EN',
    altTitle: '切换到英文',
    home: '首页',
    backToTop: '返回顶部',
    rights: (y) => `© ${y} 卢一健`,
    updated: (d) => `最后更新于 ${d}`,
    galleryHeading: '照片',
    metaDescriptionSuffix: '卢一健 — 离散优化与交通系统，香港大学。',
  },
};
