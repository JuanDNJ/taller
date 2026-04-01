---
name: atomic-design
description: 'Classify, create, move, or review React components following the Atomic Design system of this project. Use when: creating a new component, deciding if something is an atom or molecule, checking where a component belongs, refactoring a misplaced component, reviewing component structure, adding to atoms molecules organisms templates.'
argument-hint: 'Describe the component you want to create or classify'
---

# Atomic Design — Taller CLOE

## Estructura de carpetas

```
src/components/
  atoms/       → Unidades mínimas, sin imports de otros componentes propios
  molecules/   → Combinan átomos, estado UI simple permitido
  organisms/   → Secciones complejas, pueden conectar a contexto global
  templates/   → Secciones de página completas, datos desde config/ o mook/
src/pages/     → Rutas. Sufijo obligatorio: .page.tsx
```

## Inventario actual

### Atoms — `src/components/atoms/`
| Componente | Qué hace |
|---|---|
| `Aside.tsx` | Contenedor semántico `<aside>` |
| `Avatar.tsx` | Imagen de perfil `{src, alt, size?}` |
| `Brand.tsx` | NavLink con nombre de la app |
| `Btn.tsx` | Botón genérico reutilizable |
| `Container.tsx` | Wrapper con tag HTML dinámico |
| `GoTo.tsx` | Navegación programática `{to}` |
| `Hero.tsx` | Sección hero en Container |
| `Image.tsx` | `<img>` responsiva con srcSet |
| `P.tsx` | Párrafo tipado |
| `TallerCloe.tsx` | Exporta TITLE_APP / SUBTITLE_APP |
| `ThemeToggle.tsx` | Selector light/dark/system usando `useTheme` |
| `Title.tsx` | Heading semántico con variantes de tamaño |
| `icons/` | LegacySvg, OkSvg, PrecisionSvg, ShieldSvg |

### Molecules — `src/components/molecules/`
| Componente | Qué hace |
|---|---|
| `Banner.tsx` | Encabezado de sección con `Title` |
| `CurrentUser.tsx` | Avatar + logout, consume `useAccount` |
| `CustomerReview.tsx` | Tarjeta de reseña de cliente |
| `HeroTop.tsx` | Hero con imagen opcional |
| `LogOutOfGoogle.tsx` | Botón cierre de sesión Firebase |
| `SignInWithGoogle.tsx` | Botón login con Google |
| `Template.tsx` | Wrapper de sección con id |
| `menus/Menu.tsx` | Links de nav desde config |
| `menus/MenuDesktop.tsx` | Menú pantallas grandes |
| `menus/MenuMobile.tsx` | Menú con toggle para móvil |

### Organisms — `src/components/organisms/`
Actualmente vacío. Usar cuando un componente agrupe varias moléculas con lógica propia.

### Templates — `src/components/templates/`
`ExperienceTemplate`, `HistoryTemplate`, `InstallationsTemplate`, `ItvTemplate`, `ServicesTemplate`, `TechniciansTemplate`, `Welcome`

---

## Árbol de decisión: ¿Dónde va mi componente?

```
¿Importa otros componentes propios del proyecto?
├─ NO  → Atom
└─ SÍ
   ├─ ¿Solo combina átomos con estado UI simple (open/close, hover)?
   │   └─ Molecule
   ├─ ¿Agrupa moléculas + conecta a contexto global o tiene lógica de negocio?
   │   └─ Organism
   ├─ ¿Es una sección completa de página con datos de config/ o mook/?
   │   └─ Template
   └─ ¿Es una ruta del router?
       └─ Page (src/pages/, sufijo .page.tsx)
```

---

## Procedimiento: Crear un componente nuevo

1. **Clasificar** usando el árbol de decisión anterior.
2. **Verificar** que no exista ya algo similar en el inventario.
3. **Crear** en la carpeta correcta con el naming apropiado.
4. **Importar** usando alias `@/components/<nivel>/<Nombre>`.
5. **No mezclar niveles**: un átomo no importa moléculas; una molécula no importa templates.

---

## Reglas críticas

- **Atoms**: sin `useContext`, sin llamadas a API, sin imports de componentes propios.
- **Molecules**: `useState`/`useRef` de UI permitido. No `useTheme`, no `useAccount` salvo `CurrentUser` (excepción establecida).
- **Templates**: datos siempre desde `@/config` o `@/mook`, nunca hardcodeados inline.
- **Imports**: siempre `@/components/atoms/X`, nunca rutas relativas `../../`.

---

## Errores comunes a evitar

| Error | Corrección |
|---|---|
| Crear componente en `src/components/` raíz | Siempre en `atoms/`, `molecules/`, etc. |
| Átomo con `useContext` | Mover lógica al padre o subir a molecule/organism |
| Template con datos hardcodeados | Extraer datos a `src/config/index.ts` |
| Import relativo `../atoms/Title` | Usar `@/components/atoms/Title` |
| Página con lógica de negocio inline | Extraer a service o context |
