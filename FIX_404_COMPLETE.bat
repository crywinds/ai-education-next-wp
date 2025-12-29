@echo off
echo ========================================
echo 修復 404 問題 - 完整解決方案
echo ========================================
echo.

echo [1/4] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/4] 清除 Next.js 緩存...
if exist .next (
    rmdir /s /q .next
    echo     .next 目錄已刪除
) else (
    echo     .next 目錄不存在
)

echo [3/4] 清除 node_modules 緩存...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo     node_modules\.cache 已刪除
)

echo [4/4] 驗證文件結構...
if exist "app\[locale]\page.tsx" (
    echo     ✓ app\[locale]\page.tsx 存在
) else (
    echo     ✗ app\[locale]\page.tsx 不存在！
    pause
    exit /b 1
)

if exist "app\[locale]\layout.tsx" (
    echo     ✓ app\[locale]\layout.tsx 存在
) else (
    echo     ✗ app\[locale]\layout.tsx 不存在！
    pause
    exit /b 1
)

echo.
echo ========================================
echo 清理完成！
echo ========================================
echo.
echo 請執行以下命令重新啟動：
echo   npm run dev
echo.
echo 然後訪問：http://localhost:5200
echo.
pause

