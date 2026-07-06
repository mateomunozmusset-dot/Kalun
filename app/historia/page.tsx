import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Timeline from "@/components/historia/Timeline";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description: "El origen de KALUN: artesanía en cuero, hecha a mano, pieza por pieza.",
};

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra historia"
        title="De la pasión por el cuero a cada pieza que hacemos"
      />

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl font-display leading-snug">
              KALUN nace de la pasión por la artesanía en cuero. Cada producto es elaborado
              cuidadosamente por artesanos que ponen atención en cada costura, textura y detalle.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-negro/70 text-lg leading-relaxed">
              No producimos en masa. Creamos piezas con identidad, duraderas y atemporales que
              acompañan la vida de nuestros clientes durante muchos años. Nuestra misión es simple:
              combinar diseño atemporal, calidad superior y dedicación artesanal en cada pieza que
              elaboramos, para que acompañe la vida diaria de quien la lleva.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-20 md:pb-28">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/historia/proceso-01.svg"
              alt="Costura a mano de una pieza de cuero KALUN"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/historia/proceso-02.svg"
              alt="Selección de cuero curtido vegetal en el taller KALUN"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 bg-arena/20 pt-20">
        <div className="max-w-[1600px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-center mb-16">Nuestro camino</h2>
          </AnimatedSection>
          <Timeline />
        </div>
      </section>
    </>
  );
}
