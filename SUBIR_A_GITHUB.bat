@echo off
chcp 65001 >nul
title Subir a GitHub - NexusMatch
color 0B

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║          SUBIENDO NEXUSMATCH A GITHUB                      ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Cambiar al directorio del script
cd /d "%~dp0"

REM Verificar si .git existe y limpiarlo
if exist .git (
    echo [1/5] Limpiando repositorio anterior...
    rmdir .git /s /q
    echo ✓ Repositorio limpio
) else (
    echo [1/5] Sin repositorio previo (OK)
)

echo.
echo [2/5] Inicializando repositorio git...
git init
git config user.name "NexusMatch"
git config user.email "nexusmatch@dev.com"
echo ✓ Repositorio inicializado

echo.
echo [3/5] Agregando archivos...
git add .
echo ✓ Archivos agregados

echo.
echo [4/5] Creando commit...
git commit -m "NexusMatch MVP - v0.1.0"
echo ✓ Commit creado

echo.
echo [5/5] Configurando remote y subiendo a GitHub...
git branch -M main
git remote add origin https://github.com/JordiCostaF/nexusmatch.git

echo.
echo ════════════════════════════════════════════════════════════
echo ATENCIÓN: Te pedirá autenticación de GitHub
echo ════════════════════════════════════════════════════════════
echo.
echo Si pide contraseña, usa un "Personal Access Token":
echo 1. Ve a: https://github.com/settings/tokens
echo 2. Click "Generate new token (classic)"
echo 3. Dale permisos: repo
echo 4. Copia el token
echo 5. Pégalo aquí como contraseña
echo.

git push -u origin main

if errorlevel 1 (
    echo.
    echo ❌ Error al subir a GitHub
    echo Posibles causas:
    echo   - Usuario/contraseña incorrecto
    echo   - Falta generar Personal Access Token
    echo.
    pause
    exit /b 1
)

echo.
echo ════════════════════════════════════════════════════════════
echo ✅ ¡CÓDIGO SUBIDO A GITHUB!
echo.
echo Tu repositorio está en:
echo https://github.com/JordiCostaF/nexusmatch
echo.
echo PRÓXIMO PASO:
echo 1. Ve a: https://vercel.com
echo 2. Sign up with GitHub
echo 3. Click "Import Project"
echo 4. Selecciona "nexusmatch"
echo 5. Click "Deploy"
echo 6. ¡LISTO! Tu app estará en línea en 1-2 minutos
echo ════════════════════════════════════════════════════════════
echo.

pause
