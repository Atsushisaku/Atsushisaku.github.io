// サイト全体で使う基本情報。ページの文言はここを書き換えれば反映される。
import photo from '../assets/profile.jpg';

export const profile = {
  nameJa: '桜井 惇',
  nameEn: 'Sakurai Atsushi',
  // トップの名前の上に出す短いラベル（肩書きではなく、取り組んでいる分野）
  focus: 'Web / AI / データ分析',
  affiliation: '産業技術総合研究所 材料基盤研究部門',
  hometown: '茨城県',
  // トップページの一言紹介
  tagline: '産総研で材料研究とデータ活用に携わりながら、Web アプリやツールを個人で開発しています。',
  motto: {
    lines: ['Live as if you were to die tomorrow.', 'Learn as if you were to live forever.'],
    author: 'Mahatma Gandhi',
  },
  photo,
};

export type Link = { label: string; href: string };

export const accounts: Link[] = [
  { label: 'GitHub', href: 'https://github.com/Atsushisaku' },
  { label: 'X', href: 'https://x.com/atsushi_saku' },
  { label: 'note', href: 'https://note.com/atsushisaku' },
  { label: 'Instagram', href: 'https://www.instagram.com/atsushisaku' },
];
