@echo off
title WoW Forever - Permanent Auto-Start Setup
cls
echo ========================================================
echo  WoW Forever: Install Invisible Background Auto-Updater
echo ========================================================
echo.
echo This sets up the updater to start automatically in the
echo background whenever Computer B starts up or logs in.
echo.
echo - Runs 100%% silently (no command prompt window open).
echo - Checks GitHub every 20s and pulls updates automatically.
echo - You never have to remember to run anything!
echo.

set "SCRIPT_DIR=%~dp0"
set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "STARTUP_VBS=%STARTUP_FOLDER%\WoWGuideAutoUpdater.vbs"

echo [*] Registering silent runner in Windows Startup:
echo     "%STARTUP_VBS%"
echo.

(
echo Set WshShell = CreateObject^("WScript.Shell"^)
echo WshShell.Run "cmd.exe /c """ ^& "%SCRIPT_DIR%start_auto_updater.bat"""", 0, False
) > "%STARTUP_VBS%"

echo [*] Launching silent updater now...
wscript.exe "%STARTUP_VBS%"

echo.
echo ========================================================
echo [SUCCESS] Auto-updater is now running in the background!
echo.
echo 1. It is currently running silently right now.
echo 2. It will automatically start every time Computer B turns on.
echo 3. You never have to remember to open it or run scripts again!
echo ========================================================
echo.
pause
