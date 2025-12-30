# Vercel 部署錯誤修復指南

## ✅ 已修復的問題

### 問題：構建錯誤 - Failed to collect page data for /[locale]/blog/[slug]

**原因：**
- `generateStaticParams` 在構建時嘗試從 WordPress API 獲取數據
- 如果 WordPress API 不可用或環境變數未設置，會導致構建失敗

**修復：**
1. ✅ 添加了錯誤處理，即使 API 失敗也不會導致構建失敗
2. ✅ 更新了 `params` 類型為 `Promise<{ locale: string, slug: string }>`（符合 Next.js 14+）
3. ✅ 設置為動態路由（`dynamic = 'force-dynamic'`），避免構建時需要 WordPress API

## 📋 部署前檢查清單

### 1. 環境變數設置 ⚠️ 必須

在 Vercel 專案設置中，確保已設置：

| 變數名稱 | 值 | 環境 |
|---------|-----|------|
| `NEXT_PUBLIC_WP_API_URL` | `https://your-wordpress-site.com/wp-json/wp/v2` | Production, Preview, Development |

**重要提示：**
- 將 `your-wordpress-site.com` 替換為您的實際 WordPress 網站域名
- 確保 WordPress 網站可以公開訪問
- URL 必須包含 `https://` 和 `/wp-json/wp/v2`

### 2. WordPress API 可訪問性

在部署前，測試 WordPress API 是否可訪問：

```bash
# 在瀏覽器中訪問
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

如果看到 JSON 數據，說明 API 正常工作 ✅

### 3. 本地構建測試

在推送到 GitHub 前，先測試本地構建：

```bash
npm run build
```

如果本地構建成功，Vercel 構建通常也會成功。

## 🔧 如果構建仍然失敗

### 檢查構建日誌

1. 在 Vercel 專案中，點擊失敗的部署
2. 查看 **"Build Logs"** 中的錯誤訊息
3. 常見錯誤：
   - `NEXT_PUBLIC_WP_API_URL` 未設置 → 設置環境變數
   - WordPress API 連接失敗 → 檢查 WordPress 網站是否可訪問
   - TypeScript 錯誤 → 修復代碼錯誤

### 常見錯誤解決方案

#### 錯誤 1：環境變數未設置

**錯誤訊息：**
```
Error: NEXT_PUBLIC_WP_API_URL is not defined
```

**解決方法：**
1. 在 Vercel 專案設置中，進入 **"Environment Variables"**
2. 添加 `NEXT_PUBLIC_WP_API_URL` 變數
3. 重新部署

#### 錯誤 2：WordPress API 連接失敗

**錯誤訊息：**
```
Error: connect ECONNREFUSED
Error: Request failed with status code 404
```

**解決方法：**
1. 確認 WordPress 網站可以公開訪問
2. 測試 API 端點：`https://your-wordpress-site.com/wp-json/wp/v2/posts`
3. 檢查環境變數 URL 是否正確
4. 確認 WordPress REST API 已啟用

#### 錯誤 3：動態路由構建失敗

**錯誤訊息：**
```
Error: Failed to collect page data for /[locale]/blog/[slug]
```

**解決方法：**
- ✅ 已修復：頁面現在設置為動態路由，不會在構建時失敗
- 如果仍然失敗，檢查環境變數是否正確設置

## 🚀 重新部署步驟

1. **確保環境變數已設置**
   - 在 Vercel 專案設置中檢查環境變數

2. **推送最新代碼到 GitHub**
   ```bash
   git add .
   git commit -m "修復 Vercel 部署錯誤"
   git push origin main
   ```

3. **Vercel 會自動觸發新部署**
   - 或手動在 Vercel 中點擊 **"Redeploy"**

4. **監控構建過程**
   - 在 Vercel 中查看構建日誌
   - 等待構建完成

## 📊 部署成功後驗證

1. **訪問網站**
   - 訪問 Vercel 分配的 URL
   - 測試主要頁面：`/zh-TW`, `/zh-TW/blog`, `/zh-TW/courses`

2. **檢查 WordPress 連接**
   - 訪問 `/zh-TW/blog` 查看是否顯示 WordPress 文章
   - 如果沒有文章，檢查環境變數和 WordPress API

3. **檢查動態路由**
   - 訪問文章詳情頁面（如果 WordPress 有文章）
   - 確認頁面正常顯示

## 🔄 後續更新

每次更新代碼後：
1. 推送到 GitHub
2. Vercel 會自動部署
3. 檢查部署是否成功

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 動態路由](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [環境變數配置](https://vercel.com/docs/concepts/projects/environment-variables)

---

**需要幫助？** 查看 Vercel 構建日誌或聯繫支援。

