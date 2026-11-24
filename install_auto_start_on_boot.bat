@echo off
title WoW Forever - Permanent Auto-Start Setup
cls
echo ========================================================
echo  WoW Forever: Install Invisible Background Auto-Updater
echo ========================================================
echo.
echo This sets up the updater to start automatically in the
echo background whenever this computer boots or logs in.
echo.
echo - Runs 100%% silently in the background (no open window).
echo - Checks GitHub every 15s and syncs updates automatically.
echo - You never have to remember to run anything!
echo.

set "STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup"
set "STARTUP_VBS=%STARTUP_FOLDER%\WoWGuideAutoUpdater.vbs"

echo [*] Registering silent runner in Windows Startup:
echo     "%STARTUP_VBS%"
echo.

(
echo Set WshShell = CreateObject^("WScript.Shell"^)
echo WshShell.Run "wscript.exe """"%~dp0start_silent.vbs""""", 0, False
) > "%STARTUP_VBS%"

echo [*] Launching silent auto-updater right now...
start "" wscript.exe "%~dp0start_silent.vbs"

echo.
echo ========================================================
echo [SUCCESS] Auto-updater is now running in the background!
echo.
echo 1. It is currently running silently right now.
echo 2. It will automatically start every time Windows turns on.
echo 3. You never have to copy files or run manual scripts again!
echo ========================================================
echo.
pause
