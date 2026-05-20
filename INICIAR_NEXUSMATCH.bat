@echo off
chcp 65001 >nul
title NexusMatch - Iniciando...
color 0A

echo.
echo ╔════════════════════════════════════════╗
echo ║    NEXUSMATCH - INICIANDO APLICACION   ║
echo ╚════════════════════════════════════════╝
echo.

REM Cambiar al directorio del script
cd /d "%~dp0"

REM Verificar si node_modules existe
if not exist node_modules (
    echo [1/2] Instalando dependencias...
    call npm install
    if errorlevel 1 (
        echo.
        echo ❌ Error durante npm install
        pause
        exit /b 1
    )
    echo ✓ Dependencias instaladas
) else (
    echo ✓ Dependencias ya instaladas
)

echo.
echo [2/2] Iniciando servidor de desarrollo...
echo.
echo ════════════════════════════════════════
echo Espera a que aparezca la URL de tu app
echo Debería ver algo como:
echo   ➜ Local: http://localhost:3000/
echo ════════════════════════════════════════
echo.

REM Ejecutar el servidor
call npm run dev

pause
