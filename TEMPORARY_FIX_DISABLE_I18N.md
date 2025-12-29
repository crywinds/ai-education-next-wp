# 臨時修復方案 - 暫時禁用多語系

如果多語系導致網站無法訪問，可以暫時禁用多語系功能：

## 步驟 1: 備份當前配置
```bash
copy middleware.ts middleware.ts.backup
copy next.config.js next.config.js.backup
```

## 步驟 2: 暫時禁用 middleware
將 `middleware.ts` 重命名為 `middleware.ts.disabled`

## 步驟 3: 創建簡單的根 layout
確保 `app/layout.tsx` 包含完整的 HTML 結構

## 步驟 4: 移動頁面回根目錄
將 `app/[locale]/page.tsx` 複製到 `app/page.tsx`

## 步驟 5: 清除緩存並重啟
```bash
rmdir /s /q .next
npm run dev
```

這樣可以暫時恢復網站功能，然後再逐步修復多語系問題。

