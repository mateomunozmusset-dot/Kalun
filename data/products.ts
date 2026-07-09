export type Category = "Bolsos" | "Carteras" | "Bandoleras" | "Accesorios";
export type Collection = "Origen";

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

export const products: Product[] = [
  {
    slug: "escencia",
    name: "Escencia",
    category: "Carteras",
    collection: "Origen",
    price: 85000,
    shortDescription: "La pureza del diseño: líneas limpias, equilibrio y elegancia para el día a día.",
    longDescription:
      "Escencia es la pureza del diseño: líneas limpias, equilibrio y elegancia para el día a día. Cartera de gamuza con asas y ribetes de cuero negro; el herraje de cabeza de toro en metal plateado le agrega identidad y personalidad. Incluye borlas de cuero y correa bandolera ajustable y desmontable, para usarla de mano o cruzada. Medidas: 25 × 21 cm, fuelle de 11 cm. Disponible en tono ladrillo y en gris.",
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
    fabricationTime: "2 a 3 semanas",
    images: [
      "/images/products/escencia/01.jpg",
      "/images/products/escencia/02.jpg",
      "/images/products/escencia/03.jpg",
      "/images/products/escencia/04.jpg",
      "/images/products/escencia/05.jpg",
      "/images/products/escencia/06.jpg",
    ],
    featured: true,
  },
  {
    // Producto nuevo — PRECIO PROVISIONAL, confirmar con el cliente.
    slug: "travesia",
    name: "Travesía",
    category: "Carteras",
    collection: "Origen",
    price: 89000,
    shortDescription: "Para quienes disfrutan descubrir nuevos caminos. Cómoda, versátil y muy amplia.",
    longDescription:
      "Travesía es para quienes disfrutan descubrir nuevos caminos. Cómoda, versátil y diseñada para acompañar cada viaje: muy amplia, te permite llevar todo lo que necesitas. Tote de gamuza y cuero en negro, de líneas limpias, con asas largas para llevarla al hombro.",
    materials: [
      "Gamuza y cuero negro",
      "Asas largas al hombro",
      "Herrajes en metal plateado",
    ],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Evitar humedad directa.",
      "Guardar en su bolsa de tela cuando no se use.",
    ],
    fabricationTime: "2 a 3 semanas",
    images: [
      "/images/products/travesia/01.jpg",
      "/images/products/travesia/02.jpg",
    ],
    featured: true,
  },
  {
    slug: "raiz",
    name: "Raíz",
    category: "Carteras",
    collection: "Origen",
    price: 79000,
    shortDescription: "Conecta con la tierra, los oficios y el origen de los materiales. Noble, cálida y auténtica.",
    longDescription:
      "Raíz conecta con la tierra, los oficios y el origen de los materiales: noble, cálida y auténtica. Cartera de gamuza con flecos laterales cortados a mano y solapa con tachas plateadas; el sello de la estrella con alas es su detalle más juvenil y le da una onda mística única. Cadena plateada con tramo de cuero para llevarla al hombro. Disponible en café y en negro.",
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
    fabricationTime: "2 a 3 semanas",
    images: ["/images/products/raiz/01.jpg", "/images/products/raiz/02.jpg"],
    featured: true,
  },
  {
    slug: "legado-i",
    name: "Legado I",
    category: "Bolsos",
    collection: "Origen",
    price: 86000,
    shortDescription: "Bolso XL de gamuza bordó con ojales plateados y asas de cadena y cuero.",
    longDescription:
      "Inspirado en aquello que permanece: clásico, atemporal y hecho para durar muchos años. Legado I es un bolso amplio de gamuza en tono bordó, con grandes ojales plateados a los costados y asas combinadas de cadena metálica y cuero. Un formato generoso para el día a día. Medidas: 40 × 26 cm.",
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
    fabricationTime: "2 a 3 semanas",
    images: ["/images/products/legado-i/01.jpg"],
    featured: true,
  },
  {
    slug: "legado-ii",
    name: "Legado II",
    category: "Bolsos",
    collection: "Origen",
    price: 86000,
    shortDescription: "Bolso XL de cuero cognac con ojales plateados y asas de mano y bandolera.",
    longDescription:
      "Inspirado en aquello que permanece: clásico, atemporal y hecho para durar muchos años. Legado II toma el mismo lenguaje de ojales que Legado I, esta vez en cuero liso tono cognac. Asas de mano cortas más correa bandolera desmontable, para llevarlo al hombro o cruzado. Medidas: 40 × 30 cm, fuelle de 8-3 cm.",
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
    fabricationTime: "2 a 3 semanas",
    images: ["/images/products/legado-ii/01.jpg", "/images/products/legado-ii/02.jpg"],
    featured: true,
  },
  {
    slug: "alba",
    name: "Alba",
    category: "Bandoleras",
    collection: "Origen",
    price: 72000,
    shortDescription: "Bandolera pequeña de cuero negro liso, cierre superior y cadena plateada.",
    longDescription:
      "Alba es una bandolera compacta de cuero negro liso, con cierre superior y cadena plateada desmontable para llevarla cruzada. Un formato minimalista para lo esencial del día.",
    materials: ["Cuero liso negro", "Cadena plateada desmontable", "Cierre metálico"],
    careInstructions: ["Limpiar con paño seco y suave.", "Evitar humedad directa."],
    fabricationTime: "1 a 2 semanas",
    images: ["/images/products/alba/01.jpg"],
  },
  {
    slug: "cinturon-cuero",
    name: "Cinturón de Cuero",
    category: "Accesorios",
    collection: "Origen",
    price: 42000,
    shortDescription: "Cinturón de cuero café con tachas plateadas y costura en contraste.",
    longDescription:
      "Un accesorio simple pero exigente en su ejecución: cuero café trabajado a mano, con tachas plateadas, costura en contraste y hebilla metálica. Una pieza que acompaña por años.",
    materials: ["Cuero café", "Tachas plateadas", "Hebilla metálica"],
    careInstructions: ["Limpiar con paño seco.", "No doblar en el mismo punto de forma prolongada."],
    fabricationTime: "1 semana",
    images: ["/images/products/cinturon-cuero/01.jpg"],
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
