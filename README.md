# AI 教育學院 - Next.js + WordPress 網站

這是一個使用 Next.js 14 和 WordPress REST API 構建的現代化 AI 教育資訊網站。

## 功能特色

- 🎨 現代化的 UI 設計，使用 Tailwind CSS
- 📱 完全響應式設計，支援各種裝置
- 🚀 Next.js 14 App Router，效能優異
- 🔗 WordPress REST API 整合
- 📝 TypeScript 支援
- ⚡ 快速載入與優化

## 技術棧

- **框架**: Next.js 14
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **內容管理**: WordPress (Headless CMS)
- **HTTP 客戶端**: Axios

## 開始使用

### 前置需求

- Node.js 18+ 
- npm 或 yarn
- WordPress 網站 (作為 Headless CMS)

### 安裝步驟

1. **安裝依賴**

```bash
npm install
# 或
yarn install
```

2. **設置環境變數**

創建 `.env.local` 文件：

```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

將 `https://your-wordpress-site.com` 替換為您的 WordPress 網站 URL。

3. **啟動開發服務器**

```bash
npm run dev
# 或
yarn dev
```

打開 [http://localhost:3000](http://localhost:3000) 查看網站。

### 建置生產版本

```bash
npm run build
npm start
```

## 專案結構

```
new-next-wp/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── courses/           # 課程頁面
│   ├── blog/              # 博客頁面
│   ├── about/             # 關於頁面
│   └── contact/           # 聯絡頁面
├── components/            # React 組件
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/                   # 工具函數
│   └── wordpress.ts      # WordPress API 整合
├── types/                 # TypeScript 類型定義
└── public/               # 靜態資源
```

## WordPress 設置

### 啟用 REST API

WordPress REST API 預設是啟用的。確保您的 WordPress 版本是 4.7+。

### 允許跨域請求 (CORS)

如果需要從不同域名訪問 WordPress API，您可能需要安裝 CORS 插件或添加以下代碼到 WordPress 的 `functions.php`：

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

### 推薦插件

- **Custom Post Type UI**: 創建自訂文章類型（如課程）
- **Advanced Custom Fields**: 添加自訂欄位
- **CORS**: 處理跨域請求

## 自訂化

### 修改顏色主題

編輯 `tailwind.config.ts` 中的 `colors.primary` 來更改主要顏色。

### 添加新頁面

1. 在 `app/` 目錄下創建新資料夾
2. 添加 `page.tsx` 文件
3. 在 `components/Header.tsx` 中添加導航連結

### 自訂 WordPress 內容

修改 `lib/wordpress.ts` 中的函數來調整 API 請求參數。

## 部署

### Vercel (推薦)

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 導入專案
3. 設置環境變數 `NEXT_PUBLIC_WP_API_URL`
4. 部署完成！

### 其他平台

Next.js 應用可以部署到任何支援 Node.js 的平台上。

## 開發建議

- 使用 TypeScript 確保類型安全
- 遵循 Next.js 最佳實踐
- 優化圖片使用 Next.js Image 組件
- 定期更新依賴套件

## 授權

MIT License

## 支援

如有問題或建議，歡迎透過以下方式聯絡：

- Email: info@ai-edu.com
- 網站: [https://ai-edu.com](https://ai-edu.com)

---

**注意**: 這是一個模板專案，請根據您的需求進行修改和自訂化。




