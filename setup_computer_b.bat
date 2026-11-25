@echo off
title WoW Forever - 1-Click Computer B Setup and Sync
cd /d "%~dp0"
cls
echo ========================================================
echo   WoW Forever - 1-Click Sync Setup (Computer B)
echo ========================================================
echo.
echo [1/4] Pulling latest files from GitHub...
git checkout -- synced_character.js synced_character.json 2>nul
git pull origin main --quiet

echo [2/4] Checking GitHub Cloud Sync permission...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$dir = '%~dp0'.TrimEnd('\'); " ^
  "$tf = Join-Path $dir 'github_token.txt'; " ^
  "$has = (Test-Path $tf) -and ((Get-Content $tf -Raw).Trim().Length -gt 10); " ^
  "if (-not $has -and (Get-Command gh -ErrorAction SilentlyContinue)) { $t = (gh auth token 2>$null); if ($t) { $has = $true } }; " ^
  "if (-not $has -and (Get-Command git -ErrorAction SilentlyContinue)) { $c = \"protocol=https`nhost=github.com`n`n\" | git credential fill 2>$null; foreach ($l in $c) { if ($l -match '^password=(.+)$') { $has = $true } } }; " ^
  "if ($has) { Write-Host '[OK] GitHub authentication ready!' -ForegroundColor Green } " ^
  "else { " ^
  "  Write-Host '' ; " ^
  "  Write-Host '[!] This PC needs a one-time GitHub token (with gist permission) to sync.' -ForegroundColor Yellow ; " ^
  "  Write-Host '    Opening GitHub token page in your browser...' -ForegroundColor Cyan ; " ^
  "  Start-Process 'https://github.com/settings/tokens/new?scopes=gist&description=WoWGuideSync' ; " ^
  "  $tok = Read-Host '    Paste your GitHub token here and press Enter' ; " ^
  "  if ($tok) { Set-Content -Path $tf -Value $tok.Trim() -Encoding ASCII; Write-Host '[OK] Saved github_token.txt!' -ForegroundColor Green } " ^
  "}"

echo.
echo [3/4] Running live sync now...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0sync_live.ps1"

echo.
echo [4/4] Registering silent auto-sync on Windows startup...
set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "STARTUP_VBS=%STARTUP_FOLDER%\WoWGuideAutoUpdater.vbs"
(
echo Set WshShell = CreateObject^("WScript.Shell"^)
echo WshShell.Run "wscript.exe """"%~dp0start_silent.vbs""""", 0, False
) > "%STARTUP_VBS%"
start "" wscript.exe "%~dp0start_silent.vbs"

echo.
echo ========================================================
echo [DONE] Everything is set up and running in the background!
echo Whenever you /reload in WoW on this PC, your web guide
echo will update automatically within ~15 seconds.
echo ========================================================
echo.
pause
