@echo off
chcp 65001 >nul
title 启动所有服务 - 端口 5200-5299
color 0B
echo.
echo ========================================
echo        启动所有服务管理器
echo    端口范围: 5200-5299
echo ========================================
echo.

REM 检查 Node.js 是否安装
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

REM 检查 MySQL 服务状态
if exist "C:\xampp\mysql\bin\mysqld.exe" (
    echo [信息] 检测到 XAMPP MySQL
    netstat -an | findstr ":3306" | findstr "LISTENING" >nul 2>&1
    if %errorlevel% neq 0 (
        echo [警告] MySQL 服务似乎未运行（端口 3306 未监听）
        echo [提示] 请先启动 XAMPP Control Panel 并启动 MySQL 服务
        echo.
    ) else (
        echo [信息] MySQL 服务已在运行（端口 3306 正在监听）
    )
    echo.
)

REM 检查端口是否被占用
echo [信息] 正在检查端口占用情况...
echo.

set PORT_5200=5200
set PORT_5201=5201
set PORT_5202=5202

netstat -an | findstr ":%PORT_5200%" | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [警告] 端口 5200 已被占用
) else (
    echo [信息] 端口 5200 可用
)

netstat -an | findstr ":%PORT_5201%" | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [警告] 端口 5201 已被占用
) else (
    echo [信息] 端口 5201 可用
)

netstat -an | findstr ":%PORT_5202%" | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [警告] 端口 5202 已被占用
) else (
    echo [信息] 端口 5202 可用
)

echo.
echo ========================================
echo           选择要启动的服务
echo ========================================
echo.
echo 1. AI 教育平台前端 (Next.js) - 端口 5200
echo 2. 启动所有服务
echo 3. 退出
echo.
set /p choice="请选择 (1-3): "

if "%choice%"=="1" (
    echo.
    echo [信息] 正在启动 AI 教育平台前端服务...
    echo [信息] 服务将在 http://localhost:5200 运行
    echo.
    call start.bat
) else if "%choice%"=="2" (
    echo.
    echo [信息] 正在启动所有服务...
    echo.
    
    REM 启动 AI 教育平台前端（端口 5200）
    echo [信息] 启动 AI 教育平台前端 (端口 5200)...
    start "AI教育-前端-5200" cmd /k "cd /d %~dp0 && title [AI教育-前端] Port 5200 && color 0A && npm run dev"
    
    echo [成功] 所有服务已启动
    echo.
    echo 服务列表:
    echo - AI 教育平台前端: http://localhost:5200
    echo.
    echo 提示: 每个服务都在独立的窗口中运行
    echo 关闭窗口即可停止对应的服务
    echo.
    pause
) else if "%choice%"=="3" (
    exit /b 0
) else (
    echo [错误] 无效的选择
    pause
    exit /b 1
)

