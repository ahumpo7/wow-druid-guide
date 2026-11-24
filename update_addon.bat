@echo off
title WoW Forever - Update In-Game Addon
cls
echo ========================================================
echo  WoW Forever - Update In-Game Addon (WoWGuide)
echo ========================================================
echo.

where git >nul 2>nul
if %errorlevel% equ 0 (
    echo [*] Pulling latest addon code and guide updates from GitHub...
    git checkout -- synced_character.js synced_character.json 2>nul
    git pull origin main
    if %errorlevel% neq 0 (
        git fetch origin main
        git reset --hard origin/main
    )
)

echo.
echo [*] Installing WoWGuide into your World of Warcraft AddOns folder...

set "FOUND=0"
set "DEST1=C:\Program Files (x86)\World of Warcraft\_forever_\Interface\AddOns\WoWGuide"
set "DEST2=C:\Program Files\World of Warcraft\_forever_\Interface\AddOns\WoWGuide"
set "DEST3=D:\World of Warcraft\_forever_\Interface\AddOns\WoWGuide"
set "DEST4=E:\World of Warcraft\_forever_\Interface\AddOns\WoWGuide"

if exist "C:\Program Files (x86)\World of Warcraft\_forever_\Interface\AddOns" (
    xcopy /E /I /Y "%~dp0WoWGuide" "%DEST1%" >nul
    echo [OK] Installed to %DEST1%
    set "FOUND=1"
)

if exist "C:\Program Files\World of Warcraft\_forever_\Interface\AddOns" (
    xcopy /E /I /Y "%~dp0WoWGuide" "%DEST2%" >nul
    echo [OK] Installed to %DEST2%
    set "FOUND=1"
)

if exist "D:\World of Warcraft\_forever_\Interface\AddOns" (
    xcopy /E /I /Y "%~dp0WoWGuide" "%DEST3%" >nul
    echo [OK] Installed to %DEST3%
    set "FOUND=1"
)

if exist "E:\World of Warcraft\_forever_\Interface\AddOns" (
    xcopy /E /I /Y "%~dp0WoWGuide" "%DEST4%" >nul
    echo [OK] Installed to %DEST4%
    set "FOUND=1"
)

if "%FOUND%"=="0" (
    echo [!] Could not auto-detect WoW Forever directory.
    echo Please copy the "%~dp0WoWGuide" folder manually into your World of Warcraft Interface\AddOns folder.
)

echo.
echo ========================================================
echo [DONE] In-Game Addon Updated!
echo In WoW, type /reload in chat, then type /guide to open!
echo ========================================================
echo.
pause
