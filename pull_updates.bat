@echo off
title WoW Forever - Pull Latest Addon & Guide Updates
cls
echo ========================================================
echo  WoW Forever: 1-Click Update Puller
echo ========================================================
echo.
echo [*] Discarding local sync cache and fetching latest GitHub code...
cd /d "%~dp0"
git checkout -- synced_character.js synced_character.json 2>nul
git fetch origin main
git reset --hard origin/main
echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo [DONE] You are 100%% up to date with GitHub!
    echo If World of Warcraft is currently open, just type:
    echo        /reload
    echo in chat to load all changes immediately!
    echo ========================================================
) else (
    echo [!] Git encountered an issue. Make sure your internet is connected.
)
echo.
pause
