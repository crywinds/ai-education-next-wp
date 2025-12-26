# Next-WP 模板設置完成 ✅

## 🎉 安裝狀態

✅ pnpm 已安裝  
✅ 依賴套件已安裝（383 個套件）  
✅ 環境變數文件已創建

## 📝 下一步：設置環境變數

請編輯 `.env.local` 文件，填入您的 WordPress 網站資訊：

```env
WORDPRESS_URL="https://your-wordpress-site.com"
WORDPRESS_HOSTNAME="your-wordpress-site.com"
WORDPRESS_WEBHOOK_SECRET="your-secret-key-here"
```

### 環境變數說明：

1. **WORDPRESS_URL**
   - 您的 WordPress 網站完整 URL
   - 例如：`https://example.com` 或 `https://wp.example.com`
   - 確保 WordPress REST API 已啟用（WordPress 4.7+ 預設啟用）

2. **WORDPRESS_HOSTNAME**
   - WordPress 網站的域名（不含協議）
   - 例如：`example.com` 或 `wp.example.com`
   - 用於圖片優化功能

3. **WORDPRESS_WEBHOOK_SECRET**（可選，但推薦）
   - 用於快取重新驗證的祕密金鑰
   - 可以生成隨機字符串，例如：`openssl rand -base64 32`
   - 如果使用快取重新驗證插件，這個很重要

## 🚀 啟動開發服務器

設置好環境變數後，執行：

```bash
pnpm dev
```

網站將在 `http://localhost:3000` 運行。

## 🧪 測試 WordPress API 連接

在設置環境變數之前，您可以先測試 WordPress REST API 是否可訪問：

訪問：`https://your-wordpress-site.com/wp-json/wp/v2/posts`

如果看到 JSON 數據，說明 API 正常工作。

## 📚 更多資訊

- **GitHub**: https://github.com/9d8dev/next-wp
- **Live Demo**: https://wp.9d8.dev
- **Video Tutorial**: https://www.youtube.com/watch?v=JZc1-BcOvYw

## 🎨 自訂為 AI 教育網站

### 1. 修改網站配置

編輯 `site.config.ts`：
```typescript
export const siteConfig: SiteConfig = {
  site_name: "AI 教育學院",
  site_description: "探索 AI 創作、學習最新 AI 技術",
  site_domain: "https://your-domain.com",
};
```

### 2. 自訂首頁

編輯 `app/page.tsx`，添加 AI 教育相關內容。

### 3. 添加課程功能

- 在 WordPress 創建「課程」自訂文章類型
- 創建 `app/courses/` 路由
- 使用 `lib/wordpress.ts` 中的函數獲取課程數據

## ⚠️ 常見問題

### 1. CORS 錯誤

如果遇到跨域問題，在 WordPress 的 `functions.php` 添加：

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

### 2. 圖片無法顯示

確保 `WORDPRESS_HOSTNAME` 設置正確，並檢查 WordPress 圖片 URL 是否可公開訪問。

### 3. API 請求失敗

- 檢查 `.env.local` 中的 URL 是否正確
- 確認 WordPress 網站可公開訪問
- 檢查瀏覽器控制台的錯誤訊息

---

祝您使用愉快！🎉

