import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const CUSTOM_MSG = "Hola KALUN, me gustaría crear mi propio diseño. ¿Me cuentan cómo funciona?";

export default function CollectionsShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-gris-calido/50">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Colección" title="Origen, o algo completamente tuyo." />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colección Origen */}
          <Link
            href="/productos"
            className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden block"
          >
            <Image
              src="/images/collections/origen.jpg"
              alt="Colección Origen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[400ms] ease-[var(--ease-out-strong)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-negro/10 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="block text-blanco text-2xl font-display">Origen</span>
              <span className="text-blanco/80 text-sm">Nuestras piezas hechas a mano</span>
            </div>
          </Link>

          {/* Crea tu propio diseño */}
          <a
            href={buildWhatsAppLink(CUSTOM_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden block"
          >
            <Image
              src="/images/brand/logo-cuero.jpg"
              alt="Diseño a medida en cuero KALUN"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[400ms] ease-[var(--ease-out-strong)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-burdeo/75 transition-colors duration-300 group-hover:bg-burdeo/65" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="text-blanco text-2xl md:text-3xl font-display">Crea tu propio diseño</span>
              <span className="mt-2 text-blanco/80 text-sm max-w-xs">
                Cuéntanos qué imaginas y lo hacemos a mano, a tu medida.
              </span>
              <span className="mt-5 text-blanco text-xs uppercase tracking-[0.2em] border-b border-blanco/50 pb-1">
                Escríbenos →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
