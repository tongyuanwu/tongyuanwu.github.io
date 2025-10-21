@echo off
title 🧱 Local Jekyll Server for tongyuanwu.github.io
echo ===============================================
echo   Starting Jekyll local server with auto reload
echo ===============================================
echo.

:: 确保进入脚本所在目录
cd /d "%~dp0"

:: 安装依赖（如果第一次运行会稍慢）
echo Installing dependencies (this may take a minute)...
call bundle install

:: 启动服务器并在独立窗口中运行，防止误关
echo Launching local Jekyll server...
start "Jekyll Server" cmd /k "bundle exec jekyll serve --livereload --force_polling"

:: 等待几秒后自动打开浏览器
timeout /t 5 /nobreak >nul
start http://127.0.0.1:4000

echo.
echo ✅ Local Jekyll server is running at:
echo    👉 http://127.0.0.1:4000
echo.
echo You can now edit your site files.
echo Live reload will refresh the page automatically.
echo.
pause
