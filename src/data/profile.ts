// サイト全体で使う基本情報。ページの文言はここを書き換えれば反映される。
import { siGithub, siInstagram, siNote, siX, type SimpleIcon } from 'simple-icons';
import photo from '../assets/profile.jpg';

export const profile = {
  nameJa: '桜井 惇',
  nameEn: 'Sakurai Atsushi',
  // トップの名前の上に出す短いラベル（肩書きではなく、取り組んでいる分野）
  focus: 'Web / AI / データ分析',
  affiliation: '産業技術総合研究所\n材料基盤研究部門',
  hometown: '茨城県',
  // トップの名前の下に出すキャッチコピー（性格・ポリシー）
  catchcopy: '面白そうなら、まずやってみる',
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
