import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

// Contenido de muestra — reemplazar por opiniones reales de clientes.
const TESTIMONIALS = [
  {
    quote:
      "Lo que más me gustó de KALUN es que se nota que alguien pensó en cada detalle. No es solo lindo, es cómodo y dura.",
    author: "Clienta KALUN",
  },
  {
    quote:
      "Pedí un bolso hace más de un año y sigue como el primer día. Se siente una pieza hecha para durar, no para una temporada.",
    author: "Cliente KALUN",
  },
  {
    quote: "El detalle de las costuras y el olor a cuero real cuando lo recibí — ahí supe que era distinto.",
    author: "Clienta KALUN",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-gris-calido/50">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Opiniones" title="Lo que dicen quienes ya tienen una pieza" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <figure className="bg-blanco p-8 h-full flex flex-col gap-6 border border-negro/10">
                <span aria-hidden className="text-3xl text-cafe-cuero font-display">
                  &ldquo;
                </span>
                <blockquote className="text-negro/80 text-base leading-relaxed flex-1">{t.quote}</blockquote>
                <figcaption className="text-sm text-negro/50 border-t border-negro/10 pt-4">
                  {t.author}
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
