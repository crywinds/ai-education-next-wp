@echo off
chcp 65001 >nul
echo ========================================
echo   Kill Process on Port 5200
echo ========================================
echo.

echo Finding process using port 5200...
netstat -ano | findstr :5200
echo.

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5200 ^| findstr LISTENING') do (
    set PID=%%a
    echo Found process ID: %%a
    echo Killing process %%a...
    taskkill /PID %%a /F >nul 2>&1
    if errorlevel 1 (
        echo [ERROR] Failed to kill process %%a
        echo You may need to run this as Administrator
    ) else (
        echo [OK] Process %%a killed successfully
    )
)

echo.
echo Port 5200 should now be available
echo.
pause

