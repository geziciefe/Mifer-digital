$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host ""
Write-Host "Mifer Digital 1.5 - yayin paketi hazirlaniyor..." -ForegroundColor Cyan
Write-Host ""

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js bulunamadi. Once Node.js LTS kurun." -ForegroundColor Red
  Read-Host "Kapatmak icin Enter"
  exit 1
}

if (-not (Test-Path "node_modules")) {
  Write-Host "Bagimliliklar kuruluyor..." -ForegroundColor Cyan
  npm.cmd install
  if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install basarisiz oldu." -ForegroundColor Red
    Read-Host "Kapatmak icin Enter"
    exit $LASTEXITCODE
  }
}

Write-Host "Uretim build + kontroller calisiyor..." -ForegroundColor Cyan
npm.cmd run test:all
if ($LASTEXITCODE -ne 0) {
  Write-Host "Build veya test basarisiz. Yayin paketi olusturulmadi." -ForegroundColor Red
  Read-Host "Kapatmak icin Enter"
  exit $LASTEXITCODE
}

$zipName = "mifer-digital-1.5-yayin.zip"
$zipPath = Join-Path $PSScriptRoot $zipName

if (Test-Path $zipPath) {
  Remove-Item $zipPath -Force
}

Write-Host "Plesk ZIP paketi olusturuluyor..." -ForegroundColor Cyan
Compress-Archive -Path (Join-Path $PSScriptRoot "dist\*") -DestinationPath $zipPath -CompressionLevel Optimal -Force

Write-Host ""
Write-Host "HAZIR: $zipName" -ForegroundColor Green
Write-Host "Plesk > File Manager > httpdocs icine yukleyip ZIP'i burada cikarin." -ForegroundColor Green
Write-Host "Kontrol: httpdocs\index.html dogrudan bulunmali." -ForegroundColor Yellow
Write-Host ""
Read-Host "Kapatmak icin Enter"
