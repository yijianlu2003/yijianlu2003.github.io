// ---------------------------------------------------------------------------
// HOME PAGE  —  /  and  /zh/
// `lead` is the opening line. `body` is an array of paragraphs; add or remove
// entries freely. `highlights` renders the short fact list underneath.
// ---------------------------------------------------------------------------

export const about = {
  slug: '',
  en: {
    navLabel: 'About',
    title: 'About',
    metaTitle: 'Yijian Lu — Discrete Optimization & Transportation Systems',
    metaDescription:
      'Yijian Lu, MSc(Eng) in Industrial Engineering and Logistics Management at the University of Hong Kong. Exact and hybrid algorithms for large-scale discrete optimization in transportation and operations.',

    lead:
      'I work on exact and hybrid algorithms for large-scale discrete optimization, applied to transportation and operations planning.',

    body: [
      'My methods are mixed-integer programming, Benders decomposition, Dantzig–Wolfe branch-and-price, branch-and-cut, and matheuristics. Application areas include multimodal container network design, emergency logistics, drone and bus–UAV routing, multi-project construction scheduling, and unit commitment.',
      'I am completing an MSc(Eng) in Industrial Engineering and Logistics Management at the University of Hong Kong, expected November 2026. I hold a BEng in Logistics Engineering from Nanjing Agricultural University.',
    ],

    highlights: [
      { label: 'Field', value: 'Operations research · Discrete optimization' },
      { label: 'Affiliation', value: 'The University of Hong Kong' },
      { label: 'Based in', value: 'Hong Kong SAR' },
      { label: 'Contact', value: 'yijianlu@connect.hku.hk' },
    ],
  },

  zh: {
    navLabel: '关于',
    title: '关于',
    metaTitle: '卢一健 — 离散优化与交通系统',
    metaDescription:
      '卢一健，香港大学工业工程与物流管理硕士（MSc(Eng)）。研究方向为交通与运作规划中大规模离散优化问题的精确算法与混合算法。',

    lead: '我的研究方向是大规模离散优化的精确算法与混合算法，应用于交通与运作规划问题。',

    body: [
      '所用方法包括混合整数规划、Benders 分解、Dantzig–Wolfe 分支定价、分支切割与数学启发式。应用领域涵盖多式联运集装箱网络设计、应急物流、无人机与公交–无人机路径优化、多项目建筑调度以及电力系统机组组合。',
      '我正在香港大学攻读工业工程与物流管理硕士（MSc(Eng)），预计 2026 年 11 月毕业；本科毕业于南京农业大学物流工程专业，获工学学士学位。',
    ],

    highlights: [
      { label: '研究领域', value: '运筹学 · 离散优化' },
      { label: '所属机构', value: '香港大学' },
      { label: '所在地', value: '中国香港' },
      { label: '联系邮箱', value: 'yijianlu@connect.hku.hk' },
    ],
  },
};
