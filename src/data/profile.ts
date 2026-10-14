// サイト全体で使う基本情報。ページの文言はここを書き換えれば反映される。

export const profile = {
  nameJa: '桜井 惇',
  nameEn: 'Sakurai Atsushi',
  role: 'データサイエンティスト',
  hometown: '茨城県',
  // トップページの一言紹介
  tagline: '材料研究からデータサイエンスへ。研究の傍ら、Web アプリや分析ツールを作っています。',
  motto: {
    lines: ['Live as if you were to die tomorrow.', 'Learn as if you were to live forever.'],
    author: 'Mahatma Gandhi',
  },
  photo: '/images/profile_photo.jpg',
};

export type Link = { label: string; href: string };

export const accounts: Link[] = [
  { label: 'GitHub', href: 'https://github.com/Atsushisaku' },
  { label: 'X', href: 'https://x.com/atsushi_saku' },
  { label: 'note', href: 'https://note.com/atsushisaku' },
  { label: 'Instagram', href: 'https://www.instagram.com/atsushisaku' },
];
