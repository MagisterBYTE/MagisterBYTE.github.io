@echo off
cd /d "%~dp0"
title GitHub deploy
echo Заливаю текущую сборку на GitHub Pages без истории...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0publish.ps1"
if errorlevel 1 (
  echo.
  echo Ошибка публикации.
  pause
  exit /b 1
)
echo.
pause
