@echo off
chcp 65001 >nul
echo Đang tổng hợp các tệp từ thư mục src/ vào index.html...
python build.py
echo.
pause
