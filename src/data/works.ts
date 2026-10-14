// 開発物。上から順に表示する。featured: true のものはトップページにも出る。

export type Work = {
  name: string;
  summary: string;
  tech: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

export const works: Work[] = [
  {
    name: 'Midfoot',
    summary:
      'スクワットとデッドリフトの姿勢を可視化するツール。上体の傾きが技術ではなく体格（各部位の長さの比）で決まることを、指導の場で図で示せる。',
    tech: ['TypeScript'],
    repo: 'https://github.com/Atsushisaku/Midfoot',
    demo: 'https://atsushisaku.github.io/Midfoot/',
    featured: true,
  },
  {
    name: 'folder-rag-ja',
    summary:
      'フォルダ内の文書（Markdown / PDF / Word）をローカルの Ollama で検索して回答する、日本語向けの RAG チャット。',
    tech: ['Python', 'Streamlit', 'Ollama'],
    repo: 'https://github.com/Atsushisaku/folder-rag-ja',
    featured: true,
  },
  {
    name: 'All-in Flip',
    summary:
      'テキサスホールデムの「オールインフリップ」で勝者と罰ゲームの対象を決めるアプリ。ルーレットの代わりに使える。',
    tech: ['TypeScript'],
    repo: 'https://github.com/Atsushisaku/AllInFlip',
    demo: 'https://all-in-flip.vercel.app',
    featured: true,
  },
  {
    name: 'Keylog',
    summary:
      '物理鍵の貸出と返却を、FeliCa の IC カードで利用者を特定しながら記録するデスクトップの台帳アプリ。',
    tech: ['Python', 'SQLite', 'FeliCa'],
    repo: 'https://github.com/Atsushisaku/Keylog',
  },
];
