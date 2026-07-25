# Aldia Inmobiliaria · Sitio web V1

Sitio oficial de **Aldia Inmobiliaria SAS** (Bogotá, Colombia). Plataforma
inmobiliaria con inventario estático, lista para evolucionar a Decap CMS en
la V2 sin reescribir la arquitectura.

## Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (tokens en `src/app/globals.css`)
- Framer Motion + GSAP (ScrollTrigger) + Lenis (scroll suave)
- React Hook Form + Zod (formulario de contacto)
- Swiper (galerías de inmuebles)
- React Icons / Phosphor (iconografía)

## Desarrollo

```bash
npm install   # genera package-lock.json localmente
npm run dev   # http://localhost:3000
npm run build # producción
npm start     # sirve la build
```

## Fotografías

Las fotos del sitio (hero, inmuebles y tarjetas) son imágenes de stock de
Unsplash servidas desde su CDN (`images.unsplash.com`, autorizado en
`next.config.ts`). Son marcadores de posición: reemplazar por fotografía
real del negocio y de cada inmueble antes del lanzamiento final.

## Arquitectura

```
src/
  app/                    # Rutas (App Router) y SEO (sitemap, robots, icon)
  components/
    layout/               # Navbar, Footer, SectionHeader
    home/                 # Hero, buscador, destacados, propietarios/compradores
    properties/           # Tarjetas, explorador con filtros, galería, acciones
    contact/              # Formulario (RHF + Zod)
    motion/               # Reveal (IntersectionObserver), Parallax (GSAP), SmoothScroll (Lenis)
    ui/                   # Botones
  data/
    business.ts           # Datos reales del negocio (NAP, WhatsApp, horarios)
    properties.ts         # Inventario V1 (estático)
  lib/                    # Tipos, formato COP, filtros
```

## Preparación para V2 (Decap CMS)

Todo el contenido vive en `src/data/` con tipos explícitos
(`Property`, `BUSINESS`). La migración consiste en:

1. Crear `public/admin/config.yml` con colecciones que repliquen
   `Property` (inmuebles) y los campos de `business.ts` (datos del negocio).
2. Mover `properties.ts` a lectura de archivos Markdown/JSON generados por
   el CMS (o a un adapter que mantenga la misma interfaz `Property[]`).
3. Las páginas no cambian: ya consumen los datos a través de `data/` y de
   `generateStaticParams`.

## Datos del negocio

Teléfonos, dirección, WhatsApp, correo, horarios y redes se centralizan en
`src/data/business.ts`. Confirmar horario de cierre y correo con el cliente
antes del despliegue final.
