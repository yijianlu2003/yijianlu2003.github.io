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
      'My methods are mixed-integer programming, Benders decomposition, Dantzig–Wolfe branch-and-price, branch-and-cut, and matheuristics. Application areas include multimodal container network design, emergency logistics, drone and truck–UAV routing, multi-project construction scheduling, and unit commitment.',
      'I am completing an MSc(Eng) in Industrial Engineering and Logistics Management at the University of Hong Kong, expected November 2026. I hold a BEng in Logistics Engineering from Nanjing Agricultural University.',
    ],

    // Use **bold** and ***bold italic*** for emphasis in these paragraphs.
    credo: [
      'I am a committed believer in **first principles**. I hold that every problem in operations research and optimization can be explained from **first principles**, and that is the goal I am working towards. I enjoy practice, and I enjoy still more treating **theory** as a **tool** for solving real problems — that, to me, is deeply appealing. I also remind myself often to keep an **“empty cup”**: to go on improving, and to go on learning from those in the field who are further along than I am. ***You only live once; doing something you love while you are young is, in itself, rather cool.***',
    ],

    highlights: [
      { label: 'Field', value: 'Operations research · Discrete optimization' },
      { label: 'Affiliation', value: 'The University of Hong Kong' },
      { label: 'Based in', value: 'Hong Kong SAR' },
      { label: 'Contact', value: 'yijianlu2003@gmail.com' },
    ],

    visitorsLabel: 'Visitors',
  },

  zh: {
    navLabel: '关于',
    title: '关于',
    metaTitle: '卢一健 — 离散优化与交通系统',
    metaDescription:
      '卢一健，香港大学工业工程与物流管理硕士（MSc(Eng)）。研究方向为交通与运作规划中大规模离散优化问题的精确算法与混合算法。',

    lead: '我的研究方向是大规模离散优化的精确算法与混合算法，应用于交通与运作规划问题。',

    body: [
      '所用方法包括混合整数规划、Benders 分解、Dantzig–Wolfe 分支定价、分支切割与数学启发式。应用领域涵盖多式联运集装箱网络设计、应急物流、无人机与卡车–无人机路径优化、多项目建筑调度以及电力系统机组组合。',
      '我正在香港大学攻读工业工程与物流管理硕士（MSc(Eng)），预计 2026 年 11 月毕业；本科毕业于南京农业大学物流工程专业，获工学学士学位。',
    ],

    // 用 **加粗**、***加粗斜体*** 标记这几段的强调。
    credo: [
      '我是**「第一性原理」**的忠实拥护者，我相信所有运筹优化问题都可以用**「第一性原理」**解释，这也是我追求的目标。我喜欢实践，更喜欢把**「理论」**当做**「工具」**，去解决现实问题，这对我而言是极具有吸引力的。同时我时常告诫自己保持**「空杯」**心态，不断提升自己，向行业内优秀的前辈学习。***人生只有一次，趁年轻做一点喜欢的事这本身就很酷。***',
    ],

    highlights: [
      { label: '研究领域', value: '运筹学 · 离散优化' },
      { label: '所属机构', value: '香港大学' },
      { label: '所在地', value: '中国香港' },
      { label: '联系邮箱', value: 'yijianlu2003@gmail.com' },
    ],

    visitorsLabel: '访客',
  },
};
