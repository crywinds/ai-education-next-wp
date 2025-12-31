@echo off
chcp 65001
cls
title Korae 開發服務器

echo ========================================
echo   Korae 韓國東大門買手網
echo ========================================
echo.
echo 正在啟動...
echo.

REM 直接執行，不檢查環境（假設已安裝）
cd /d "%~dp0"
npm run dev

echo.
echo 服務器已停止
pause



