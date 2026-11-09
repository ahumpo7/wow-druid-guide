@echo off
title WoW Forever - Character and Gear Sync
color 0a
echo ========================================================
echo  Syncing Character and Gear from World of Warcraft...
echo ========================================================

where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [ERROR] Node.js is not found on this computer.
  echo Please install Node.js from https://nodejs.org to run the sync.
  echo.
  pause
  exit /b 1
)

node "%~dp0sync.js"
echo.
echo ========================================================
echo  SUCCESS! Your level and equipped gear are synced.
echo  Your live guide is now updated:
echo  https://ahumpo7.github.io/wow-druid-guide/
echo ========================================================
timeout /t 4
