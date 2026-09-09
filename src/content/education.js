// ---------------------------------------------------------------------------
// EDUCATION  —  /education/  and  /zh/education/
// `courses` is optional per entry; delete the field to hide the course line.
// ---------------------------------------------------------------------------

export const education = {
  slug: 'education',
  en: {
    navLabel: 'Education',
    title: 'Education',
    metaTitle: 'Education — Yijian Lu',
    metaDescription:
      'Education of Yijian Lu: MSc(Eng) at the University of Hong Kong and BEng at Nanjing Agricultural University.',
    intro: null,

    items: [
      {
        school: 'The University of Hong Kong',
        note: 'QS World University Rankings 2026: 11th',
        degree: 'MSc(Eng) in Industrial Engineering and Logistics Management',
        period: 'Sep 2025 — Nov 2026',
        place: 'Hong Kong SAR',
        detail: 'Expected with Distinction.',
        courses: [
          'Frontiers in Robotics and Intelligent Systems (A−)',
          'Digital Enterprises and E-commerce (A−)',
          'Frontiers in Data and Systems Engineering (B+)',
          'Machine Learning & Applications (B+)',
        ],
      },
      {
        school: 'Nanjing Agricultural University',
        note: 'Project 211 · Double First-Class',
        degree: 'BEng in Logistics Engineering',
        period: 'Sep 2021 — Jun 2025',
        place: 'Nanjing, China',
        detail: 'Average 88/100.',
        courses: [
          'Equipment of Logistics (96)',
          'Planning and Design of Distribution Centers (94)',
          'Operations Research II (92)',
          'Operations Research I (91)',
          'Optimization Theory & Computational Methods (91)',
          'Probability Theory & Mathematical Statistics (91)',
        ],
      },
    ],

    languages: {
      label: 'Languages',
      items: [
        'Chinese — native',
        'English — IELTS 6.5; master’s degree taught and completed entirely in English',
        'CET-6',
      ],
    },
  },

  zh: {
    navLabel: '教育背景',
    title: '教育背景',
    metaTitle: '教育背景 — 卢一健',
    metaDescription: '卢一健的教育背景：香港大学硕士，南京农业大学工学学士。',
    intro: null,

    items: [
      {
        school: '香港大学',
        note: '2026 QS 世界大学排名第 11 位',
        degree: '工业工程与物流管理 硕士 MSc(Eng)',
        period: '2025 年 9 月 — 2026 年 11 月',
        place: '中国香港',
        detail: '预计获优异成绩（Distinction）。',
        courses: [
          '机器人与智能系统前沿（A−）',
          '数字企业与电子商务（A−）',
          '数据与系统工程前沿（B+）',
          '机器学习及其应用（B+）',
        ],
      },
      {
        school: '南京农业大学',
        note: '211 工程 · 双一流',
        degree: '物流工程 工学学士',
        period: '2021 年 9 月 — 2025 年 6 月',
        place: '中国南京',
        detail: '平均分 88/100。',
        courses: [
          '物流装备（96）',
          '配送中心规划与设计（94）',
          '运筹学 II（92）',
          '运筹学 I（91）',
          '最优化理论与计算方法（91）',
          '概率论与数理统计（91）',
        ],
      },
    ],

    languages: {
      label: '语言与证书',
      items: [
        '中文 — 母语',
        '英文 — 雅思 6.5；硕士阶段全英文授课并完成',
        'CET-6',
      ],
    },
  },
};
