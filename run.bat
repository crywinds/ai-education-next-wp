@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Next.js Dev Server - Port 5200
color 0A
echo.
echo ========================================
echo    Starting Next.js Development Server
echo    Project Path: %~dp0
echo    Server URL: http://localhost:5200
echo ========================================
echo.

REM Check if port 5200 is in use
netstat -ano | findstr ":5200" | findstr "LISTENING" >nul 2>&1
if errorlevel 1 goto start_server
echo [WARNING] Port 5200 is already in use
echo [INFO] Attempting to close the process using port 5200...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5200" ^| findstr "LISTENING"') do (
    echo [INFO] Found process PID: %%a
    taskkill /F /PID %%a >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Cannot close process, please close it manually
        pause
        exit /b 1
    ) else (
        echo [SUCCESS] Process closed successfully
    )
)
timeout /t 2 >nul
echo.

:start_server
REM Check if Node.js is installed
where node >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js not found. Please install Node.js first.
    echo Download: https://nodejs.org/
    pause
    exit /b 1
)

echo [INFO] Node.js version:
node --version
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo [INFO] Dependencies not found. Installing...
    echo.
    call npm install
    if errorlevel 1 (
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo.
    echo [SUCCESS] Dependencies installed successfully
    echo.
) else (
    echo [INFO] Dependencies found. Skipping installation.
    echo.
)

REM Start development server
color 0A
echo.
echo ========================================
echo    Starting Development Server
echo ========================================
echo.
echo [INFO] Starting Next.js development server...
echo [INFO] Server URL: http://localhost:5200
echo [INFO] Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

pause

