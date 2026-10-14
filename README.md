# atsushisaku.github.io

個人サイト（経歴・開発物）。Astro で作り、`main` への push で GitHub Actions が GitHub Pages にデプロイする。

## 内容の更新

文言はページではなく `src/data/` のデータを書き換える。

| ファイル | 内容 |
|---|---|
| `src/data/profile.ts` | 名前・肩書き・一言紹介・SNS |
| `src/data/career.ts` | 経歴・スキル・趣味 |
| `src/data/works.ts` | 開発物（`featured: true` でトップにも表示） |
| `src/data/powerlifting.ts` | 大会成績 |

## 開発

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

`/Midfoot/` など他リポジトリのプロジェクトページと同じドメインに載るため、同名のパスは作らないこと。
