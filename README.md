# KALUN — sitio web

Sitio premium para KALUN, marca chilena de artículos de cuero hechos a mano. Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide Icons.

## Desarrollo

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Pendientes antes de lanzar (placeholders a reemplazar)

- **Fotos reales — YA INTEGRADAS PARCIALMENTE**: hero (portada = Legado II en estudio), colección Origen, y los productos Escencia, Raíz, Legado I, Legado II y Sombra ya usan fotos reales (`.jpg`). Siguen siendo placeholders `.svg`:
  - `public/images/collections/{clasicos,edicion-especial}.svg`
  - `public/images/products/{slug}/0N.svg` de los 5 productos de muestra restantes.
  - `public/images/historia/proceso-02.svg` y todo `public/images/artesania/*.svg` (fotos del proceso artesanal — manos, costuras, herramientas).
  - `public/images/instagram/ig-0{1..6}.svg`
- **Logo**: `public/images/brand/logo.jpg` (burdeo/blanco), `logo-cuero.jpg` (grabado en cuero, usado en la sección Historia de la home) y `packaging.jpg`. Para ponerlo en el navbar/footer se necesita **versión SVG o PNG con fondo transparente** — pedirla al diseñador.
- **Colorimetría oficial** (ya aplicada en `app/globals.css`): Arena `#E7DDD1`, Camello `#C8A17A`, Cognac `#8B5E3C`, Chocolate `#4A2E23`, Burdeo `#61222B` (acento de marca).
- **Catálogo**: `data/products.ts` — 5 productos reales (Escencia, Raíz, Legado I, Legado II, Sombra*) + 5 de muestra. (*"Sombra" es nombre provisional.) **Precios y tiempos de fabricación de los reales siguen siendo provisorios** — confirmar con la marca.
- **WhatsApp**: `lib/constants.ts` → `WHATSAPP_NUMBER` es un número de ejemplo. Reemplazar por el número real de negocio (sin "+" ni espacios).
- **Contacto y mapa**: `lib/constants.ts` → `CONTACT` (email/teléfono/dirección) y `MAP_COORDS` (lat/lng) son de ejemplo.
- **Redes sociales**: `lib/constants.ts` → `SOCIAL` (Instagram/Facebook).
- **Historia/testimonios**: el timeline (`components/historia/Timeline.tsx`) y las opiniones (`components/home/Testimonials.tsx`) tienen contenido de muestra — reemplazar por hitos y opiniones reales.
- **Newsletter y formulario de contacto**: por ahora son simulados en el cliente (sin backend real). Conectar a un servicio de email (ej. Resend) cuando se decida.
- **Dominio**: `app/sitemap.ts` y `app/robots.ts` usan `https://kalun.cl` como placeholder.

## Fuera de alcance (v1)

Pago/checkout real, CMS/backend, cursor personalizado, transiciones de página entre rutas, multi-idioma, cuentas de usuario. Ver el plan de implementación para el detalle de cada decisión.
