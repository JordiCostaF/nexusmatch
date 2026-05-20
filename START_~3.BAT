@echo off
REM ============================================
REM NexusMatch - Version MEJORADA CON DEBUG
REM NO se cierra automáticamente
REM ============================================

setlocal enabledelayedexpansion

color 0A
cls

echo.
echo ========================================
echo   🎮 NEXUSMATCH - INICIANDO...
echo ========================================
echo.
echo 📋 Verificando dependencias...
echo.

REM Cambiar a la carpeta del proyecto
cd /d "%~dp0"

echo Carpeta actual: %cd%
echo.

REM PASO 1: Verificar Node.js
echo ====== VERIFICANDO NODE.JS ======
where node >nul 2>&1

if errorlevel 1 (
    echo.
    echo ❌ ERROR: Node.js NO ESTÁ INSTALADO
    echo.
    echo 📥 Solución:
    echo    1. Ve a: https://nodejs.org/
    echo    2. Descarga la versión LTS (la verde)
    echo    3. Instala normalmente
    echo    4. IMPORTANTE: Marca "Automatically add to PATH"
    echo    5. Reinicia tu computadora
    echo    6. Vuelve a ejecutar este archivo
    echo.
    echo ❌ NO CONTINÚES HASTA INSTALAR NODE.JS
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Node.js encontrado
    node --version
    echo.
)

REM PASO 2: Verificar npm
echo ====== VERIFICANDO NPM ======
where npm >nul 2>&1

if errorlevel 1 (
    echo.
    echo ❌ ERROR: npm NO ESTÁ DISPONIBLE
    echo.
    echo Problema: Node.js está instalado pero npm no
    echo.
    echo Solución:
    echo    1. Desinstala completamente Node.js
    echo    2. Reinicia la computadora
    echo    3. Descarga Node.js nuevamente desde https://nodejs.org/
    echo    4. Instala marcando "Automatically add to PATH"
    echo    5. Reinicia la computadora
    echo.
    pause
    exit /b 1
) else (
    echo ✅ npm encontrado
    npm --version
    echo.
)

REM PASO 3: Ver si existe node_modules
echo ====== VERIFICANDO DEPENDENCIAS ======
if exist "node_modules" (
    echo ✅ Carpeta node_modules ya existe
    echo.
) else (
    echo ⚠️  Carpeta node_modules NO EXISTE
    echo.
    echo 📦 Instalando dependencias...
    echo    (Primera ejecución: espera 2-3 minutos)
    echo.
    
    call npm install
    
    if errorlevel 1 (
        echo.
        echo ❌ ERROR al instalar dependencias
        echo.
        echo Intenta esto manualmente:
        echo    1. Abre CMD (presiona Win+R, escribe "cmd", Enter)
        echo    2. Navega a tu carpeta: cd %cd%
        echo    3. Escribe: npm install
        echo    4. Espera a que termine
        echo.
        pause
        exit /b 1
    )
    
    echo ✅ Dependencias instaladas
    echo.
)

REM PASO 4: Limpiar caché
echo ====== LIMPIANDO CACHÉ ======
npm cache clean --force
echo ✅ Caché limpiado
echo.

REM PASO 5: Iniciar servidor
echo.
echo ====== INICIANDO SERVIDOR ======
echo.
echo ✅ ¡TODO LISTO! Iniciando la app...
echo.
echo 📍 URL local:     http://localhost:3000
echo 📱 URL en móvil:  http://IP_TU_COMPUTADORA:3000
echo.
echo 💡 INSTRUCCIONES:
echo    1. Abre tu navegador
echo    2. Ve a: http://localhost:3000
echo    3. ¡Verás tu app!
echo.
echo Para encontrar tu IP en móvil:
echo    - Abre CMD
echo    - Escribe: ipconfig
echo    - Busca "IPv4 Address"
echo.
echo ⏹️  Para detener: Presiona Ctrl+C
echo.
echo ========================================
echo.

call npm run dev -- --host

if errorlevel 1 (
    echo.
    echo ❌ ERROR al iniciar la app
    echo.
    echo Posibles soluciones:
    echo    1. ¿Otro programa usa el puerto 3000?
    echo       Prueba: npm run dev -- --port 3001
    echo.
    echo    2. Problema con Tailwind:
    echo       Escribe: npm run clean
    echo       Luego: npm run dev
    echo.
    echo    3. Aún no funciona:
    echo       - Cierra este CMD
    echo       - Abre CMD manualmente (Win+R, "cmd", Enter)
    echo       - Navega: cd %cd%
    echo       - Ejecuta: npm run dev
    echo.
    pause
    exit /b 1
)

pause
