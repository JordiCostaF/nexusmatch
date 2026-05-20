@echo off
REM ============================================
REM NexusMatch - Acceso Directo MEJORADO
REM Soluciona problemas comunes
REM ============================================

color 0A
cls

echo.
echo ========================================
echo   🎮 NEXUSMATCH - INICIANDO...
echo ========================================
echo.

REM Cambiar a la carpeta del proyecto
cd /d "%~dp0"

REM Verificar si Node.js está instalado
echo 📋 Verificando Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ ERROR: Node.js no está instalado
    echo.
    echo 📥 Descárgalo aquí: https://nodejs.org/
    echo.
    echo Después de instalar Node.js, vuelve a ejecutar este archivo
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js encontrado

REM Verificar si npm está instalado
echo 📋 Verificando npm...
npm --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo ❌ ERROR: npm no está instalado
    echo.
    echo Por favor, reinstala Node.js
    echo.
    pause
    exit /b 1
)

echo ✅ npm encontrado

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo.
    echo 📦 Primera ejecución - Instalando dependencias...
    echo    (Esto puede tardar 1-2 minutos)
    echo.
    
    call npm install
    
    if errorlevel 1 (
        echo.
        echo ❌ ERROR al instalar dependencias
        echo.
        echo Intenta esto manualmente:
        echo 1. Abre CMD
        echo 2. Escribe: cd %cd%
        echo 3. Escribe: npm install
        echo.
        pause
        exit /b 1
    )
)

REM Limpiar caché de npm si hay problemas
echo.
echo 🧹 Limpiando caché...
call npm cache clean --force >nul 2>&1

REM Reiniciar el servidor
echo.
echo ✅ ¡Todo listo! Iniciando servidor...
echo.
echo 📍 URL local:     http://localhost:3000
echo 📱 URL en móvil:  http://IP_TU_COMPUTADORA:3000
echo.
echo 💡 Para encontrar tu IP:
echo    Abre CMD y escribe: ipconfig
echo    Busca "IPv4 Address"
echo    Ejemplo: 192.168.1.100
echo.
echo ⏹️  Presiona Ctrl+C para detener
echo.

REM Ejecutar vite con --host para acceso desde móvil
call npm run dev -- --host

if errorlevel 1 (
    echo.
    echo ❌ ERROR al iniciar la app
    echo.
    echo Posibles soluciones:
    echo 1. Cierra cualquier otra instancia de la app
    echo 2. Verifica que el puerto 3000 no esté en uso
    echo 3. Intenta ejecutar "npm run dev" manualmente
    echo.
    pause
    exit /b 1
)

pause
