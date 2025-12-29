@echo off
chcp 65001
cls
title Korae Development Server

echo ========================================
echo   Korae Development Server
echo ========================================
echo.

REM Check Node.js
echo [Step 1/4] Checking Node.js...
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
echo [Step 2/4] Checking npm...
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
echo [Step 3/4] Checking dependencies...
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
echo [Step 4/4] Starting development server...
echo.
echo ========================================
echo   Server Info
echo ========================================
echo   URL: http://localhost:5200
echo   Stop: Stop: Press Ctrl+C
echo ========================================
echo.
echo Starting server, please wait...
echo.

call npm run dev

echo.
echo ========================================
echo   Server stopped
echo ========================================
echo.
pause
