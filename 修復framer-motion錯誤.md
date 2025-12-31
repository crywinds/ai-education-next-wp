# 修復 framer-motion 模組錯誤

## 🔍 錯誤訊息

```
Error: Cannot find module './vendor-chunks/framer-motion.js'
```

## ✅ 解決方案

### 方法一：使用修復腳本（推薦）

```bash
fix-framer-motion-error.bat
```

這個腳本會：
1. 停止所有 Node.js 進程
2. 清除 `.next` 構建目錄
3. 清除 `node_modules/.cache`
4. 重新安裝依賴
5. 驗證 framer-motion 安裝

### 方法二：手動修復

#### 步驟 1：停止開發服務器

按 `Ctrl+C` 停止開發服務器，或執行：
```bash
taskkill /F /IM node.exe
```

#### 步驟 2：清除所有緩存

```bash
# 刪除 .next 目錄
rmdir /s /q .next

# 刪除 node_modules 緩存
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"
```

#### 步驟 3：重新安裝依賴

```bash
npm install
```

#### 步驟 4：重新啟動開發服務器

```bash
npm run dev
```

### 方法三：完全重新安裝（如果以上方法無效）

```bash
# 1. 停止所有進程
taskkill /F /IM node.exe

# 2. 刪除構建目錄和緩存
rmdir /s /q .next
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache"

# 3. 刪除 node_modules（可選，但更徹底）
rmdir /s /q node_modules

# 4. 重新安裝所有依賴
npm install

# 5. 重新啟動
npm run dev
```

## 🔧 已更新的配置

已更新 `next.config.js`，添加了 webpack 配置來確保 framer-motion 正確打包：

```javascript
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
  }
  return config
}
```

## 📋 驗證修復

修復後，確認：

1. **framer-motion 已安裝**
   ```bash
   dir node_modules\framer-motion
   ```

2. **.next 目錄已清除**
   ```bash
   dir .next
   ```
   如果目錄不存在，說明已清除成功

3. **開發服務器正常啟動**
   - 訪問 `http://localhost:5200/zh-TW`
   - 不應該再看到 framer-motion 錯誤

## 🐛 如果問題仍然存在

### 檢查項目

1. **確認 framer-motion 版本**
   ```bash
   npm list framer-motion
   ```
   應該顯示 `framer-motion@12.23.26` 或更高版本

2. **檢查 package.json**
   確認 `package.json` 中包含：
   ```json
   "framer-motion": "^12.23.26"
   ```

3. **檢查 Next.js 版本**
   ```bash
   npm list next
   ```
   應該顯示 `next@14.0.4` 或更高版本

4. **查看構建日誌**
   重新啟動開發服務器時，查看終端是否有其他錯誤訊息

### 可能的其他原因

1. **Node.js 版本問題**
   - 確保使用 Node.js 18.x 或更高版本
   - 檢查：`node --version`

2. **npm 緩存問題**
   ```bash
   npm cache clean --force
   npm install
   ```

3. **權限問題**
   - 確保有權限刪除 `.next` 目錄
   - 嘗試以管理員身份運行命令

## 📊 預期結果

修復成功後：
- ✅ 開發服務器正常啟動
- ✅ 沒有 framer-motion 相關錯誤
- ✅ 網站正常顯示，動畫效果正常運作

---

**提示：** 這個錯誤通常是構建緩存問題，清除 `.next` 目錄通常可以解決。


