@echo off
chcp 65001 >nul
echo ========================================
echo   Kill Port 5200
echo ========================================
echo.

echo Checking for processes using port 5200...
echo.

netstat -ano | findstr :5200
if errorlevel 1 (
    echo No process found using port 5200
    echo.
    pause
    exit /b 0
)

echo.
echo Found process(es) using port 5200
echo.
echo Enter the PID (Process ID) to kill, or press Enter to exit:
set /p PID=

if "%PID%"=="" (
    echo Exiting...
    pause
    exit /b 0
)

echo.
echo Killing process %PID%...
taskkill /PID %PID% /F
if errorlevel 1 (
    echo Failed to kill process %PID%
) else (
    echo Process %PID% killed successfully
)

echo.
pause



