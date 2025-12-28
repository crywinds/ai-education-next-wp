@echo off
chcp 936 >nul
cd /d "%~dp0"
set "PROJECT_PATH=%~dp0"
title [AI�Ш|-�e��] Next.js WordPress ?�� - Port 5200
color 0A
echo.
echo ========================================
echo    AI �Ш|���x - Next.js WordPress �e��?��
echo    ?�ظ�?: %PROJECT_PATH%
echo    �A?�a�}: http://localhost:5200
echo ========================================
echo.

REM Check if port 5200 is in use
netstat -ano | findstr ":5200" | findstr "LISTENING" >nul 2>&1
if errorlevel 1 goto check_mysql
echo [AI�Ш|-�e��] [ĵ�i] �ݤf 5200 �w�Q�e��
echo [AI�Ш|-�e��] [����] ���b????�e�κݤf��?�{...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5200" ^| findstr "LISTENING"') do (
    echo [AI�Ш|-�e��] [�H��] ???�{ PID: %%a
    taskkill /F /PID %%a >nul 2>&1
    if errorlevel 1 (
        echo [AI�Ш|-�e��] [??] ?�k???�{�A?��???
        pause
        exit /b 1
    ) else (
        echo [AI�Ш|-�e��] [���\] �w??�e�κݤf��?�{
    )
)
timeout /t 2 >nul
echo.

:check_mysql
REM Check MySQL service status
if exist "C:\xampp\mysql\bin\mysqld.exe" (
    echo [AI�Ш|-�e��] ??�� XAMPP MySQL
    netstat -an | findstr ":3306" | findstr "LISTENING" >nul 2>&1
    if errorlevel 1 (
        echo [AI�Ш|-�e��] [ĵ�i] MySQL �A?���G��?��
        echo [AI�Ш|-�e��] [����] ?��?? XAMPP Control Panel �}?? MySQL �A?
        echo [AI�Ш|-�e��] [����] ��?: C:\xampp\xampp-control.exe
        echo.
        set /p open_xampp="�O�_?�b��? XAMPP Control Panel? (Y/N): "
        if /i "%open_xampp%"=="Y" (
            start "" "C:\xampp\xampp-control.exe"
            echo [AI�Ш|-�e��] [�H��] ?�b XAMPP Control Panel ��?? MySQL�A�M�Z�����N???...
            pause >nul
        )
    ) else (
        echo [AI�Ш|-�e��] [�H��] MySQL �A?�w�b?��
    )
    echo.
) else if exist "C:\xampp\xampp-control.exe" (
    echo [AI�Ш|-�e��] [�H��] ??�� XAMPP
    echo [AI�Ш|-�e��] [����] ?�̫O�w�b XAMPP Control Panel ��?? MySQL
    echo.
)

REM Check if Node.js is installed
where node >nul 2>&1
if errorlevel 1 (
    echo [AI�Ш|-�e��] [??] ��??�� Node.js�A?���w? Node.js
    echo [AI�Ш|-�e��] �U?�a�}: https://nodejs.org/
    pause
    exit /b 1
)

echo [AI�Ш|-�e��] [�H��] ??�� Node.js ����:
node --version
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo [AI�Ш|-�e��] [�H��] ??�쥼�w?��?�A���b�w?...
    echo.
    call npm install
    if errorlevel 1 (
        echo [AI�Ш|-�e��] [??] ��?�w?��?
        pause
        exit /b 1
    )
    echo.
    echo [AI�Ш|-�e��] [���\] ��?�w?����
    echo.
) else (
    echo [AI�Ш|-�e��] [�H��] ��?�w�s�b�A��?�w?�B?
    echo.
)

REM Start development server
color 0A
echo.
echo ========================================
echo           ????�A?��
echo ========================================
echo.
echo [AI�Ш|-�e��] ���b?? Next.js ??�A?��...
echo [AI�Ш|-�e��] �A?���a�}: http://localhost:5200
echo [AI�Ш|-�e��] �� Ctrl+C �i����A?��
echo.
echo ========================================
echo.

call npm run dev

pause
