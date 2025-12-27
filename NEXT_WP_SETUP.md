# Next-WP 模板設置指南

## 📦 已克隆的模板位置

模板已成功克隆到：`f:\FIFA\next-wp-template`

## 🚀 快速開始

### 1. 進入模板目錄並安裝依賴

```bash
cd ..\next-wp-template
pnpm install
# 或者使用 npm
npm install
```

### 2. 設置環境變數

複製 `.env.example` 為 `.env.local`：

```bash
copy .env.example .env.local
```

編輯 `.env.local` 文件，設置您的 WordPress 網站資訊：

```env
WORDPRESS_URL="https://your-wordpress-site.com"
WORDPRESS_HOSTNAME="your-wordpress-site.com"
WORDPRESS_WEBHOOK_SECRET="your-secret-key-here"
```

**說明：**
- `WORDPRESS_URL`: 您的 WordPress 網站完整 URL
- `WORDPRESS_HOSTNAME`: WordPress 域名（用於圖片優化）
- `WORDPRESS_WEBHOOK_SECRET`: 用於快取重新驗證的秘密金鑰（可以生成一個隨機字符串）

### 3. 啟動開發服務器

```bash
pnpm dev
# 或
npm run dev
```

網站將在 `http://localhost:3000` 運行。

## ✨ Next-WP 模板特色功能

- ✅ **Next.js 16 + React 19 + TypeScript**
- ✅ **完整的類型定義** - TypeScript 類型安全
- ✅ **shadcn/ui 組件** - 現代化 UI 組件庫
- ✅ **深色模式** - 內建主題切換
- ✅ **動態路由** - 支援文章、頁面、作者、分類、標籤
- ✅ **即時搜尋** - 防抖動處理的搜尋功能
- ✅ **伺服器端分頁** - 高效處理大量內容
- ✅ **自動快取重新驗證** - WordPress 更新時自動刷新
- ✅ **動態網站地圖** - 自動生成 XML sitemap
- ✅ **OG 圖片生成** - 動態社交媒體分享卡片
- ✅ **Tailwind CSS v4** - 現代化樣式框架

## 📁 專案結構

```
next-wp-template/
├── app/                      # Next.js App Router
│   ├── api/
│   │   ├── og/              # OG 圖片生成
│   │   └── revalidate/      # 快取重新驗證 webhook
│   ├── pages/[slug]/        # 動態 WordPress 頁面
│   ├── posts/
│   │   ├── [slug]/          # 單篇文章頁面
│   │   ├── authors/         # 作者歸檔
│   │   ├── categories/      # 分類歸檔
│   │   └── tags/            # 標籤歸檔
│   └── ...
├── components/
│   ├── posts/               # 文章相關組件
│   ├── ui/                  # shadcn/ui 組件
│   └── theme/               # 主題切換組件
├── lib/
│   ├── wordpress.ts         # WordPress API 函數
│   └── wordpress.d.ts       # WordPress 類型定義
└── ...
```

## 🎨 自訂化為 AI 教育網站

### 修改首頁內容

編輯 `app/page.tsx`，添加 AI 教育相關的內容區塊。

### 添加課程功能

1. 在 WordPress 後台創建自訂文章類型「課程」
2. 在 `app/` 目錄下創建 `courses/` 路由
3. 使用 `lib/wordpress.ts` 中的函數獲取課程數據

### 自訂樣式

模板使用 Tailwind CSS v4，您可以：
- 修改 `app/globals.css` 調整全局樣式
- 使用 `components/ui/` 中的 shadcn/ui 組件
- 自訂 `tailwind.config.ts` 配置

## 🔧 WordPress 設置

### 1. 啟用 REST API

WordPress 4.7+ 預設啟用 REST API。測試方法：
訪問：`https://your-wordpress-site.com/wp-json/wp/v2/posts`

### 2. 安裝快取重新驗證插件（可選）

模板包含一個 WordPress 插件用於自動快取重新驗證：
- 位置：`plugin/next-revalidate/`
- 將插件上傳到 WordPress 並啟用

### 3. 處理 CORS（如需要）

如果遇到跨域問題，在 WordPress 的 `functions.php` 添加：

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

## 📝 建議的下一步

1. ✅ 設置環境變數
2. ✅ 啟動開發服務器測試
3. ✅ 連接您的 WordPress 網站
4. ✅ 自訂首頁內容為 AI 教育主題
5. ✅ 添加課程相關頁面
6. ✅ 自訂顏色和樣式

## 🔗 相關資源

- [Next-WP GitHub](https://github.com/9d8dev/next-wp)
- [Live Demo](https://wp.9d8.dev)
- [Video Tutorial](https://www.youtube.com/watch?v=JZc1-BcOvYw)

## 💡 選擇使用方式

您現在有兩個選擇：

**選項 A：使用 next-wp-template（推薦）**
- 更完整的功能
- 更好的類型支持
- 更成熟的架構

**選項 B：保留現有的 new-next-wp 專案**
- 更簡單的結構
- 已經針對 AI 教育主題定制
- 可以手動整合 next-wp 的功能

建議：**使用 next-wp-template**，然後根據 AI 教育主題進行自訂化。




