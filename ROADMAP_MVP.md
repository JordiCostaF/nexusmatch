# 🎮 NexusMatch - Roadmap MVP Próximo Mes

## ✅ Fase 1: Diseño Visual (EN PROGRESO)

### Completado ✓
- **Paleta de colores moderna y gamificada**
  - Primary: Magenta/Púrpura (#d946a6)
  - Accent: Cian neon (#00d9ff)
  - Highlight: Naranja vibrante (#ff6b35)
  - Neutral: Grises sutiles

- **Archivos actualizados:**
  - ✅ `tailwind.config.js` - Config con colores y animaciones
  - ✅ `src/index.css` - Estilos base y utilidades (botones, cards, glow effects)
  - ✅ `src/pages/Discovery.tsx` - Card swipe con nuevos colores y responsive
  - ✅ `src/components/Layout.tsx` - Bottom nav mejorada mobile-first
  - ✅ `src/pages/ChatRoom.tsx` - Chat con nuevos colores y efectos glow

### Por hacer (Fase 1)
- [ ] Actualizar página Social (cards de posts con nuevos colores)
- [ ] Actualizar página Chats (lista de conversaciones)
- [ ] Actualizar página Profile (perfil de usuario)
- [ ] Actualizar página EditProfile (formulario de edición)
- [ ] Actualizar página PartyChatRoom (chat grupal)

---

## 📱 Fase 2: Optimización Mobile-First

### Pendiente
- [ ] Revisar todos los componentes en viewport de 375px (iPhone SE)
- [ ] Verificar touch targets mínimos de 44x44px
- [ ] Ajustar padding/spacing para pantallas pequeñas
- [ ] Optimizar imágenes y lazy loading
- [ ] Pruebas en dispositivos reales

---

## 💬 Fase 3: Sistema de Chat Mejorado

### Pendiente
- [ ] Typing indicators ("Usuario está escribiendo...")
- [ ] Mensajes de sistema (usuario se unió, etc)
- [ ] Reacciones con emojis en mensajes
- [ ] Búsqueda en conversaciones
- [ ] Notificaciones push (requiere Firebase)
- [ ] Imagen/media preview en chat

---

## 🔥 Fase 4: Integración Firebase

### Tareas principales:
1. **Configuración inicial**
   - [ ] Crear proyecto en Firebase Console
   - [ ] Configurar Web App
   - [ ] Copiar config a `.env.local`

2. **Authentication**
   - [ ] Setup Email/Password auth
   - [ ] Setup Google Sign-in
   - [ ] Crear hook `useAuth`
   - [ ] Rutas protegidas

3. **Database (Firestore)**
   - [ ] Colección `users` (perfil, games, stats)
   - [ ] Colección `matches` (likes/matches entre usuarios)
   - [ ] Colección `chats` (conversaciones)
   - [ ] Colección `messages` (mensajes en tiempo real)
   - [ ] Indexing para búsquedas

4. **Storage**
   - [ ] Upload de fotos de perfil
   - [ ] Optimización de imágenes
   - [ ] Gestión de espacios de almacenamiento

### Ejemplo estructura Firestore:
```
users/
  {userId}/
    - name: string
    - age: number
    - bio: string
    - games: array
    - playStyle: string
    - language: string
    - image: string (URL)
    - createdAt: timestamp

matches/
  {matchId}/
    - user1Id: string
    - user2Id: string
    - status: "pending" | "matched" | "rejected"
    - createdAt: timestamp

chats/
  {chatId}/
    - participantIds: array
    - lastMessage: string
    - lastMessageTime: timestamp

messages/
  {messageId}/
    - senderId: string
    - text: string
    - timestamp: timestamp
```

---

## 🚀 Fase 5: Build y Deploy

### Requisitos:
- [ ] Optimización de bundle size
- [ ] Testing en diferentes navegadores
- [ ] Setup CI/CD (GitHub Actions)
- [ ] Deploy en Vercel o Firebase Hosting
- [ ] Configurar custom domain

### Comandos importantes:
```bash
# Development
npm run dev

# Build production
npm run build

# Preview build local
npm run preview

# Linting
npm run lint
```

---

## 📋 Checklist Antes de Beta

- [ ] Todos los componentes con paleta nuevo
- [ ] Mobile responsive en todos los dispositivos
- [ ] Chat funcional con Firebase
- [ ] Authentication working
- [ ] No console errors
- [ ] Performance > 80 Lighthouse
- [ ] Documentación de usuario lista
- [ ] Guía de instalación para beta testers

---

## 📧 Stack Actual

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 + Motion/Framer Motion
- **Routing**: React Router v7
- **API**: Google Gemini (provisional)
- **Database**: Firebase/Firestore (pendiente)
- **Icons**: Lucide React
- **Build**: Vite + ESBuild

---

## 🎯 Timeline Sugerido (4 semanas)

**Semana 1**: Completar Fase 1 y 2 (diseño visual + mobile)
**Semana 2**: Fase 3 (mejorar chat) + comenzar Firebase
**Semana 3**: Fase 4 (Firebase completo)
**Semana 4**: Testing, fixes, optimización y preparar beta

---

## 📞 Próximos Pasos Inmediatos

1. **Ejecutar el proyecto localmente:**
   ```bash
   npm install
   npm run dev
   ```

2. **Verificar los cambios:**
   - Abrir en navegador: http://localhost:3000
   - Probar en mobile view (DevTools)
   - Revisar colores y animaciones

3. **Continuar con:**
   - Actualizar componentes restantes (Social, Profile, etc)
   - Revisar responsive en dispositivos reales
   - Planificar integración Firebase

---

**Versión**: 0.1.0-beta  
**Último actualizado**: 20/05/2026  
**Status**: En Desarrollo 🚧
