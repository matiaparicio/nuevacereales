# Nueva Cereales S.A. — Sitio Web

Sitio institucional de **Nueva Cereales S.A.**, corredores de cereales en Bahía Blanca desde 2007.

## Stack

- **Astro 5** — Sitio mayormente estático, HTML puro, SEO-first
- **Tailwind CSS** — Estilos utility-first
- **GSAP** — Animaciones sobrias (fade/slide con ScrollTrigger)
- **Deploy**: Vercel

## Estructura


```
src/
├── layouts/
│   └── Layout.astro         # HTML base, fonts, estilos globales
├── components/
│   ├── Navbar.astro         # Nav sticky con mobile menu + botón Acceso Clientes
│   ├── Hero.astro           # Hero fullscreen con animación GSAP
│   ├── Institutional.astro  # Sección institucional editorial
│   ├── Services.astro       # 5 cards de servicios + CTA
│   ├── Contact.astro        # Contacto con mailto
│   └── Footer.astro
└── pages/
    └── index.astro          # Composición de la home
public/
└── images/
    └── logo.png             # Logo de la empresa
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321)

## Build de producción

```bash
npm run build
```

Output en `./dist/`

## Deploy en Vercel

1. Push del repo a GitHub
2. Importar el proyecto en Vercel
3. Vercel autodetecta Astro. Dejar las opciones por defecto:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Asociar el dominio que ya tenés comprado
5. Deploy

---

## ⚠️ Pendientes para personalizar (buscar `TODO` en el código)

### 1. URL de Intranet (Acceso Clientes)
**Archivos**: `src/components/Navbar.astro` y `src/components/Footer.astro`
```js
const INTRANET_URL = '#'; // TODO: reemplazar por URL de intranet
```
Reemplazar `'#'` por la URL real cuando esté.

### 2. Email de contacto
**Archivo**: `src/components/Contact.astro`
```js
const CONTACT_EMAIL = 'contacto@nuevacereales.com.ar'; // TODO: reemplazar por email real
```
Reemplazar por el email corporativo real cuando se defina.

---

## Datos de contacto actuales (hardcoded)

- **Dirección**: Holdich 609, Bahía Blanca, Buenos Aires
- **Teléfono**: +54 9 291 454-9191
- **Horario**: Lun-Vie 08:30–12:30 y 15:30–19:00
- **CUIT**: 30-71003818-6
- **Fundación**: 01/03/2007

---

## Sobre el diseño

**Dirección estética**: editorial sobrio con acentos modernos.

- **Tipografía display**: Cormorant Garamond (serif, tipo magazine financiero)
- **Tipografía body**: Inter Tight (sans moderna)
- **Tipografía mono**: JetBrains Mono (para eyebrows y detalles)
- **Paleta**: teal #3d6861 + dorado espiga #e9b141 (extraídos del logo) + neutros cálidos
- **Animaciones**: GSAP con ScrollTrigger, fade + stagger. Sin exageraciones.

Inspiración: sitios de estudios jurídicos premium + editoriales financieras (FT, The Economist).
