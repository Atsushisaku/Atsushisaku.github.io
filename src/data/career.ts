// 経歴。新しいものを末尾に足す。end を省略すると「現在」と表示される。

export type CareerItem = {
  start: string; // YYYY/MM
  end?: string;
  title: string;
  detail?: string;
};

export const career: CareerItem[] = [
  { start: '2012/04', end: '2015/03', title: '茨城県立下妻第一高等学校' },
  { start: '2015/04', end: '2019/03', title: '明治大学 理工学部 応用化学科' },
  { start: '2019/03', end: '2021/01', title: 'ポーカー専業（NLHE）' },
  { start: '2021/01', end: '2023/12', title: '産業技術総合研究所 ナノ材料研究部門' },
  { start: '2024/01', title: '産業技術総合研究所 人工知能センター' },
];

// スキル。空のグループは表示しない。
export const skills: { group: string; items: string[] }[] = [
  { group: '言語', items: ['Python', 'TypeScript'] },
  { group: '分野', items: ['データ分析', '機械学習', 'Web アプリ開発'] },
];

export type Interest = { title: string; notes: string[]; link?: { label: string; href: string } };

export const interests: Interest[] = [
  {
    title: 'ウエイトトレーニング・パワーリフティング',
    notes: ['高校時代に野球の技術向上のためにトレーニングを開始', 'パワーリフティングの大会に出場'],
    link: { label: '大会成績', href: '/powerlifting/' },
  },
  {
    title: 'ポーカー',
    notes: ['ライブキャッシュの NLHE', '約 2 年間、専業で生計を立てていた'],
  },
  {
    title: '投資',
    notes: ['日本株・米国株', '暗号資産', 'トレード Bot の開発'],
  },
  {
    title: 'バイブコーディング',
    notes: ['Web アプリ開発', 'トレード Bot の開発'],
  },
  {
    title: 'スポーツ',
    notes: [
      'スポーツ全般が好き（採点競技はあまり好きではない）',
      '野球: 中学・高校で野球部、大学では理工系の硬式野球部に所属。MLB 観戦',
      'ボクシング観戦',
    ],
  },
];
