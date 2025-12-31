@echo off
chcp 65001 >nul
echo 正在停止佔用端口 5200 的進程...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5200 ^| findstr LISTENING') do (
    echo 找到進程 ID: %%a
    taskkill /PID %%a /F >nul 2>&1
    if errorlevel 1 (
        echo [錯誤] 無法停止進程 %%a，可能需要管理員權限
    ) else (
        echo [成功] 進程 %%a 已停止
    )
)

timeout /t 2 /nobreak >nul
echo.
echo 端口 5200 現在應該可用了
echo 您可以運行: npm run dev
pause


