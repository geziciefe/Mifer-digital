@echo off
setlocal
cd /d "%~dp0"
where npm.cmd >nul 2>&1
if errorlevel 1 (
  echo Node.js bulunamadi. https://nodejs.org adresinden LTS surumunu kurun.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Ilk kurulum yapiliyor...
  call npm.cmd install
  if errorlevel 1 (
    echo Kurulum tamamlanamadi. Yukaridaki hata mesajini kontrol edin.
    pause
    exit /b 1
  )
)
echo Mifer Digital: http://localhost:4321/tr
echo Site acikken bu pencereyi kapatmayin.
call npm.cmd run dev
pause
