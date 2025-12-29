@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 快速部署到 Vercel
color 0B
echo.
echo ========================================
echo    快速部署到 Vercel
echo ========================================
echo.
echo 此腳本會：
echo 1. 添加所有更改的文件
echo 2. 提交更改
echo 3. 推送到 GitHub
echo 4. Vercel 會自動部署
echo.
echo ========================================
echo.

REM 檢查 Git 狀態
git status --short >nul 2>&1
if errorlevel 1 (
    echo [錯誤] 當前目錄不是 Git 倉庫
    pause
    exit /b 1
)

REM 顯示當前更改
echo [資訊] 當前更改：
git status --short
echo.

REM 詢問是否繼續
set /p confirm="是否繼續部署？(Y/N): "
if /i not "%confirm%"=="Y" (
    echo 已取消
    pause
    exit /b 0
)

echo.
echo [資訊] 正在添加所有更改...
git add .
if errorlevel 1 (
    echo [錯誤] 添加文件失敗
    pause
    exit /b 1
)

echo.
set /p commit_msg="請輸入提交訊息（直接按 Enter 使用默認訊息）: "
if "%commit_msg%"=="" (
    set commit_msg=更新：自動部署到 Vercel
)

echo.
echo [資訊] 正在提交更改...
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo [警告] 提交失敗，可能沒有更改需要提交
    echo [資訊] 嘗試直接推送...
    goto push
)

:push
echo.
echo [資訊] 正在推送到 GitHub...
git push
if errorlevel 1 (
    echo [錯誤] 推送失敗
    echo [提示] 請檢查：
    echo   1. 是否已設置遠程倉庫
    echo   2. 是否有推送權限
    echo   3. 網絡連接是否正常
    pause
    exit /b 1
)

echo.
echo ========================================
echo    [完成] 代碼已推送到 GitHub
echo ========================================
echo.
echo [資訊] Vercel 會自動檢測更改並開始部署
echo [資訊] 通常需要 1-3 分鐘完成部署
echo.
echo [提示] 您可以在 Vercel 控制台查看部署進度：
echo   https://vercel.com/dashboard
echo.
echo [提示] 部署完成後，您的網站會自動更新：
echo   https://ai-education-next-wp.vercel.app/
echo.
pause

