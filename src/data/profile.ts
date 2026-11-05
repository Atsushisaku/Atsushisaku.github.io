// サイト全体で使う基本情報。ページの文言はここを書き換えれば反映される。
import { siGithub, siInstagram, siNote, siX, type SimpleIcon } from 'simple-icons';
import photo from '../assets/profile.jpg';

export const profile = {
  nameJa: '桜井 惇',
  nameEn: 'Sakurai Atsushi',
  // トップの名前の上に出す短いラベル（肩書きではなく、取り組んでいる分野）
  focus: 'Web / AI / データ分析',
  affiliation: '三和システム株式会社',
  hometown: '茨城県',
  // キャッチコピー（性格・ポリシー）。いまはトップに出さず、代わりに motto（信条）を出している
  catchcopy: '面白そうなほうへ',
  // 何をしている人かの説明文。About のリード文と、SNS 共有・検索結果の説明に使う
  description: '材料研究のデータ活用に携わりながら、Web アプリやツールを個人で開発',
  motto: {
    lines: ['Live as if you were to die tomorrow.', 'Learn as if you were to live forever.'],
    author: 'Mahatma Gandhi',
  },
  photo,
};

// icon はトップの「Find me on」に出すロゴ（Simple Icons）
export type Link = { label: string; href: string; icon: SimpleIcon };

export const accounts: Link[] = [
  { label: 'GitHub', href: 'https://github.com/Atsushisaku', icon: siGithub },
  { label: 'X', href: 'https://x.com/atsushi_saku', icon: siX },
  { label: 'note', href: 'https://note.com/atsushisaku', icon: siNote },
  { label: 'Instagram', href: 'https://www.instagram.com/atsushisaku', icon: siInstagram },
];
