@echo off
title WoW Forever - Live Automatic Sync Companion
color 0a
echo ========================================================
echo   WoW Forever - Live Real-Time Game-to-Web Sync
echo ========================================================
echo.
echo Starting background file watcher...
echo Keep this window minimized in the background while playing!
echo.
echo Whenever you type /sync or /reload in game, this automatically
echo uploads your latest level, talents, and gear to the website!
echo.
node "%~dp0sync_watcher.js"
pause
