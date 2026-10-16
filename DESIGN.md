---
version: alpha
name: Atsushisaku Portfolio
description: 桜井 惇の個人サイト（経歴・開発物）のデザインシステム。Meta のコマースサイトの分析（design/DESIGN-meta.md）を下敷きに、白いキャンバス、スクリーンショットを主役にした大きな角丸カード、黒いピル型ボタンと輪郭線ボタンの組み合わせ、単一のアクセントとしてのコバルトブルーで構成する。ポートフォリオ用に、購入まわりの部品を除き、日本語の本文とダークモードを加えた。

colors:
  primary: "#0064e0"
  primary-deep: "#0457cb"
  on-primary: "#ffffff"
  ink-button: "#0a1317"
  on-ink-button: "#ffffff"
  canvas: "#ffffff"
  surface-soft: "#f1f4f7"
  ink-deep: "#0a1317"
  ink: "#1c1e21"
  charcoal: "#444950"
  steel: "#5d6c7b"
  stone: "#8595a4"
  hairline: "#ced0d4"
  hairline-soft: "#dee3e9"
  # ダークモード（Meta の分析には無いので独自に定義）
  primary-dark: "#4d9bff"
  ink-button-dark: "#f1f4f7"
  on-ink-button-dark: "#0a1317"
  canvas-dark: "#0a1317"
  surface-soft-dark: "#141d23"
  ink-deep-dark: "#f1f4f7"
  ink-dark: "#dfe5eb"
  steel-dark: "#9aa8b6"
  hairline-dark: "#33414b"
  hairline-soft-dark: "#222d34"
  # 大会の順位バッジ（メダルの色。ライト・ダーク共通）
  medal-gold: "#e0b43a"
  on-medal-gold: "#2b2000"
  medal-silver: "#c5ccd3"
  on-medal-silver: "#1c1e21"
  medal-bronze: "#c98b5b"
  on-medal-bronze: "#2a1606"
  medal-mvp: "#0a1317"
  on-medal-mvp: "#e0b43a"

typography:
  hero-display:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 64px
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.17
    letterSpacing: -0.02em
  heading-lg:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 36px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: -0.01em
  heading-md:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 28px
    fontWeight: 300
    lineHeight: 1.36
  heading-sm:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.33
  subtitle-lg:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.6
  subtitle-md:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.8
  body-md:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.8
  body-md-bold:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.8
  body-sm:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
  body-sm-bold:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.7
  caption:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  caption-bold:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.5
  button-md:
    fontFamily: Inter Variable, Noto Sans JP Variable
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: -0.01em

rounded:
  sm: 4px
  lg: 8px
  xl: 16px
  xxl: 24px
  xxxl: 32px
  full: 100px
  circle: 9999px

spacing:
  xxs: 4px
  xs: 8px
  md: 12px
  base: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section-sm: 48px
  section: 64px
  section-lg: 80px
  hero: 120px
  gutter: 16px
  container: 1200px

components:
  button-primary:
    backgroundColor: "{colors.ink-button}"
    textColor: "{colors.on-ink-button}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "14px 30px"
  button-primary-dark:
    backgroundColor: "{colors.ink-button-dark}"
    textColor: "{colors.on-ink-button-dark}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "10px 22px"
  link-accent:
    textColor: "{colors.primary}"
    typography: "{typography.body-md-bold}"
  link-accent-pressed:
    textColor: "{colors.primary-deep}"
  link-accent-dark:
    textColor: "{colors.primary-dark}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm-bold}"
    height: 64px
  nav-pill-active:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-sm-bold}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  hero-portrait:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.xxxl}"
  card-work:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxl}"
  card-work-media:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.xxl}"
  card-work-feature:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink-deep}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.xxxl}"
  card-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-promo-strip:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.xxxl}"
    padding: "{spacing.section}"
  chip:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.charcoal}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  badge-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-gold:
    backgroundColor: "{colors.medal-gold}"
    textColor: "{colors.on-medal-gold}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-silver:
    backgroundColor: "{colors.medal-silver}"
    textColor: "{colors.on-medal-silver}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-bronze:
    backgroundColor: "{colors.medal-bronze}"
    textColor: "{colors.on-medal-bronze}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-mvp:
    backgroundColor: "{colors.medal-mvp}"
    textColor: "{colors.on-medal-mvp}"
    typography: "{typography.caption-bold}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  comment-bubble:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xs} {spacing.base}"
  comment-avatar:
    backgroundColor: "{colors.surface-soft}"
    rounded: "{rounded.circle}"
    size: 32px
  eyebrow:
    textColor: "{colors.primary}"
    typography: "{typography.body-md-bold}"
  eyebrow-card:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm-bold}"
  icon-button:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.circle}"
    size: 56px
  section-heading:
    textColor: "{colors.ink-deep}"
    typography: "{typography.display-lg}"
  stat-panel:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.heading-lg}"
    rounded: "{rounded.xxl}"
    padding: "{spacing.xl}"
  spec-table:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  caption-muted:
    textColor: "{colors.steel}"
    typography: "{typography.caption}"
  text-quiet:
    textColor: "{colors.stone}"
    typography: "{typography.caption}"
  footer-region:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  divider-soft:
    backgroundColor: "{colors.hairline-soft}"
    height: 1px
  divider-dark:
    backgroundColor: "{colors.hairline-dark}"
    height: 1px
  divider-soft-dark:
    backgroundColor: "{colors.hairline-soft-dark}"
    height: 1px
  surface-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.ink-dark}"
  surface-dark-raised:
    backgroundColor: "{colors.surface-soft-dark}"
    textColor: "{colors.ink-deep-dark}"
  surface-dark-muted:
    textColor: "{colors.steel-dark}"
---

## Overview

経歴と開発物を見せるための個人サイト。読み手は採用担当・同業のエンジニア・知人で、短時間で「何を作れる人か」が伝わることを最優先にする。

下敷きは Meta のコマースサイトの分析（`design/DESIGN-meta.md`）。そこから次の性格を引き継ぐ。

- **画像が主役**: 白いキャンバスに、開発物のスクリーンショットを大きな角丸（32px）で置く。装飾ではなく実物の画面で語る
- **落ち着いた見出し**: 太すぎない 500 の見出しと、300 の軽い小見出しで 3 段のリズムを作る
- **2 つのボタン**: 黒いピル型の主ボタンと、2px の輪郭線の副ボタンを並べる
- **平らな面**: 影はほぼ使わず、境界は細い線と面の色の差で示す

Meta から変えた点は「Do's and Don'ts」の末尾にまとめる。

## Colors

- **Cobalt (`primary` #0064e0)**: サイト唯一のアクセント。リンク、見出し上の小さなラベル（eyebrow）、強調したい数値にだけ使う。面を塗りつぶす用途には使わない
- **Ink Button (`ink-button` #0a1317)**: 主ボタンの地色
- **Canvas (`canvas` #ffffff) / Surface Soft (`surface-soft` #f1f4f7)**: ページの地と、画像の下地・特集カード・数値パネルの面
- **Ink Deep / Ink / Charcoal / Steel / Stone**: 文字の 5 段階。見出しは ink-deep、本文は ink、補足は steel、さらに弱いものは stone
- **Hairline / Hairline Soft**: 区切り線と枠線。カードの枠は 1px の hairline-soft、表や強い区切りは hairline。DESIGN.md の部品には枠線の項目が無いため、`divider` / `divider-soft` として 1px の面で定義している

- **Medal (`medal-*`)**: 大会の順位バッジにだけ使う金・銀・銅と、特別賞用の黒金。コバルトとは別の系統なので、ほかの部品には使わない

ダークモードは `-dark` の付いたトークンに置き換える。地は Meta の ink-deep（#0a1317）をそのまま使い、コバルトは暗い地でも読めるよう `primary-dark` に明るくする。

## Typography

Meta の Optimistic VF は入手できないため、英数字を **Inter**、日本語を **Noto Sans JP** で組む（いずれもサイトに同梱）。

- 見出しの段: `hero-display`（64px）→ `display-lg`（48px）→ `heading-lg`（36px）→ `heading-md`（28px・300）→ `heading-sm`（24px）
- 本文は `body-md`（16px）。**行間は 1.8**。Meta は 1.5 だが、日本語は字面が詰まって見えるため広げた
- ボタン・ナビ・ラベルは太字の 14px / 12px で揃え、操作できるものの見た目をそろえる
- 等幅フォントや全大文字の装飾ラベルは使わない

## Layout

- 本文の最大幅は `container`（1200px）、左右の余白は最小 `gutter`（16px）
- セクションの間は `section-lg`（80px）、スマホでは `section`（64px）
- カード内の余白は `xxl`（32px）、小さなタイルは `xl`（24px）
- 開発物は 1 件目を横長の特集カード、残りを 2〜3 列のグリッドにする

## Elevation & Depth

影は使わない。奥行きは次の 2 つで作る。

- 面の色の差（canvas と surface-soft）
- スクリーンショットそのもの

ホバー時はカードを 2px 持ち上げ、枠線を濃くするだけにとどめる。

## Shapes

- ボタン・チップ・バッジ・ナビのピルは必ず `full`（ピル型）
- 開発物のカードと写真は `xxxl`（32px）、カード内の画像は `xxl`（24px）
- 小さなタイル（業務実績・趣味など）は `xl`（16px）で、大きなカードとの格の違いを出す

## Components

- **button-primary / button-secondary / button-ghost**: 主・副・控えめの 3 種。ヒーローでは primary と secondary を並べる。secondary は 2px の ink-deep、ghost は 2px の hairline-soft の枠線
- **card-work / card-tile / nav-bar / footer-region**: 1px の hairline-soft の枠線（`divider-soft` の色）を付ける
- **nav-bar**: 高さ 64px、下に細い線。現在のページは `nav-pill-active` の黒いピルで示す
- **hero-portrait**: 角丸 32px の写真。文字や所属を重ねない
- **card-work**: 開発物カード。上に `card-work-media`（スクリーンショット）、下に名前・説明・技術・リンク
- **card-work-feature**: トップの 1 件目。surface-soft の面に、画像と説明を左右に並べる
- **card-tile**: 業務実績・趣味などの小さな情報カード
- **card-promo-strip**: 黒い帯のカード。トップ末尾のリンク集に使う
- **chip**: 技術スタックやスキルの表示
- **badge-accent**: 1 つだけ目立たせたい短いラベル（順位・賞に当てはまらないもの）
- **badge-gold / badge-silver / badge-bronze**: 大会の優勝・準優勝・3 位。メダルの色の平らな面で、グラデーションや光沢は付けない
- **badge-mvp**: 最優秀選手などの特別賞。黒地に金の文字と 1px の金の枠線で、順位のメダルと区別する（ダークモードで地に溶けないよう枠線を付ける）
- **comment-avatar / comment-bubble**: 本人の一言（大会のコメントなど、くだけた言葉づかいのもの）。左に 32px の丸い本人の写真、右に surface-soft の吹き出しを置き、写真側の上の角だけ `sm`（4px）にして話し手を示す。客観的な記録（表・数値）の後ろに置き、記録と混ざらないようにする
- **eyebrow**: 見出しの上に置くコバルトのラベル（16px の太字）。大きな見出しの上でも埋もれない大きさにする
- **eyebrow-card**: カードの中のラベル（開発物の一言・業務の技術名など）。カードの小見出しより目立たないよう 14px にする
- **icon-button**: SNS などへのアイコンだけのリンク。56px の丸に 2px の枠線、中に 24px の単色のロゴ（Simple Icons の SVG をビルド時に埋め込む）。文字を出さない代わりに `aria-label` と `title` にサービス名を入れる。ブランド色は使わず、置き場所の文字色に合わせる
- **stat-panel**: 自己ベストなどの大きな数値
- **spec-table**: 大会の試技のような数値の表

## Do's and Don'ts

### Do

- 色・角丸・余白は `src/styles/tokens.css` の変数（`--color-*` / `--rounded-*` / `--spacing-*`）を使う。直接の値を書かない
- コバルトは 1 画面に数か所まで。リンクとラベルと強調数値に限る
- 開発物には可能な限り実際のスクリーンショットを付ける
- 見出しは 500、小見出しに 300 を混ぜてリズムを作る

### Don't

- グラデーション、光彩、方眼などの装飾背景を入れない
- 影の強いカードを使わない
- 角張ったボタンを作らない
- 等幅フォントや英字の大文字ラベルで飾らない
- 写真の上に所属などの文字を重ねない

### Meta からの変更点

- 書体: Optimistic VF → Inter + Noto Sans JP
- 本文の行間: 1.5 → 1.8（日本語のため）
- コバルトの用途: 購入ボタン専用 → サイト唯一のアクセント（購入動線が無いため）
- 削除: 購入・設定画面の部品（カート、色の選択、価格表示、フォーム、プロモーションの帯）
- 追加: ダークモードのトークン
