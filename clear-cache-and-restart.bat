@echo off
echo 正在清除 Next.js 緩存...
if exist .next rmdir /s /q .next
echo 緩存已清除！
echo.
echo 請重新啟動開發服務器：
echo npm run dev
pause



