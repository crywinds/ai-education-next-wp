@echo off
chcp 65001
cls
title 診斷模式 - Korae 開發服務器

echo ========================================
echo   診斷模式 - 檢查環境
echo ========================================
echo.

echo [檢查 1] 當前目錄
echo %CD%
echo.

echo [檢查 2] Node.js 版本
node --version
if errorlevel 1 (
    echo [X] Node.js 未找到或未安裝
) else (
    echo [OK] Node.js 已安裝
)
echo.

echo [檢查 3] npm 版本
npm --version
if errorlevel 1 (
    echo [X] npm 未找到
) else (
    echo [OK] npm 已安裝
)
echo.

echo [檢查 4] 檢查 package.json
if exist "package.json" (
    echo [OK] package.json 存在
) else (
    echo [X] package.json 不存在
)
echo.

echo [檢查 5] 檢查 node_modules
if exist "node_modules" (
    echo [OK] node_modules 存在
) else (
    echo [X] node_modules 不存在
)
echo.

echo ========================================
echo   診斷完成
echo ========================================
echo.
echo 按任意鍵退出...
pause


