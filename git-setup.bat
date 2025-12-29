@echo off
chcp 65001 >nul
echo ========================================
echo    Git 遠程倉庫設置腳本
echo ========================================
echo.
echo 請在 GitHub 創建新倉庫後，執行以下命令：
echo.
echo git remote add origin https://github.com/您的用戶名/您的倉庫名.git
echo git branch -M main
echo git push -u origin main
echo.
echo 或者直接執行此腳本，然後輸入您的 GitHub 倉庫 URL
echo.
set /p REPO_URL="請輸入您的 GitHub 倉庫 URL (例如: https://github.com/username/repo.git): "

if "%REPO_URL%"=="" (
    echo [錯誤] 未輸入 URL，退出
    pause
    exit /b 1
)

echo.
echo [資訊] 正在設置遠程倉庫...
git remote add origin %REPO_URL%
if errorlevel 1 (
    echo [警告] 遠程倉庫可能已存在，嘗試更新...
    git remote set-url origin %REPO_URL%
)

echo.
echo [資訊] 正在重命名分支為 main...
git branch -M main

echo.
echo [資訊] 正在推送到 GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo [錯誤] 推送失敗，可能的原因：
    echo 1. GitHub 倉庫 URL 不正確
    echo 2. 需要先登入 GitHub（使用 GitHub Desktop 或配置 SSH）
    echo 3. 倉庫名稱或權限問題
    echo.
    echo 建議使用 GitHub Desktop 或配置 SSH 金鑰
    pause
    exit /b 1
) else (
    echo.
    echo [完成] 代碼已成功推送到 GitHub！
    echo.
    echo 您的倉庫地址：%REPO_URL%
    pause
)


