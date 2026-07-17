import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProcessSteps from "@/components/artesania/ProcessSteps";
import CTAButton from "@/components/shared/CTAButton";

export default function CraftsmanshipProcess() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Artesanía" title="Cómo nace cada pieza" />
        </AnimatedSection>

        <div className="mt-16">
          <ProcessSteps compact />
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton href="/artesania" variant="secondary">
            Ver el proceso completo
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
