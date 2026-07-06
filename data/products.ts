export type Category = "Bolsos" | "Carteras" | "Bandoleras" | "Accesorios";
export type Collection = "Origen" | "Clásicos" | "Edición Especial";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  collection: Collection;
  price: number; // CLP
  shortDescription: string;
  longDescription: string;
  materials: string[];
  careInstructions: string[];
  fabricationTime: string;
  images: string[]; // rutas bajo /images/products/{slug}/
  featured?: boolean;
}

// Contenido de muestra — reemplazar por el catálogo real de KALUN.
export const products: Product[] = [
  {
    // Producto real — falta confirmar precio y tiempo de fabricación con el cliente.
    slug: "escencia",
    name: "Escencia",
    category: "Bolsos",
    collection: "Origen",
    price: 129000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Bolso de gamuza en tono ladrillo con asas de cuero negro y herraje de toro.",
    longDescription:
      "Escencia combina gamuza en tono ladrillo con asas y ribetes de cuero negro. Lleva herraje de cabeza de toro en metal plateado, borlas de cuero y correa bandolera ajustable y desmontable, para usarlo de mano o cruzado. Medidas: 25 × 21 cm, fuelle de 11 cm.",
    materials: [
      "Gamuza",
      "Cuero negro en asas y ribetes",
      "Herraje de toro en metal plateado",
      "Correa bandolera ajustable y desmontable",
    ],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Evitar humedad directa.",
      "Guardar en su bolsa de tela cuando no se use.",
    ],
    fabricationTime: "2 a 3 semanas", // PLACEHOLDER — confirmar
    images: [
      "/images/products/escencia/01.jpg",
      "/images/products/escencia/02.jpg",
      "/images/products/escencia/03.jpg",
    ],
    featured: true,
  },
  {
    slug: "cartera-clasica-cafe",
    name: "Cartera Clásica Café",
    category: "Carteras",
    collection: "Clásicos",
    price: 45000,
    shortDescription: "Cartera compacta en cuero café, con espacio para lo esencial.",
    longDescription:
      "Parte de la colección Clásicos: piezas atemporales que no responden a tendencias, solo a la necesidad real de llevar lo esencial bien guardado. La Cartera Clásica Café combina compartimentos para tarjetas, billetes y monedas en un formato delgado.",
    materials: ["Cuero curtido vegetal", "Hilo encerado", "Broche metálico"],
    careInstructions: ["Limpiar con paño seco.", "Guardar en su bolsa de algodón cuando no se use."],
    fabricationTime: "1 a 2 semanas",
    images: ["/images/products/cartera-clasica-cafe/01.svg"],
    featured: true,
  },
  {
    // Producto real — falta confirmar precio y tiempo de fabricación con el cliente.
    slug: "raiz",
    name: "Raíz",
    category: "Carteras",
    collection: "Origen",
    price: 98000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Cartera de gamuza con flecos laterales, tachas y herraje de estrella alada.",
    longDescription:
      "Raíz es una cartera de gamuza con flecos laterales cortados a mano, solapa con tachas plateadas y herraje de estrella alada al centro. Cadena plateada con tramo de cuero para llevarla al hombro. Disponible en café y en negro.",
    materials: [
      "Gamuza",
      "Flecos de cuero cortados a mano",
      "Tachas y herraje de estrella alada en metal plateado",
      "Cadena plateada con tramo de cuero",
    ],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Peinar los flecos con los dedos, sin tirar.",
      "Evitar humedad directa.",
    ],
    fabricationTime: "2 a 3 semanas", // PLACEHOLDER — confirmar
    images: ["/images/products/raiz/01.jpg", "/images/products/raiz/02.jpg"],
    featured: true,
  },
  {
    // Producto real — falta confirmar precio y tiempo de fabricación con el cliente.
    slug: "legado-i",
    name: "Legado I",
    category: "Bolsos",
    collection: "Origen",
    price: 149000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Bolso XL de gamuza bordó con ojales plateados y asas de cadena y cuero.",
    longDescription:
      "Legado I es un bolso amplio de gamuza en tono bordó, con grandes ojales plateados a los costados y asas combinadas de cadena metálica y cuero. Un formato generoso para el día a día. Medidas: 40 × 26 cm.",
    materials: [
      "Gamuza tono bordó",
      "Ojales en metal plateado",
      "Asas de cadena metálica y cuero",
    ],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Evitar humedad directa.",
      "Guardar en su bolsa de tela cuando no se use.",
    ],
    fabricationTime: "2 a 3 semanas", // PLACEHOLDER — confirmar
    images: ["/images/products/legado-i/01.jpg"],
    featured: true,
  },
  {
    slug: "cinturon-trenzado",
    name: "Cinturón Trenzado",
    category: "Accesorios",
    collection: "Origen",
    price: 38000,
    shortDescription: "Cinturón de cuero trenzado a mano, hebilla en metal cepillado.",
    longDescription:
      "Un accesorio simple pero exigente en su ejecución: tres tiras de cuero trenzadas a mano antes de coser la base. Hebilla intercambiable en metal cepillado.",
    materials: ["Cuero curtido vegetal", "Hebilla en metal cepillado"],
    careInstructions: ["Limpiar con paño seco.", "No doblar en el mismo punto de forma prolongada."],
    fabricationTime: "1 semana",
    images: ["/images/products/cinturon-trenzado/01.svg"],
  },
  {
    slug: "cartera-edicion-especial",
    name: "Cartera Edición Especial Lavanda",
    category: "Carteras",
    collection: "Edición Especial",
    price: 52000,
    shortDescription: "Cartera en tirada limitada, tono lavanda sobre base café.",
    longDescription:
      "Una tirada limitada de la Cartera Clásica en un tono poco habitual: lavanda suave combinado con cuero café en los bordes. Mismo patrón interior, misma calidad de siempre.",
    materials: ["Cuero curtido vegetal", "Hilo encerado"],
    careInstructions: ["Limpiar con paño seco.", "Guardar en su bolsa de algodón cuando no se use."],
    fabricationTime: "1 a 2 semanas",
    images: ["/images/products/cartera-edicion-especial/01.svg"],
  },
  {
    // Producto real — NOMBRE PROVISIONAL "Sombra" (el cliente lo editará). Falta precio y tiempo reales.
    slug: "sombra",
    name: "Sombra",
    category: "Bandoleras",
    collection: "Origen",
    price: 62000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Bandolera pequeña de cuero negro liso, cierre superior y cadena plateada.",
    longDescription:
      "Sombra es una bandolera compacta de cuero negro liso, con cierre superior y cadena plateada desmontable para llevarla cruzada. Formato minimalista para lo esencial del día. (Nombre provisional, sujeto a confirmación.)",
    materials: ["Cuero liso negro", "Cadena plateada desmontable", "Cierre metálico"],
    careInstructions: ["Limpiar con paño seco y suave.", "Evitar humedad directa."],
    fabricationTime: "1 a 2 semanas", // PLACEHOLDER — confirmar
    images: ["/images/products/sombra/01.jpg"],
  },
  {
    slug: "llavero-cuero",
    name: "Llavero de Cuero",
    category: "Accesorios",
    collection: "Origen",
    price: 15000,
    shortDescription: "Pequeño llavero trenzado, ideal como primer producto KALUN.",
    longDescription:
      "La pieza más pequeña del catálogo, pero con el mismo cuidado en cada detalle: cuero curtido vegetal, trenzado a mano y argolla en metal cepillado.",
    materials: ["Cuero curtido vegetal", "Argolla en metal cepillado"],
    careInstructions: ["Limpiar con paño seco."],
    fabricationTime: "3 a 5 días",
    images: ["/images/products/llavero-cuero/01.svg"],
  },
  {
    slug: "cartera-accesorio-tarjetero",
    name: "Tarjetero Slim",
    category: "Accesorios",
    collection: "Clásicos",
    price: 28000,
    shortDescription: "Tarjetero delgado, hasta 6 tarjetas, en cuero café o negro.",
    longDescription:
      "Para quienes prefieren llevar solo lo esencial: un tarjetero delgado con capacidad para hasta 6 tarjetas, cosido a mano en un solo pliegue de cuero.",
    materials: ["Cuero curtido vegetal", "Hilo encerado"],
    careInstructions: ["Limpiar con paño seco."],
    fabricationTime: "3 a 5 días",
    images: ["/images/products/cartera-accesorio-tarjetero/01.svg"],
  },
  {
    // Producto real — falta confirmar precio y tiempo de fabricación con el cliente.
    slug: "legado-ii",
    name: "Legado II",
    category: "Bolsos",
    collection: "Origen",
    price: 155000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Bolso XL de cuero cognac con ojales plateados y asas de mano y bandolera.",
    longDescription:
      "Legado II toma el mismo lenguaje de ojales que Legado I, esta vez en cuero liso tono cognac. Asas de mano cortas más correa bandolera desmontable, para llevarlo al hombro o cruzado. Medidas: 40 × 30 cm, fuelle de 8-3 cm.",
    materials: [
      "Cuero liso tono cognac",
      "Ojales en metal plateado",
      "Asas de mano y correa bandolera desmontable",
    ],
    careInstructions: [
      "Limpiar con paño seco y suave.",
      "Aplicar cera nutriente cada 3-4 meses.",
      "Evitar exposición prolongada al sol.",
    ],
    fabricationTime: "2 a 3 semanas", // PLACEHOLDER — confirmar
    images: ["/images/products/legado-ii/01.jpg", "/images/products/legado-ii/02.jpg"],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const CATEGORIES: Category[] = ["Bolsos", "Carteras", "Bandoleras", "Accesorios"];
