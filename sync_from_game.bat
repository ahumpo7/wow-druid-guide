@echo off
title WoW Forever - Character and Gear Sync
color 0a
echo ========================================================
echo  Syncing Character and Gear from World of Warcraft...
echo ========================================================
node "%~dp0sync.js"
echo.
echo ========================================================
echo  SUCCESS! Your level and equipped gear are synced.
echo  Switch back to the website and click [⚡ Sync] or refresh!
echo ========================================================
timeout /t 3
