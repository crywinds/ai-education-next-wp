# 快速開始指南

## 第一步：安裝依賴

```bash
npm install
```

## 第二步：配置環境變數

創建 `.env.local` 文件（在項目根目錄）：

```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

**重要**: 將 `https://your-wordpress-site.com` 替換為您的 WordPress 網站實際 URL。

## 第三步：啟動開發服務器

```bash
npm run dev
```

打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## WordPress 設置

### 1. 確保 WordPress REST API 已啟用

WordPress 4.7+ 預設啟用 REST API。測試方法：

訪問: `https://your-wordpress-site.com/wp-json/wp/v2/posts`

如果看到 JSON 數據，說明 API 正常工作。

### 2. 處理 CORS (跨域) 問題

如果您的 WordPress 和 Next.js 在不同域名運行，需要允許跨域請求。

**方法一：安裝 WordPress 插件**
- 安裝 "REST API - Filter Fields" 或 "WP REST API Controller"

**方法二：添加代碼到 functions.php**

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

### 3. 創建課程內容

您可以：

1. **使用 WordPress 標準文章**：在 WordPress 後台創建文章，它們會自動顯示在博客頁面
2. **創建自訂文章類型**：安裝 "Custom Post Type UI" 插件創建 "課程" 自訂類型
3. **使用分類**：為不同內容類型設置分類，然後在代碼中過濾

## 自訂化內容

### 修改示例課程

編輯 `app/courses/page.tsx` 中的 `getCourses()` 函數來更新課程列表。

### 連接真實 WordPress 數據

在 `app/courses/page.tsx` 中，您可以取消註釋 WordPress API 調用：

```typescript
async function getCourses(): Promise<Course[]> {
  // 取消下面的註釋並設置正確的分類 ID
  // const posts = await getPosts({ categories: COURSE_CATEGORY_ID })
  // return posts.map(transformToCourse)
  
  // ... 移除示例數據
}
```

## 常見問題

### 1. 圖片無法顯示

- 確保 WordPress 圖片的 URL 是完整的（包含 http:// 或 https://）
- 檢查 `next.config.js` 中的 `images.domains` 或 `remotePatterns` 配置

### 2. API 請求失敗

- 檢查 `.env.local` 中的 URL 是否正確
- 確認 WordPress 網站可公開訪問
- 檢查瀏覽器控制台的錯誤訊息

### 3. 樣式沒有生效

- 確認已安裝 Tailwind CSS：`npm install`
- 重新啟動開發服務器

## 下一步

- 閱讀完整的 [README.md](README.md) 了解詳細文檔
- 自訂設計：修改 `tailwind.config.ts`
- 添加更多頁面和功能

祝您使用愉快！🎉

