@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 一鍵部署到 Vercel
color 0B
echo.
echo ========================================
echo    一鍵部署到 Vercel
echo ========================================
echo.
echo 此腳本提供兩種部署方式：
echo.
echo [方式 1] 推送到 GitHub（推薦）
echo   - 自動推送到 GitHub
echo   - Vercel 會自動檢測並部署
echo   - 適合已連接 GitHub 的專案
echo.
echo [方式 2] 使用 Vercel CLI 直接部署
echo   - 需要先安裝 Vercel CLI: npm i -g vercel
echo   - 需要先登入: vercel login
echo   - 直接部署到 Vercel（不經過 GitHub）
echo.
echo ========================================
echo.

REM 檢查 Git 狀態
git status --short >nul 2>&1
set is_git_repo=%errorlevel%

REM 檢查 Vercel CLI
where vercel >nul 2>&1
set has_vercel_cli=%errorlevel%

echo [選項]
echo 1. 推送到 GitHub（自動觸發 Vercel 部署）
if %has_vercel_cli%==0 (
    echo 2. 使用 Vercel CLI 直接部署
    echo 3. 兩種方式都執行
) else (
    echo 2. 使用 Vercel CLI 直接部署（需要先安裝）
)
echo 0. 取消
echo.
set /p choice="請選擇部署方式 (0-3): "

if "%choice%"=="0" (
    echo 已取消
    pause
    exit /b 0
)

if "%choice%"=="1" goto github_deploy
if "%choice%"=="2" goto vercel_cli_deploy
if "%choice%"=="3" goto both_deploy
echo 無效選擇
pause
exit /b 1

:github_deploy
echo.
echo ========================================
echo    方式 1: 推送到 GitHub
echo ========================================
echo.

if %is_git_repo% neq 0 (
    echo [錯誤] 當前目錄不是 Git 倉庫
    echo [提示] 請先初始化 Git 倉庫
    pause
    exit /b 1
)

REM 顯示當前更改
echo [資訊] 當前更改：
git status --short
echo.

REM 檢查是否有更改
git diff --quiet HEAD
if %errorlevel%==0 (
    git diff --cached --quiet
    if %errorlevel%==0 (
        echo [資訊] 沒有需要提交的更改
        echo [資訊] 直接推送到 GitHub...
        goto push_only
    )
)

REM 添加所有更改
echo [步驟 1/3] 添加所有更改...
git add .
if errorlevel 1 (
    echo [錯誤] 添加文件失敗
    pause
    exit /b 1
)
echo [完成] 文件已添加
echo.

REM 提交更改
echo [步驟 2/3] 提交更改...
set /p commit_msg="請輸入提交訊息（直接按 Enter 使用默認訊息）: "
if "%commit_msg%"=="" (
    set commit_msg=更新：自動部署到 Vercel - %date% %time%
)

git commit -m "%commit_msg%"
if errorlevel 1 (
    echo [警告] 提交失敗，可能沒有更改需要提交
    echo [資訊] 嘗試直接推送...
    goto push_only
)
echo [完成] 更改已提交
echo.

:push_only
REM 推送到 GitHub
echo [步驟 3/3] 推送到 GitHub...
git push
if errorlevel 1 (
    echo [錯誤] 推送失敗
    echo [提示] 請檢查：
    echo   1. 是否已設置遠程倉庫: git remote -v
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
goto end

:vercel_cli_deploy
echo.
echo ========================================
echo    方式 2: 使用 Vercel CLI 直接部署
echo ========================================
echo.

if %has_vercel_cli% neq 0 (
    echo [錯誤] 未檢測到 Vercel CLI
    echo.
    echo [安裝步驟]
    echo 1. 安裝 Vercel CLI:
    echo    npm i -g vercel
    echo.
    echo 2. 登入 Vercel:
    echo    vercel login
    echo.
    echo 3. 重新運行此腳本
    echo.
    pause
    exit /b 1
)

echo [資訊] 檢測到 Vercel CLI
echo [資訊] 開始部署到 Vercel...
echo.

REM 詢問部署環境
echo [選項]
echo 1. 部署到生產環境 (--prod)
echo 2. 部署到預覽環境
echo.
set /p env_choice="請選擇部署環境 (1-2): "

if "%env_choice%"=="1" (
    echo [資訊] 部署到生產環境...
    call vercel --prod
) else if "%env_choice%"=="2" (
    echo [資訊] 部署到預覽環境...
    call vercel
) else (
    echo 無效選擇，使用預覽環境
    call vercel
)

if errorlevel 1 (
    echo [錯誤] 部署失敗
    echo [提示] 請檢查：
    echo   1. 是否已登入 Vercel: vercel login
    echo   2. 是否已初始化專案: vercel
    echo   3. 網絡連接是否正常
    pause
    exit /b 1
)

echo.
echo ========================================
echo    [完成] 已部署到 Vercel
echo ========================================
echo.
goto end

:both_deploy
echo.
echo ========================================
echo    方式 3: 兩種方式都執行
echo ========================================
echo.

REM 先執行 GitHub 部署
call :github_deploy
if errorlevel 1 (
    echo [警告] GitHub 部署失敗，跳過 Vercel CLI 部署
    pause
    exit /b 1
)

echo.
echo [資訊] 等待 2 秒後執行 Vercel CLI 部署...
timeout /t 2 /nobreak >nul

REM 再執行 Vercel CLI 部署
if %has_vercel_cli%==0 (
    call :vercel_cli_deploy
) else (
    echo [跳過] 未安裝 Vercel CLI，僅使用 GitHub 自動部署
)

goto end

:end
echo.
echo ========================================
echo    部署流程完成
echo ========================================
echo.
echo [提示] 查看部署狀態：
echo   - Vercel Dashboard: https://vercel.com/dashboard
echo   - GitHub Actions: https://github.com/您的用戶名/您的倉庫/actions
echo.
pause


