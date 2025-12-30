@echo off
chcp 65001 >nul
echo ========================================
echo 清除 Next.js 緩存
echo ========================================
echo.

echo [步驟 1/3] 停止所有 Node.js 進程...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo     完成
echo.

echo [步驟 2/3] 清除 .next 目錄...
if exist .next (
    rmdir /s /q .next
    echo     .next 目錄已刪除
) else (
    echo     .next 目錄不存在
)
echo.

echo [步驟 3/3] 清除 node_modules 緩存...
if exist "node_modules\.cache" (
    rmdir /s /q "node_modules\.cache"
    echo     node_modules\.cache 已刪除
) else (
    echo     node_modules\.cache 不存在
)
echo.

echo ========================================
echo 緩存清除完成！
echo ========================================
echo.
echo 請執行以下命令重新啟動開發服務器：
echo   npm run dev
echo.
pause

