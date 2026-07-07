# 📝 Guía para editar la página tú mismo (sin código)

Esta guía es para hacer cambios simples de **texto, precios y datos** sin ayuda técnica.
Todo se hace desde el navegador, en GitHub. **No necesitas instalar nada.**

---

## 🔑 La regla de oro

```
Editas en GitHub  →  "Commit changes"  →  Vercel publica solo (1-2 min)
```

- **GitHub** = donde vive el código (la "fuente de la verdad").
- **Vercel** = lo que la gente ve en internet. Se actualiza solo cada vez que guardas en GitHub.
- Todo lo que guardes en GitHub **no se pierde**, aunque después alguien más trabaje en el proyecto.

---

## ✏️ Cómo cambiar un precio, nombre o descripción

Casi todo el contenido de los productos está en **UN solo archivo**: `data/products.ts`

1. Entra a tu repositorio: **https://github.com/mateomunozmusset-dot/Kalun**
2. Haz clic en la carpeta **`data`** y luego en el archivo **`products.ts`**.
3. Arriba a la derecha del archivo, haz clic en el **lápiz ✏️** ("Edit this file").
4. Busca el producto que quieres cambiar. Cada producto se ve así:

   ```ts
   {
     slug: "escencia",
     name: "Escencia",                    ← el nombre que se ve
     category: "Bandoleras",
     collection: "Origen",
     price: 89000,                        ← el PRECIO (sin puntos ni "$")
     shortDescription: "...",             ← descripción corta (en la grilla)
     longDescription: "...",              ← descripción larga (en la ficha)
     fabricationTime: "2 a 3 semanas",    ← tiempo de fabricación
     ...
   }
   ```

5. Cambia **solo el texto entre las comillas** `"..."` o el número del precio.
   - ✅ Correcto: `price: 95000,`
   - ❌ NO borres las comillas, las comas, ni los `:` — solo el contenido.
6. Baja hasta el final de la página, escribe una nota corta (ej. "cambio precio Escencia")
   y haz clic en el botón verde **"Commit changes"**.
7. Listo. En 1-2 minutos el cambio aparece en la web.

> 💡 **Consejo:** el precio va **sin puntos ni símbolo**. Para $89.000 se escribe `89000`.
> El formato bonito ($89.000 CLP) lo pone la página sola.

---

## 🖼️ Cómo cambiar una foto de producto

1. Las fotos están en `public/images/products/[nombre-del-producto]/`
   (por ejemplo `public/images/products/escencia/01.jpg`).
2. Para reemplazar una foto, entra a esa carpeta en GitHub,
   haz clic en la foto vieja → botón **"..."** → **Delete file** → Commit.
3. Luego, en la misma carpeta: **"Add file" → "Upload files"** → arrastra la foto nueva.
   ⚠️ **Ponle exactamente el mismo nombre** que la que borraste (ej. `01.jpg`).
4. Commit. Vercel republica solo.

> Si la foto nueva tiene otro nombre o extensión (ej. `.png`), avísame para actualizar el código.

---

## 📋 Datos de contacto (WhatsApp, email, redes)

Están en el archivo **`lib/constants.ts`**. Ahí puedes cambiar:
- El número de **WhatsApp** (donde llegan los pedidos)
- **Email**, teléfono, dirección
- Links de **Instagram / redes sociales**

Mismo método: lápiz ✏️ → editar el texto entre comillas → Commit.

---

## ⚠️ Qué SÍ puedes hacer tú vs. qué es mejor pedir ayuda

| Puedes hacerlo tú | Mejor pedir ayuda |
|---|---|
| Cambiar precios | Mover o reordenar secciones |
| Cambiar nombres y descripciones | Agregar un producto nuevo (necesita varias líneas exactas) |
| Reemplazar fotos (mismo nombre) | Cambiar colores o tipografías |
| Cambiar datos de contacto | Nuevos efectos o animaciones |
| Corregir textos de las páginas | Cualquier cosa que dé error rojo en Vercel |

> Si haces un cambio y Vercel muestra un **error** (te llega un correo o sale en rojo en el dashboard),
> no te preocupes: la versión anterior sigue online. Avísame y lo arreglo.

---

## 🆘 Si algo sale mal

- La web **no se rompe** por un cambio malo: Vercel solo publica si el cambio funciona.
- Si te equivocaste, puedes deshacer: en GitHub, en el archivo, pestaña **"History"**
  → abre la versión anterior → vuelve a guardarla.
- O simplemente escríbeme y lo reviso.

---

**Pendientes reales por definir** (cuando los tengas, edítalos tú o dímelos):
- Nombre definitivo de la cartera negra (hoy dice "Sombra", provisional)
- Precios y tiempos de fabricación reales (Escencia, Raíz, Legado I, Legado II, Sombra)
- Número de WhatsApp real y datos de contacto
