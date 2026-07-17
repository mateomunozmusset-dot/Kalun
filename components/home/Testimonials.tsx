import Image from "next/image";
import AnimatedSection from "@/components/shared/AnimatedSection";

// Sin opiniones inventadas: mostramos un momento real de cliente + la voz de marca.
// Cuando lleguen reseñas reales de clientas, se agregan aquí.
export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-gris-calido/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <AnimatedSection className="relative aspect-[4/3] overflow-hidden order-1 md:order-none">
          <Image
            src="/images/testimonials/clienta-01.jpg"
            alt="Clienta de KALUN con su cartera y la bolsa burdeo de la marca"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          <AnimatedSection>
            <span className="block text-xs uppercase tracking-[0.25em] text-cafe-cuero">
              Nuestras clientas
            </span>
            <h2 className="text-3xl md:text-5xl mt-3 leading-tight">
              Cada entrega es un pequeño momento.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-negro/70 text-lg leading-relaxed max-w-md">
              Detrás de cada pieza hay manos, tiempo y cuidado — y del otro lado, alguien que la
              va a usar todos los días. Gracias a quienes ya llevan una pieza KALUN consigo.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
