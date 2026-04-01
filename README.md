<div align="center">
  <img src="src/assets/images/png/logo-512x512.png" alt="Taller CLOE Logo" width="120" />

  # Taller CLOE

  **Sitio web profesional para taller de automoción y servicio técnico**

  [![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
  [![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
  [![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?style=flat-square&logo=vitest)](https://vitest.dev/)

  🌐 **[Ver en producción ↗](https://talleres-cloe.web.app)**
</div>

---

## Descripción

**Taller CLOE** es el sitio web de un taller mecánico profesional ubicado en Sant Boi de Llobregat. Presenta los servicios del taller, el equipo de técnicos, historia y datos de contacto — con una experiencia visual moderna, responsiva y adaptada al sistema de temas del usuario.

> *"Cuidado experto para tu vehículo"* — más de 30 años de experiencia, 12 000+ servicios realizados y 99 % de diagnósticos resueltos.

---

## Características

| Característica | Descripción |
|---|---|
| 🎨 **Tema light / dark / system** | Persiste en `localStorage`, sincronizado con el SO en tiempo real |
| 🔐 **Auth con Google** | Firebase Authentication vía Google Sign-In |
| ⚛️ **Atomic Design** | Átomos → Moléculas → Organismos → Templates → Páginas |
| 🔗 **Alias `@/`** | Importaciones siempre desde la raíz de `src/` |
| ⚡ **Lazy routing** | Carga diferida de páginas con `createBrowserRouter` |
| 📱 **Responsive** | Menú móvil y desktop independientes |
| 🦭 **React Compiler** | Optimización automática de renders (React 19) |
| 📐 **TypeScript estricto** | `strict: true`, types propios en `src/types/` |

---

## Capturas

<table>
  <tr>
    <td align="center">
      <img src="src/assets/images/png/hero2.png" alt="Hero section" width="380" />
      <br /><sub><b>Hero principal</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/png/entorno_taller.png" alt="Entorno del taller" width="380" />
      <br /><sub><b>Instalaciones</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="src/assets/images/png/engine_repair.png" alt="Reparación de motor" width="380" />
      <br /><sub><b>Servicios</b></sub>
    </td>
    <td align="center">
      <img src="src/assets/images/png/herramientas_de_alta_gama.png" alt="Herramientas profesionales" width="380" />
      <br /><sub><b>Herramientas de alta gama</b></sub>
    </td>
  </tr>
</table>

---

## Arquitectura — Atomic Design

```
src/components/
  atoms/         → Unidades mínimas sin imports propios
                   Title, Btn, Avatar, Brand, ThemeToggle, Hero, Image…
  molecules/     → Combinan átomos + estado UI simple
                   Banner, HeroTop, SignInWithGoogle, menus/Menu…
  organisms/     → [vacío — próximas features]
  templates/     → Secciones completas con datos de config/
                   Welcome, ServicesTemplate, HistoryTemplate…

src/pages/
  *.page.tsx     → Rutas del router  (App, About, Services, Contact, PageNotFound)
  layouts/       → Header, Footer, Public.layout, Private.layout
  authorized/    → Rutas privadas  (Account.page.tsx)
```

---

## Páginas y rutas

| Ruta | Página | Acceso |
|---|---|---|
| `/` | `App.page.tsx` | Público |
| `/about` | `About.page.tsx` | Público |
| `/services` | `Services.page.tsx` | Público |
| `/contact` | `Contact.page.tsx` | Público |
| `/account` | `Account.page.tsx` | 🔒 Privado |
| `*` | `PageNotFound.page.tsx` | Público |

---

## Sistema de temas

```
┌─ localStorage key: 'theme' ──────────────────────────────────────┐
│  'light'  → siempre modo claro                                   │
│  'dark'   → siempre modo oscuro                                  │
│  'system' → sincronizado con prefers-color-scheme del SO         │
└──────────────────────────────────────────────────────────────────┘
              ↓
   GloblaProvider aplica/quita la clase .dark en <html>
              ↓
   Variables CSS en :root (claro) y .dark (oscuro)
   definidas en src/assets/css/root.css
```

Los tres modos se seleccionan desde el componente `ThemeToggle` en el header.  
Usa el hook `useTheme()` para acceder a `theme`, `resolvedTheme` y `setTheme`.

---

## Stack técnico

| Herramienta | Versión | Rol |
|---|---|---|
| [React](https://react.dev/) | 19 | UI + React Compiler habilitado |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estricto |
| [Vite](https://vitejs.dev/) | 8 | Bundler + servidor dev |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utilidades CSS + variables de tema |
| [React Router](https://reactrouter.com/) | 7 | SPA con lazy imports |
| [Firebase](https://firebase.google.com/) | 12 | Auth — Google Sign-In |
| [Vitest](https://vitest.dev/) | 4 | Tests unitarios (jsdom) |
| [react-icons](https://react-icons.github.io/) | — | FiSun, FiMoon, FiMonitor… |

---

## Empezar

### 1. Clonar e instalar

```bash
git clone https://github.com/tu-usuario/taller-cloe.git
cd taller-cloe
npm install
```

### 2. Variables de entorno

Crea `.env.local` con las claves de la consola de Firebase:

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### 3. Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:5173` |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build local |
| `npm run test` | Ejecuta tests con Vitest |
| `npm run test:ui` | Tests con interfaz visual (Vitest UI) |
| `npm run test:coverage` | Informe de cobertura |
| `npm run lint` | Análisis estático con ESLint |
| `npm run format` | Formateo con Prettier |

---

## Autenticación

El flujo de login usa **Firebase Auth con Google Sign-In**:

1. `<SignInWithGoogle />` llama a `signInWithPopup` en `src/services/account.ts`
2. `AccountProvider` escucha `onAuthStateChanged` y expone `user` vía `AccountCtx`
3. `useAccount()` — hook para consumir el contexto en cualquier componente
4. `/account` está protegida por `Private.layout.tsx` — redirige al inicio si no hay sesión

---

## Estructura del proyecto

```
taller/
├── src/
│   ├── apis/            # Inicialización de Firebase
│   ├── assets/          # CSS (variables de tema), imágenes, vídeos
│   ├── components/      # Atomic Design
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── config/          # Constantes: textos, mocks, datos de contacto
│   ├── context/         # GlobalContext (tema) + AccountCtx (auth)
│   │   ├── hooks/       # useTheme · useAccount
│   │   └── providers/   # GloblaProvider · AccountProvider
│   ├── mook/            # Mock de reseñas de clientes
│   ├── pages/           # Páginas + layouts
│   ├── router/          # createBrowserRouter
│   ├── services/        # Lógica Firebase (account.ts)
│   ├── types/           # Types compartidos (Children, Theme, CustomerReviewProps)
│   └── utils/           # queryElement()
├── public/
├── firebase.json
└── vite.config.ts
```

---

## Despliegue

El proyecto está desplegado en **Firebase Hosting**:

```bash
npm run build
firebase deploy
```

URL de producción: **https://talleres-cloe.web.app**

---

## Licencia

Proyecto de uso privado / demo. Todos los derechos reservados.

---

<div align="center">
  Hecho con ❤️ para <strong>Taller CLOE</strong> — Sant Boi de Llobregat
</div>
