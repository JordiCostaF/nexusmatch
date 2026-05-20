@echo off
REM ============================================
REM NexusMatch - Acceso Directo para Windows
REM ============================================
REM Este archivo inicia la app automáticamente

echo.
echo ========================================
echo   🎮 NEXUSMATCH - INICIANDO...
echo ========================================
echo.

REM Cambiar a la carpeta del proyecto
cd /d "%~dp0"

REM Verificar si node_modules existe
if not exist "node_modules" (
    echo 📦 Instalando dependencias (primera vez)...
    call npm install
    echo.
)

REM Iniciar el servidor
echo ✅ Iniciando servidor en http://localhost:3000
echo.
echo 💡 Abre tu navegador en: http://localhost:3000
echo 📱 Para verlo en móvil: http://IP_TU_COMPUTADORA:3000
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

npm run dev

pause
