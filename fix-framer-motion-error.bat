@echo off
chcp 65001 >nul
echo ========================================
echo 修復 framer-motion 模組錯誤
echo ========================================
echo.

echo [步驟 1/5] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 3 /nobreak >nul
echo     完成
echo.

echo [步驟 2/5] 清除 .next 構建目錄...
if exist .next (
    rmdir /s /q .next
    echo     .next 目錄已刪除
) else (
    echo     .next 目錄不存在
)
echo.

echo [步驟 3/5] 清除 node_modules 緩存...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo     node_modules\.cache 已刪除
) else (
    echo     node_modules\.cache 不存在
)
echo.

echo [步驟 4/5] 重新安裝依賴...
echo     這可能需要幾分鐘，請稍候...
call npm install
if errorlevel 1 (
    echo     [錯誤] npm install 失敗
    pause
    exit /b 1
) else (
    echo     [成功] 依賴安裝完成
)
echo.

echo [步驟 5/5] 驗證 framer-motion...
if exist "node_modules\framer-motion" (
    echo     ✓ framer-motion 已安裝
) else (
    echo     ✗ 錯誤：framer-motion 未安裝
    pause
    exit /b 1
)

echo.
echo ========================================
echo 修復完成！
echo ========================================
echo.
echo 現在請執行以下命令重新啟動開發服務器：
echo   npm run dev
echo.
pause

