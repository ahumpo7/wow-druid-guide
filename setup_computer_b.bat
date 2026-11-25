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

echo [2/4] Checking GitHub Cloud Sync permission (gist scope)...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; " ^
  "$dir = '%~dp0'.TrimEnd('\'); " ^
  "$tf = Join-Path $dir 'github_token.txt'; " ^
  "$tok = $null; " ^
  "if ((Test-Path $tf) -and ((Get-Content $tf -Raw).Trim().Length -gt 10)) { $tok = (Get-Content $tf -Raw).Trim() }; " ^
  "if (-not $tok -and (Get-Command gh -ErrorAction SilentlyContinue)) { $t = (gh auth token 2>$null); if ($t) { $tok = $t.Trim() } }; " ^
  "if (-not $tok -and (Get-Command git -ErrorAction SilentlyContinue)) { $c = \"protocol=https`nhost=github.com`n`n\" | git credential fill 2>$null; foreach ($l in $c) { if ($l -match '^password=(.+)$') { $tok = $Matches[1].Trim() } } }; " ^
  "$hasGist = $false; " ^
  "if ($tok) { try { $r = Invoke-WebRequest -Uri 'https://api.github.com/user' -Headers @{Authorization=\"Bearer $tok\";'User-Agent'='WoWGuide'} -UseBasicParsing; $sc = $r.Headers['X-OAuth-Scopes']; if ($sc -match 'gist' -or (Test-Path $tf)) { $hasGist = $true } } catch {} }; " ^
  "if ($hasGist) { Write-Host '[OK] GitHub authentication with gist access is ready!' -ForegroundColor Green } " ^
  "else { " ^
  "  Write-Host '' ; " ^
  "  Write-Host '[!] Your Git login on this PC does not have gist upload permission.' -ForegroundColor Yellow ; " ^
  "  Write-Host '    Opening GitHub token page (gist already checked) in your browser...' -ForegroundColor Cyan ; " ^
  "  Start-Process 'https://github.com/settings/tokens/new?scopes=gist&description=WoWGuideSync' ; " ^
  "  $newTok = Read-Host '    Click Generate token on GitHub, paste it here, and press Enter' ; " ^
  "  if ($newTok) { Set-Content -Path $tf -Value $newTok.Trim() -Encoding ASCII; Write-Host '[OK] Saved github_token.txt!' -ForegroundColor Green } " ^
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
