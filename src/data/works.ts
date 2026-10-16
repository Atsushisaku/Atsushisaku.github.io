// 開発物。上から順に表示する。featured: true のものはトップページにも出る。
// image は src/assets/works/ に置いたスクリーンショット。無ければ名前入りの表紙を自動で出す。
import type { ImageMetadata } from 'astro';
import lablateImg from '../assets/works/lablate.png';
import midfootImg from '../assets/works/midfoot.png';
import allinflipImg from '../assets/works/allinflip.png';

export type Work = {
  name: string;
  tagline?: string;
  summary: string;
  points?: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  // リポジトリを公開していない理由など、リンクの代わりに出す注記
  note?: string;
  featured?: boolean;
  image?: ImageMetadata;
};

export const works: Work[] = [
  {
    name: 'Lablate',
    image: lablateImg,
    tagline: '実験ノートが、そのまま報告書になる',
    summary:
      '文章・図表・グラフ・構造式を 1 ページにまとめる、研究・実験の記録アプリ\n記録から報告・共有までを一か所で扱える\n要件定義から設計・実装・本番公開まで担当、運用中',
    points: [
      'ブロックノート形式でドキュメント・表計算・グラフを統合',
      'ユーザー認証つきの本番アプリとして公開・運用',
      'データは共通フォーマットでローカルに保存\nLLM が扱いやすい構造にして、AI エージェントとの連携を見据えた設計',
    ],
    tech: ['TypeScript', 'Next.js', 'React 19', 'Vercel'],
    demo: 'https://lablate.com',
    note: 'ソースコードは非公開',
    featured: true,
  },
  {
    name: 'Midfoot',
    image: midfootImg,
    tagline: 'スクワット・デッドリフトの姿勢可視化',
    summary:
      '上体の傾きなどの姿勢が、技術ではなく体格と担ぎ位置で決まることを明示\nトレーニング指導者向けのツール',
    points: [
      'GitHub Actions でテストを通してから GitHub Pages へ自動デプロイ',
      '外部依存を減らし、オフラインでも動く単一 HTML（種目ごとに約 30KB）として配布',
    ],
    tech: ['TypeScript', 'Vite', 'SVG'],
    repo: 'https://github.com/Atsushisaku/Midfoot',
    demo: 'https://atsushisaku.github.io/Midfoot/',
    featured: true,
  },
  {
    name: 'folder-rag-ja',
    tagline: '社内の機密文書をチャットアプリ化',
    summary:
      'フォルダ内の文書（md / pdf / docx）をローカルの Ollama で検索・回答\n日本語向けの RAG チャット',
    tech: ['Python', 'Streamlit', 'Ollama'],
    repo: 'https://github.com/Atsushisaku/folder-rag-ja',
  },
  {
    name: 'All-in Flip',
    image: allinflipImg,
    tagline: 'オールインフリップアプリ',
    summary:
      'テキサスホールデムの「オールインフリップ」\n勝者と罰ゲームの対象などを決められる',
    tech: ['TypeScript'],
    repo: 'https://github.com/Atsushisaku/AllInFlip',
    demo: 'https://all-in-flip.vercel.app',
    featured: true,
  },
  {
    name: 'Keylog',
    tagline: '鍵管理記録をPCで',
    summary:
      '物理鍵の貸出と返却を記録するデスクトップの台帳アプリ\nFeliCa の IC カードで利用者を特定',
    tech: ['Python', 'SQLite', 'FeliCa'],
    repo: 'https://github.com/Atsushisaku/Keylog',
  },
];
