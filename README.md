# atsushisaku.github.io

個人サイト（経歴・開発物）。Astro で作り、`main` への push で GitHub Actions が GitHub Pages にデプロイする。

## 内容の更新

文言はページではなく `src/data/` のデータを書き換える。

| ファイル | 内容 |
|---|---|
| `src/data/profile.ts` | 名前・分野・一言紹介・SNS |
| `src/data/career.ts` | 経歴・業務実績・スキル・資格・趣味 |
| `src/data/works.ts` | 開発物（`featured: true` でトップにも表示。スクリーンショットは `src/assets/works/`） |
| `src/data/powerlifting.ts` | 大会成績 |

## デザイン（DESIGN.md）

見た目の決まりは `DESIGN.md` にまとめてある。[Google の DESIGN.md 形式](https://www.npmjs.com/package/@google/design.md)で、
前半の YAML が機械が読むトークン（色・文字・角丸・余白・部品）、後半の文章がその使い方と理由。

```
DESIGN.md ──(npm run design:tokens)──▶ src/styles/tokens.css ──▶ global.css / 各コンポーネント
```

- デザインを変えたいときは、まず `DESIGN.md` を直す。CSS に値を直接書かない
- `npm run design:tokens`: トークンを CSS 変数として `src/styles/tokens.css` に書き出す（ビルド前にも自動で実行）
- `npm run design:lint`: DESIGN.md の誤り（壊れた参照、文字と背景のコントラスト不足、使われていないトークン）を検査する
- Claude Code などの AI に作業させるときは、`CLAUDE.md` の指示で DESIGN.md に従うようになっている
- `design/DESIGN-meta.md` は下敷きにした Meta のサイトの分析（参考資料）

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

`/Midfoot/` など他リポジトリのプロジェクトページと同じドメインに載るため、同名のパスは作らないこと。
