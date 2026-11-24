@echo off
title WoW Forever - Auto-Updater Background Companion
cd /d "%~dp0"

:loop
git checkout -- synced_character.js synced_character.json 2>nul
git pull origin main --quiet 2>nul
if %errorlevel% neq 0 (
    git fetch origin main --quiet 2>nul
    git reset --hard origin/main --quiet 2>nul
)
timeout /t 15 /nobreak >nul
goto loop
