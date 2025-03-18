# Taller-Task

# Maomao Notes 📝

Maomao Notes es una aplicación de gestión de notas y tareas construida con **Ionic Angular** para el frontend y **TypeScript** para el backend. La aplicación permite a los usuarios crear, editar y eliminar notas con fechas programadas.

## 🚀 Tecnologías utilizadas
- **Frontend**: Ionic Angular, TypeScript, CSS
- **Backend**: Firebase Firestore


## 📌 Instalación y configuración

### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/Maomao-4/Taller-Task.git
 cd maomao-notes
```

### 2️⃣ Instalar dependencias
Asegúrate de tener instalado **Node.js** y **npm**, luego ejecuta:
```sh
npm install
```

### 3️⃣ Configurar Firebase
1. Crea un proyecto en **[Firebase Console](https://console.firebase.google.com/)**.
2. Habilita **Firestore Database** y **Authentication** (si usas autenticación).
3. En la configuración del proyecto, agrega una nueva aplicación web y copia las credenciales de configuración.
4. Crea un archivo `src/environments/environment.ts` y agrega lo siguiente:

```ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
  }
};
```

> 🔥 **Nota:** Para producción, crea también `src/environments/environment.prod.ts` con la misma estructura.

### 4️⃣ Ejecutar la aplicación
```sh
ionic serve
```
La aplicación se abrirá en `http://localhost:8100/`.

---

## 🎯 Funcionalidades principales
✅ Agregar, editar y eliminar notas con fechas programadas
✅ Guardar datos en **Firebase Firestore**
✅ Diseño responsive y adaptable
✅ Estilos personalizados inspirados en madera 📜




