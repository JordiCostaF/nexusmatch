# 🔧 Solucionar Error de Vite

## Error: "vite no se reconoce como comando interno"

Este error significa que **npm no está encontrando las dependencias instaladas**. Aquí te muestro cómo solucionarlo:

---

## ✅ Solución Rápida (Opción 1 - RECOMENDADA)

### Usa el archivo NEW: `START_NEXUSMATCH_FIX.bat`

1. **Descarga** `START_NEXUSMATCH_FIX.bat`
2. **Doble click** en él
3. ¡Listo! Debería funcionar

Este archivo:
- ✅ Verifica que Node.js esté instalado
- ✅ Instala dependencias automáticamente
- ✅ Limpia caché si hay problemas
- ✅ Muestra mensajes claros de error

---

## 🛠️ Solución Manual (Si el fix no funciona)

### Paso 1: Verifica que Node.js esté instalado

Abre **CMD** y escribe:
```bash
node --version
```

**Si ves un número** (ej: v18.0.0): ✅ Node.js está instalado

**Si ves error**: ❌ Descarga Node.js:
- Ir a: https://nodejs.org/
- Descarga la versión **LTS** (recomendada)
- Instala normalmente
- **Reinicia tu computadora**

---

### Paso 2: Abre CMD en la carpeta del proyecto

**Opción A: Directamente**
```bash
cd C:\Users\[TuNombre]\AppData\Roaming\Claude\...
```

**Opción B: Fácil - Click derecho en la carpeta**
1. Abre la carpeta del proyecto
2. Click derecho en la carpeta → **"Abrir en Terminal"**
3. Se abre CMD automáticamente en la carpeta correcta

---

### Paso 3: Instala las dependencias

En CMD, escribe:
```bash
npm install
```

**Espera 2-3 minutos** mientras se descargan las dependencias.

Verás esto al final:
```
added XXX packages in X.XXs
```

---

### Paso 4: Limpia caché

Escribe en CMD:
```bash
npm cache clean --force
```

---

### Paso 5: Inicia la app

Escribe en CMD:
```bash
npm run dev
```

Deberías ver:
```
VITE v... dev server running at:
➜  Local:   http://localhost:3000/
➜  press h to show help
```

**¡Éxito! Abre http://localhost:3000 en tu navegador**

---

## 🔍 Verifica que TODO esté instalado

Si aún tienes problemas, verifica esto en CMD:

```bash
# Ver versión de Node.js
node --version

# Ver versión de npm
npm --version

# Ver si git está instalado
git --version
```

Todos deberían mostrar versiones (ej: v18.0.0, v9.5.0, etc)

---

## 🚨 Errores Específicos

### "npm: No se reconoce como comando"

**Causa**: Node.js no está en el PATH de Windows

**Solución**:
1. Desinstala Node.js completamente
2. Reinicia la computadora
3. Descarga Node.js LTS desde https://nodejs.org/
4. Instala eligiendo "Automatically add Node.js to PATH"
5. Reinicia la computadora
6. Prueba `node --version` en CMD

---

### "Puerto 3000 en uso"

**Causa**: Otra app está usando el puerto 3000

**Solución - Opción A: Cierra la otra app**
```bash
# En CMD, para ver qué está usando el puerto 3000
netstat -ano | findstr :3000

# Para cerrarla (reemplaza XXXX con el número que aparezca)
taskkill /PID XXXX /F
```

**Solución - Opción B: Cambia de puerto**

En CMD, escribe:
```bash
npm run dev -- --port 3001
```

Luego abre: http://localhost:3001

---

### "ENOENT: no such file or directory"

**Causa**: Falta la carpeta `node_modules`

**Solución**:
```bash
# En la carpeta del proyecto, escribe:
npm install
```

Espera a que termine.

---

### "ERROR in setup: Tailwind CSS plugin error"

**Causa**: Problema con Tailwind

**Solución**:
```bash
# En la carpeta del proyecto, escribe:
npm run clean
npm install
npm run dev
```

---

## ✨ Checklist de Solución

- [ ] Node.js instalado (`node --version`)
- [ ] npm funcionando (`npm --version`)
- [ ] Carpeta `node_modules` existe
- [ ] Ejecutaste `npm install` exitosamente
- [ ] Probaste `npm run dev`
- [ ] Abriste http://localhost:3000

Si todo está ✅, ¡debería funcionar!

---

## 📞 Si Nada Funciona

Prueba esto **paso a paso**:

```bash
# 1. Limpiar todo
cd C:\Users\[TuNombre]\AppData\Roaming\Claude\...\
rmdir /s /q node_modules
del package-lock.json

# 2. Reinstalar
npm install

# 3. Limpiar caché
npm cache clean --force

# 4. Iniciar
npm run dev
```

---

## 🎯 Resumen

| Problema | Solución |
|----------|----------|
| vite no se reconoce | `npm install` |
| npm no se reconoce | Reinstala Node.js |
| Puerto en uso | Usa `--port 3001` |
| node_modules falta | `npm install` |
| Tailwind error | `npm run clean && npm install` |

---

**¿Seguidor todas estas instrucciones y aún no funciona?** 

Verifica:
1. ¿Seguiste TODOS los pasos?
2. ¿Reiniciaste la computadora?
3. ¿Cierras CMD y abres uno nuevo?
4. ¿Usas CMD como Administrador?

---

**Nota**: Usa `START_NEXUSMATCH_FIX.bat` que maneja todo automáticamente. Mucho más fácil. 🚀
