import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import StarRating from "@/components/shared/StarRating";

// Reseñas de muestra — reemplazar por opiniones reales de clientes.
const TESTIMONIALS = [
  {
    quote:
      "Lo que más me gustó de KALUN es que se nota que alguien pensó en cada detalle. No es solo lindo, es cómodo y dura.",
    author: "Clienta KALUN",
    rating: 5,
  },
  {
    quote:
      "Pedí un bolso hace más de un año y sigue como el primer día. Se siente una pieza hecha para durar, no para una temporada.",
    author: "Cliente KALUN",
    rating: 5,
  },
  {
    quote: "El detalle de las costuras y el olor a cuero real cuando lo recibí — ahí supe que era distinto.",
    author: "Clienta KALUN",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-gris-calido/50">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Opiniones" title="Lo que dicen quienes ya tienen una pieza" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Foto real: clienta con su pieza y su bolsa KALUN */}
          <AnimatedSection className="relative min-h-[420px] md:min-h-0 overflow-hidden">
            <Image
              src="/images/testimonials/clienta-01.jpg"
              alt="Clienta feliz con su cartera KALUN y la bolsa burdeo de la marca"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <figure className="bg-blanco p-7 flex flex-col gap-4 border border-negro/10">
                  <StarRating rating={t.rating} size={13} />
                  <blockquote className="text-negro/80 text-base leading-relaxed">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="text-sm text-negro/50 border-t border-negro/10 pt-3">
                    {t.author}
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
