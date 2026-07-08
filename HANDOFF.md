# KALUN — Estado del proyecto y traspaso entre sesiones

> Este documento resume dónde está todo para que cualquier chat nuevo continúe sin perder contexto.
> El **progreso del sitio NO vive en el chat**: vive en este PC, en GitHub y en Vercel.

## Qué es
Sitio web de **KALUN**, marca chilena de artículos de cuero hechos a mano (y textil: ponchos/ruanas a telar).
Stack: **Next.js (App Router) + TypeScript + Tailwind v4 + Framer Motion + lucide-react**. Sin backend.

## Dónde vive (esto persiste siempre, no depende del chat)
- **Local:** `C:\Users\mateo\OneDrive\Escritorio\Claude\kalun`
- **GitHub:** https://github.com/mateomunozmusset-dot/Kalun (rama `main`)
- **Producción (Vercel):** https://kalun.cl y https://kalun.vercel.app

## Cómo publicar cambios (2 vías, ambas ya configuradas)
1. **Git:** `git add -A && git commit -m "..." && git push origin main`
2. **Deploy a producción (Vercel CLI):** desde la carpeta del proyecto:
   `vercel deploy --prod --yes`
   - El proyecto ya está **vinculado** (carpeta `.vercel/`).
   - El token está guardado como variable de entorno **`VERCEL_TOKEN`** (persistente en el PC), así que no hay que volver a iniciar sesión.
   - ⚠️ La conexión automática GitHub→Vercel (webhook) **está desconectada**: los deploys se hacen a mano con el comando de arriba. (Se puede reconectar en Vercel → proyecto kalun → Settings → Git.)

## Herramientas instaladas (persisten en el PC)
- Node.js, npm · git · **GitHub CLI** (`gh`, sesión iniciada como `mateomunozmusset-dot`) · **Vercel CLI** (`vercel`).

## Cómo el cliente entrega fotos/contenido
- Deja archivos en la carpeta **`FOTOS-AQUI/`** del proyecto (está en `.gitignore`, no se sube).
- Convención de imágenes públicas: `public/images/products/<slug>/01.jpg`, `public/images/lifestyle/...`, `public/images/historia/...`, `public/images/brand/...`.
- Catálogo de productos: **`data/products.ts`** (interfaz `Product` tipada; el `slug` define la carpeta de imágenes y la URL).
- Paleta oficial y tokens de diseño: `app/globals.css` (Arena #E7DDD1, Camello #C8A17A, Cognac/#8B5E3C, Chocolate #4A2E23, **Burdeo #61222B** = acento de marca).
- Guía para editar sin código: `GUIA-EDITAR.md`.
- Skill de diseño instalada y en uso: `emil-design-eng` (animaciones/micro-interacciones con criterio; easings fuertes, feedback de presión, ≤200ms).

## Catálogo actual (6 productos reales, colección Origen)
Escencia (Cartera, $78.000) · Travesía (Cartera, **$88.000 PROVISIONAL**) · Raíz (Cartera, $76.000) ·
Legado I (Bolso, $69.000) · Legado II (Bolso, $82.000) · Alba (Bandolera, $68.000) · Cinturón de Cuero (Accesorio, $35.000).
Home: hero con logo burdeo, "Nuestra esencia", Colecciones (Origen + "Crea tu propio diseño" → WhatsApp), destacados, historia, artesanía, clientas (foto real), Instagram.
Compra = botón WhatsApp (+56 9 6156 7905). Sin carrito/checkout.

## Pendientes / a confirmar con el cliente
- **Precio real de Travesía** (hoy $88.000 provisional).
- **Fotos de Instagram**: 4 de las 6 son lifestyle **generadas por IA** (ChatGPT). Reemplazar por reales si se prefiere (la marca es "hecho a mano/auténtico").
- **Tiempos de fabricación**: son estimados (1-3 semanas), confirmar.
- **Reseñas de clientas reales**: hoy NO hay sistema de reseñas (se quitó); si se quiere que los usuarios dejen reseñas visibles para todos, hace falta un backend.
- **Logo en navbar**: usa el logo burdeo (sello). Datos de contacto/redes: Instagram `@kalun.cl` ok; sin Facebook.
- **Token de Vercel**: si el cliente lo borra por seguridad, hay que generar uno nuevo para desplegar por CLI.
