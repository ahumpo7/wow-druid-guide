@echo off
title WoW Forever - Link Addon Directly to GitHub Repo
cls
echo ========================================================
echo  WoW Forever: Permanent Addon Git-Link Setup
echo ========================================================
echo.
echo This one-time setup creates a direct Windows link (Directory Junction)
echo from your World of Warcraft AddOns folder to this GitHub folder.
echo.
echo Once created:
echo 1. You NEVER need to copy, paste, or unzip files again!
echo 2. Any 'git pull' instantly updates the addon in-game.
echo 3. Just type /reload in WoW to load any new updates.
echo.
echo ========================================================
echo Searching for your WoW Forever installation...
echo ========================================================
echo.

set "LOCAL_ADDON_PATH=%~dp0WoWGuide"

:: Candidate WoW paths
set "WOW_ADDON_DIR="
if exist "C:\Program Files (x86)\World of Warcraft\_forever_\Interface\AddOns" (
    set "WOW_ADDON_DIR=C:\Program Files (x86)\World of Warcraft\_forever_\Interface\AddOns"
) else if exist "C:\Program Files\World of Warcraft\_forever_\Interface\AddOns" (
    set "WOW_ADDON_DIR=C:\Program Files\World of Warcraft\_forever_\Interface\AddOns"
) else if exist "D:\World of Warcraft\_forever_\Interface\AddOns" (
    set "WOW_ADDON_DIR=D:\World of Warcraft\_forever_\Interface\AddOns"
) else if exist "E:\World of Warcraft\_forever_\Interface\AddOns" (
    set "WOW_ADDON_DIR=E:\World of Warcraft\_forever_\Interface\AddOns"
)

if "%WOW_ADDON_DIR%"=="" (
    echo [!] Could not automatically find World of Warcraft in standard folders.
    echo.
    set /p "WOW_ADDON_DIR=Please enter the full path to your WoW AddOns folder (e.g. C:\Games\WoW\_forever_\Interface\AddOns): "
)

if not exist "%WOW_ADDON_DIR%" (
    echo.
    echo [ERROR] The directory "%WOW_ADDON_DIR%" does not exist.
    echo Please verify your World of Warcraft directory and run this script again.
    echo.
    pause
    exit /b 1
)

set "TARGET_LINK=%WOW_ADDON_DIR%\WoWGuide"

echo [*] Target AddOns folder: "%WOW_ADDON_DIR%"
echo [*] GitHub Repo Addon:     "%LOCAL_ADDON_PATH%"
echo.

:: Remove existing folder or junction if present
if exist "%TARGET_LINK%" (
    echo [*] Removing existing static WoWGuide folder...
    rmdir /S /Q "%TARGET_LINK%" 2>nul
    if exist "%TARGET_LINK%" (
        echo [!] Trying to unbind existing junction/link...
        rmdir "%TARGET_LINK%" 2>nul
    )
)

:: Create the Directory Junction
echo [*] Creating permanent Directory Junction...
mklink /J "%TARGET_LINK%" "%LOCAL_ADDON_PATH%"

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo [SUCCESS] Permanent link created!
    echo.
    echo Your game now reads directly from this Git folder:
    echo "%TARGET_LINK%"
    echo.
    echo [*] Now registering the silent background auto-updater...
    call "%~dp0install_auto_start_on_boot.bat"
    echo.
    echo ========================================================
    echo [DONE] Computer B is fully configured!
    echo Every update pushed to GitHub updates your game in ~15s.
    echo In World of Warcraft, just type:
    echo        /reload
    echo to load new guides and code immediately.
    echo ========================================================
) else (
    echo.
    echo [!] Junction creation failed. You may need to right-click this script and select Run as Administrator.
)

echo.
pause
