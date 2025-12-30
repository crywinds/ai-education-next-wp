@echo off
chcp 65001 >nul
echo ========================================
echo 修復本地 CSS 崩塌問題
echo ========================================
echo.

echo [步驟 1/4] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
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
if exist "app\globals.css" (
    echo     ✓ app\globals.css 存在
) else (
    echo     ✗ 錯誤：app\globals.css 不存在！
    pause
    exit /b 1
)

if exist "app\layout.tsx" (
    echo     ✓ app\layout.tsx 存在
) else (
    echo     ✗ 錯誤：app\layout.tsx 不存在！
    pause
    exit /b 1
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
echo   1. 清除瀏覽器緩存（Ctrl+Shift+Delete）
echo   2. 使用無痕模式訪問
echo   3. 檢查端口 5200 是否被佔用
echo.
pause

