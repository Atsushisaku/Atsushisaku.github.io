// SNS 共有用の画像 public/og.png を scripts/og/template.html から作る。
// PC の Chrome を使うので、Playwright 専用ブラウザのダウンロードは要らない。
// 実行: npm run og
import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';

const template = fileURLToPath(new URL('./og/template.html', import.meta.url));
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(template).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out });
await browser.close();
console.log('public/og.png を更新しました');
