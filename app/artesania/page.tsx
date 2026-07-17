import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessSteps from "@/components/artesania/ProcessSteps";

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
    </>
  );
}
