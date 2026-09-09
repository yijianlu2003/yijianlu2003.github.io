// ---------------------------------------------------------------------------
// EXPERIENCE  —  /experience/  and  /zh/experience/
//
// PHOTO ALBUMS
// Each entry may set `photoDir`, naming a folder under assets/photos/.
// The build scans that folder and turns every image it finds into an album,
// sorted by filename — so prefix files 01-, 02-, 03- to control the order.
// You do not need to edit any code to add pictures: drop the files in and run
//   npm run build
// Optional captions: create captions.json inside the folder, e.g.
//   { "01-tencent-academy.jpg": { "en": "Tencent Academy", "zh": "腾讯学堂" } }
// ---------------------------------------------------------------------------

export const experience = {
  slug: 'experience',
  en: {
    navLabel: 'Experience',
    title: 'Experience',
    metaTitle: 'Experience — Yijian Lu',
    metaDescription:
      'Internship and service experience of Yijian Lu at Tencent Ads, JD Retail and SF Express.',
    intro: null,

    groups: [
      {
        label: 'Industry',
        items: [
          {
            org: 'Manulife (International) Limited',
            role: 'Insurance & Financial Advisory Intern',
            period: 'Sep — Dec 2025',
            place: 'Hong Kong SAR',
            photoDir: 'manulife',
            bullets: [
              'Studied Hong Kong insurance and financial planning while completing my first term at HKU: policy structures, premium and protection design, and the regulatory and ethics requirements for licensed intermediaries.',
              'Passed the Hong Kong insurance intermediary qualifying examinations and was licensed as an insurance agent in November 2025.',
              'Prepared client-facing needs analyses across life, medical and savings products, and sat in on advisory meetings from first contact through to proposal.',
              'Learned the practical side of the trade — that a good recommendation is mostly arithmetic and honest questions, and that the hardest constraint is the client’s trust, not the product range.',
            ],
          },
          {
            org: 'Tencent Technology (Shenzhen) Co., Ltd.',
            unit: 'AMS — Tencent Ads',
            role: 'Industry Operations Intern',
            period: 'Apr — Jul 2025',
            place: 'Shenzhen, China',
            photoDir: 'tencent',
            bullets: [
              'Ran account diagnostics on roughly 50 priority advertiser cases per month, classifying recurring issues into insufficient delivery volume, cost overrun and low valid-conversion rate, and wrote the operations SOP covering each case.',
              'Applied first-party audience upload, second-party audience expansion, level-tag configuration and per-segment, per-placement bidding, raising June month-to-date spend by 15% and valid rate by 30%.',
            ],
          },
          {
            org: 'JD.com — JD Century Trading (Beijing) Co., Ltd.',
            unit: 'JD Retail',
            role: 'Headquarters Intern, Merchandising',
            period: 'Nov 2024 — Apr 2025',
            place: 'Beijing, China',
            photoDir: 'jd',
            bullets: [
              'Held business responsibility for the national flowers-and-live-plants category, recruiting and incubating merchants against regional and category strengths, establishing partnerships with 12 leading suppliers and introducing 28 high-potential nursery-stock varieties.',
              'Built the category data system from scratch — daily and weekly reporting, real-time anomaly alerts, Golden Eye and EasyBI dashboards — supporting a 30% increase in order volume, and ran an origin-direct programme with Kunming growers for Chinese New Year flowers that grew category revenue 200% year on year.',
            ],
          },
          {
            org: 'SF Express (Shenzhen) Co., Ltd.',
            role: 'Headquarters Management Trainee',
            period: 'Jun — Oct 2024',
            place: 'Shenzhen, China',
            photoDir: 'sf',
            bullets: [
              'Rotated through frontline pickup, delivery and warehousing operations, handling over 1,000 parcels across urban villages, CBD towers and university campuses.',
              'Re-sequenced inbound and outbound flows and rebalanced courier zones, raising peak-hour sortation throughput by 18% and cutting average loading time per route by 12%.',
            ],
          },
        ],
      },
      {
        // Roles only — no duty descriptions in this group.
        label: 'Service and leadership',
        items: [
          {
            org: 'Student Science & Technology Innovation Association, NJAU',
            role: 'President',
            period: 'Mar 2023 — Jan 2024',
            place: 'Nanjing, China',
            photoDir: 'campus',
          },
          {
            org: 'Logistics Engineering Class 213, NJAU',
            role: 'Class Monitor',
            period: 'Sep 2021 — Jun 2025',
            place: 'Nanjing, China',
          },
          {
            org: 'Nanjing Jinling Library & campus reading initiatives',
            role: 'Volunteer',
            period: 'Sep 2022 — Jan 2025',
            place: 'Nanjing, China',
          },
          {
            org: 'Badminton Association, NJAU',
            role: 'Vice President',
            period: '2022 — 2024',
            place: 'Nanjing, China',
          },
        ],
      },
    ],
  },

  zh: {
    navLabel: '实践经历',
    title: '实践经历',
    metaTitle: '实践经历 — 卢一健',
    metaDescription: '卢一健在腾讯广告、京东零售与顺丰速运的实习及学生工作经历。',
    intro: null,

    groups: [
      {
        label: '行业实习',
        items: [
          {
            org: '宏利人寿保险（国际）有限公司',
            role: '保险与财务规划 实习顾问',
            period: '2025 年 9 月 — 12 月',
            place: '中国香港',
            photoDir: 'manulife',
            bullets: [
              '在港大就读第一学期的同时系统学习香港保险与财务规划：保单结构、保费与保障额设计，以及持牌中介人的监管与职业道德要求。',
              '通过香港保险中介人资格考试，于 2025 年 11 月正式取得保险代理人牌照。',
              '为客户准备涵盖寿险、医疗与储蓄型产品的需求分析，并全程旁听从初次接触到方案呈现的顾问会谈。',
              '学到了这门行当的实务一面——一份好建议大半靠算术和诚实的提问；真正最紧的约束是客户的信任，而不是产品线的宽度。',
            ],
          },
          {
            org: '腾讯科技（深圳）有限公司',
            unit: 'AMS 腾讯广告',
            role: '行业运营实习生',
            period: '2025 年 4 月 — 7 月',
            place: '中国深圳',
            photoDir: 'tencent',
            bullets: [
              '月均深度分析约 50 个重点客户 Case，将反复出现的问题归纳为拿量不足、超成本、有效率低三类，并撰写覆盖各类情形的运营解决方案 SOP。',
              '通过一方人群数据上传、二方人群挖包、leveltag 配置及分人群分版位出价，推动 6 月 MTD 消耗提升 15%、有效率提升 30%。',
            ],
          },
          {
            org: '京东世纪贸易（北京）有限公司',
            unit: '京东零售',
            role: '总部实习生 · 采销',
            period: '2024 年 11 月 — 2025 年 4 月',
            place: '中国北京',
            photoDir: 'jd',
            bullets: [
              '负责全国花卉绿植品类的经营结果，结合区域特性与品类优势持续招商与新商孵化，与 12 家行业头部供应商建联并达成深度合作，引入 28 种高潜苗木品种。',
              '从 0 到 1 搭建品类数据体系——日报、周报、实时异动、黄金眼与 EASYBI，支撑品类单量增长 30%；年货节期间引入昆明源头年宵花商家并开展产地直发专项，使年宵花类目销售额同比增长 200%。',
            ],
          },
          {
            org: '顺丰速运（深圳）有限公司',
            role: '总部管理培训生',
            period: '2024 年 6 月 — 10 月',
            place: '中国深圳',
            photoDir: 'sf',
            bullets: [
              '轮岗覆盖前端收派与仓储环节，处理包裹 1,000 余件，走遍城中村、CBD 写字楼与高校校园。',
              '通过重排进出库流序、重新平衡快递员责任区，将高峰时段分拣吞吐量提升 18%，单条路线平均装载时间缩短 12%。',
            ],
          },
        ],
      },
      {
        // 仅列职务，不写具体工作内容。
        label: '学生工作与服务',
        items: [
          {
            org: '南京农业大学大学生科学技术创新协会',
            role: '主席',
            period: '2023 年 3 月 — 2024 年 1 月',
            place: '中国南京',
            photoDir: 'campus',
          },
          {
            org: '南京农业大学物流工程 213 班',
            role: '班长',
            period: '2021 年 9 月 — 2025 年 6 月',
            place: '中国南京',
          },
          {
            org: '南京金陵图书馆与校园阅读推广项目',
            role: '志愿者',
            period: '2022 年 9 月 — 2025 年 1 月',
            place: '中国南京',
          },
          {
            org: '南京农业大学羽毛球协会',
            role: '副会长',
            period: '2022 — 2024',
            place: '中国南京',
          },
        ],
      },
    ],
  },
};
