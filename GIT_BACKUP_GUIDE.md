# Git 備份指南

## ✅ 已完成

✅ 已創建獨立分支：`ai-education-backup`  
✅ 已提交您的自訂文件  
✅ 已更新 .gitignore（忽略環境變數文件）

## 📦 推薦：創建您自己的 GitHub 倉庫

為了確保與其他專案（如 greed island）完全分離，建議創建一個新的 GitHub 倉庫：

### 步驟 1：在 GitHub 創建新倉庫

1. 登入 GitHub
2. 點擊右上角的 "+" → "New repository"
3. 倉庫名稱建議：`ai-education-next-wp` 或 `next-wp-ai-edu`
4. 選擇 Private（私人）或 Public（公開）
5. **不要**初始化 README、.gitignore 或 license（我們已經有了）
6. 點擊 "Create repository"

### 步驟 2：更改遠端倉庫地址

創建新倉庫後，GitHub 會顯示倉庫 URL，然後執行：

```bash
# 移除舊的遠端（原始 next-wp 倉庫）
git remote remove origin

# 添加您的新倉庫作為遠端
git remote add origin https://github.com/您的用戶名/ai-education-next-wp.git

# 或者使用 SSH（如果您設置了 SSH key）
# git remote add origin git@github.com:您的用戶名/ai-education-next-wp.git

# 推送備份分支到新倉庫
git push -u origin ai-education-backup

# 也可以推送 main 分支作為主分支
git push -u origin main
```

### 步驟 3：驗證

```bash
# 檢查遠端配置
git remote -v

# 應該顯示您的新倉庫地址
```

## 🔄 日常備份流程

之後每次有更改，執行：

```bash
# 切換到備份分支（如果不在的話）
git checkout ai-education-backup

# 添加更改的文件
git add .

# 提交更改
git commit -m "描述您的更改"

# 推送到 GitHub
git push origin ai-education-backup
```

## 📁 當前分支說明

- `main` - 原始 next-wp 模板的主分支
- `ai-education-backup` - 您的自訂備份分支（包含 SETUP_README.md 等自訂文件）

## ⚠️ 重要提醒

1. **環境變數文件不會被提交**
   - `.env.local` 已被 .gitignore 忽略
   - 包含敏感資訊，不應該推送到 Git

2. **與其他專案分離**
   - 使用獨立的 GitHub 倉庫
   - 使用不同的分支名稱
   - 不會與 greed island 或其他專案混淆

3. **備份頻率建議**
   - 每次重要功能完成後備份
   - 每次部署前備份
   - 定期備份（每週一次）

## 🔗 快速指令參考

```bash
# 查看當前分支
git branch

# 查看提交歷史
git log --oneline

# 查看未提交的更改
git status

# 推送更改
git push origin ai-education-backup

# 拉取最新更改
git pull origin ai-education-backup
```

---

**提示**：如果您還沒有 GitHub 帳號，可以：
1. 免費註冊：https://github.com
2. 或者只在本地使用 Git（但沒有雲端備份）

