@echo off
title WoW Forever - Character and Gear Sync
color 0a
echo ========================================================
echo  Syncing Character and Gear from World of Warcraft...
echo ========================================================

where git >nul 2>nul
if %errorlevel% equ 0 (
  echo [*] Checking for latest guide and database updates from GitHub...
  git pull origin main --quiet
)

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
echo  Press any key to close this window...
echo ========================================================
pause >nul
