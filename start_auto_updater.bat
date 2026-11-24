@echo off
title WoW Forever - Auto-Updater Background Companion
cd /d "%~dp0"

:loop
git pull origin main --quiet 2>nul
timeout /t 20 /nobreak >nul
goto loop
