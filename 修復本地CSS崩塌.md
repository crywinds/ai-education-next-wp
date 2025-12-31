# 修復本地 CSS 崩塌問題

## 🔍 問題診斷

從錯誤訊息來看，問題包括：
1. ❌ `layout.css` 404 錯誤
2. ❌ Next.js 靜態資源（`_next/static/chunks/...`）404 錯誤
3. ❌ 圖片文件（logo）404 錯誤

這通常是因為：
- `.next` 構建目錄損壞或不完整
- 開發服務器沒有正確構建
- 瀏覽器緩存問題

## ✅ 解決方案

### 步驟 1：清除所有緩存

**方法 A：使用修復腳本（推薦）**
```bash
fix-local-css.bat
```

**方法 B：手動清除**
```bash
# 停止開發服務器（Ctrl+C）

# 刪除 .next 目錄
rmdir /s /q .next

# 刪除 node_modules 緩存（可選）
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
```

### 步驟 2：重新啟動開發服務器

```bash
npm run dev
```

### 步驟 3：清除瀏覽器緩存

1. **方法 A：硬刷新**
   - Windows: `Ctrl + Shift + R` 或 `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **方法 B：清除緩存**
   - 按 `F12` 打開開發者工具
   - 右鍵點擊刷新按鈕
   - 選擇「清除緩存並硬性重新載入」

3. **方法 C：無痕模式**
   - 使用無痕/隱私模式訪問網站
   - 這可以排除瀏覽器緩存問題

### 步驟 4：檢查端口是否被佔用

如果端口 5200 被佔用，使用：
```bash
kill-port-5200-quick.bat
```

然後重新啟動：
```bash
npm run dev
```

## 🖼️ 關於圖片 404 錯誤

如果看到圖片 404 錯誤（如 `hsbc-logo.png`, `shopage-logo.png` 等），這是正常的，因為：

1. **圖片文件可能尚未下載**
   - 這些圖片需要從 koraeweb.com 下載
   - 參考 `IMAGE_SETUP_GUIDE.md` 了解如何下載圖片

2. **圖片不影響核心功能**
   - CSS 和 JavaScript 應該正常載入
   - 網站功能應該正常運作
   - 只是圖片會顯示佔位符或空白

3. **如果需要圖片**
   - 查看 `IMAGE_SETUP_GUIDE.md` 了解如何下載和設置圖片
   - 圖片應放在 `public/images/partners/` 目錄

## 🔧 如果問題仍然存在

### 檢查項目

1. **確認 .next 目錄已刪除**
   ```bash
   dir .next
   ```
   如果目錄存在，手動刪除：
   ```bash
   rmdir /s /q .next
   ```

2. **確認開發服務器正常啟動**
   - 查看終端是否有錯誤訊息
   - 確認端口 5200 可用

3. **檢查瀏覽器控制台**
   - 按 `F12` 打開開發者工具
   - 查看 Console 和 Network 標籤
   - 確認哪些資源載入失敗

4. **嘗試使用不同端口**
   ```bash
   npm run dev:3000
   ```
   然後訪問 `http://localhost:3000/zh-TW`

### 完全重新安裝（最後手段）

如果以上方法都不行：

```bash
# 1. 停止所有 Node.js 進程
taskkill /F /IM node.exe

# 2. 刪除構建目錄和緩存
rmdir /s /q .next
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"

# 3. 重新安裝依賴（可選）
npm install

# 4. 重新啟動
npm run dev
```

## 📊 預期結果

修復後，您應該看到：
- ✅ CSS 正常載入（網站樣式正常）
- ✅ JavaScript 正常載入（功能正常）
- ⚠️ 圖片可能仍顯示 404（如果圖片文件不存在，這是正常的）

## 🎯 快速修復命令

```bash
# 一鍵修復
fix-local-css.bat
npm run dev
```

然後在瀏覽器中：
- 按 `Ctrl + Shift + R` 硬刷新
- 或使用無痕模式訪問

---

**提示：** 如果 Vercel 可以正常瀏覽，說明代碼沒問題，只是本地構建緩存需要清除。


