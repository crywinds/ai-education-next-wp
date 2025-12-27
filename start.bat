@echo off
chcp 65001 >nul
title [AI教育-前端] Next.js WordPress 项目 - Port 5200
color 0A
echo.
echo ========================================
echo    AI 教育平台 - Next.js WordPress 前端项目
echo    项目路径: f:\FIFA\new-next-wp
echo    服务地址: http://localhost:5200
echo ========================================
echo.

REM 检查 MySQL 服务状态
if exist "C:\xampp\mysql\bin\mysqld.exe" (
    echo [AI教育-前端] 检测到 XAMPP MySQL
    REM 检查 MySQL 端口是否在监听（3306端口）
    netstat -an | findstr ":3306" | findstr "LISTENING" >nul 2>&1
    if %errorlevel% neq 0 (
        echo [AI教育-前端] [警告] MySQL 服务似乎未运行（端口 3306 未监听）
        echo [AI教育-前端] [提示] 请先启动 XAMPP Control Panel 并启动 MySQL 服务
        echo [AI教育-前端] [提示] 路径: C:\xampp\xampp-control.exe
        echo.
        set /p open_xampp="是否现在打开 XAMPP Control Panel? (Y/N): "
        if /i "%open_xampp%"=="Y" (
            start "" "C:\xampp\xampp-control.exe"
            echo [AI教育-前端] [信息] 请在 XAMPP Control Panel 中启动 MySQL，然后按任意键继续...
            pause >nul
        )
    ) else (
        echo [AI教育-前端] [信息] MySQL 服务已在运行（端口 3306 正在监听）
    )
    echo.
) else if exist "C:\xampp\xampp-control.exe" (
    echo [AI教育-前端] [信息] 检测到 XAMPP
    echo [AI教育-前端] [提示] 请确保已在 XAMPP Control Panel 中启动 MySQL
    echo.
)

REM 检查 Node.js 是否安装
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [AI教育-前端] [错误] 未检测到 Node.js，请先安装 Node.js
    echo [AI教育-前端] 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo [AI教育-前端] [信息] 检测到 Node.js 版本:
node --version
echo.

REM 检查是否已安装依赖
if not exist "node_modules" (
    echo [AI教育-前端] [信息] 检测到未安装依赖，正在安装...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo [AI教育-前端] [错误] 依赖安装失败
        pause
        exit /b 1
    )
    echo.
    echo [AI教育-前端] [成功] 依赖安装完成
    echo.
) else (
    echo [AI教育-前端] [信息] 依赖已存在，跳过安装步骤
    echo.
)

REM 启动开发服务器
color 0A
echo.
echo ========================================
echo           启动开发服务器
echo ========================================
echo.
echo [AI教育-前端] 正在启动 Next.js 开发服务器...
echo [AI教育-前端] 服务器地址: http://localhost:5200
echo [AI教育-前端] 按 Ctrl+C 可停止服务器
echo.
echo ========================================
echo.

call npm run dev

pause
