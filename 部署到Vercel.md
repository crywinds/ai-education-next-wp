# 🚀 部署到 Vercel - 快速指南

## ✅ 構建測試通過

專案已通過本地構建測試，可以安全部署到 Vercel。

## 📋 部署步驟

### 步驟 1：訪問 Vercel

1. 前往 [https://vercel.com](https://vercel.com)
2. 使用 GitHub 帳號登入（如果沒有帳號，點擊 "Sign Up" 註冊）

### 步驟 2：導入專案

1. 點擊右上角的 **"Add New"** → **"Project"**
2. 在 "Import Git Repository" 區塊中，選擇您的 GitHub 倉庫
3. 如果看不到您的倉庫，點擊 **"Adjust GitHub App Permissions"** 授權 Vercel 訪問

### 步驟 3：配置專案

1. **專案名稱**：可以保持默認或自訂（例如：`korae-next-wp`）
2. **Framework Preset**：自動檢測為 Next.js，保持默認即可
3. **Root Directory**：保持 `.`（根目錄）
4. **Build and Output Settings**：保持默認（Vercel 會自動檢測）

### 步驟 4：設置環境變數 ⚠️ 重要

在 **"Environment Variables"** 區塊，點擊 **"Add"** 添加以下變數：

#### 必須設置的環境變數：

| 變數名稱 | 值 | 環境選擇 |
|---------|-----|---------|
| `NEXT_PUBLIC_WP_API_URL` | `https://your-wordpress-site.com/wp-json/wp/v2` | ✅ Production<br>✅ Preview<br>✅ Development |

**重要提示：**
- 將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名
- 確保 WordPress 網站可以公開訪問
- 如果 WordPress 使用 HTTPS，URL 必須使用 `https://`

#### 可選的環境變數：

| 變數名稱 | 值 | 說明 |
|---------|-----|------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` | 網站 URL（部署後會自動生成，可稍後更新） |

### 步驟 5：部署

1. 點擊右下角的 **"Deploy"** 按鈕
2. 等待構建完成（通常 1-3 分鐘）
3. 構建成功後，您會看到：
   - ✅ 部署成功的訊息
   - 🔗 您的網站 URL（例如：`https://your-project.vercel.app`）

### 步驟 6：驗證部署

1. 點擊部署成功頁面上的網站 URL
2. 訪問 `https://your-project.vercel.app/zh-TW` 查看網站
3. 檢查所有功能是否正常運作

## 🔄 自動部署

部署完成後，Vercel 會自動：
- ✅ 每次推送到 `main` 分支 → 自動部署到生產環境
- ✅ 每次推送到其他分支 → 自動創建預覽部署
- ✅ 每次 Pull Request → 自動創建預覽部署

## 🛠️ 使用 Vercel CLI 部署（可選）

如果您偏好使用命令行：

```bash
# 1. 安裝 Vercel CLI
npm i -g vercel

# 2. 登入
vercel login

# 3. 部署到預覽環境
vercel

# 4. 部署到生產環境
vercel --prod

# 5. 設置環境變數
vercel env add NEXT_PUBLIC_WP_API_URL
# 輸入值：https://your-wordpress-site.com/wp-json/wp/v2
# 選擇環境：Production, Preview, Development
```

## 🐛 常見問題

### 問題 1：構建失敗

**解決方法：**
- 查看 Vercel 構建日誌中的錯誤訊息
- 確保所有依賴都已正確安裝
- 檢查是否有 TypeScript 或 ESLint 錯誤

### 問題 2：環境變數未生效

**解決方法：**
1. 確認變數名稱正確（注意大小寫）
2. 確認已選擇正確的環境（Production/Preview/Development）
3. 重新部署專案
4. 清除瀏覽器緩存

### 問題 3：WordPress API 連接失敗

**檢查項目：**
- ✅ WordPress 網站是否可公開訪問
- ✅ 環境變數 URL 是否正確（包含 `https://` 和 `/wp-json/wp/v2`）
- ✅ 在瀏覽器訪問 `https://your-wordpress-site.com/wp-json/wp/v2/posts` 測試 API
- ✅ WordPress CORS 設置是否正確

### 問題 4：圖片無法顯示

**解決方法：**
- 檢查 `next.config.js` 中的 `remotePatterns` 配置（已預設允許所有域名）
- 確保 WordPress 圖片 URL 完整且可訪問

## 📊 部署後管理

### 查看部署歷史

在 Vercel 專案頁面：
- 點擊 **"Deployments"** 查看所有部署記錄
- 點擊任何一次部署查看詳細信息

### 回滾到之前的版本

1. 在 **"Deployments"** 中找到要回滾的版本
2. 點擊右側的 **"..."** 選單
3. 選擇 **"Promote to Production"**

### 設置自訂域名

1. 在專案設置中，進入 **"Domains"**
2. 點擊 **"Add Domain"**
3. 輸入您的域名
4. 按照指示設置 DNS 記錄

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 部署指南](https://nextjs.org/docs/deployment)
- [環境變數配置](https://vercel.com/docs/concepts/projects/environment-variables)

---

**準備好了嗎？** 現在就前往 [https://vercel.com](https://vercel.com) 開始部署吧！ 🚀


