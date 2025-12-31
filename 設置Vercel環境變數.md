# 設置 Vercel 環境變數 - 詳細指南

## 🎯 方法一：通過 Vercel 網站（最簡單）

### 步驟 1：登入 Vercel

1. 前往 [https://vercel.com](https://vercel.com)
2. 點擊右上角 **"Log In"** 或 **"Sign Up"**
3. 使用 GitHub 帳號登入（推薦）

### 步驟 2：選擇您的專案

1. 登入後，在 Dashboard 中點擊您的專案名稱
2. 如果還沒有專案，先導入 GitHub 倉庫

### 步驟 3：進入設置頁面

1. 在專案頁面頂部，點擊 **"Settings"** 標籤
2. 在左側選單中，點擊 **"Environment Variables"**

### 步驟 4：添加環境變數

1. 在 **"Environment Variables"** 區塊中，點擊 **"Add New"** 按鈕

2. 填寫環境變數信息：
   ```
   Key（變數名稱）: NEXT_PUBLIC_WP_API_URL
   Value（變數值）: https://your-wordpress-site.com/wp-json/wp/v2
   ```

   **重要提示：**
   - 將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名
   - 例如：`https://example.com/wp-json/wp/v2`
   - 確保 URL 包含 `https://` 和 `/wp-json/wp/v2`

3. 選擇環境（Environment）：
   - ✅ **Production** - 生產環境
   - ✅ **Preview** - 預覽環境（PR、分支部署）
   - ✅ **Development** - 開發環境（CLI 使用）

4. 點擊 **"Save"** 按鈕

### 步驟 5：重新部署

環境變數設置後，需要重新部署才能生效：

**方法 A：手動重新部署**
1. 點擊頂部 **"Deployments"** 標籤
2. 找到最新的部署記錄
3. 點擊右側的 **"..."** 選單
4. 選擇 **"Redeploy"**
5. 確認重新部署

**方法 B：自動部署（推薦）**
1. 推送任何代碼更改到 GitHub
2. Vercel 會自動觸發新部署
3. 新部署會使用新的環境變數

---

## 🖥️ 方法二：使用 Vercel CLI（命令行）

### 步驟 1：安裝 Vercel CLI

```bash
npm i -g vercel
```

### 步驟 2：登入 Vercel

```bash
vercel login
```

### 步驟 3：添加環境變數

```bash
# 添加 Production 環境變數
vercel env add NEXT_PUBLIC_WP_API_URL production

# 添加 Preview 環境變數
vercel env add NEXT_PUBLIC_WP_API_URL preview

# 添加 Development 環境變數
vercel env add NEXT_PUBLIC_WP_API_URL development
```

每次執行命令時，會提示您輸入變數值：
```
? What's the value of NEXT_PUBLIC_WP_API_URL? 
> https://your-wordpress-site.com/wp-json/wp/v2
```

### 步驟 4：拉取環境變數到本地（可選）

```bash
vercel env pull .env.local
```

這會將 Vercel 的環境變數下載到本地 `.env.local` 文件。

---

## 📋 環境變數設置檢查清單

設置完成後，確認以下項目：

- [ ] 變數名稱正確：`NEXT_PUBLIC_WP_API_URL`（注意大小寫）
- [ ] 變數值包含完整的 WordPress API URL
- [ ] URL 格式正確：`https://your-site.com/wp-json/wp/v2`
- [ ] 已選擇所有需要的環境（Production, Preview, Development）
- [ ] 已重新部署專案（環境變數更改後需要重新部署）

---

## 🔍 驗證環境變數是否生效

### 方法 1：查看構建日誌

1. 在 Vercel 專案中，點擊最新的部署
2. 查看 **"Build Logs"**
3. 如果看到 WordPress API 相關的錯誤，可能是環境變數未正確設置

### 方法 2：在代碼中檢查

在 Next.js 代碼中，環境變數會自動可用：

```typescript
// 在服務器端或客戶端都可以訪問
const apiUrl = process.env.NEXT_PUBLIC_WP_API_URL
console.log('WordPress API URL:', apiUrl)
```

### 方法 3：訪問網站測試

1. 訪問部署的網站
2. 打開瀏覽器開發者工具（F12）
3. 查看 Console 是否有 WordPress API 相關錯誤
4. 訪問 `/zh-TW/blog` 頁面，檢查是否能正常顯示文章

---

## 🐛 常見問題

### 問題 1：環境變數設置後仍然無效

**解決方法：**
1. 確認已重新部署專案
2. 檢查變數名稱是否正確（注意大小寫）
3. 確認變數值沒有多餘的空格
4. 清除瀏覽器緩存

### 問題 2：不知道 WordPress API URL

**查找方法：**
1. 訪問您的 WordPress 網站
2. 在瀏覽器中訪問：`https://your-wordpress-site.com/wp-json/wp/v2/posts`
3. 如果看到 JSON 數據，說明 API 正常工作
4. API URL 就是：`https://your-wordpress-site.com/wp-json/wp/v2`

### 問題 3：WordPress 在不同域名

**解決方法：**
- 如果 WordPress 在子目錄：`https://example.com/blog/wp-json/wp/v2`
- 如果 WordPress 在不同域名：使用完整的 WordPress 域名
- 確保 WordPress 網站可以公開訪問

### 問題 4：CORS 錯誤

**解決方法：**
1. 在 WordPress 的 `functions.php` 中添加：
```php
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```

2. 或安裝 WordPress CORS 插件

---

## 📸 視覺化步驟（文字描述）

### 在 Vercel Dashboard 中：

1. **專案列表頁面**
   - 您會看到所有專案
   - 點擊要設置的專案

2. **專案概覽頁面**
   - 頂部有標籤：Overview, Deployments, Settings, Analytics, Logs
   - 點擊 **"Settings"**

3. **設置頁面**
   - 左側選單包含：
     - General
     - **Environment Variables** ← 點擊這個
     - Git
     - Domains
     - 等等...

4. **環境變數頁面**
   - 會看到一個表格，顯示現有的環境變數
   - 右上角有 **"Add New"** 按鈕
   - 點擊後會彈出對話框

5. **添加環境變數對話框**
   - Key 輸入框：輸入 `NEXT_PUBLIC_WP_API_URL`
   - Value 輸入框：輸入您的 WordPress API URL
   - Environment 選項：勾選 Production, Preview, Development
   - 底部有 **"Save"** 按鈕

---

## ✅ 設置完成後

環境變數設置完成並重新部署後：

1. ✅ 構建應該會成功
2. ✅ 網站可以正常連接 WordPress API
3. ✅ Blog 和 Courses 頁面可以顯示 WordPress 內容

---

**需要幫助？** 如果設置過程中遇到問題，請查看 Vercel 構建日誌或聯繫支援。


