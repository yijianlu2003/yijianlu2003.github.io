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
        advisor: 'Fangni Zhang',
        courses: [
          'Frontiers in Robotics and Intelligent Systems',
          'Frontiers in Data and Systems Engineering',
          'Machine Learning & Applications',
          'Digital Enterprises and E-commerce',
        ],
      },
      {
        school: 'University of Aberdeen',
        note: 'Summer school · funded by Nanjing Agricultural University',
        degree: 'Summer School',
        period: 'Jul — Sep 2023',
        place: 'Aberdeen, Scotland',
      },
      {
        school: 'Nanjing Agricultural University',
        note: 'Project 211 · Double First-Class',
        degree: 'BEng in Logistics Engineering',
        period: 'Sep 2021 — Jun 2025',
        place: 'Nanjing, China',
        advisor: 'Yining Yu',
        courses: [
          'Operations Research I',
          'Operations Research II',
          'Optimization Theory & Computational Methods',
          'Probability Theory & Mathematical Statistics',
          'Equipment of Logistics',
          'Planning and Design of Distribution Centers',
        ],
      },
    ],

    languages: {
      label: 'Languages',
      items: [
        'Chinese — native',
        'English — IELTS 6.5; master’s degree taught and completed entirely in English',
      ],
    },

    advisorLabel: 'Supervisor',
    // All education photos sit in one album below Languages.
    photoDirs: ['aberdeen'],
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
        advisor: 'Fangni Zhang',
        courses: [
          '机器人与智能系统前沿',
          '数据与系统工程前沿',
          '机器学习及其应用',
          '数字企业与电子商务',
        ],
      },
      {
        school: '英国阿伯丁大学',
        note: '暑期访学 · 南京农业大学资助',
        degree: '应用技术与数据科学暑期学校',
        period: '2023 年 7 月 — 9 月',
        place: '英国 · 阿伯丁',
      },
      {
        school: '南京农业大学',
        note: '211 工程 · 双一流',
        degree: '物流工程 工学学士',
        period: '2021 年 9 月 — 2025 年 6 月',
        place: '中国南京',
        advisor: 'Yining Yu',
        courses: [
          '运筹学 I',
          '运筹学 II',
          '最优化理论与计算方法',
          '概率论与数理统计',
          '物流装备',
          '配送中心规划与设计',
        ],
      },
    ],

    languages: {
      label: '语言',
      items: ['中文 — 母语', '英文 — 雅思 6.5；硕士阶段全英文授课并完成'],
    },

    advisorLabel: '指导老师',
    photoDirs: ['aberdeen'],
  },
};
