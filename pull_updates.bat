@echo off
title WoW Forever - Pull Latest Addon & Guide Updates
cls
echo ========================================================
echo  WoW Forever: 1-Click Update Puller
echo ========================================================
echo.
echo [*] Fetching latest guides, talents, and addon code from GitHub...
git pull origin main
echo.
if %errorlevel% equ 0 (
    echo ========================================================
    echo [DONE] You are up to date!
    echo If World of Warcraft is currently open, just type:
    echo        /reload
    echo in chat to load all changes immediately!
    echo ========================================================
) else (
    echo [!] Git encountered an issue. Make sure your internet is connected.
)
echo.
pause
