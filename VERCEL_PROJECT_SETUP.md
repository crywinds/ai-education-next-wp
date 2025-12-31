# Vercel 項目連接指南

## 項目信息
- **項目 ID**: `prj_S0hUHJSetVeIV55AuIlybmd7sPmE`

## 連接步驟

### 方法 1: 使用批處理腳本（推薦）

1. 雙擊運行 `vercel-link.bat`
2. 如果未登錄，腳本會提示您登錄 Vercel
3. 完成後，項目會自動連接到指定的項目 ID

### 方法 2: 使用命令行

#### 步驟 1: 登錄 Vercel
```bash
vercel login
```
這會打開瀏覽器，請完成登錄流程。

#### 步驟 2: 連接項目
```bash
vercel link --project prj_S0hUHJSetVeIV55AuIlybmd7sPmE --yes
```

或使用 npm 腳本：
```bash
npm run vercel:link
```

#### 步驟 3: 部署到生產環境
```bash
vercel --prod --yes
```

或使用 npm 腳本：
```bash
npm run deploy:vercel
```

## 驗證連接

連接成功後，會創建 `.vercel` 目錄，包含：
- `project.json` - 項目配置
- `.gitignore` - 忽略文件

## 部署命令

### 部署到生產環境
```bash
vercel --prod --yes
# 或
npm run deploy:vercel
```

### 部署預覽版本
```bash
vercel --yes
# 或
npm run deploy:preview
```

## 注意事項

1. 確保您有該 Vercel 項目的訪問權限
2. 如果項目 ID 不正確，連接會失敗
3. 連接後，每次 `git push` 可能會觸發自動部署（如果已啟用 Git 集成）

## 故障排除

### 錯誤: No existing credentials found
解決方法：執行 `vercel login` 登錄

### 錯誤: Project not found
解決方法：檢查項目 ID 是否正確，確認您有該項目的訪問權限

### 錯誤: Invalid token
解決方法：重新登錄 `vercel login`
