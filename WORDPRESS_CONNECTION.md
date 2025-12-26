# WordPress 連接指南

## 📋 連接步驟

### 第一步：設置環境變數

1. 打開專案根目錄下的 `.env.local` 文件
2. 將 `https://your-wordpress-site.com` 替換為您的 WordPress 網站實際網址

**範例：**
```env
NEXT_PUBLIC_WP_API_URL=https://example.com/wp-json/wp/v2
```

**重要提示：**
- 確保 URL 包含 `https://` 或 `http://`
- URL 必須以 `/wp-json/wp/v2` 結尾
- 如果您的 WordPress 安裝在子目錄（如 `https://example.com/blog`），則應為：`https://example.com/blog/wp-json/wp/v2`

### 第二步：測試 WordPress REST API

在瀏覽器中訪問以下 URL 來測試您的 WordPress API 是否正常工作：

```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

如果看到 JSON 格式的文章數據，說明 API 正常工作 ✅

### 第三步：處理 CORS（跨域）問題

如果您的 Next.js 和 WordPress 在不同域名運行，可能需要處理 CORS 問題。

**方法一：在 WordPress 的 `functions.php` 中添加代碼**

登入 WordPress 後台 → 外觀 → 主題編輯器 → 選擇 `functions.php`，添加以下代碼：

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

**方法二：安裝 WordPress 插件**

安裝以下任一插件：
- "REST API - Filter Fields"
- "WP REST API Controller"
- "CORS"

### 第四步：啟動開發服務器

```bash
npm run dev
```

訪問 [http://localhost:3000](http://localhost:3000) 查看網站。

### 第五步：驗證連接

1. 訪問 `/blog` 頁面，應該能看到來自 WordPress 的文章
2. 如果沒有文章顯示，檢查：
   - `.env.local` 中的 URL 是否正確
   - WordPress 網站是否有已發布的文章
   - 瀏覽器控制台是否有錯誤訊息

## 🔧 常見問題排查

### 問題 1：無法獲取文章數據

**檢查項目：**
- ✅ `.env.local` 文件是否存在且配置正確
- ✅ WordPress REST API 是否可訪問（在瀏覽器測試）
- ✅ WordPress 網站是否可公開訪問
- ✅ 環境變數名稱是否為 `NEXT_PUBLIC_WP_API_URL`（注意大小寫）

**解決方法：**
```bash
# 重新啟動開發服務器（環境變數更改後需要重啟）
npm run dev
```

### 問題 2：CORS 錯誤

**錯誤訊息：**
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

**解決方法：**
按照「第三步：處理 CORS 問題」的說明操作。

### 問題 3：圖片無法顯示

**檢查項目：**
- ✅ `next.config.js` 中的 `remotePatterns` 配置（已預設允許所有域名）
- ✅ WordPress 圖片的 URL 是否完整（包含 http:// 或 https://）

### 問題 4：環境變數未生效

**解決方法：**
1. 確認文件名為 `.env.local`（不是 `.env` 或其他名稱）
2. 確認變數名稱以 `NEXT_PUBLIC_` 開頭
3. 重新啟動開發服務器
4. 清除 Next.js 快取：刪除 `.next` 資料夾後重新啟動

## 📝 連接課程內容（可選）

如果您想將課程頁面也連接到 WordPress：

1. 在 WordPress 後台創建一個分類（例如：課程）
2. 記下該分類的 ID
3. 編輯 `app/courses/page.tsx`，取消註釋 WordPress API 調用代碼
4. 設置正確的分類 ID

## 🎯 下一步

連接成功後，您可以：
- ✅ 在 WordPress 後台創建和管理內容
- ✅ 內容會自動同步到 Next.js 網站
- ✅ 自訂頁面樣式和組件
- ✅ 添加更多功能（搜尋、分類、標籤等）

## 💡 提示

- 開發環境使用 `.env.local`，生產環境需要在部署平台（如 Vercel）設置環境變數
- WordPress REST API 預設是啟用的（WordPress 4.7+）
- 如果使用自訂文章類型，需要確保該類型支援 REST API

---

**需要幫助？** 檢查瀏覽器控制台和終端錯誤訊息，通常會提供有用的線索。

