# 網頁小練習

幾個 HTML / CSS / JavaScript 的小練習，每個資料夾都可以直接用瀏覽器打開。

| 資料夾 | 日期 | 練習重點 |
|---|---|---|
| `rotate-image/` | 2025-12 | 用 CSS `@keyframes` 讓圖片旋轉；拖動滑桿時，用 JS 改 CSS 變數 `--speed`，即時調整轉速 |
| `tattoo-marquee/` | 2026-01 | 無縫跑馬燈：JS 把整組圖片複製一份接在後面，捲到一半時剛好接回開頭；速度依圖片數量自動計算 |
| `gym-signup-form/` | 2026-06 | 宣傳表單：`required` 與 `:invalid` 做基本驗證，年齡滑桿即時顯示數值 |

## 備註

- `tattoo-marquee/images/` 原本放的是遊戲截圖，因為版權問題換成自動產生的佔位圖。
- `rotate-image/index.html` 裡寫的是 `MY.pNg`，實際檔名是 `MY.png`。Windows 不分大小寫所以能顯示，但放到 GitHub Pages 這類區分大小寫的伺服器上就會破圖。
