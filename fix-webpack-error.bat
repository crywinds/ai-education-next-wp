@echo off
chcp 65001 >nul
echo ========================================
echo 修復 Webpack 模組錯誤
echo ========================================
echo.

echo [步驟 1/4] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 3 /nobreak >nul
echo     完成
echo.

echo [步驟 2/4] 清除 .next 緩存目錄...
if exist .next (
    rmdir /s /q .next
    echo     .next 目錄已刪除
) else (
    echo     .next 目錄不存在
)
echo.

echo [步驟 3/4] 清除 node_modules 緩存...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo     node_modules\.cache 已刪除
) else (
    echo     node_modules\.cache 不存在
)
echo.

echo [步驟 4/4] 驗證關鍵文件...
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

if not exist "app\page.tsx" (
    echo     ✓ app\page.tsx 已刪除（避免路由衝突）
) else (
    echo     ⚠ 警告：app\page.tsx 仍然存在
)

echo.
echo ========================================
echo 清理完成！
echo ========================================
echo.
echo 現在請執行以下命令重新啟動開發服務器：
echo   npm run dev
echo.
echo 如果問題仍然存在，請嘗試：
echo   1. 刪除 node_modules 並重新安裝：rmdir /s /q node_modules ^&^& npm install
echo   2. 檢查是否有其他進程佔用端口 5200
echo.
pause


