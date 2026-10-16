// 経歴。新しいものを末尾に足す。end を省略すると「現在」と表示される。

export type CareerItem = {
  start: string; // YYYY/MM
  end?: string;
  title: string;
  detail?: string;
  points?: string[];
};

export const career: CareerItem[] = [
  { 
    start: '2012/04', 
    end: '2015/03', 
    title: '茨城県立下妻第一高等学校', 
    detail: '野球部所属\nウエイトトレーニングを始める' 
  },
  { start: '2015/04', 
    end: '2019/03', 
    title: '明治大学 理工学部 応用化学科', 
    detail: '理工系硬式野球部所属\nポーカーを始める' },
  {
    start: '2019/03',
    end: '2021/01',
    title: 'ポーカープレイヤー',
    detail: 'NLHEライブキャッシュ中心\n主な拠点：ソウル・マニラ・ラスベガス',
  },
  {
    start: '2021/01',
    end: '2023/12',
    title: '産業技術総合研究所 ナノ材料研究部門',
    detail: 'ナノ材料を使った吸着剤・分離膜の探索と実用化の研究',
    // points: [
    //   '吸着剤の探索・造粒方法の開発、酸化グラフェンの吸着性能の探索',
    //   '分析データ処理の自動化（Excel VBA）、圧壊強度の予測モデル（Python）で研究を実装面から支援',
    // ],
  },
  {
    start: '2024/01',
    end: '2026/03',
    title: '産業技術総合研究所 人工知能センター',
    detail: '機械学習・最適化・マルチエージェントシミュレーションの社会実装に関する研究',
    // points: [
    //   'LiDAR で取得した人流データの処理・集計・分析',
    //   'Omniverse 上で人流データを再現し、人とロボット・車両の相互作用シミュレーションの基盤を整備',
    // ],
  },
  {
    start: '2026/04',
    title: '産業技術総合研究所 材料基盤研究部門',
    detail: 'ロボットとデータ技術を使った、材料研究の実験プロセスの高度化',
    // points: [
    //   'アーム型ロボットによる化学実験の自動化',
    //   '自動化した実験の記録を、ローカル LLM で MaiML 形式に標準化する仕組みを実証中',
    // ],
  },
];

// 業務の中で作ったツール・仕組み
export const achievements: { title: string; tech: string; points: string[] }[] = [
  {
    title: 'ローカル LLM による実験記録の標準化',
    tech: 'Ollama',
    points: ['同一ネットワーク上のローカル LLM を API での呼び出し', '実験記録を MaiML 形式へ構造化する仕組みを実装・検証中'],
  },
  {
    title: '薬品棚卸アプリ',
    tech: 'Python',
    points: ['電子天秤とバーコードリーダーを PC につないだ職場専用棚卸しアプリ'],
  },
  {
    title: '分析データ処理の自動化',
    tech: 'Excel VBA',
    points: ['ピーク検出と複数ファイル（csv/txt）の処理を自動化'],
  },
  {
    title: '購入申請フローの内製化',
    tech: 'SharePoint / Power Automate / Teams',
    points: ['申請の入力と一元管理を SharePoint リストで、承認の通知と後続の対応を Teams のワークフローで自動化'],
  },
  {
    title: '造粒体の圧壊強度の予測モデル',
    tech: 'Python',
    points: ['試験条件から圧壊強度を予測するモデル作成', '吸着材の実用化の検討を支援'],
  },
];

// スキル。空のグループは表示しない。
export const skills: { group: string; items: string[] }[] = [
  { group: '言語', items: ['Python', 'TypeScript / JavaScript', 'Excel VBA'] },
  { group: 'Web', items: ['Next.js', 'React', 'Vite', 'Vercel', 'GitHub Actions'] },
  { group: 'AI / LLM', items: ['Ollama（ローカル LLM）', 'LLM API 連携', 'Claude Code / Codex'] },
  { group: 'データ分析', items: ['予測モデル', 'データ処理・可視化', 'スクレイピング', '統計的検証'] },
  { group: 'その他', items: ['Git', 'Omniverse', 'アーム型ロボット', '3D モデリング', '化学分析機器（XRD, SEM-EDX, FT-IR 等）'] },
];

export const qualifications: { date: string; name: string }[] = [
  { date: '2025/08', name: '基本情報技術者' },
  { date: '2022/08', name: '統計検定 2 級' },
  { date: '2015/02', name: '普通自動車第一種免許' },
];

export type Interest = { title: string; notes: string[]; link?: { label: string; href: string } };

export const interests: Interest[] = [
  {
    title: '筋トレ・パワーリフティング',
    notes: ['高校時代に野球の技術向上のためにトレーニングを開始', 'パワーリフティング大会出場'],
    link: { label: '大会成績', href: '/powerlifting/' },
  },
  {
    title: 'ポーカー',
    notes: ['NLHEライブキャッシュ', '約 2 年間 専業生活'],
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
    title: '英会話',
    notes: ['海外の人との交流が好き', 'TOEICとか受けた方がいいのかもしれないが、受けていない'],
  },
  {
    title: '野球',
    notes: ['大学までプレー', '外野手（ライト多め）'],
  },
  {
    title: 'スポーツ観戦',
    notes: [
      'MLB',
      'ボクシング（タイトル戦）', 
      '陸上（国際大会）',
      'サッカー（ｗ杯）',  
    ],
  },
];
