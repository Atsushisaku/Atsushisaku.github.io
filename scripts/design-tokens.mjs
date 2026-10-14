// DESIGN.md のトークンを CSS 変数に書き出す。ビルドの前に毎回実行される（npm run prebuild）。
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// CLI 本体は package の exports に含まれないので、パスで直接指す
const cli = fileURLToPath(new URL('../node_modules/@google/design.md/dist/index.js', import.meta.url));
const css = execFileSync(process.execPath, [cli, 'export', 'DESIGN.md', '--format', 'css-vars'], { encoding: 'utf8' });

const header = '/* DESIGN.md から自動生成。直接編集せず、DESIGN.md を直して `npm run design:tokens` を実行する */\n';
writeFileSync('src/styles/tokens.css', header + css);
console.log('src/styles/tokens.css を更新しました');
