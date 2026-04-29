# 📱 PokeApp — Aplicación Móvil con PokéAPI

Una aplicación móvil desarrollada con **Ionic + Angular** que consume la [PokéAPI](https://pokeapi.co/) para listar y consultar información detallada de Pokémon. Puede ejecutarse como app web o instalarse en Android como APK nativo gracias a **Capacitor**.

---

## 🤔 ¿Cómo funciona la app?

La app se conecta a **PokéAPI**, una API pública y gratuita que tiene información de todos los Pokémon de la saga. No necesita registro ni contraseña — simplemente hace peticiones HTTP y recibe los datos en formato JSON.

El flujo es así:

1. **Al abrir la app**, se hace una sola petición a la API pidiendo la lista completa de Pokémon (más de 1000). Solo trae sus nombres, nada más, para que cargue rápido.

2. **Cuando el usuario escribe en el buscador**, la app filtra esa lista localmente (sin hacer más peticiones) y muestra los resultados en pantalla.

3. **Al tocar un Pokémon**, la app hace una nueva petición a la API pidiendo los detalles de ese Pokémon específico: su imagen oficial, tipos (fuego, agua, etc.), y estadísticas base como HP, ataque y defensa.

Todo esto ocurre en el servicio `pokemon.service.ts`, que centraliza las llamadas a la API y las entrega a las páginas usando **Observables** de RxJS.

```
Usuario busca "char"
        ↓
App filtra lista local → muestra Charmander, Charmeleon, Charizard...
        ↓
Usuario toca Charizard
        ↓
App consulta: pokeapi.co/api/v2/pokemon/charizard
        ↓
Muestra imagen, tipo Fuego/Volador y estadísticas
```

---

## 🚀 Características

- 🔍 **Buscador en tiempo real** — filtra entre más de 1000 Pokémon por nombre
- 📋 **Lista de Pokémon** — carga todos los Pokémon disponibles desde la PokéAPI
- 📄 **Vista de detalle** — muestra imagen oficial, tipo, estadísticas base y más
- 📱 **App nativa Android** — empaquetada con Capacitor para instalar como APK
- 🎨 **Ícono y Splash Screen personalizados**

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|---|---|---|
| [Ionic Framework](https://ionicframework.com/) | v8 | UI components para apps móviles |
| [Angular](https://angular.io/) | v18 | Framework principal |
| [Capacitor](https://capacitorjs.com/) | v6 | Empaquetado nativo Android/iOS |
| [PokéAPI](https://pokeapi.co/) | v2 | API REST pública de Pokémon |
| TypeScript | ~5.4 | Lenguaje de programación |

---

## 📂 Estructura del proyecto

```
pokeapp/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── pokemon-list/       # Página principal con buscador
│   │   │   └── pokemon-detail/     # Página de detalle del Pokémon
│   │   ├── services/
│   │   │   └── pokemon.service.ts  # Llamadas a la PokéAPI
│   │   └── app-routing.module.ts   # Rutas de la app
│   └── assets/
├── android/                        # Proyecto Android (Capacitor)
├── assets/                         # Ícono y splash originales
│   ├── icon.png                    # 1024x1024
│   └── splash.png                  # 2732x2732
└── package.json
```

---

## ⚙️ Instalación y ejecución local

### Requisitos previos

- [Node.js](https://nodejs.org) v18 o superior
- [Android Studio](https://developer.android.com/studio) (solo para generar APK)

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/pokeapp.git
cd pokeapp

# 2. Instalar dependencias
npm install

# 3. Ejecutar en el navegador
npm start
```

La app estará disponible en `http://localhost:8100`

---

## 📲 Generar APK para Android

```bash
# Instalar dependencias de Capacitor Android
npm install @capacitor/core@6.2.0 --legacy-peer-deps
npm install @capacitor/android@6 --legacy-peer-deps

# Compilar el proyecto
npm run build

# Agregar plataforma Android (solo la primera vez)
npx cap add android

# Sincronizar
npx cap sync android

# Generar ícono y splash screen
npm install @capacitor/assets --save-dev --legacy-peer-deps
npx capacitor-assets generate --android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

En Android Studio: **Build → Build Bundle(s)/APK(s) → Build APK(s)**

---

## 🌐 API utilizada

Este proyecto consume la **PokéAPI v2** — una API REST pública y gratuita.

| Endpoint | Descripción |
|---|---|
| `GET /pokemon?limit=100000` | Obtiene todos los Pokémon disponibles |
| `GET /pokemon/{name}` | Obtiene el detalle de un Pokémon por nombre o ID |

Documentación oficial: [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2)

---

## 📸 Capturas de pantalla

> *Próximamente*

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos para el curso de **Aplicaciones Móviles**.

---

*Desarrollado con ❤️ usando Ionic + Angular + PokéAPI*
