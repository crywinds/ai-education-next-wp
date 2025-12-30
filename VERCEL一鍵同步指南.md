# 🚀 Vercel 一鍵同步指南

## 📋 概述

本指南說明如何使用一鍵腳本將代碼同步到 Vercel。

## 🎯 兩種部署方式

### 方式 1：推送到 GitHub（推薦）⭐

**優點：**
- ✅ 自動觸發 Vercel 部署
- ✅ 保留完整的 Git 歷史
- ✅ 可以在 GitHub 查看代碼變更
- ✅ 支持協作開發

**工作原理：**
1. 本地代碼推送到 GitHub
2. Vercel 自動檢測到 GitHub 的更改
3. Vercel 自動開始構建和部署

### 方式 2：使用 Vercel CLI 直接部署

**優點：**
- ✅ 不經過 GitHub，直接部署
- ✅ 部署速度更快
- ✅ 適合快速測試

**缺點：**
- ⚠️ 需要安裝 Vercel CLI
- ⚠️ 需要先登入 Vercel

## 🚀 快速開始

### 方法 A：使用批處理腳本（Windows）

1. **雙擊運行**
   ```
   一鍵部署到Vercel.bat
   ```

2. **選擇部署方式**
   - 選擇 `1` - 推送到 GitHub（推薦）
   - 選擇 `2` - 使用 Vercel CLI 直接部署
   - 選擇 `3` - 兩種方式都執行

3. **完成**
   - 腳本會自動執行所有步驟
   - 部署完成後會顯示提示信息

### 方法 B：使用 npm 腳本

1. **運行部署命令**
   ```bash
   npm run deploy
   ```

2. **按照提示操作**
   - 輸入提交訊息（可選）
   - 等待推送完成

### 方法 C：使用 Vercel CLI（需要先安裝）

1. **安裝 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登入 Vercel**
   ```bash
   vercel login
   ```

3. **部署到生產環境**
   ```bash
   npm run deploy:vercel
   ```

4. **或部署到預覽環境**
   ```bash
   npm run deploy:preview
   ```

## 📝 使用步驟詳解

### 步驟 1：準備代碼

確保您的代碼已經準備好：
- ✅ 本地測試通過
- ✅ 沒有錯誤
- ✅ 已保存所有文件

### 步驟 2：運行部署腳本

**Windows:**
```bash
一鍵部署到Vercel.bat
```

**或使用 npm:**
```bash
npm run deploy
```

### 步驟 3：選擇部署方式

根據您的需求選擇：
- **推送到 GitHub** - 適合正式部署
- **Vercel CLI** - 適合快速測試

### 步驟 4：等待部署完成

- GitHub 推送：通常 1-2 秒
- Vercel 構建：通常 1-3 分鐘

### 步驟 5：查看部署狀態

訪問 Vercel Dashboard：
```
https://vercel.com/dashboard
```

## 🔧 設置自動部署（推薦）

### 第一次設置

1. **連接 GitHub 倉庫到 Vercel**
   - 訪問 https://vercel.com
   - 點擊 "Add New" → "Project"
   - 選擇您的 GitHub 倉庫
   - 完成設置

2. **設置環境變數**
   - 在 Vercel 專案設置中
   - 添加 `NEXT_PUBLIC_WP_API_URL` 環境變數

### 之後每次部署

只需要運行：
```bash
一鍵部署到Vercel.bat
```

或：
```bash
npm run deploy
```

Vercel 會自動：
- ✅ 檢測 GitHub 的更改
- ✅ 自動開始構建
- ✅ 自動部署到生產環境

## 📊 部署流程圖

```
本地代碼
    ↓
[運行部署腳本]
    ↓
推送到 GitHub
    ↓
Vercel 自動檢測
    ↓
自動構建
    ↓
自動部署
    ↓
網站更新完成 ✅
```

## 🐛 常見問題

### 問題 1：推送失敗

**錯誤訊息：**
```
[錯誤] 推送失敗
```

**解決方法：**
1. 檢查是否已設置遠程倉庫：
   ```bash
   git remote -v
   ```

2. 如果沒有，添加遠程倉庫：
   ```bash
   git remote add origin https://github.com/您的用戶名/您的倉庫.git
   ```

3. 檢查推送權限

### 問題 2：Vercel CLI 未安裝

**錯誤訊息：**
```
[錯誤] 未檢測到 Vercel CLI
```

**解決方法：**
```bash
npm i -g vercel
vercel login
```

### 問題 3：Vercel 未自動部署

**檢查項目：**
1. 確認 GitHub 倉庫已連接到 Vercel
2. 確認 Vercel 專案設置正確
3. 查看 Vercel Dashboard 是否有錯誤

## 💡 最佳實踐

1. **提交前測試**
   - 本地運行 `npm run build` 確保沒有錯誤
   - 本地運行 `npm run dev` 測試功能

2. **有意義的提交訊息**
   - 描述本次更改的內容
   - 方便日後追蹤

3. **定期部署**
   - 完成一個功能後立即部署
   - 不要累積太多更改

4. **監控部署狀態**
   - 部署後檢查 Vercel Dashboard
   - 確認網站正常運行

## 📚 相關文檔

- [Vercel 文檔](https://vercel.com/docs)
- [Git 基礎](https://git-scm.com/doc)
- [部署指南](./VERCEL_DEPLOY.md)

---

**提示：** 第一次使用時，建議先推送到 GitHub，然後在 Vercel 中連接倉庫，之後就可以使用一鍵部署了！

