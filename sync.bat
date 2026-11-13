@echo off
title WoW Forever - Character Syncer
cls
echo ========================================================
echo  WoW Forever - Live Character Exporter & Cloud Syncer
echo ========================================================
echo.
echo [!] NOTE: World of Warcraft only writes to disk when you
echo     type /reload in chat or log out to character select!
echo.
echo Running sync routine...

where git >nul 2>nul
if %errorlevel% equ 0 (
    echo [*] Checking for latest guide and database updates from GitHub...
    git pull origin main --quiet
)
echo.

node sync.js

if %errorlevel% neq 0 (
    echo.
    echo [!] Node.js encountered an issue. Trying PowerShell fallback...
    powershell -ExecutionPolicy Bypass -File "%~dp0sync.ps1"
)

echo.
echo ========================================================
echo Sync finished. You can now refresh or click Sync on:
echo https://ahumpo7.github.io/wow-druid-guide/
echo ========================================================
echo.
pause
