@echo off
chcp 65001
cls
title Korae Development Server

echo ========================================
echo   Korae Development Server
echo ========================================
echo.

REM Check if port 5200 is in use
echo [Step 1/5] Checking port 5200...
netstat -ano | findstr :5200 >nul 2>&1
if not errorlevel 1 (
    echo.
    echo [WARNING] Port 5200 is already in use!
    echo.
    echo Options:
    echo   1. Kill the process using port 5200 (run kill-port.bat)
    echo   2. Use a different port (port 3000)
    echo.
    echo Do you want to use port 3000 instead? (Y/N)
    set /p USE_3000=
    if /i "%USE_3000%"=="Y" (
        set PORT=3000
        set PORT_CMD=dev:3000
    ) else (
        echo.
        echo Please close the process using port 5200 or run kill-port.bat
        echo.
        pause
        exit /b 1
    )
) else (
    echo [OK] Port 5200 is available
    set PORT=5200
    set PORT_CMD=dev
)
echo.

REM Check Node.js
echo [Step 2/5] Checking Node.js...
where node >nul 2>&1
if errorlevel 1 (
    echo.
    echo [ERROR] Node.js not found!
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo [OK] Node.js found
echo.

REM Check npm
echo [Step 3/5] Checking npm...
where npm >nul 2>&1
if errorlevel 1 (
    echo.
    echo [ERROR] npm not found!
    echo.
    pause
    exit /b 1
)
echo [OK] npm found
echo.

REM Check dependencies
echo [Step 4/5] Checking dependencies...
if not exist "node_modules" (
    echo [INFO] node_modules not found, installing...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERROR] Failed to install dependencies!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencies installed
) else (
    echo [OK] Dependencies exist
)
echo.

REM Start server
echo [Step 5/5] Starting development server...
echo.
echo ========================================
echo   Server Info
echo ========================================
echo   URL: http://localhost:%PORT%
echo   Stop: Press Ctrl+C
echo ========================================
echo.
echo Starting server, please wait...
echo.

call npm run %PORT_CMD%

echo.
echo ========================================
echo   Server stopped
echo ========================================
echo.
pause
