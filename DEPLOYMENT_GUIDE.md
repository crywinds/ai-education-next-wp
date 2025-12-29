# 部署指南 - Next.js + WordPress 測試站

本指南將幫助您將 Next.js 應用部署到網絡寄存服務。

## 📋 部署前的準備

### 1. 確保代碼已準備就緒

- ✅ 所有功能已測試完成
- ✅ 環境變數已正確配置
- ✅ 代碼已提交到 Git 倉庫（GitHub、GitLab 等）

### 2. 準備環境變數

您需要準備以下環境變數：

```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

**重要提示：**
- 將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名
- 確保 WordPress 網站已經可以公開訪問
- 如果 WordPress 使用 HTTPS，環境變數也必須使用 HTTPS

---

## 🚀 部署方式一：Vercel（推薦 - 最簡單）

Vercel 是 Next.js 官方推薦的部署平台，提供免費方案且設置簡單。

### 步驟 1：註冊 Vercel 帳號

1. 訪問 [https://vercel.com](https://vercel.com)
2. 使用 GitHub、GitLab 或 Email 註冊帳號

### 步驟 2：導入專案

1. 登入 Vercel 後，點擊 **"Add New"** → **"Project"**
2. 選擇 **"Import Git Repository"**
3. 連接您的 Git 倉庫（GitHub/GitLab/Bitbucket）
4. 選擇您的專案

### 步驟 3：配置專案設置

1. **專案名稱**：可以保持默認或自訂
2. **框架預設**：Vercel 會自動檢測 Next.js，保持默認即可
3. **Root Directory**：如果專案在子目錄，設置路徑；否則保持默認 `.`

### 步驟 4：設置環境變數

在部署設置頁面，找到 **"Environment Variables"** 區塊：

1. 點擊 **"Add"** 添加環境變數
2. 鍵名：`NEXT_PUBLIC_WP_API_URL`
3. 值：`https://your-wordpress-site.com/wp-json/wp/v2`
4. 環境：選擇 **Production**、**Preview** 和 **Development**（全選）
5. 點擊 **"Save"**

### 步驟 5：部署

1. 點擊 **"Deploy"** 按鈕
2. 等待構建完成（通常 1-3 分鐘）
3. 部署成功後，您會獲得一個 URL，例如：`https://your-project.vercel.app`

### 步驟 6：自訂域名（可選）

1. 在專案設置中，進入 **"Domains"** 標籤
2. 輸入您的域名
3. 按照提示設置 DNS 記錄
4. 等待 DNS 生效（通常幾分鐘到幾小時）

### 優點

- ✅ 免費方案足夠測試使用
- ✅ 自動 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自動部署（每次 Git push 自動部署）
- ✅ 構建日誌完整

---

## 🌐 部署方式二：Netlify

Netlify 是另一個流行的靜態網站託管平台，也支持 Next.js。

### 步驟 1：註冊 Netlify 帳號

訪問 [https://www.netlify.com](https://www.netlify.com) 並註冊

### 步驟 2：導入專案

1. 點擊 **"Add new site"** → **"Import an existing project"**
2. 連接 Git 倉庫
3. 選擇您的專案

### 步驟 3：構建設置

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Functions directory**: `.next/server`

**注意**：Netlify 需要額外配置來運行 Next.js，可能需要添加 `netlify.toml` 文件：

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 步驟 4：設置環境變數

在 **"Site settings"** → **"Environment variables"** 中添加：

- `NEXT_PUBLIC_WP_API_URL` = `https://your-wordpress-site.com/wp-json/wp/v2`

### 步驟 5：部署

點擊 **"Deploy site"** 開始部署

---

## 🖥️ 部署方式三：傳統 VPS/主機（Node.js 環境）

如果您有 VPS 或支持 Node.js 的傳統主機，可以手動部署。

### 步驟 1：準備服務器

確保服務器已安裝：
- Node.js 18+ 
- npm 或 yarn
- PM2（用於進程管理，可選但推薦）

### 步驟 2：上傳代碼

使用 FTP、SCP 或 Git 將代碼上傳到服務器：

```bash
# 使用 Git（推薦）
git clone https://github.com/your-username/your-repo.git
cd your-repo

# 或使用 SCP
scp -r ./project user@your-server:/path/to/deploy
```

### 步驟 3：安裝依賴

```bash
cd /path/to/your/project
npm install
```

### 步驟 4：設置環境變數

創建 `.env.production` 文件：

```bash
nano .env.production
```

內容：
```env
NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### 步驟 5：構建專案

```bash
npm run build
```

### 步驟 6：啟動應用

#### 方式 A：使用 Next.js 內建服務器

```bash
npm start
```

#### 方式 B：使用 PM2（推薦，支持自動重啟）

```bash
# 安裝 PM2
npm install -g pm2

# 啟動應用
pm2 start npm --name "nextjs-app" -- start

# 設置開機自啟
pm2 startup
pm2 save
```

### 步驟 7：設置反向代理（Nginx）

如果使用 Nginx，創建配置文件 `/etc/nginx/sites-available/nextjs-app`：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5200;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

啟用配置：
```bash
sudo ln -s /etc/nginx/sites-available/nextjs-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 步驟 8：設置 HTTPS（Let's Encrypt）

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔒 部署方式四：Docker 部署

如果您的服務器支持 Docker，可以使用容器化部署。

### 步驟 1：創建 Dockerfile

在專案根目錄創建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS base

# 安裝依賴
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 構建應用
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 生產環境
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 5200
ENV PORT 5200

CMD ["node", "server.js"]
```

**注意**：需要在 `next.config.js` 中添加 `output: 'standalone'` 配置。

### 步驟 2：創建 docker-compose.yml

```yaml
version: '3.8'

services:
  nextjs:
    build: .
    ports:
      - "5200:5200"
    environment:
      - NEXT_PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
    restart: unless-stopped
```

### 步驟 3：構建和運行

```bash
docker-compose up -d
```

---

## ⚙️ WordPress 端配置

無論使用哪種部署方式，都需要確保 WordPress 網站正確配置。

### 1. 啟用 REST API

WordPress 4.7+ 預設啟用，測試訪問：
```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

### 2. 處理 CORS（跨域）

如果 Next.js 和 WordPress 在不同域名，需要允許跨域請求。

**方法一：在 WordPress 的 `functions.php` 中添加**

```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init','add_cors_http_header');
```

**方法二：安裝 WordPress 插件**

- "REST API - Filter Fields"
- "WP REST API Controller"
- "CORS"

### 3. 確保 Custom Post Type 支持 REST API

如果使用 Course Custom Post Type，確保設置了 `show_in_rest => true`

---

## ✅ 部署後檢查清單

- [ ] Next.js 應用可以正常訪問
- [ ] 環境變數已正確設置
- [ ] WordPress API 可以正常訪問
- [ ] 課程頁面能正常顯示數據
- [ ] 博客頁面能正常顯示文章
- [ ] 圖片可以正常加載
- [ ] HTTPS 已啟用（生產環境）
- [ ] 域名已正確配置（如使用自訂域名）
- [ ] CORS 問題已解決

---

## 🐛 常見問題排查

### 問題 1：環境變數未生效

**解決方法：**
- 確認環境變數名稱正確（注意大小寫）
- 確認變數以 `NEXT_PUBLIC_` 開頭（用於客戶端訪問）
- 重新構建專案（環境變數更改後需要重新構建）

### 問題 2：無法連接到 WordPress API

**檢查項目：**
- WordPress 網站是否可公開訪問
- API URL 是否正確（包含 `/wp-json/wp/v2`）
- 是否有 CORS 錯誤（查看瀏覽器控制台）
- WordPress REST API 是否正常工作（在瀏覽器測試 URL）

### 問題 3：圖片無法顯示

**解決方法：**
- 檢查 `next.config.js` 中的 `remotePatterns` 配置
- 確認圖片 URL 是完整路徑（包含 http:// 或 https://）
- 檢查 WordPress 圖片的公開訪問權限

### 問題 4：構建失敗

**檢查項目：**
- Node.js 版本是否符合要求（18+）
- 所有依賴是否正確安裝
- 查看構建日誌中的錯誤信息

---

## 📝 推薦的部署流程

1. **開發環境測試**：在本地完成所有功能開發和測試
2. **提交代碼**：將代碼推送到 Git 倉庫
3. **選擇平台**：根據需求選擇部署平台（推薦 Vercel）
4. **設置環境變數**：在部署平台配置環境變數
5. **首次部署**：執行部署並檢查是否成功
6. **測試功能**：訪問部署的網站，測試所有功能
7. **配置域名**：設置自訂域名（可選）
8. **監控維護**：定期檢查網站運行狀況

---

## 💡 提示

- **開發環境**：使用 `.env.local` 文件
- **生產環境**：在部署平台設置環境變數，不要提交 `.env.local` 到 Git
- **安全建議**：生產環境建議限制 CORS 為特定域名，而不是 `*`
- **性能優化**：啟用 CDN 可以顯著提升網站載入速度
- **備份**：定期備份 WordPress 數據庫和內容

---

**需要更多幫助？** 查看各平台的官方文檔：
- [Vercel 文檔](https://vercel.com/docs)
- [Netlify 文檔](https://docs.netlify.com)
- [Next.js 部署文檔](https://nextjs.org/docs/deployment)



