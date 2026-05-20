# 🚀 Cómo Crear Acceso Directo para NexusMatch

## Windows

### Opción 1: Usar el archivo .bat (MÁS FÁCIL) ⭐

1. **Localiza el archivo**: `START_NEXUSMATCH.bat`
2. **Click derecho** en el archivo
3. Selecciona: **"Enviar a"** → **"Escritorio (crear acceso directo)"**
4. ¡Listo! Verás un icono en tu escritorio

**Para usar**:
- Doble click en el icono del escritorio
- La app se inicia automáticamente

---

### Opción 2: Crear acceso directo manualmente

1. **Click derecho** en escritorio → **"Nuevo"** → **"Acceso directo"**
2. En "Ubicación del elemento", escribe la ruta completa:
   ```
   C:\Users\[TuUsuario]\AppData\Roaming\Claude\...\START_NEXUSMATCH.bat
   ```
   O simplemente navega y selecciona el archivo
3. Click **"Siguiente"**
4. Dale un nombre: `NexusMatch` o `🎮 NexusMatch`
5. Click **"Finalizar"**

---

### Opción 3: Con PowerShell (Avanzado)

Abre PowerShell como Administrador:

```powershell
# Navega a la carpeta del proyecto
cd "C:\Ruta\A\Tu\Carpeta\nexusmatch"

# Crea el acceso directo
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$Home\Desktop\NexusMatch.lnk")
$Shortcut.TargetPath = "$PWD\START_NEXUSMATCH.bat"
$Shortcut.WorkingDirectory = "$PWD"
$Shortcut.Save()

Write-Host "✅ Acceso directo creado en el escritorio"
```

---

## Mac

### Opción 1: Crear alias (Recomendado)

1. **Abre Finder**
2. Navega a la carpeta de tu proyecto
3. Busca `START_NEXUSMATCH.sh`
4. Click derecho → **"Crear alias"**
5. Mueve el alias al **Escritorio**

**Para usar**:
- Doble click en el alias
- Se abre Terminal y ejecuta la app

---

### Opción 2: Crear un Automator App

1. Abre **Automator** (Aplicaciones → Utilidades)
2. Nueva → **Aplicación**
3. Busca "Shell" en el panel izquierdo
4. Arrastra **"Ejecutar Shell Script"**
5. Escribe:
   ```bash
   cd "$(dirname "$0")"
   cd .. # O la ruta a tu proyecto
   ./START_NEXUSMATCH.sh
   ```
6. **Archivo** → **Guardar** como `NexusMatch.app`
7. Guarda en **Escritorio**

**Para usar**:
- Doble click en `NexusMatch.app`

---

## Linux

### Opción 1: Crear .desktop file (Recomendado)

1. Abre Terminal
2. Crea el archivo:
   ```bash
   nano ~/.local/share/applications/nexusmatch.desktop
   ```

3. Pega esto (reemplaza la ruta):
   ```ini
   [Desktop Entry]
   Version=1.0
   Type=Application
   Name=NexusMatch
   Comment=Plataforma de matching para gamers
   Exec=/ruta/a/tu/carpeta/START_NEXUSMATCH.sh
   Path=/ruta/a/tu/carpeta
   Icon=application-x-executable
   Terminal=true
   Categories=Development;
   ```

4. Presiona `Ctrl+O` → Enter → `Ctrl+X` para guardar

5. Copia a escritorio:
   ```bash
   cp ~/.local/share/applications/nexusmatch.desktop ~/Desktop/
   ```

**Para usar**:
- Doble click en el icono del escritorio
- Se abre Terminal y ejecuta la app

---

### Opción 2: Alias en Terminal

```bash
# Añade esto a tu ~/.bashrc o ~/.zshrc
alias nexusmatch="cd /ruta/a/tu/carpeta && npm run dev"
```

Luego simplemente escribe en Terminal:
```bash
nexusmatch
```

---

## 📱 Acceso desde Móvil

Después de ejecutar la app con cualquier método:

1. **En tu computadora**, la app corre en: `http://localhost:3000`
2. **En tu móvil**, abre: `http://IP_TU_COMPUTADORA:3000`

Para encontrar tu IP:
- **Windows**: `ipconfig` en CMD (busca "IPv4")
- **Mac/Linux**: `ifconfig` en Terminal (busca "inet")

Ejemplo: `http://192.168.1.100:3000`

---

## ✨ Consejos

### Personalizar el icono (Windows)

1. Click derecho en el acceso directo
2. **Propiedades** → **Cambiar icono**
3. Selecciona un icono o descarga uno personalizado

### Crear carpeta de aplicaciones

En lugar de tener accesos en el escritorio, puedes:
1. Crear carpeta: `C:\Users\[Usuario]\AppData\Roaming\NexusMatch`
2. Meter ahí el .bat
3. Crear acceso directo al .bat

### Ejecutar con privilegios de administrador

Si necesitas ejecutar como admin:
1. Click derecho en acceso directo
2. **Propiedades** → **Avanzadas**
3. Marca **"Ejecutar como administrador"**

---

## 🐛 Troubleshooting

### "No se ejecuta"
- Verifica que el archivo .bat/.sh esté en la carpeta correcta
- En Mac/Linux, asegúrate de que el .sh es ejecutable: `chmod +x START_NEXUSMATCH.sh`

### "Puerto 3000 en uso"
- El script usa puerto 3000
- Si está ocupado, edita el archivo y cambia a otro puerto

### "npm no encontrado"
- Node.js no está instalado
- Descarga desde: https://nodejs.org/

### "Ruta incorrecta"
- Usa rutas completas, no relativas
- En Windows: `C:\Users\Jordi\...\`
- En Mac/Linux: `/Users/jordi/...`

---

## 🎯 Resumen Rápido

### Windows
```
1. Haz click derecho en START_NEXUSMATCH.bat
2. "Enviar a" → "Escritorio (crear acceso directo)"
3. Doble click al icono en el escritorio
```

### Mac
```
1. Click derecho en START_NEXUSMATCH.sh
2. "Crear alias"
3. Mueve alias al Escritorio
4. Doble click para ejecutar
```

### Linux
```
1. Crea .desktop file (ver arriba)
2. Doble click en el icono del escritorio
3. Elige "Ejecutar"
```

---

**¡Listo!** Ahora tienes un acceso directo para ejecutar NexusMatch en 1 click. 🚀
