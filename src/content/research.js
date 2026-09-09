// ---------------------------------------------------------------------------
// RESEARCH  —  /research/  and  /zh/research/
// Add, remove or reorder entries in `themes`. `keywords` renders as a list.
// ---------------------------------------------------------------------------

export const research = {
  slug: 'research',
  en: {
    navLabel: 'Research',
    title: 'Research',
    metaTitle: 'Research — Yijian Lu',
    metaDescription:
      'Research interests of Yijian Lu: decomposition methods, matheuristics, and routing and scheduling under synchronization constraints.',

    intro: null,

    themes: [
      {
        n: '01',
        title: 'Decomposition methods',
        body:
          'Benders decomposition and Dantzig–Wolfe branch-and-price for large mixed-integer programs, including adaptive cut scheduling, cut selection under degeneracy, and node-pricing bounds.',
      },
      {
        n: '02',
        title: 'Matheuristics',
        body:
          'Hybrid exact–heuristic methods for instances beyond direct solver reach: dominance-preserving decoders, LP-relaxation priority learning, and bottleneck fix-and-optimize.',
      },
      {
        n: '03',
        title: 'Routing and scheduling under synchronization',
        body:
          'Vehicle routing and scheduling problems in which vehicles or modes must meet, including heavy-lift drone coalitions, fixed-timetable transfers, and non-reusable service slots.',
      },
    ],

    keywordsLabel: 'Keywords',
    keywords: [
      'Mixed-integer programming',
      'Benders decomposition',
      'Branch-and-price',
      'Branch-and-cut',
      'Stochastic programming',
      'MPEC / bilevel optimization',
      'Matheuristics',
      'Vehicle routing',
      'Facility location',
      'Project scheduling',
      'Unit commitment',
    ],

    software: {
      label: 'Software and tools',
      groups: [
        { label: 'Solvers', items: ['Gurobi', 'CPLEX', 'LINGO'] },
        { label: 'Languages', items: ['Python', 'MATLAB', 'SQL Server'] },
        { label: 'Statistics', items: ['SPSS'] },
      ],
    },
  },

  zh: {
    navLabel: '研究方向',
    title: '研究方向',
    metaTitle: '研究方向 — 卢一健',
    metaDescription:
      '卢一健的研究兴趣：分解方法、数学启发式，以及同步约束下的路径与调度问题。',

    intro: null,

    themes: [
      {
        n: '01',
        title: '分解方法',
        body:
          '面向大规模混合整数规划的 Benders 分解与 Dantzig–Wolfe 分支定价，涵盖自适应割调度、退化条件下的割选择以及节点定价界。',
      },
      {
        n: '02',
        title: '数学启发式',
        body:
          '针对求解器难以直接处理的规模，构建精确与启发式相结合的混合方法：保占优解码器、LP 松弛优先级学习、瓶颈固定–再优化。',
      },
      {
        n: '03',
        title: '同步约束下的路径与调度',
        body:
          '研究载具或运输方式之间必须相互衔接的路径与调度问题，包括重载无人机编队、固定时刻表下的换装衔接，以及不可复用的服务时隙。',
      },
    ],

    keywordsLabel: '关键词',
    keywords: [
      '混合整数规划',
      'Benders 分解',
      '分支定价',
      '分支切割',
      '随机规划',
      'MPEC / 双层优化',
      '数学启发式',
      '车辆路径问题',
      '设施选址',
      '项目调度',
      '机组组合',
    ],

    software: {
      label: '软件与工具',
      groups: [
        { label: '求解器', items: ['Gurobi', 'CPLEX', 'LINGO'] },
        { label: '编程语言', items: ['Python', 'MATLAB', 'SQL Server'] },
        { label: '统计分析', items: ['SPSS'] },
      ],
    },
  },
};
