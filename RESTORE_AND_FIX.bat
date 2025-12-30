@echo off
chcp 65001 >nul
echo ========================================
echo 修復 404 問題 - 完整解決方案
echo ========================================
echo.

echo [步驟 1/3] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo     完成
echo.

echo [步驟 2/3] 清除 Next.js 緩存...
if exist .next (
    rmdir /s /q .next
    echo     .next 目錄已刪除
) else (
    echo     .next 目錄不存在（跳過）
)
echo.

echo [步驟 3/3] 驗證關鍵文件...
if exist "app\[locale]\page.tsx" (
    echo     ✓ app\[locale]\page.tsx 存在
) else (
    echo     ✗ 錯誤：app\[locale]\page.tsx 不存在！
    pause
    exit /b 1
)

if exist "app\[locale]\layout.tsx" (
    echo     ✓ app\[locale]\layout.tsx 存在
) else (
    echo     ✗ 錯誤：app\[locale]\layout.tsx 不存在！
    pause
    exit /b 1
)

if exist "middleware.ts" (
    echo     ✓ middleware.ts 存在
) else (
    echo     ✗ 錯誤：middleware.ts 不存在！
    pause
    exit /b 1
)

echo.
echo ========================================
echo 清理完成！
echo ========================================
echo.
echo 請執行以下命令重新啟動開發服務器：
echo   npm run dev
echo.
echo 然後訪問：http://localhost:5200
echo 應該會自動重定向到：http://localhost:5200/zh-TW
echo.
pause


