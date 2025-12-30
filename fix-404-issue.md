# 修復 404 問題的步驟

## 問題診斷
- ✅ 文件 `app/[locale]/page.tsx` 存在
- ✅ Middleware 配置正確
- ✅ Layout 配置正確
- ❌ 訪問 `/zh-TW` 時顯示 404

## 解決步驟

### 1. 完全停止開發服務器
- 在終端按 `Ctrl+C` 完全停止
- 確認進程已結束

### 2. 清除所有緩存
```bash
# 刪除 .next 目錄
rmdir /s /q .next

# 刪除 node_modules/.cache（如果存在）
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
```

### 3. 重新安裝依賴（可選）
```bash
npm install
```

### 4. 重新啟動開發服務器
```bash
npm run dev
```

### 5. 訪問測試
- 訪問 `http://localhost:5200` - 應該自動重定向到 `/zh-TW`
- 直接訪問 `http://localhost:5200/zh-TW` - 應該顯示首頁

## 如果仍然 404

### 檢查終端錯誤
查看開發服務器終端是否有錯誤訊息

### 檢查瀏覽器控制台
按 F12 打開開發者工具，查看 Console 是否有錯誤

### 驗證文件結構
確保目錄結構如下：
```
app/
  [locale]/
    page.tsx      ← 首頁文件
    layout.tsx     ← Layout 文件
    about/
    services/
    ...
```

### 檢查 Next.js 版本
```bash
npm list next
```
確保使用 Next.js 14.x


