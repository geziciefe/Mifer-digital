$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js bulunamadı. Önce https://nodejs.org adresinden LTS sürümünü kurun." -ForegroundColor Red
  Read-Host "Kapatmak için Enter"
  exit 1
}

if (-not (Test-Path "node_modules")) {
  Write-Host "İlk kurulum yapılıyor..." -ForegroundColor Cyan
  npm.cmd install
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

Write-Host "Mifer Digital açılıyor: http://localhost:4321/tr" -ForegroundColor Green
npm.cmd run dev
