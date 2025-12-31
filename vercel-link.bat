@echo off
echo ========================================
echo 連接 Vercel 項目
echo ========================================
echo.
echo 項目 ID: prj_S0hUHJSetVeIV55AuIlybmd7sPmE
echo.

REM 檢查是否已登錄
vercel whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo 需要先登錄 Vercel...
    echo 請在瀏覽器中完成登錄
    vercel login
    if %errorlevel% neq 0 (
        echo 登錄失敗，請手動執行: vercel login
        pause
        exit /b 1
    )
)

echo.
echo 正在連接到項目...
vercel link --project prj_S0hUHJSetVeIV55AuIlybmd7sPmE --yes

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo 連接成功！
    echo ========================================
    echo.
    echo 現在可以執行部署：
    echo   vercel --prod --yes
    echo 或
    echo   npm run deploy:vercel
    echo.
) else (
    echo.
    echo ========================================
    echo 連接失敗
    echo ========================================
    echo.
    echo 請檢查：
    echo 1. 是否已登錄 Vercel (vercel login)
    echo 2. 項目 ID 是否正確
    echo 3. 是否有該項目的訪問權限
    echo.
)

pause
