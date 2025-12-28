@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "PROJECT_PATH=%~dp0"
title WordPress 管理系統 - 連接埠 5200-5299
color 0B
echo.
echo ========================================
echo        WordPress 管理系統
echo    連接埠範圍: 5200-5299
echo    專案路徑: %PROJECT_PATH%
echo ========================================
echo.

REM 檢查 Node.js 是否已安裝
where node >nul 2>&1
if errorlevel 1 (
    echo [錯誤] 找不到 Node.js，請先安裝 Node.js
    echo 下載地址: https://nodejs.org/
    pause
    exit /b 1
)

REM 檢查 MySQL 是否啟動
if exist "C:\xampp\mysql\bin\mysqld.exe" (
    echo [資訊] 偵測到 XAMPP MySQL
    netstat -an | findstr ":3306" | findstr "LISTENING" >nul 2>&1
    if errorlevel 1 (
        echo [警告] MySQL 服務尚未在連接埠 3306 上監聽
        echo [建議] 請前往 XAMPP Control Panel 啟動 MySQL 服務
        echo.
    ) else (
        echo [資訊] MySQL 服務正在連接埠 3306 上監聽
    )
    echo.
)

REM 檢查連接埠是否已被佔用
echo [資訊] 正在檢查連接埠使用狀況...
echo.

set PORT_5200=5200
set PORT_5201=5201
set PORT_5202=5202

netstat -an | findstr ":%PORT_5200%" | findstr "LISTENING" >nul 2>&1
if errorlevel 1 (
    echo [資訊] 連接埠 5200 可用
) else (
    echo [警告] 連接埠 5200 已被佔用
)

netstat -an | findstr ":%PORT_5201%" | findstr "LISTENING" >nul 2>&1
if errorlevel 1 (
    echo [資訊] 連接埠 5201 可用
) else (
    echo [警告] 連接埠 5201 已被佔用
)

netstat -an | findstr ":%PORT_5202%" | findstr "LISTENING" >nul 2>&1
if errorlevel 1 (
    echo [資訊] 連接埠 5202 可用
) else (
    echo [警告] 連接埠 5202 已被佔用
)

echo.
echo ========================================
echo           請選擇要執行的操作
echo ========================================
echo.
echo 1. AI 網站前端應用 (Next.js) - 連接埠 5200
echo 2. 啟動所有服務
echo 3. 離開
echo.
set /p choice="請選擇 (1-3): "

if "%choice%"=="1" (
    echo.
    echo [資訊] 正在啟動 AI 網站前端應用...
    echo [資訊] 應用程式將在 http://localhost:5200 運行
    echo.
    call start.bat
) else if "%choice%"=="2" (
    echo.
    echo [資訊] 正在啟動所有服務...
    echo.
    
    REM 啟動 AI 網站前端應用（連接埠 5200）
    echo [資訊] 啟動 AI 網站前端應用 (連接埠 5200)...
    start "AI網站-前端-5200" cmd /k "cd /d %~dp0 && title [AI網站-前端] Port 5200 && color 0A && npm run dev"
    
    echo [完成] 所有服務已啟動
    echo.
    echo 應用程式:
    echo - AI 網站前端應用: http://localhost:5200
    echo.
    echo 注意: 每個服務都在獨立的視窗中運行
    echo 關閉視窗即可停止對應的服務
    echo.
    pause
) else if "%choice%"=="3" (
    exit /b 0
) else (
    echo [錯誤] 無效的選擇
    pause
    exit /b 1
)