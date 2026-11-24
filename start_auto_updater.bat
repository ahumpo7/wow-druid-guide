@echo off
title WoW Forever - Auto-Updater & Live Sync Companion
color 0b
cls
echo ========================================================
echo   WoW Forever: Background Auto-Updater for Computer B
echo ========================================================
echo.
echo [!] Keep this window minimized in the background while playing!
echo.
echo  1. Every 20 seconds, it automatically checks GitHub for updates.
echo  2. Whenever Antigravity pushes an update, this downloads it in 1s.
echo  3. Because of your Directory Junction, WoW is updated instantly!
echo  4. In World of Warcraft, just type: /reload
echo.
echo ========================================================
echo Starting background loop...
echo ========================================================
echo.

:loop
git pull origin main --quiet 2>nul
timeout /t 20 /nobreak >nul
goto loop
