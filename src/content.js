// Single source of truth for the site. Every variant and both languages render
// from this file — edit here, run `npm run build`, and all pages update.

export const site = {
  url: 'https://yijianlu2003.github.io',
  email: 'yijianlu@connect.hku.hk',
  github: 'https://github.com/yijianlu2003',
  githubHandle: 'yijianlu2003',
  cv: 'Yijian-Lu-CV.pdf',
  portrait: 'portrait.jpg',
  portraitSquare: 'portrait-square.jpg',
  candid: 'photo-tencent.jpg',
  updated: '2026-09',
  // Fill these in when you have them; they are skipped while null.
  scholar: null,
  orcid: null,
  linkedin: null,
};

// ---------------------------------------------------------------------------
// Publications. `me` marks the author entry to bold; `star` marks corresponding
// author. Shared across languages except for `summary` / `result`.
// ---------------------------------------------------------------------------

const PUBLISHED = [
  {
    id: 'algorithms-2026',
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
    venue: { en: 'Algorithms', zh: 'Algorithms' },
    venueDetail: '19(9), 731',
    indexed: { en: 'SCIE / EI · IF 2.6', zh: 'SCIE / EI 收录 · IF 2.6' },
    doi: '10.3390/a19090731',
    url: 'https://doi.org/10.3390/a19090731',
    role: { en: 'Corresponding author', zh: '通讯作者' },
    status: 'published',
    summary: {
      en: 'Stabilized pricing makes column generation cheaper, but a stabilized dual is not a dual you can terminate a branch-and-price node on. We build a conditional, tolerance-adjusted node-pricing bound that is evaluated at the unstabilized restricted-master dual, so the shortcut and the certificate stop being mutually exclusive.',
      zh: '稳定化定价能让列生成更省力，但稳定化之后的对偶解并不能直接用来终止分支定价的节点。我们在未稳定化的受限主问题对偶点上构造了一个带容差修正的条件性节点定价界，让"抄近路"和"出证书"不再互斥。',
    },
    result: {
      en: 'Across 15 jointly accepted root endpoints the cascade cut exact true-dual unit pricing solves in every pair (median −29,228 solves), with a maximum absolute bound discrepancy of 2.24 × 10⁻⁸ against exact pricing.',
      zh: '在 15 组共同通过验收的根节点端点上，级联界在每一组都减少了精确真对偶单机定价求解次数（中位数 −29,228 次），且与精确定价相比界的最大绝对偏差仅 2.24 × 10⁻⁸。',
    },
  },
];

const WORKING = [
  {
    id: 'tre-mpec',
    authors: [{ name: 'Yijian Lu', me: true }, { name: 'Yining Yu' }],
    year: '2026',
    title:
      'Two-Stage Stochastic MPEC Framework with Soft Time Windows for Multimodal Container Network Design: A Dynamic Benders Decomposition with Adaptive Cut Scheduling',
    venue: {
      en: 'Transportation Research Part E: Logistics and Transportation Review',
      zh: 'Transportation Research Part E: Logistics and Transportation Review',
    },
    indexed: { en: 'SCI Q1 · IF 8.5', zh: 'SCI 一区 · IF 8.5' },
    status: 'revision',
    role: { en: 'First author', zh: '第一作者' },
    summary: {
      en: 'Hub investment on the China–ASEAN sea–rail corridor, where the planner sets capacity but shippers route themselves. The lower-level user equilibrium makes this an MPEC; stochastic OD demand and soft time-window penalties sit on top of it.',
      zh: '面向中国–东盟海铁联运走廊的枢纽投资决策：规划者决定能力配置，而货主自行选择路径。下层的用户均衡使问题成为 MPEC，上层还叠加了随机 OD 需求与软时间窗惩罚。',
    },
    result: {
      en: 'A z-relaxation bridge theorem recovers Pareto-optimal Benders cuts that the linearized KKT system would otherwise destroy. All 18 benchmarks solved to proven optimality with a 23.6× stronger lower bound; the real-world terminal gap fell from 96.9% to 26.3% within one hour.',
      zh: '通过一个 z-松弛桥接定理，恢复了线性化 KKT 系统本会破坏的 Pareto 最优 Benders 割。18 个基准实例全部求得可证最优，下界强度提升 23.6 倍；实际算例的终止间隙在 1 小时内从 96.9% 降至 26.3%。',
    },
  },
  {
    id: 'trc-drone',
    authors: [
      { name: 'Yijian Lu', me: true },
      { name: 'Menghao Li' },
      { name: 'Yiheng Fu' },
      { name: 'Ge Wu' },
      { name: 'Yining Yu', star: true },
    ],
    year: '2026',
    title:
      'Emergency Transfer of Stranded People by Synchronised Heavy-Lift Drone Coalitions: Routing, Scheduling, and Conditional Exact Completion',
    venue: {
      en: 'Transportation Research Part C: Emerging Technologies',
      zh: 'Transportation Research Part C: Emerging Technologies',
    },
    indexed: { en: 'SCI Q1 · IF 8.4', zh: 'SCI 一区 · IF 8.4' },
    status: 'review',
    role: { en: 'First author', zh: '第一作者' },
    summary: {
      en: 'Evacuating stranded disaster victims with drones that are individually too weak and must fly as synchronised coalitions. Receiving sites have capacity, each aircraft has its own energy budget, and terminal recovery slots cannot be reused — so a late decision permanently removes an option.',
      zh: '用重载无人机疏运受困人员：单机运力不足，必须以同步编队方式协同起降。接收点有容量上限、每架飞机有独立能量预算，且终端回收时隙不可复用——一个迟到的决策会永久性地消掉一个选项。',
    },
    result: {
      en: 'Strong NP-hardness proved alongside a polynomial exact completion for fixed coalition profiles, which the search then calls as a subroutine. Smallest mean empirical shortfall (10.76%) among standalone heuristics on 54 instances; used as a primal start for exact MILP it pulled pooled shortfall from 7.34% to 0.59%.',
      zh: '证明了问题的强 NP-难性，同时给出固定编队剖面下的多项式时间精确补全，并将其作为搜索的子程序调用。在 54 个实例上取得独立启发式中最小的平均经验缺口（10.76%）；作为精确 MILP 的初始解生成器时，汇总缺口从 7.34% 降至 0.59%。',
    },
  },
  {
    id: 'trc-bus-uav',
    authors: [
      { name: 'Yijian Lu', me: true },
      { name: 'Yizhi Zhen' },
      { name: 'Fangni Zhang' },
    ],
    year: '2026',
    title:
      'Cooperative Bus–UAV Last-Mile Delivery with Station Lockers and Fixed-Timetable Synchronization: A Mixed Integer Linear Program Model and Valid Inequalities',
    venue: {
      en: 'Transportation Research Part C: Emerging Technologies',
      zh: 'Transportation Research Part C: Emerging Technologies',
    },
    indexed: { en: 'SCI Q1 · IF 8.4', zh: 'SCI 一区 · IF 8.4' },
    status: 'review',
    role: { en: 'First author', zh: '第一作者' },
    code: 'https://github.com/yijianlu2003/gtfs-bus-uav-benchmark-Hongkong',
    codeLabel: { en: 'Benchmark instances', zh: '基准实例数据' },
    summary: {
      en: 'Parcels ride existing Hong Kong buses to station lockers and UAVs fly the last leg. The buses will not wait for you — the timetable is published and fixed — which turns the handover into a hard synchronization constraint rather than a routing decision.',
      zh: '包裹搭乘香港既有公交线路抵达站点智能柜，再由无人机完成最后一段配送。公交不会等你——时刻表是公开且固定的——这使得交接从一个路径决策变成了一条硬同步约束。',
    },
    result: {
      en: 'Corridor-State Compressed Branch-and-Cut exploits the fact that only the corridor state, not the full history, matters at a transfer. 3.1× faster optimality proofs, 6 of 12 medium instances solved where baselines failed, and 12–55% better large-scale incumbents on 28 GTFS instances built from real KMB routes.',
      zh: '走廊状态压缩分支切割（CSBC）利用了"交接点只关心走廊状态、无需完整历史"这一性质。最优性证明加速 3.1 倍，在基线方法失效的 12 个中等规模实例中求解出 6 个，并在 28 个基于九巴真实线路与时刻表构建的 GTFS 实例上将大规模可行解质量提升 12–55%。',
    },
  },
  {
    id: 'cie-pso',
    authors: [{ name: 'Yining Yu' }, { name: 'Yijian Lu', me: true, star: true }],
    year: '2025',
    title:
      'Exploiting Structural Properties of the Allocation Subproblem in Emergency Logistics Center Location: A Dominance-Preserving Decoder and Heuristic-Priority Discrete PSO',
    venue: {
      en: 'Computers & Industrial Engineering',
      zh: 'Computers & Industrial Engineering',
    },
    indexed: { en: 'SCI Q1 · IF 7.3', zh: 'SCI 一区 · IF 7.3' },
    status: 'revision',
    role: { en: 'Corresponding author', zh: '通讯作者' },
    summary: {
      en: 'Siting emergency logistics centres for Zhengzhou flood response. The allocation subproblem given a set of open facilities has enough structure that a decoder can be made provably lossless — it never discards an optimal allocation, so the metaheuristic above it only has to search over facility sets.',
      zh: '为郑州洪灾应急响应选址物流中心。给定已开设的设施集合后，分配子问题具备足够的结构性，使解码器可以被证明是无损的——它不会丢弃任何最优分配，因此上层元启发式只需在设施集合空间中搜索。',
    },
    result: {
      en: '7.3% cost reduction against the exact benchmark under the same time limit, 52% faster convergence than baseline PSO, and cost deviation held under 5% across ±20% demand shocks.',
      zh: '在相同时限下相比精确方法降低成本 7.3%，收敛速度比基线 PSO 快 52%，并在 ±20% 需求冲击下将成本偏差控制在 5% 以内。',
    },
  },
  {
    id: 'cor-carbon',
    authors: [
      { name: 'Yijian Lu', me: true },
      { name: 'Feifei Li' },
      { name: 'Yining Yu', star: true },
    ],
    year: '2026',
    title:
      'Carbon-Aware Multi-Project Scheduling in Prefabricated Construction: A Makespan–Carbon Trade-off Model and an Interpretable Learning-Guided Matheuristic',
    venue: {
      en: 'Computers & Operations Research',
      zh: 'Computers & Operations Research',
    },
    indexed: { en: 'SCI Q1 · IF 4.6', zh: 'SCI 一区 · IF 4.6' },
    status: 'review',
    role: { en: 'First author', zh: '第一作者' },
    summary: {
      en: 'Enterprise-level multi-project scheduling for prefabricated construction under dual-carbon mandates, with GB/T 51366 staged emissions across production–transport–installation, weighted tardiness against project due dates, on-site inventory buffers and time-varying renewable resources.',
      zh: '双碳约束下装配式建筑的企业级多项目调度，纳入 GB/T 51366 在"生产–运输–安装"链条上的分阶段碳排放核算、项目交期的加权延误、现场库存缓冲以及时变可再生资源。',
    },
    result: {
      en: 'The learning-guided matheuristic reached a 21.1% mean gap against 32.1% for GA, 54.8% for PSO and 86.0% for priority rules over 36 instances. It also located a critical carbon cap: tighten below it and tardiness cost jumps up to 15-fold.',
      zh: '学习引导的数学启发式在 36 个实例上取得 21.1% 的平均间隙，优于遗传算法（32.1%）、粒子群（54.8%）与优先规则（86.0%）。研究还识别出一个临界碳配额：一旦收紧至该阈值以下，延误成本最高跃升 15 倍。',
    },
  },
];

// ---------------------------------------------------------------------------

export const L = {
  en: {
    lang: 'en',
    htmlLang: 'en',
    dir: 'Yijian Lu',
    altHref: (v) => `/${v}/zh/`,
    altLabel: '中文',
    altTitle: 'Switch to Chinese',

    meta: {
      title: 'Yijian Lu — Discrete Optimization & Transportation Systems',
      description:
        'Yijian Lu is an MSc(Eng) student in Industrial Engineering and Logistics Management at the University of Hong Kong, working on exact and hybrid algorithms for large-scale discrete optimization in transportation and operations.',
    },

    name: 'Yijian Lu',
    nameAlt: '卢一健',
    role: 'MSc(Eng) Industrial Engineering & Logistics Management',
    affiliation: 'The University of Hong Kong',
    location: 'Hong Kong SAR',
    tagline: 'Exact and hybrid algorithms for large-scale discrete optimization.',
    seeking: 'Seeking a PhD position starting 2027',

    nav: {
      about: 'About',
      research: 'Research',
      publications: 'Publications',
      education: 'Education',
      experience: 'Experience',
      awards: 'Awards',
      contact: 'Contact',
      cv: 'Curriculum Vitae',
    },

    about: {
      heading: 'About',
      lead:
        'I design exact and hybrid algorithms for large-scale discrete optimization — mostly Benders decomposition, branch-and-price and branch-and-cut, applied to transportation and operations planning.',
      body: [
        'Most of my work starts from the same question: what can actually be proved about a problem’s substructure, and how much solver effort does that proof buy you? A dominance property in an allocation subproblem becomes a decoder that never discards an optimal solution. A corridor-state argument compresses a branch-and-cut tree. A tolerance-adjusted dual bound turns a stabilized pricing shortcut into a certificate you are allowed to terminate a node on.',
        'The applications have varied — multimodal container networks on the China–ASEAN corridor, emergency evacuation by heavy-lift drone coalitions, bus–UAV last-mile delivery along Hong Kong transit corridors, prefabricated construction scheduling under carbon caps, unit commitment — but the methodological thread has not.',
        'I finish my MSc(Eng) at HKU in November 2026 and am looking for a PhD position starting in 2027. Before Hong Kong I read Logistics Engineering at Nanjing Agricultural University, and spent a summer at SF Express carrying parcels through urban villages before being allowed to redesign the sortation SOP.',
      ],
    },

    research: {
      heading: 'Research',
      intro:
        'Three threads run through the work, in roughly descending order of how much of my time they take.',
      themes: [
        {
          n: '01',
          title: 'Decomposition with certificates',
          body:
            'Benders and Dantzig–Wolfe schemes where the interesting object is not the bound itself but what you are entitled to conclude from it. Adaptive cut scheduling, the z-relaxation bridge for MPEC-induced degeneracy, tolerance-aware node pricing.',
        },
        {
          n: '02',
          title: 'Structure-exploiting matheuristics',
          body:
            'Dominance-preserving decoders, LP-relaxation priority learning, corridor-state compression, bottleneck fix-and-optimize. Heuristics whose moves are justified by a property of the model rather than by parameter tuning.',
        },
        {
          n: '03',
          title: 'Synchronization-constrained routing',
          body:
            'Vehicles that have to meet: drone coalitions lifting a load no single aircraft can carry, parcels handed to a bus running a published timetable, launches tied to recovery slots that cannot be reused.',
        },
      ],
      keywords: [
        'Mixed-integer programming',
        'Benders decomposition',
        'Branch-and-price',
        'Branch-and-cut',
        'Stochastic programming',
        'MPEC / bilevel optimization',
        'Matheuristics',
        'Learning-guided search',
        'Vehicle routing',
        'Facility location',
        'Project scheduling',
        'Unit commitment',
      ],
    },

    publications: {
      heading: 'Publications',
      publishedHeading: 'Peer-reviewed',
      workingHeading: 'Working papers',
      workingNote:
        'Manuscripts currently with journals. Status is stated as of September 2026; preprints available on request.',
      resultLabel: 'Outcome',
      corresponding: 'Corresponding author',
      statusLabels: {
        published: 'Published',
        revision: 'Under revision',
        review: 'Under review',
      },
      doiLabel: 'DOI',
      published: PUBLISHED,
      working: WORKING,
      count: (n) => `${n} manuscripts`,
    },

    education: {
      heading: 'Education',
      items: [
        {
          school: 'The University of Hong Kong',
          note: 'QS World University Rankings 2026: 11th',
          degree: 'MSc(Eng) in Industrial Engineering and Logistics Management',
          period: 'Sep 2025 — Nov 2026',
          place: 'Hong Kong SAR',
          detail:
            'Expected with Distinction. Frontiers in Robotics and Intelligent Systems (A−) · Digital Enterprises and E-commerce (A−) · Frontiers in Data and Systems Engineering (B+) · Machine Learning & Applications (B+)',
        },
        {
          school: 'Nanjing Agricultural University',
          note: 'Project 211 · Double First-Class',
          degree: 'BEng in Logistics Engineering',
          period: 'Sep 2021 — Jun 2025',
          place: 'Nanjing, China',
          detail:
            'Average 88/100. Equipment of Logistics (96) · Planning and Design of Distribution Centers (94) · Operations Research I (91) · Operations Research II (92) · Optimization Theory & Computational Methods (91) · Probability Theory & Mathematical Statistics (91)',
        },
      ],
    },

    experience: {
      heading: 'Experience',
      note:
        'Four internships across advertising operations, e-commerce merchandising, express logistics and public administration. Different industries, but each one came down to finding the constraint that was actually binding.',
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
              detail:
                'Ran systematic diagnostics on advertiser accounts — around 50 priority client cases a month — and reduced the recurring failures to three named patterns: insufficient delivery volume, cost overrun and low valid-conversion rate, each with a scripted response in the operations SOP I wrote. Built a problem → solution → incremental-spend path from historical data and benchmark accounts; the Shandong key-account rollout contributed 50k+ RMB in incremental daily spend.',
              detail2:
                'On the channel side I authored an account-infrastructure diagnostic SOP benchmarked against the Ads 3.0 requirements, lifting infrastructure compliance 20%. Working with channel managers across 22 priority mid-tail accounts in the Q2 dental vertical, acquisition cost fell 5% and the leverage ratio rose 10%. The valid-rate playbook — first-party audience upload, second-party audience expansion, level-tag configuration, and per-segment, per-placement bidding — raised June month-to-date spend 15% and valid rate 30%.',
            },
            {
              org: 'JD.com — JD Century Trading (Beijing) Co., Ltd.',
              unit: 'JD Retail',
              role: 'Headquarters Intern, Merchandising',
              period: 'Nov 2024 — Apr 2025',
              place: 'Beijing, China',
              detail:
                'Owned business results for the national flowers-and-live-plants category. Recruited and incubated merchants against regional and category strengths, reaching deep partnerships with 12 leading suppliers and introducing 28 high-potential nursery-stock varieties.',
              detail2:
                'Built the category’s data system from nothing — daily and weekly reporting, real-time anomaly alerts, Golden Eye and EasyBI dashboards — and used it to drive a 30% increase in order volume. Launched 238 SPUs in agricultural supplies and horticulture at a 96.3% sell-through rate, produced two 500-unit and one 1,000-unit bestsellers, and ran an origin-direct programme with Kunming growers for Chinese New Year flowers that grew category revenue 200% year on year, well ahead of the platform average.',
            },
            {
              org: 'SF Express (Shenzhen) Co., Ltd.',
              role: 'Headquarters Management Trainee',
              period: 'Jun — Oct 2024',
              place: 'Shenzhen, China',
              detail:
                'Rotated through frontline pickup, delivery and warehousing; handled 1,000+ parcels across urban villages, CBD towers and university campuses before being allowed near the process design. Re-sequenced inbound–outbound flows and rebalanced courier zones, lifting peak-hour sortation throughput 18% and cutting average loading time per route 12%. The co-authored technical report on multi-temperature-zone routing won SF Logistics’ Outstanding Proposal Award.',
            },
            {
              org: 'Communist Youth League, Weicheng District Committee',
              role: 'Office Assistant',
              period: 'Jul — Sep 2022',
              place: 'Xianyang, Shaanxi',
              detail:
                'Handled incoming documents on the OA system and initiated partnerships with the district library, municipal cultural centre and district museum. Planned a Qixi Festival programme and the “Seven-Colour Holiday” summer initiative, running field-study activities for 100+ primary school students. Drafted meeting notices for the provincial Party congress briefing and the 100-day countdown ceremony of the 3rd Xianyang Municipal Games; produced 6 posters, 5 WeChat posts and 12 news pieces.',
            },
          ],
        },
        {
          label: 'Service & leadership',
          items: [
            {
              org: 'Student Science & Technology Innovation Association, NJAU',
              role: 'President',
              period: 'Mar 2023 — Jan 2024',
              place: 'Nanjing, China',
              detail:
                'Ran 10+ innovation and business-simulation events for 500+ participants, coordinating teams, judges and delivery across applied technology, logistics and entrepreneurship. Organised 5 student research-skills workshops and 3 invited expert talks.',
            },
            {
              org: 'Logistics Engineering Class 213, NJAU',
              role: 'Class Monitor',
              period: 'Sep 2021 — Jun 2025',
              place: 'Nanjing, China',
              detail:
                'Four years as the link between 30-odd classmates and the faculty — information collection, feedback, and organising group study for finals and the CET examinations.',
            },
            {
              org: 'Nanjing Jinling Library & campus reading initiatives',
              role: 'Volunteer',
              period: 'Sep 2022 — Jan 2025',
              place: 'Nanjing, China',
              detail:
                'Reading literacy, library cultural promotion and academic tutoring for 300+ primary, secondary and orphanage students. Named Outstanding Reading Recommendation Officer by NJAU.',
            },
            {
              org: 'Badminton Association, NJAU',
              role: 'Vice President',
              period: '2022 — 2024',
              place: 'Nanjing, China',
              detail: 'Training sessions, inter-college fixtures and equipment logistics.',
            },
          ],
        },
      ],
    },

    awards: {
      heading: 'Honours & Awards',
      groups: [
        {
          label: 'Scholarships',
          items: [
            'First-Class Scholarship (top 5%), Nanjing Agricultural University — 2024',
            'Second-Class Scholarship (top 15%), Nanjing Agricultural University — 2023',
            'Individual Scholarship for Sci-tech Innovation (top 5%), NJAU — 2023',
            'Individual Scholarship for Social Practice (top 5%), NJAU — 2023',
            'Individual Scholarship for Sports (top 5%), NJAU — 2023',
          ],
        },
        {
          label: 'Competitions',
          items: [
            'Gold Award, College Students Innovation and Entrepreneurship Training Program (provincial) — 2024',
            'Bronze Award, College Students Innovation and Entrepreneurship Training Program (provincial) — 2024',
            'First Prize, The Challenge Cup, College of Information Management — 2024',
            'Outstanding Paper Award, University Innovation Competition (kiwifruit cold-chain hub location) — 2024',
            'Second Prize, Provincial Environmental Knowledge Competition — 2023',
            'Second Prize, Provincial Enterprise Competition Simulation Contest — 2022',
            'Outstanding Student, University of Aberdeen Summer Camp — 2023',
          ],
        },
        {
          label: 'Athletics',
          items: [
            '3rd place, Men’s 4×100 m medley relay, 20th Jiangsu Provincial Games — 2022',
            'First Prize, Men’s 100 m breaststroke, 51st NJAU Sports Competition — 2023',
          ],
        },
      ],
    },

    skills: {
      heading: 'Toolkit',
      groups: [
        {
          label: 'Solvers & modelling',
          items: ['Gurobi', 'CPLEX', 'LINGO'],
        },
        {
          label: 'Languages',
          items: ['Python', 'MATLAB', 'SQL Server'],
        },
        {
          label: 'Statistics',
          items: ['SPSS'],
        },
        {
          label: 'Languages',
          items: [
            'Chinese (native)',
            'English — IELTS 6.5; master’s degree completed entirely in English',
            'CET-6',
          ],
        },
      ],
    },

    candidCaption:
      'Tencent Academy, Shenzhen — during the Tencent Ads industry operations internship, 2025.',

    beyond: {
      heading: 'Away from the desk',
      body:
        'Competitive swimmer — breaststroke and medley relay, third place in the 4×100 m medley at the 20th Jiangsu Provincial Games. I hold two national vocational qualifications in the sport, including Level-5 Social Sports Instructor, and have coached swimming part-time in English. Also Vice President of the NJAU Badminton Association, and a reader with a weakness for long-form nonfiction. I still swim most mornings; it is the only part of the day with no branching decisions in it.',
    },

    contact: {
      heading: 'Contact',
      body:
        'The fastest way to reach me is email. I am happy to send preprints, benchmark instances or code for any of the manuscripts above.',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      cvLabel: 'Download CV (PDF)',
      scholarLabel: 'Google Scholar',
      orcidLabel: 'ORCID',
      linkedinLabel: 'LinkedIn',
    },

    footer: {
      built: 'Built by hand. No template.',
      updated: (d) => `Last updated ${d}`,
      rights: (y) => `© ${y} Yijian Lu`,
    },
  },

  // -------------------------------------------------------------------------

  zh: {
    lang: 'zh',
    htmlLang: 'zh-Hans',
    dir: '卢一健',
    altHref: (v) => `/${v}/`,
    altLabel: 'EN',
    altTitle: '切换到英文',

    meta: {
      title: '卢一健 — 离散优化与交通系统',
      description:
        '卢一健，香港大学工业工程与物流管理硕士（MSc(Eng)），研究方向为交通与运作规划中大规模离散优化问题的精确算法与混合算法。',
    },

    name: '卢一健',
    nameAlt: 'Yijian Lu',
    role: '工业工程与物流管理 硕士（MSc(Eng)）',
    affiliation: '香港大学',
    location: '中国香港',
    tagline: '面向大规模离散优化的精确算法与混合算法。',
    seeking: '正在寻找 2027 年入学的博士机会',

    nav: {
      about: '关于',
      research: '研究方向',
      publications: '论文发表',
      education: '教育背景',
      experience: '实践经历',
      awards: '荣誉奖励',
      contact: '联系方式',
      cv: '完整简历',
    },

    about: {
      heading: '关于',
      lead:
        '我做大规模离散优化的精确算法与混合算法——主要是 Benders 分解、分支定价与分支切割，应用于交通与运作规划问题。',
      body: [
        '我的研究大多从同一个问题出发：一个问题的子结构究竟能被严格证明出什么性质，而这个证明又能为求解器省下多少工作量。分配子问题中的一条占优性质，可以变成一个永不丢弃最优解的解码器；一个走廊状态的压缩论证，可以让分支切割树小上一个量级；一个经容差修正的对偶界，可以把稳定化定价的"近路"变成真正能据以终止节点的证书。',
        '应用场景换过不少——中国–东盟走廊的多式联运集装箱网络、重载无人机编队的应急疏运、香港公交走廊上的公交–无人机末端配送、碳约束下的装配式建筑调度、电力系统机组组合——但方法论的主线始终没有变。',
        '我将于 2026 年 11 月完成香港大学的硕士学业，正在寻找 2027 年入学的博士机会。来香港之前，我在南京农业大学读物流工程；本科期间在顺丰速运做过一个夏天——先在城中村和写字楼里送了一千多个包裹，之后才被允许去重构分拣作业流程。',
      ],
    },

    research: {
      heading: '研究方向',
      intro: '我的工作大致沿三条线索展开，下面按投入时间由多到少排列。',
      themes: [
        {
          n: '01',
          title: '带证书的分解方法',
          body:
            'Benders 与 Dantzig–Wolfe 分解，其中真正有意思的不是界本身，而是"你有资格从这个界推出什么结论"。自适应割调度、应对 MPEC 退化的 z-松弛桥接、容差感知的节点定价。',
        },
        {
          n: '02',
          title: '利用结构性质的数学启发式',
          body:
            '保占优解码器、LP 松弛优先级学习、走廊状态压缩、瓶颈固定–再优化。这类启发式的每一步移动都由模型的某条性质来支撑，而不是靠调参调出来的。',
        },
        {
          n: '03',
          title: '同步约束下的路径与调度',
          body:
            '那些必须"碰上"的载具：单机运力不足因而必须协同起吊的无人机编队、交给按公开时刻表运行的公交车的包裹、绑定在不可复用回收时隙上的起降。',
        },
      ],
      keywords: [
        '混合整数规划',
        'Benders 分解',
        '分支定价',
        '分支切割',
        '随机规划',
        'MPEC / 双层优化',
        '数学启发式',
        '学习引导搜索',
        '车辆路径问题',
        '设施选址',
        '项目调度',
        '机组组合',
      ],
    },

    publications: {
      heading: '论文发表',
      publishedHeading: '已发表（同行评审）',
      workingHeading: '在投工作论文',
      workingNote:
        '以下为在投稿件，状态截至 2026 年 9 月。如需预印本，欢迎邮件索取。',
      resultLabel: '主要结果',
      corresponding: '通讯作者',
      statusLabels: {
        published: '已发表',
        revision: '返修中',
        review: '在审中',
      },
      doiLabel: 'DOI',
      published: PUBLISHED,
      working: WORKING,
      count: (n) => `共 ${n} 篇`,
    },

    education: {
      heading: '教育背景',
      items: [
        {
          school: '香港大学',
          note: '2026 QS 世界大学排名第 11 位',
          degree: '工业工程与物流管理 硕士 MSc(Eng)',
          period: '2025 年 9 月 — 2026 年 11 月',
          place: '中国香港',
          detail:
            '预计获优异成绩（Distinction）。机器人与智能系统前沿（A−）· 数字企业与电子商务（A−）· 数据与系统工程前沿（B+）· 机器学习及其应用（B+）',
        },
        {
          school: '南京农业大学',
          note: '211 工程 · 双一流',
          degree: '物流工程 工学学士',
          period: '2021 年 9 月 — 2025 年 6 月',
          place: '中国南京',
          detail:
            '平均分 88/100。物流装备（96）· 配送中心规划与设计（94）· 运筹学 I（91）· 运筹学 II（92）· 最优化理论与计算方法（91）· 概率论与数理统计（91）',
        },
      ],
    },

    experience: {
      heading: '实践经历',
      note:
        '四段实习，分别在广告运营、电商采销、快递物流与公共事务。行业各不相同，但每一次做的事其实都一样：找出那个真正起作用的约束。',
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
              detail:
                '系统性开展客户账户诊断，月均深度分析 50 余个重点客户 Case，将反复出现的问题收敛为三类明确模式——拿量不足、超成本、有效率低，并为每一类在我撰写的运营解决方案 SOP 中给出可执行的应对动作。基于历史数据与标杆案例构建"问题—方案—增量"转化路径，其中山东头部客户的落地贡献日耗增量 5 万元以上。',
              detail2:
                '行渠协同方面，主导设计《基建诊断 SOP》，对标广告 3.0 要求将账户基建达标率提升 20%。与渠道经理协同攻坚 Q2 口腔赛道 22 家重点中腰部客户，拿量成本降低 5%、撬动比提升 10%。沉淀《行渠重点客户有效率提升》方案——一方人群数据上传、二方人群挖包、leveltag 配置，以及分人群、分版位出价——推动 6 月 MTD 消耗提升 15%、有效率提升 30%。',
            },
            {
              org: '京东世纪贸易（北京）有限公司',
              unit: '京东零售',
              role: '总部实习生 · 采销',
              period: '2024 年 11 月 — 2025 年 4 月',
              place: '中国北京',
              detail:
                '为全国花卉绿植品类的经营结果负责。结合区域特性与品类优势持续招商与新商孵化，与 12 家行业头部供应商建联并达成深度合作，引入 28 种高潜苗木品种。',
              detail2:
                '从 0 到 1 搭建品类数据体系——日报、周报、实时异动、黄金眼与 EASYBI，并以此驱动品类单量增长 30%。农资园艺类目上线 SPU 238 个，动销率 96.3%，打造 2 个 500 单品与 1 个 1000 单品；年货节期间引入昆明源头年宵花商家、开展产地直发专项，使年宵花类目销售额同比增长 200%，显著高于全国大盘。',
            },
            {
              org: '顺丰速运（深圳）有限公司',
              role: '总部管理培训生',
              period: '2024 年 6 月 — 10 月',
              place: '中国深圳',
              detail:
                '轮岗覆盖前端收派与仓储环节，亲自处理 1,000 余件包裹，走遍城中村、CBD 写字楼与高校校园，先把快递员的日常 SOP 与末端约束跑熟，之后才被允许碰流程设计。通过重排进出库流序、重新平衡快递员责任区，将高峰时段分拣吞吐量提升 18%，单条路线平均装载时间缩短 12%。合作撰写的多温区路径优化技术报告获顺丰物流「优秀方案奖」。',
            },
            {
              org: '共青团咸阳市渭城区委员会',
              role: '团区委办公室助理',
              period: '2022 年 7 月 — 9 月',
              place: '中国陕西 · 咸阳',
              detail:
                '负责 OA 办公系统收文与文档整理，主动建联并达成与区图书馆、市文化馆、区博物馆的合作。策划七夕节婚恋活动与「七彩假期」暑期项目，组织小学生实地学习活动，覆盖 100 余人次；撰写省第十四次党代会宣讲会会议通知及「咸阳市第三届运动会倒计时一百天启动仪式」活动通知；制作海报 6 份、微信公众平台发文 5 篇、新闻稿 12 篇。',
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
              detail:
                '主导 10 余场创新与商业模拟赛事，覆盖 500 余名学生参与者，统筹参赛团队、评委与赛事执行，内容横跨应用技术、物流与创业方向；开展学生科技创新辅导讲座 5 场，邀请专家专题演讲 3 次。',
            },
            {
              org: '南京农业大学物流工程 213 班',
              role: '班长',
              period: '2021 年 9 月 — 2025 年 6 月',
              place: '中国南京',
              detail:
                '四年间担任班级与老师、辅导员之间的连接桥梁——完成每一次信息采集、收集同学反馈，组织班级团建、期末复习与四六级备考。',
            },
            {
              org: '南京金陵图书馆与校园阅读推广项目',
              role: '志愿者',
              period: '2022 年 9 月 — 2025 年 1 月',
              place: '中国南京',
              detail:
                '参与阅读素养推广、图书馆文化建设与学业辅导，服务 300 余名小学、中学及孤儿院学生。获南京农业大学「优秀阅读推荐官」称号。',
            },
            {
              org: '南京农业大学羽毛球协会',
              role: '副会长',
              period: '2022 — 2024',
              place: '中国南京',
              detail: '负责日常训练组织、院际对抗赛与器材统筹。',
            },
          ],
        },
      ],
    },

    awards: {
      heading: '荣誉与奖励',
      groups: [
        {
          label: '奖学金',
          items: [
            '一等奖学金（前 5%），南京农业大学 — 2024',
            '二等奖学金（前 15%），南京农业大学 — 2023',
            '科技创新单项奖学金（前 5%），南京农业大学 — 2023',
            '社会实践单项奖学金（前 5%），南京农业大学 — 2023',
            '体育单项奖学金（前 5%），南京农业大学 — 2023',
          ],
        },
        {
          label: '竞赛',
          items: [
            '大学生创新创业训练计划 金奖（省级）— 2024',
            '大学生创新创业训练计划 铜奖（省级）— 2024',
            '"挑战杯"信息管理学院赛区 一等奖 — 2024',
            '校创新竞赛 优秀论文奖（猕猴桃冷链枢纽选址）— 2024',
            '江苏省大学生环保知识竞赛 二等奖 — 2023',
            '省级企业竞争模拟大赛 二等奖 — 2022',
            '英国阿伯丁大学暑期学校 优秀学员 — 2023',
          ],
        },
        {
          label: '体育',
          items: [
            '江苏省第二十届运动会 男子 4×100 米混合泳接力 第三名 — 2022',
            '南京农业大学第五十一届运动会 男子 100 米蛙泳 第一名 — 2023',
          ],
        },
      ],
    },

    skills: {
      heading: '工具箱',
      groups: [
        { label: '求解器与建模', items: ['Gurobi', 'CPLEX', 'LINGO'] },
        { label: '编程语言', items: ['Python', 'MATLAB', 'SQL Server'] },
        { label: '统计分析', items: ['SPSS'] },
        {
          label: '语言与证书',
          items: [
            '中文（母语）',
            '英文 — 雅思 6.5；硕士阶段全英文完成',
            'CET-6',
          ],
        },
      ],
    },

    candidCaption: '深圳腾讯学堂 —— 2025 年腾讯广告行业运营实习期间。',

    beyond: {
      heading: '书桌之外',
      body:
        '竞技游泳运动员，主项蛙泳与混合泳接力，曾获江苏省第二十届运动会男子 4×100 米混合泳接力第三名。持两项游泳相关国家职业资格证书（含社会体育指导员五级），并做过全英文授课的兼职游泳教练。曾任南京农业大学羽毛球协会副会长；平时爱读非虚构类长篇。现在依然保持早泳的习惯——这大概是一天里唯一不需要做分支决策的时段。',
    },

    contact: {
      heading: '联系方式',
      body:
        '邮件是联系我最快的方式。上述任何一篇稿件的预印本、基准实例或代码，都欢迎来信索取。',
      emailLabel: '邮箱',
      githubLabel: 'GitHub',
      cvLabel: '下载简历（PDF）',
      scholarLabel: 'Google Scholar',
      orcidLabel: 'ORCID',
      linkedinLabel: 'LinkedIn',
    },

    footer: {
      built: '手写代码，未套用模板。',
      updated: (d) => `最后更新于 ${d}`,
      rights: (y) => `© ${y} 卢一健`,
    },
  },
};
