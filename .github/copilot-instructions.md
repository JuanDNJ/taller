# Taller CLOE — Project Instructions

Proyecto React con Atomic Design. Lee este archivo antes de crear, mover o revisar cualquier componente, hook, contexto o ruta.

---

## Stack

| Herramienta | Versión | Notas |
|---|---|---|
| React | 19 | Compiler activado vía babel plugin |
| TypeScript | 5 | Modo estricto (`strict: true`) |
| Vite | 8 | Alias `@/` → `src/` |
| Tailwind CSS | 4 | Variables CSS propias en `src/assets/css/root.css` |
| React Router | 7 | `createBrowserRouter`, lazy imports |
| Firebase | 12 | Solo Auth (Google Sign-In) |
| Vitest | 4 | jsdom, globals: true |

---

## Regla de importación — SIEMPRE alias `@/`

```ts
// ✅ Correcto
import Title from '@/components/atoms/Title'
import { useTheme } from '@/context/hooks/useTheme'

// ❌ Incorrecto
import Title from '../../components/atoms/Title'
```

---

## Arquitectura: Atomic Design

```
src/components/
  atoms/       → Unidades mínimas. Sin imports de otros componentes propios.
  molecules/   → Combinan átomos. Estado UI simple (open/close) permitido.
  organisms/   → Agrupan moléculas. Pueden conectar a contexto global. (vacío aún)
  templates/   → Secciones completas de página. Datos desde config/ o mook/.
src/pages/     → Rutas del router. Sufijo: .page.tsx
```

### Árbol de decisión rápida

```
¿Importa componentes propios? NO → Atom
¿Solo átomos + estado UI simple? → Molecule
¿Moléculas + contexto/negocio?  → Organism
¿Sección completa de página?    → Template
¿Es una ruta del router?        → Page (.page.tsx)
```

---

## Inventario de componentes

### Atoms — `src/components/atoms/`

| Archivo | Props clave | Responsabilidad |
|---|---|---|
| `Aside.tsx` | `children` | Contenedor semántico `<aside>` |
| `Avatar.tsx` | `src, alt, size?` | Imagen de perfil |
| `Brand.tsx` | `label` | NavLink con nombre de la app |
| `Btn.tsx` | `label, className?` | Botón genérico |
| `Container.tsx` | `children, tag?` | Wrapper con tag HTML dinámico |
| `GoTo.tsx` | `to` | Navegación programática |
| `Hero.tsx` | `children` | Sección hero en Container |
| `Image.tsx` | `srcSet?, src?` | `<img>` responsiva |
| `P.tsx` | `children: string` | Párrafo tipado |
| `TallerCloe.tsx` | — | Exporta TITLE_APP / SUBTITLE_APP |
| `ThemeToggle.tsx` | — | Selector light/dark/system |
| `Title.tsx` | `label, size?, tag?` | Heading con variantes |
| `icons/LegacySvg` | — | SVG reloj |
| `icons/OkSvg` | — | SVG check |
| `icons/PrecisionSvg` | — | SVG precisión |
| `icons/ShieldSvg` | — | SVG escudo |

### Molecules — `src/components/molecules/`

| Archivo | Responsabilidad |
|---|---|
| `Banner.tsx` | Encabezado de sección con `Title` |
| `CurrentUser.tsx` | Avatar + logout, consume `useAccount` |
| `CustomerReview.tsx` | Tarjeta de reseña `{comment, avatar, name, position, color}` |
| `HeroTop.tsx` | Hero con imagen opcional |
| `LogOutOfGoogle.tsx` | Botón cierre de sesión Firebase |
| `SignInWithGoogle.tsx` | Botón login Google |
| `Template.tsx` | Wrapper de sección con id y Container |
| `menus/Menu.tsx` | Links de nav desde config |
| `menus/MenuDesktop.tsx` | Menú pantallas grandes |
| `menus/MenuMobile.tsx` | Menú con toggle para móvil |

### Organisms — `src/components/organisms/`
Vacío. Usar cuando un componente agrupe varias moléculas con lógica de negocio propia.

### Templates — `src/components/templates/`
`ExperienceTemplate`, `HistoryTemplate`, `InstallationsTemplate`, `ItvTemplate`, `ServicesTemplate`, `TechniciansTemplate`, `Welcome`

---

## Páginas — `src/pages/`

```
App.page.tsx           → "/"
About.page.tsx         → "/about"
Services.page.tsx      → "/services"
Contact.page.tsx       → "/contact"
PageNotFound.page.tsx  → "*"
authorized/
  Account.page.tsx     → "/account" (ruta privada)
layouts/
  Header.tsx           → Header global sticky
  Footer.tsx           → Footer global
  Public.layout.tsx    → Outlet + Header + Footer
  Private.layout.tsx   → Auth guard + Header
```

---

## Contexto global — `src/context/`

```
GlobalContext.tsx          → ThemeContextType {theme, resolvedTheme, setTheme}
AccountCtx.tsx             → {user: User | null}
hooks/
  useTheme.tsx             → Consume GlobalContext
  useAccount.tsx           → Consume AccountCtx
providers/
  GloblaProvider.tsx       → Tema: localStorage + matchMedia + clase .dark en <html>
  AccountProvider.tsx      → Auth: onAuthStateChanged + toast
```

**Regla:** Consumir contexto siempre a través del hook (`useTheme`, `useAccount`), nunca con `useContext` directo.

---

## Sistema de temas

- Variables CSS en `src/assets/css/root.css`: `:root` = claro, `.dark` = oscuro
- `GlobalProvider` aplica/quita la clase `.dark` en `<html>`
- Persistencia en `localStorage` con clave `theme`
- Valores: `'light' | 'dark' | 'system'`
- Si es `'system'`, escucha `matchMedia('prefers-color-scheme: dark')` en tiempo real
- Componente de UI: `src/components/atoms/ThemeToggle.tsx`

---

## Datos y constantes

| Archivo | Contiene |
|---|---|
| `src/config/index.ts` | Textos, imágenes, mocks estructurados (HERO_MOOK, SERVICE_MOOK, ABOUT, etc.) |
| `src/mook/index.ts` | Mock de reseñas de clientes |
| `src/types/inex.ts` | `Children`, `Theme`, `CustomerReviewProps` |
| `src/utils/index.ts` | `queryElement(selector)` |

---

## Naming y convenciones

| Tipo | Patrón | Ejemplo |
|---|---|---|
| Página de ruta | `*.page.tsx` en `pages/` | `About.page.tsx` |
| Layout | `*.layout.tsx` en `pages/layouts/` | `Public.layout.tsx` |
| Átomo | `ComponentName.tsx` en `atoms/` | `Title.tsx` |
| Molécula | `ComponentName.tsx` en `molecules/` | `Banner.tsx` |
| Hook de contexto | `use*.tsx` en `context/hooks/` | `useTheme.tsx` |
| Provider | `*Provider.tsx` en `context/providers/` | `GloblaProvider.tsx` |
| Servicio | `*.ts` en `services/` | `account.ts` |

---

## Reglas de revisión de código

1. **Átomo con `useContext`** → mover lógica al componente padre o subir a molecule/organism.
2. **Import relativo cruzando carpetas** → reemplazar por alias `@/`.
3. **Template con datos hardcodeados** → extraer a `src/config/index.ts`.
4. **Componente en `src/components/` raíz** → mover a `atoms/`, `molecules/`, etc.
5. **Llamada a Firebase fuera de `services/` o providers** → refactorizar a `src/services/`.
