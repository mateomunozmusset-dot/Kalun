export type Category = "Bolsos" | "Carteras" | "Bandoleras" | "Mochilas" | "Textil" | "Accesorios";
export type Collection = "Origen";

// Variante de color de un producto: nombre visible, color del círculo y sus fotos.
export interface ColorVariant {
  name: string;
  hex: string; // color del círculo selector
  images: string[];
}

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
  images: string[]; // rutas bajo /images/products/{slug}/ — fotos por defecto (y para las tarjetas)
  colors?: ColorVariant[]; // opcional: si existe, el cliente elige color y cambian las fotos
  video?: string; // opcional: ruta a un video (mp4) que se muestra primero en la galería
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "totem-alma",
    name: "Tótem ALMA",
    category: "Carteras",
    collection: "Origen",
    price: 83000,
    shortDescription: "Bolso de gamuza cognac, amplio y suave, con clutch desmontable en su interior.",
    longDescription:
      "Tótem ALMA lleva su nombre por lo que representa: el alma es la esencia, lo que nos hace únicos y permanece con el tiempo — igual que una pieza hecha a mano para durar. Es un bolso de gamuza en tono cognac, de líneas suaves y caída natural, pensado para llevar todo lo esencial con estilo. Su asa de hombro en cuero y el sello KALUN grabado le dan identidad, y en su interior incluye un clutch desmontable para llevar aparte lo más importante. Amplio y versátil, acompaña del día a la noche. Medidas: 38 × 38 cm.",
    materials: [
      "Gamuza tono cognac",
      "Asa de hombro en cuero",
      "Clutch interior desmontable",
      "Herrajes en metal plateado",
    ],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Evitar humedad directa.",
      "Guardar en su bolsa de tela cuando no se use.",
    ],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/totem-alma/02.jpg",
      "/images/products/totem-alma/01.jpg",
      "/images/products/totem-alma/03.jpg",
      "/images/products/totem-alma/04.jpg",
    ],
    featured: true,
  },
  {
    slug: "totem-legado",
    name: "Tótem Legado",
    category: "Bolsos",
    collection: "Origen",
    price: 102000,
    shortDescription: "Tote amplio de cuero negro con hileras de ojetillos envejecidos a los costados.",
    longDescription:
      "Tótem Legado es un tote de cuero negro amplio y estructurado, con dos hileras de grandes ojetillos envejecidos a los costados y costura en contraste que resaltan su carácter artesanal. Sus asas al hombro y su formato generoso lo hacen ideal para el día a día. Medidas: 38 cm de ancho × 35 cm de alto × 15 cm de fuelle.",
    materials: [
      "Cuero negro",
      "Ojetillos envejecidos",
      "Asas al hombro",
      "Sello KALUN grabado",
    ],
    careInstructions: [
      "Limpiar con paño seco y suave.",
      "Aplicar cera nutriente cada 3-4 meses.",
      "Evitar exposición prolongada al sol.",
    ],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/totem-legado/negro-01.jpg",
      "/images/products/totem-legado/01.jpg",
      "/images/products/totem-legado/02.jpg",
      "/images/products/totem-legado/negro-02.jpg",
    ],
    colors: [
      {
        name: "Negro",
        hex: "#1c1c1c",
        images: [
          "/images/products/totem-legado/negro-01.jpg",
          "/images/products/totem-legado/01.jpg",
          "/images/products/totem-legado/02.jpg",
          "/images/products/totem-legado/negro-02.jpg",
        ],
      },
      {
        name: "Café",
        hex: "#8B5E3C",
        images: [
          "/images/products/totem-legado/cafe-01.jpg",
          "/images/products/totem-legado/cafe-02.jpg",
        ],
      },
    ],
    video: "/videos/totem-legado.mp4",
    featured: true,
  },
  {
    slug: "esencia",
    name: "Esencia",
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
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/escencia/03.jpg",
      "/images/products/escencia/01.jpg",
      "/images/products/escencia/02.jpg",
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
    fabricationTime: "10 a 15 dias Habiles",
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
    price: 76000,
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
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/raiz/01.jpg", "/images/products/raiz/02.jpg", "/images/products/raiz/03.jpg"],
    colors: [
      {
        name: "Café",
        hex: "#8B5E3C",
        images: [
          "/images/products/raiz/01.jpg",
          "/images/products/raiz/02.jpg",
          "/images/products/raiz/03.jpg",
        ],
      },
      {
        name: "Oliva",
        hex: "#6E6A3B",
        images: ["/images/products/raiz/oliva-01.jpg"],
      },
    ],
    featured: true,
  },
  {
    slug: "alba",
    name: "Alba",
    category: "Bandoleras",
    collection: "Origen",
    price: 72000,
    shortDescription: "Bandolera pequeña de cuero con textura, cierre superior con 3 compartimientos,cadena plateada y terminacion en cuero.",
    longDescription:
      "Alba es una bandolera compacta de cuero negro liso, con cierre superior y cadena plateada desmontable para llevarla cruzada. Un formato minimalista para lo esencial del día.",
    materials: ["Cuero liso negro", "Cadena plateada desmontable", "Cierre metálico"],
    careInstructions: ["Limpiar con paño seco y suave.", "Evitar humedad directa."],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/alba/01.jpg", "/images/products/alba/02.jpg"],
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
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/cinturon-cuero/01.jpg",
      "/images/products/cinturon-cuero/02.jpg",
    ],
  },
  {
    slug: "cinturon-hebilla-intercambiable",
    name: "Cinturón Hebilla Intercambiable",
    category: "Accesorios",
    collection: "Origen",
    price: 42000,
    shortDescription: "Cinturón de cuero con hebilla intercambiable, para cambiar de estilo sin cambiar de cinturón.",
    longDescription:
      "Un cinturón de cuero hecho a mano, pensado para durar y para cambiar contigo: su hebilla intercambiable permite pasar de un look clásico a uno con más carácter en segundos. Tachas metálicas y costura en contraste.",
    materials: ["Cuero", "Hebilla intercambiable en metal", "Tachas metálicas"],
    careInstructions: ["Limpiar con paño seco.", "No doblar en el mismo punto de forma prolongada."],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/cinturon-hebilla-intercambiable/01.jpg",
      "/images/products/cinturon-hebilla-intercambiable/02.jpg",
      "/images/products/cinturon-hebilla-intercambiable/03.jpg",
    ],
  },
  {
    slug: "cinturon-tacha-fleco",
    name: "Cinturón Tacha Fleco",
    category: "Accesorios",
    collection: "Origen",
    price: 42000,
    shortDescription: "Cinturón ancho de cuero negro con tachas, argolla central y flecos.",
    longDescription:
      "Un cinturón de carácter, hecho a mano en cuero negro: ancho, con tachas plateadas, argolla central y flecos que le dan movimiento y actitud. Se amarra a la cintura para marcar la silueta y darle personalidad a cualquier look, de día o de noche.",
    materials: ["Cuero negro", "Tachas y argolla en metal plateado", "Flecos de cuero"],
    careInstructions: ["Limpiar con paño seco.", "No doblar en el mismo punto de forma prolongada."],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/cinturon-tacha-fleco/01.jpg",
      "/images/products/cinturon-tacha-fleco/02.jpg",
    ],
  },
  {
    slug: "genesis",
    name: "Génesis",
    category: "Mochilas",
    collection: "Origen",
    price: 110000,
    shortDescription: "Donde todo comienza: mochila de cuero, compañera de aventuras, cómoda y resistente.",
    longDescription:
      "Génesis: donde todo comienza. Inspirada en el origen de los materiales y en el valor del trabajo artesanal, representa el nacimiento de una pieza destinada a acompañar el paso del tiempo con elegancia y autenticidad. Esta mochila será tu compañera de aventuras: cómoda, versátil y resistente, con un diseño único que da personalidad a donde quiera que vayas. Medidas: alto 36 cm, ancho 38 cm, base 11 cm.",
    materials: ["Cuero", "Hebillas y herrajes metálicos", "Sello KALUN grabado"],
    careInstructions: [
      "Limpiar con paño seco y suave.",
      "Aplicar cera nutriente cada 3-4 meses.",
      "Evitar exposición prolongada al sol.",
    ],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/genesis/01.jpg"],
    featured: true,
  },
  {
    // PRECIO PROVISIONAL — confirmar con el cliente.
    slug: "poncho-telar",
    name: "Poncho de Alpaca y Oveja",
    category: "Textil",
    collection: "Origen",
    price: 120000, // PLACEHOLDER — confirmar precio real
    shortDescription: "Tejido a telar artesanal por artesanos chilenos, en lana de oveja y alpaca.",
    longDescription:
      "Poncho tejido a telar artesanal por artesanos chilenos, en lana de oveja y alpaca. Una prenda noble y abrigadora, hecha en Chile con el oficio del telar que dio origen a KALUN. Cada pieza es única, con la textura y el carácter del tejido a mano. Disponible en distintos tonos y con capucha.",
    materials: ["Lana de oveja", "Lana de alpaca", "Tejido a telar artesanal"],
    careInstructions: [
      "Lavar a mano con agua fría y jabón neutro.",
      "Secar extendido a la sombra.",
      "No usar secadora ni retorcer.",
    ],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/poncho-telar/01.jpg",
      "/images/products/poncho-telar/02.jpg",
    ],
    featured: true,
  },
  {
    slug: "bolso-jeans-cuero",
    name: "Bolso de Jeans y Cuero",
    category: "Bolsos",
    collection: "Origen",
    price: 89000,
    shortDescription: "Bolso de viaje en jeans y cuero, amplio y resistente, con correa desmontable.",
    longDescription:
      "Un bolso de fin de semana con carácter: cuerpo de jeans (mezclilla) combinado con asas y detalles de cuero café. Amplio y resistente, ideal para escapadas y viajes cortos. Incluye correa desmontable para llevarlo al hombro. Medidas: alto 29 cm, ancho 45 cm, fuelle 17 cm, base 14 cm.",
    materials: ["Jeans (mezclilla)", "Asas y detalles de cuero café", "Herrajes metálicos", "Correa desmontable"],
    careInstructions: ["Limpiar con paño seco.", "Evitar humedad directa.", "Nutrir el cuero con cera cada 3-4 meses."],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/bolso-jeans-cuero/01.jpg"],
    featured: true,
  },
  {
    slug: "bandolera-herencia",
    name: "Bandolera Herencia",
    category: "Bandoleras",
    collection: "Origen",
    price: 82000,
    shortDescription: "Bandolera de cuero con cadena, compacta y elegante. Disponible en varios colores.",
    longDescription:
      "Herencia es una bandolera de cuero de líneas limpias, con cierre superior y cadena metálica para llevarla al hombro o cruzada. Compacta pero con espacio para lo esencial, es una pieza versátil que acompaña de día y de noche. Disponible en negro, café, burdeo y verde olivo. Medidas: alto 19 cm, ancho 34 cm, base 8 cm.",
    materials: ["Cuero", "Cadena metálica", "Sello KALUN grabado"],
    careInstructions: ["Limpiar con paño seco y suave.", "Evitar humedad directa."],
    fabricationTime: "10 a 15 dias Habiles",
    images: [
      "/images/products/bandolera-herencia/01.jpg",
      "/images/products/bandolera-herencia/02.jpg",
    ],
    featured: true,
  },
  {
    slug: "llavero",
    name: "Llavero",
    category: "Accesorios",
    collection: "Origen",
    price: 7990,
    shortDescription: "Llavero de cuero y gamuza con mosquetón metálico. Disponible en varios colores.",
    longDescription:
      "Un pequeño detalle bien hecho: llavero de gamuza y cuero con mosquetón metálico y terminación en print animal. Disponible en café, negro y burdeo. El regalo perfecto o el complemento para tus llaves.",
    materials: ["Gamuza y cuero", "Mosquetón metálico"],
    careInstructions: ["Limpiar con paño seco."],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/llavero/01.jpg"],
  },
  {
    slug: "libreta",
    name: "Libreta de Cuero",
    category: "Accesorios",
    collection: "Origen",
    price: 28000,
    shortDescription: "Funda de libreta en cuero genuino, con cierre de botón. Recargable.",
    longDescription:
      "Una libreta forrada en cuero genuino, hecha para acompañarte por años y envejecer con elegancia. Cierre de botón y diseño sobrio con costura en contraste. Ideal para notas, bocetos o como regalo.",
    materials: ["Cuero genuino", "Cierre de botón metálico"],
    careInstructions: ["Limpiar con paño seco.", "Evitar humedad directa."],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/libreta/01.jpg"],
    video: "/videos/libreta.mp4",
  },
  {
    slug: "mochila-tierra",
    name: "Mochila Tierra",
    category: "Mochilas",
    collection: "Origen",
    price: 85000,
    shortDescription: "Mochila saco de gamuza azul con base de cuero, cierre de argollas y tirantes de cuero.",
    longDescription:
      "Tierra es una mochila saco de gamuza en tono azul, con base y tirantes de cuero café que le dan contraste y resistencia. Su cierre de argollas y su forma orgánica la hacen cómoda y con mucha personalidad, ideal para el día a día. Hecha a mano, para acompañarte y envejecer con carácter.",
    materials: ["Gamuza azul", "Base y tirantes de cuero café", "Argollas metálicas", "Sello KALUN grabado"],
    careInstructions: [
      "Cepillar la gamuza en seco con cepillo suave.",
      "Nutrir el cuero con cera cada 3-4 meses.",
      "Evitar humedad directa.",
    ],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/mochila-tierra/01.jpg"],
    featured: true,
  },
  {
    slug: "billetera",
    name: "Billetera de Cuero",
    category: "Accesorios",
    collection: "Origen",
    price: 28000,
    shortDescription: "Billetera de cuero café con aplique de abeja y cierre. Compacta y elegante.",
    longDescription:
      "Una billetera de cuero café hecha a mano, compacta y funcional, con un aplique de abeja en metal que le da identidad. Espacio para tarjetas, billetes y monedas con cierre. Una pieza pequeña que se disfruta todos los días.",
    materials: ["Cuero café", "Aplique de abeja en metal", "Cierre metálico"],
    careInstructions: ["Limpiar con paño seco.", "Evitar humedad directa."],
    fabricationTime: "10 a 15 dias Habiles",
    images: ["/images/products/billetera/01.jpg"],
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

export const CATEGORIES: Category[] = ["Bolsos", "Carteras", "Bandoleras", "Mochilas", "Textil", "Accesorios"];
