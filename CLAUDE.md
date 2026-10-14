## Design

見た目に関わる変更（CSS・コンポーネント・ページのレイアウト）は、必ず `DESIGN.md` に従う。

- 作業の前に `DESIGN.md` を読む。色・角丸・余白・文字組み・部品の決まりと、やってはいけないことが書いてある
- 色・角丸・余白は `src/styles/tokens.css` の変数（`--color-*` / `--rounded-*` / `--spacing-*`）か、`src/styles/global.css` の対応表（`--bg` / `--text` / `--accent` など）を使う。値を直接書かない
- `tokens.css` は自動生成なので編集しない。トークンを足す・変えるときは `DESIGN.md` の YAML を直し、`npm run design:tokens` で作り直す（`npm run build` の前にも自動で走る）
- `DESIGN.md` を直したら `npm run design:lint` で errors / warnings が 0 であることを確かめる
- DESIGN.md に無い部品が必要になったら、先に DESIGN.md の `components` と「Components」節に追加してから実装する
- `design/DESIGN-meta.md` は下敷きにした Meta のサイトの分析で、参考資料。このサイトの決まりではない

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
