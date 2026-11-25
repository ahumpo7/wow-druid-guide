@echo off
title WoW Forever - Auto-Updater and Live Sync Launcher
cd /d "%~dp0"

echo ========================================================
echo  WoW Forever - Auto-Updater and Live Sync Launcher
echo ========================================================

:loop
git checkout -- synced_character.js synced_character.json 2>nul
git pull origin main --quiet 2>nul
if %errorlevel% neq 0 (
    git fetch origin main --quiet 2>nul
    git reset --hard origin/main --quiet 2>nul
)

netstat -ano | findstr ":3888 " | findstr "LISTENING" >nul 2>&1
if %errorlevel% neq 0 (
    where node >nul 2>nul
    if %errorlevel% equ 0 (
        echo [%TIME%] Starting Live Sync Companion ^(server.js^)...
        start "" /b cmd /c "node "%~dp0server.js" > "%~dp0server.log" 2>&1"
    ) else (
        echo [%TIME%] [ERROR] Node.js is NOT installed on this PC! Install Node.js from https://nodejs.org/ to enable live /reload syncing.
    )
) else (
    echo [%TIME%] [OK] Auto-Updater and Live Sync Companion active ^(port 3888^).
)

timeout /t 15 /nobreak >nul
goto loop
