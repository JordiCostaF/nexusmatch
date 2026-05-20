@echo off
chcp 65001 >nul
title NexusMatch - Limpiar e Iniciar
color 0C

echo.
echo ╔═══════════════════════════════════════════════════════╗
echo ║  NEXUSMATCH - LIMPIAR COMPLETO E INICIAR             ║
echo ║  (Esto eliminará node_modules y reinstalará todo)    ║
echo ╚═══════════════════════════════════════════════════════╝
echo.

REM Cambiar al directorio del script
cd /d "%~dp0"

echo [1/4] Limpiando carpeta node_modules...
if exist node_modules (
    rmdir node_modules /s /q
    if errorlevel 1 (
        echo ❌ No se pudo eliminar node_modules
        echo Intenta ejecutar este archivo como Administrador
        pause
        exit /b 1
    )
    echo ✓ node_modules eliminado
) else (
    echo ✓ node_modules no existe
)

echo.
echo [2/4] Limpiando package-lock.json...
if exist package-lock.json (
    del package-lock.json
    echo ✓ package-lock.json eliminado
) else (
    echo ✓ package-lock.json no existe
)

echo.
echo [3/4] Instalando dependencias (esto puede tomar 1-2 minutos)...
call npm install
if errorlevel 1 (
    echo.
    echo ❌ Error durante npm install
    echo Por favor, intenta ejecutar este archivo como Administrador
    pause
    exit /b 1
)
echo ✓ Dependencias instaladas correctamente

echo.
echo [4/4] Iniciando servidor de desarrollo...
echo.
echo ════════════════════════════════════════════════════════
echo Tu aplicación está comenzando...
echo Busca una línea que diga:
echo   ➜ Local: http://localhost:3000/
echo Cópiala en tu navegador y ¡listo!
echo ════════════════════════════════════════════════════════
echo.

REM Ejecutar el servidor
call npm run dev

pause
