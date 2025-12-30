# Vercel 部署指南

## 🚀 快速部署步驟

### 方法一：通過 Vercel 網站（推薦）

1. **訪問 Vercel**
   - 前往 [https://vercel.com](https://vercel.com)
   - 使用 GitHub 帳號登入（或註冊新帳號）

2. **導入專案**
   - 點擊 **"Add New"** → **"Project"**
   - 選擇 **"Import Git Repository"**
   - 選擇您的 GitHub 倉庫：`crywinds/ai-education-next-wp`

3. **配置專案設置**
   - **Framework Preset**: Next.js（自動檢測）
   - **Root Directory**: `.`（保持默認）
   - **Build Command**: `npm run build`（自動檢測）
   - **Output Directory**: `.next`（自動檢測）
   - **Install Command**: `npm install`（自動檢測）

4. **設置環境變數** ⚠️ 重要
   
   在 **"Environment Variables"** 區塊添加：
   
   | 變數名稱 | 值 | 環境 |
   |---------|-----|------|
   | `NEXT_PUBLIC_WP_API_URL` | `https://your-wordpress-site.com/wp-json/wp/v2` | Production, Preview, Development |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` | Production, Preview, Development |
   
   **重要提示：**
   - 將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名
   - 將 `your-project.vercel.app` 替換為 Vercel 分配給您的域名（部署後會自動生成）

5. **部署**
   - 點擊 **"Deploy"** 按鈕
   - 等待構建完成（通常 1-3 分鐘）
   - 部署成功後會獲得一個 URL，例如：`https://your-project.vercel.app`

### 方法二：使用 Vercel CLI

1. **安裝 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登入 Vercel**
   ```bash
   vercel login
   ```

3. **部署到預覽環境**
   ```bash
   vercel
   ```

4. **部署到生產環境**
   ```bash
   vercel --prod
   ```

5. **設置環境變數**
   ```bash
   vercel env add NEXT_PUBLIC_WP_API_URL
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

## 📋 部署前檢查清單

- [ ] 代碼已推送到 GitHub
- [ ] 環境變數已準備好（WordPress API URL）
- [ ] WordPress 網站可以公開訪問
- [ ] 已測試本地構建：`npm run build`

## 🔧 部署後配置

### 1. 設置自訂域名（可選）

1. 在 Vercel 專案設置中，進入 **"Domains"**
2. 添加您的自訂域名
3. 按照指示設置 DNS 記錄

### 2. 配置自動部署

Vercel 預設會：
- ✅ 每次推送到 `main` 分支自動部署到生產環境
- ✅ 每次推送到其他分支自動創建預覽部署
- ✅ 每次 Pull Request 自動創建預覽部署

### 3. 環境變數管理

- **Production**: 生產環境使用的變數
- **Preview**: 預覽環境使用的變數（PR、分支部署）
- **Development**: 本地開發使用的變數（通過 CLI）

## 🐛 常見問題

### 問題 1：構建失敗

**檢查項目：**
- ✅ 確保 `package.json` 中的 `build` 腳本正確
- ✅ 檢查是否有 TypeScript 錯誤
- ✅ 查看 Vercel 構建日誌中的錯誤訊息

### 問題 2：環境變數未生效

**解決方法：**
1. 確認變數名稱以 `NEXT_PUBLIC_` 開頭（客戶端變數）
2. 重新部署專案
3. 清除瀏覽器緩存

### 問題 3：WordPress API 連接失敗

**檢查項目：**
- ✅ WordPress 網站是否可公開訪問
- ✅ WordPress REST API 是否啟用（訪問 `/wp-json/wp/v2/posts` 測試）
- ✅ CORS 設置是否正確
- ✅ 環境變數 URL 是否正確（包含 `https://` 和 `/wp-json/wp/v2`）

### 問題 4：圖片無法顯示

**解決方法：**
- ✅ 檢查 `next.config.js` 中的 `remotePatterns` 配置
- ✅ 確保 WordPress 圖片 URL 完整
- ✅ 檢查圖片是否可公開訪問

## 📊 監控和優化

### 查看部署日誌

在 Vercel 專案中：
- 點擊任何一次部署
- 查看 **"Build Logs"** 和 **"Function Logs"**

### 性能監控

Vercel 提供：
- 實時分析
- Web Vitals 監控
- 函數執行時間
- 帶寬使用情況

## 🔄 更新部署

每次您推送代碼到 GitHub：
1. Vercel 會自動檢測更改
2. 自動觸發新的構建
3. 部署完成後自動更新網站

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 部署文檔](https://nextjs.org/docs/deployment)
- [環境變數指南](https://vercel.com/docs/concepts/projects/environment-variables)

---

**需要幫助？** 查看 Vercel 構建日誌或聯繫 Vercel 支援。

