@echo off
title WoW Forever - Auto-Updater and Live Sync Launcher
cd /d "%~dp0"

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
        start "" /b node "%~dp0server.js"
    )
)

timeout /t 15 /nobreak >nul
goto loop
