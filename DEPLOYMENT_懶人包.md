# 🚀 網站部署懶人包 - 5分鐘快速部署

本指南提供最簡單的部署方式，讓您快速將網站上線！

## ⚡ 最快方式：Vercel（推薦，完全免費）

### 為什麼選擇 Vercel？
- ✅ **完全免費**（個人專案）
- ✅ **自動 HTTPS**
- ✅ **全球 CDN 加速**
- ✅ **自動部署**（每次 Git push 自動更新）
- ✅ **無需配置服務器**
- ✅ **5分鐘內完成部署**

---

## 📦 懶人包步驟（5分鐘完成）

### 步驟 1：準備代碼（2分鐘）

1. **確保代碼已提交到 GitHub**
   
   如果還沒有，執行以下命令：
   ```bash
   # 初始化 Git（如果還沒有）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "準備部署"
   
   # 在 GitHub 創建新倉庫，然後連接
   git remote add origin https://github.com/您的用戶名/您的倉庫名.git
   git push -u origin main
   ```

   **或者**：直接在 GitHub 網頁上創建新倉庫，然後上傳文件。

### 步驟 2：註冊 Vercel（1分鐘）

1. 訪問：https://vercel.com
2. 點擊 **"Sign Up"**
3. 選擇 **"Continue with GitHub"**（推薦，最簡單）
4. 授權 Vercel 訪問您的 GitHub

### 步驟 3：部署專案（2分鐘）

1. **導入專案**
   - 登入 Vercel 後，點擊 **"Add New..."** → **"Project"**
   - 選擇您的 GitHub 倉庫
   - 點擊 **"Import"**

2. **配置專案**
   - **Framework Preset**: 保持 **Next.js**（自動檢測）
   - **Root Directory**: 保持 `.`（如果專案在根目錄）
   - 其他設置保持默認即可

3. **設置環境變數** ⚠️ **重要**
   
   在 **"Environment Variables"** 區塊：
   - 點擊 **"Add"**
   - **Name**: `NEXT_PUBLIC_WP_API_URL`
   - **Value**: `https://wingchiut.sg-host.com/wp-json/wp/v2`
   - **Environment**: 選擇 **Production**、**Preview**、**Development**（全選）
   - 點擊 **"Add"**

4. **部署**
   - 點擊 **"Deploy"** 按鈕
   - 等待 1-3 分鐘構建完成
   - ✅ 完成！

### 步驟 4：獲取網站地址

部署完成後，您會看到：
- **網站地址**：`https://您的專案名.vercel.app`
- 點擊地址即可訪問您的網站！

---

## 🎯 完成！您的網站已上線

現在您可以：
- ✅ 訪問您的網站
- ✅ 分享給其他人
- ✅ 每次推送代碼到 GitHub，網站會自動更新

---

## 🔧 設置自訂域名（可選）

如果您有自己的域名（例如：`yourdomain.com`）：

1. 在 Vercel 專案頁面，點擊 **"Settings"** → **"Domains"**
2. 輸入您的域名，點擊 **"Add"**
3. 按照提示設置 DNS 記錄：
   - 添加 CNAME 記錄
   - 指向：`cname.vercel-dns.com`
4. 等待幾分鐘，DNS 生效後即可使用您的域名訪問

---

## 📝 其他部署方式（進階）

### 方式二：Netlify（類似 Vercel）

1. 訪問：https://www.netlify.com
2. 註冊並連接 GitHub
3. 導入專案
4. 設置環境變數：`NEXT_PUBLIC_WP_API_URL`
5. 部署完成

### 方式三：傳統主機（需要技術知識）

如果您有 VPS 或傳統主機：

1. **上傳文件**（使用 FTP 或 SCP）
2. **安裝 Node.js**（版本 18+）
3. **安裝依賴**：`npm install`
4. **構建專案**：`npm run build`
5. **設置環境變數**：創建 `.env.production` 文件
6. **啟動服務**：`npm start` 或使用 PM2

**詳細步驟**：請參考 `DEPLOYMENT_GUIDE.md`

---

## ❓ 常見問題

### Q1: 部署後網站顯示錯誤？
**A:** 檢查環境變數是否正確設置，特別是 `NEXT_PUBLIC_WP_API_URL`

### Q2: 如何更新網站內容？
**A:** 只需在本地修改代碼，然後推送到 GitHub，Vercel 會自動重新部署

### Q3: 可以免費使用嗎？
**A:** 是的！Vercel 的免費方案對個人專案完全足夠

### Q4: 如何查看部署日誌？
**A:** 在 Vercel 專案頁面，點擊 **"Deployments"** 標籤，可以看到所有部署記錄和日誌

### Q5: 網站速度慢怎麼辦？
**A:** Vercel 使用全球 CDN，速度通常很快。如果慢可能是：
- WordPress API 響應慢（檢查 WordPress 服務器）
- 圖片太大（優化圖片大小）

---

## 🎉 完成檢查清單

部署完成後，請確認：

- [ ] 網站可以正常訪問
- [ ] 課程頁面能顯示課程
- [ ] 博客頁面能顯示文章
- [ ] 圖片可以正常加載
- [ ] 沒有控制台錯誤（F12 檢查）

---

## 💡 提示

1. **環境變數更改後**：需要重新部署才會生效
2. **本地測試**：部署前先在本地測試（`npm run build` 和 `npm start`）
3. **備份**：定期備份 WordPress 數據庫
4. **監控**：Vercel 提供免費的分析和監控功能

---

## 📚 相關文檔

- [完整部署指南](./DEPLOYMENT_GUIDE.md) - 包含所有部署方式的詳細說明
- [WordPress 連接指南](./WORDPRESS_CONNECTION.md) - WordPress API 設置
- [Vercel 官方文檔](https://vercel.com/docs)

---

**需要幫助？** 如果遇到問題，請檢查：
1. Vercel 部署日誌中的錯誤訊息
2. 瀏覽器控制台（F12）的錯誤
3. 環境變數是否正確設置

**祝您部署順利！** 🚀

