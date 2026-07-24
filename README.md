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

## Assets de imagen

Las imágenes generadas del sitio (`public/images/` y `src/app/icon.png`) no
están en este repositorio: se distribuyen con el paquete de entrega del
proyecto. Tras clonar, copia esa carpeta en `public/images/` y el icono en
`src/app/icon.png` para ver el sitio completo.

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
    cursor/               # Cursor Afterimage (especificación del cliente)
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

## Cursor Afterimage

Implementación exacta de la especificación entregada por el cliente:
marcado, clases, variables CSS, tiempos y curvas sin modificaciones
(`globals.css` + `public/cursor/afterimage.js`). La integración con el
sitio (capa fija, `pointer-events: none`, oculto en táctil y en
`prefers-reduced-motion`) está marcada con comentarios y no altera la
especificación.

## Datos del negocio

Teléfonos, dirección, WhatsApp, correo, horarios y redes se centralizan en
`src/data/business.ts`. Confirmar horario de cierre y correo con el cliente
antes del despliegue final.
