import AnimatedSection from "@/components/shared/AnimatedSection";

const MILESTONES = [
  {
    year: "El origen",
    text: "KALUN nace entre telares: ponchos y ruanas de lana de oveja y alpaca, tejidos a mano junto a artesanos chilenos, bajo el primer sello de la espiral tejida.",
  },
  {
    year: "El cuero",
    text: "El oficio crece y el cuero genuino entra al taller: carteras, bolsos y accesorios hechos a mano, pieza por pieza.",
  },
  {
    year: "La marca",
    text: "KALUN renueva su identidad — el monograma K que hoy nos acompaña — y nace la colección Origen.",
  },
  {
    year: "Hoy",
    text: "Seguimos creando en lotes pequeños, entre cuero y textil, con la misma dedicación del primer día. Diseñamos piezas para acompañar la vida.",
  },
];

export default function Timeline() {
  return (
    <ol className="relative border-l border-negro/15 max-w-2xl mx-auto flex flex-col gap-14 pl-8 md:pl-10">
      {MILESTONES.map((m) => (
        <AnimatedSection as="div" key={m.year}>
          <li className="relative">
            <span className="absolute -left-[42px] md:-left-[50px] top-1 w-3 h-3 rounded-full bg-cafe-cuero" />
            <span className="text-sm uppercase tracking-wide text-cafe-cuero">{m.year}</span>
            <p className="mt-2 text-lg text-negro/80">{m.text}</p>
          </li>
        </AnimatedSection>
      ))}
    </ol>
  );
}
