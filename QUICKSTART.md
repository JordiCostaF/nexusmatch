# 🚀 NexusMatch - Guía de Inicio Rápido

## Requisitos Previos
- **Node.js** v18 o superior
- **npm** v9 o superior
- Un editor de código (VS Code recomendado)

---

## ⚡ Instalación y Ejecución (2 minutos)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local

# Editar .env.local con tus valores (por ahora puedes dejar GEMINI_API_KEY)
# Los valores de Firebase son opcionales para testing local
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

---

## 📱 Ver en Mobile

### Opción 1: DevTools del Navegador
- Presiona `F12` o `Ctrl+Shift+I`
- Click en el icono de móvil (device toggle)
- Selecciona "iPhone 12" u otro dispositivo

### Opción 2: En tu teléfono
```bash
# Ejecutar con --host
npm run dev -- --host

# Acceder en tu teléfono a: http://IP_DE_TU_COMPUTADORA:3000
# Ej: http://192.168.1.100:3000
```

---

## 🎨 Cambios Visuales Aplicados

### ✅ Nueva Paleta de Colores
- **Primario**: Magenta vibrante (#d946a6)
- **Acento**: Cian neon (#00d9ff)
- **Highlight**: Naranja (#ff6b35)
- Animaciones glow y efectos modernos

### ✅ Componentes Actualizados
1. **Discovery** - Tarjetas de jugadores con nuevo diseño
2. **Layout** - Bottom nav mejorada para mobile
3. **ChatRoom** - Chat con colores modernos
4. Más componentes en próximas iteraciones

### ✅ Responsive Design
- Optimizado para iPhone SE (375px)
- Adaptable a tablets y desktop
- Touch-friendly (targets mínimos 44x44px)

---

## 🎮 Cómo Funciona la App

### Páginas Principales
- **/** (Discovery) - Swipe cards para encontrar jugadores
- **/social** - Feed social de la comunidad
- **/chat** - Lista de conversaciones
- **/profile** - Tu perfil de usuario
- **/profile/edit** - Editar perfil

### Interacciones
- **❤️ Like**: Swipe derecha (o click botón corazón)
- **❌ Pass**: Swipe izquierda (o click X)
- **💬 Chat**: Click en un jugador o en chats

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Build y Deploy
npm run build            # Compila para producción
npm run preview          # Vista previa del build

# Linting
npm run lint             # Verifica errores de TypeScript

# Limpieza
npm run clean            # Elimina carpeta dist y archivos temporales
```

---

## 📋 Próximas Fases (Próximo Mes)

### Fase 2: Optimización Mobile ✓ (En progreso)
- [ ] Testing en dispositivos reales
- [ ] Optimizar performance
- [ ] Mejorar responsive design

### Fase 3: Sistema de Chat
- [ ] Typing indicators
- [ ] Reacciones con emojis
- [ ] Búsqueda en chats

### Fase 4: Firebase Integration
- [ ] Autenticación (Email/Google)
- [ ] Base de datos real
- [ ] Upload de fotos
- [ ] Mensajes en tiempo real

### Fase 5: Build & Deploy
- [ ] Deploy en Vercel o Firebase Hosting
- [ ] Custom domain
- [ ] SSL Certificate

---

## 🐛 Troubleshooting

### Puerto 3000 ya está en uso
```bash
# Cambiar puerto
npm run dev -- --port 3001
```

### Módulos no encontrados
```bash
# Limpiar dependencias y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Cambios no se ven
```bash
# Limpiar caché y recargar
Ctrl+Shift+R (Chrome) o Cmd+Shift+R (Mac)
```

### Error de CORS
Asegúrate de que `GEMINI_API_KEY` esté configurado correctamente en `.env.local`

---

## 💡 Tips de Desarrollo

### Hot Reload
Los cambios en archivos se reflejan automáticamente. Si no, refresca el navegador.

### Modo Oscuro
La app está diseñada para dark mode. Es el look predeterminado.

### Testing Responsive
- Prueba con múltiples breakpoints (mobile, tablet, desktop)
- Usa DevTools para emular diferentes dispositivos
- Prueba en dispositivos reales cuando sea posible

---

## 📚 Recursos Útiles

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vite Docs](https://vitejs.dev/)

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo editar los datos de usuarios?**
A: Por ahora son datos mock (simulados). Cuando integres Firebase, tendrás base de datos real.

**P: ¿Cómo agrego mi API key de Gemini?**
A: Crea `.env.local` y añade `GEMINI_API_KEY=tu_clave_aqui`

**P: ¿Funciona offline?**
A: No, necesita internet para funcionar correctamente.

---

## 🎯 Meta del Proyecto

Lanzar una versión beta de NexusMatch en **menos de 30 días** como plataforma de matching para gamers que permite encontrar compañeros de juego, chatear y formar comunidades.

---

**Última actualización**: 20/05/2026  
**Versión**: 0.1.0-beta  
**Status**: 🚧 En Desarrollo
