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
            org: 'Tencent Technology (Shenzhen) Co., Ltd.',
            unit: 'AMS — Tencent Ads',
            role: 'Industry Operations Intern',
            period: 'Apr — Jul 2025',
            place: 'Shenzhen, China',
            photoDir: 'tencent',
            bullets: [
              'Ran account diagnostics on roughly 50 priority advertiser cases per month, classifying recurring issues into insufficient delivery volume, cost overrun and low valid-conversion rate, and wrote the operations SOP covering each case.',
              'Built a problem-to-solution-to-increment path from historical data and benchmark accounts; the Shandong key-account rollout contributed over RMB 50,000 in incremental daily spend.',
              'Authored an account-infrastructure diagnostic SOP benchmarked against the Ads 3.0 requirements, raising infrastructure compliance by 20%.',
              'Worked with channel managers across 22 priority mid-tail accounts in the Q2 dental vertical: acquisition cost fell 5% and the leverage ratio rose 10%.',
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
              'Held business responsibility for the national flowers-and-live-plants category, recruiting and incubating merchants against regional and category strengths.',
              'Established partnerships with 12 leading suppliers and introduced 28 high-potential nursery-stock varieties.',
              'Built the category data system from scratch — daily and weekly reporting, real-time anomaly alerts, Golden Eye and EasyBI dashboards — supporting a 30% increase in order volume.',
              'Launched 238 SPUs in agricultural supplies and horticulture at a 96.3% sell-through rate, including two 500-unit and one 1,000-unit bestsellers.',
              'Ran an origin-direct programme with Kunming growers for Chinese New Year flowers, growing category revenue 200% year on year.',
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
              'Co-authored a technical report on multi-temperature-zone vehicle routing, which received the SF Logistics Outstanding Proposal Award.',
            ],
          },
        ],
      },
      {
        label: 'Service and leadership',
        items: [
          {
            org: 'Student Science & Technology Innovation Association, NJAU',
            role: 'President',
            period: 'Mar 2023 — Jan 2024',
            place: 'Nanjing, China',
            photoDir: 'campus',
            bullets: [
              'Organised more than 10 innovation and business-simulation events for over 500 student participants, coordinating teams, judges and event delivery.',
              'Ran 5 student research-skills workshops and hosted 3 invited expert talks.',
            ],
          },
          {
            org: 'Logistics Engineering Class 213, NJAU',
            role: 'Class Monitor',
            period: 'Sep 2021 — Jun 2025',
            place: 'Nanjing, China',
            bullets: [
              'Served four years as the liaison between classmates, faculty and counsellors, organising group study for final examinations and CET preparation.',
            ],
          },
          {
            org: 'Nanjing Jinling Library & campus reading initiatives',
            role: 'Volunteer',
            period: 'Sep 2022 — Jan 2025',
            place: 'Nanjing, China',
            bullets: [
              'Supported reading literacy, library cultural promotion and academic tutoring for over 300 primary, secondary and orphanage students.',
              'Named Outstanding Reading Recommendation Officer by Nanjing Agricultural University.',
            ],
          },
          {
            org: 'Badminton Association, NJAU',
            role: 'Vice President',
            period: '2022 — 2024',
            place: 'Nanjing, China',
            bullets: ['Organised training sessions, inter-college fixtures and equipment logistics.'],
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
            org: '腾讯科技（深圳）有限公司',
            unit: 'AMS 腾讯广告',
            role: '行业运营实习生',
            period: '2025 年 4 月 — 7 月',
            place: '中国深圳',
            photoDir: 'tencent',
            bullets: [
              '月均深度分析约 50 个重点客户 Case，将反复出现的问题归纳为拿量不足、超成本、有效率低三类，并撰写覆盖各类情形的运营解决方案 SOP。',
              '基于历史数据与标杆案例构建「问题—方案—增量」转化路径，其中山东头部客户落地贡献日耗增量 5 万元以上。',
              '主导设计《基建诊断 SOP》，对标广告 3.0 要求将账户基建达标率提升 20%。',
              '与渠道经理协同攻坚 Q2 口腔赛道 22 家重点中腰部客户，拿量成本降低 5%，撬动比提升 10%。',
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
              '负责全国花卉绿植品类的经营结果，结合区域特性与品类优势持续招商与新商孵化。',
              '与 12 家行业头部供应商建联并达成深度合作，引入 28 种高潜苗木品种。',
              '从 0 到 1 搭建品类数据体系——日报、周报、实时异动、黄金眼与 EASYBI，支撑品类单量增长 30%。',
              '农资园艺类目上线 SPU 238 个，动销率 96.3%，其中打造 2 个 500 单品与 1 个 1000 单品。',
              '年货节期间引入昆明源头年宵花商家并开展产地直发专项，使年宵花类目销售额同比增长 200%。',
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
              '合作撰写多温区车辆路径优化技术报告，获顺丰物流「优秀方案奖」。',
            ],
          },
        ],
      },
      {
        label: '学生工作与服务',
        items: [
          {
            org: '南京农业大学大学生科学技术创新协会',
            role: '主席',
            period: '2023 年 3 月 — 2024 年 1 月',
            place: '中国南京',
            photoDir: 'campus',
            bullets: [
              '主导 10 余场创新与商业模拟赛事，覆盖 500 余名学生参与者，统筹参赛团队、评委与赛事执行。',
              '开展学生科技创新辅导讲座 5 场，邀请专家专题演讲 3 次。',
            ],
          },
          {
            org: '南京农业大学物流工程 213 班',
            role: '班长',
            period: '2021 年 9 月 — 2025 年 6 月',
            place: '中国南京',
            bullets: [
              '四年间担任班级与老师、辅导员之间的联络人，组织期末复习与四六级备考等活动。',
            ],
          },
          {
            org: '南京金陵图书馆与校园阅读推广项目',
            role: '志愿者',
            period: '2022 年 9 月 — 2025 年 1 月',
            place: '中国南京',
            bullets: [
              '参与阅读素养推广、图书馆文化建设与学业辅导，服务 300 余名小学、中学及孤儿院学生。',
              '获南京农业大学「优秀阅读推荐官」称号。',
            ],
          },
          {
            org: '南京农业大学羽毛球协会',
            role: '副会长',
            period: '2022 — 2024',
            place: '中国南京',
            bullets: ['负责日常训练组织、院际对抗赛与器材统筹。'],
          },
        ],
      },
    ],
  },
};
