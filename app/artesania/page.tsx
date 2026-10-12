import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeading from "@/components/shared/SectionHeading";
import ProcessSteps from "@/components/artesania/ProcessSteps";

const TALLER_VIDEOS = [
  { src: "/videos/artesania-taller.mp4", poster: "/videos/artesania-taller.jpg", label: "Nuestro taller de telares" },
  { src: "/videos/telar-poncho.mp4", poster: "/videos/telar-poncho.jpg", label: "Tejiendo a telar" },
];

export const metadata: Metadata = {
  title: "Artesanía",
  description: "Cómo hacemos cada pieza KALUN: selección del cuero, corte manual, costura, terminaciones y control de calidad.",
};

export default function ArtesaniaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Artesanía"
        title="Cinco pasos, un mismo cuidado"
        description="Desde la selección del cuero hasta el control de calidad final, cada pieza pasa por manos, no por líneas de producción."
      />

      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <ProcessSteps />
          </AnimatedSection>
        </div>
      </section>

      {/* El oficio en movimiento — videos del taller */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-gris-calido/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Detrás de cada pieza"
              title="El oficio en movimiento"
              subtitle="Así se trabaja en nuestro taller: telares, manos y tiempo."
            />
          </AnimatedSection>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TALLER_VIDEOS.map((v) => (
              <AnimatedSection key={v.src} className="relative aspect-[3/4] overflow-hidden bg-negro/5">
                <video
                  src={v.src}
                  poster={v.poster}
                  controls
                  playsInline
                  preload="none"
                  aria-label={v.label}
                  className="w-full h-full object-cover"
                />
              </AnimatedSection>
            ))}
            <AnimatedSection className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/artesania/telar.jpg"
                alt="Telar artesanal en el taller de KALUN"
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
