@echo off
title Kurtcoin (KURT) - Canli Madenci ve Blokzincir Dugumu
color 0b
echo ==================================================================
echo   ?? KURTCOIN (KURT) - RESMI KATMAN-1 MADENCI MOTORU
echo   Hedef Cuzdan: 14FTsfBTzSBP9Zm9W65W1YNUEYhXJ3t6PA
echo   Blok Odulu: 50 KURT
echo   Blok Suresi: 1 Dakika
echo ==================================================================
echo.
cd /d "%~dp0"

if not exist "node_modules\mqtt" (
    echo [*] Ilk calisma icin ag modulu hazirlaniyor...
    call npm install mqtt ws --no-audit --no-fund --silent
    echo.
)

node kurtcoin_node.js
pause
