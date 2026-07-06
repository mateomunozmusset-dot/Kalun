import AnimatedSection from "@/components/shared/AnimatedSection";

// Contenido de muestra — reemplazar por los hitos reales de la marca.
const MILESTONES = [
  { year: "2021", text: "Primeras piezas hechas a mano en un taller pequeño, para amigos y familia." },
  { year: "2022", text: "Nace la colección Origen y el nombre KALUN, con foco en durabilidad y diseño simple." },
  { year: "2023", text: "Se suma la colección Clásicos, pensada para el uso diario." },
  { year: "2024", text: "Primera Edición Especial en tiradas limitadas, con detalles trabajados a mano." },
  { year: "Hoy", text: "Seguimos produciendo en lotes pequeños, sin perder el control artesanal de cada pieza." },
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
