import type { MetadataRoute } from "next";
import { products } from "@/data/products";

// PLACEHOLDER: reemplazar por el dominio real una vez publicado.
const BASE_URL = "https://kalun.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/productos", "/historia", "/artesania", "/contacto"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/productos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
