#!/bin/bash

# ============================================
# NexusMatch - Acceso Directo para Mac/Linux
# ============================================
# Este archivo inicia la app automáticamente

clear

echo ""
echo "========================================"
echo "  🎮 NEXUSMATCH - INICIANDO..."
echo "========================================"
echo ""

# Cambiar a la carpeta del proyecto
cd "$(dirname "$0")"

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias (primera vez)..."
    npm install
    echo ""
fi

# Iniciar el servidor
echo "✅ Iniciando servidor en http://localhost:3000"
echo ""
echo "💡 Abre tu navegador en: http://localhost:3000"
echo "📱 Para verlo en móvil: http://IP_TU_COMPUTADORA:3000"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

npm run dev
