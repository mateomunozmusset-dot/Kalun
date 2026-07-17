import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Timeline from "@/components/historia/Timeline";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "KALUN es el encuentro entre la nobleza de los materiales, el oficio artesanal y el diseño hecho para perdurar.",
};

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra historia"
        title="El encuentro entre la nobleza de los materiales y el oficio"
      />

      {/* Texto de marca (del documento oficial de KALUN) */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl font-display leading-snug">
              KALUN nace del respeto por los materiales nobles y el trabajo artesanal. Cada
              cartera, accesorio y textil refleja el tiempo, la dedicación y la identidad de
              quienes lo crean.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-negro/70 text-lg leading-relaxed">
              Somos una marca chilena de diseño y manufactura artesanal, especializada en
              artículos de cuero genuino y tejidos. Nuestra propuesta combina tradición, oficio y
              diseño contemporáneo, creando piezas duraderas que destacan por su autenticidad,
              carácter y atención al detalle. La marca nace con la intención de rescatar el valor
              de los objetos bien hechos: elaborados cuidadosamente por manos expertas, con
              materiales seleccionados por su resistencia, su belleza y su capacidad de envejecer
              con elegancia.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <blockquote className="border-l-2 border-burdeo pl-6 py-2 text-xl md:text-2xl font-display text-burdeo">
              “Autenticidad, diseño con carácter y creación hecha con dedicación.”
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Donde todo comenzó — tejido a telar y el primer logo */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-arena/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="block text-xs uppercase tracking-[0.25em] text-cafe-cuero text-center">
              Los comienzos
            </span>
            <h2 className="text-3xl md:text-4xl text-center mt-3 mb-6">Donde todo comenzó</h2>
            <p className="max-w-2xl mx-auto text-center text-negro/70 leading-relaxed">
              Antes del cuero, KALUN ya existía: nació entre telares, tejiendo ponchos y ruanas de
              lana de oveja y alpaca junto a artesanos chilenos. Ese primer sello — la espiral
              tejida — sigue siendo parte de nuestra raíz, y el oficio del telar sigue vivo en
              nuestras piezas textiles.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            <AnimatedSection className="relative aspect-square overflow-hidden bg-blanco">
              <Image
                src="/images/historia/logo-antiguo.jpg"
                alt="Primer logo de KALUN: espiral tejida sobre fondo café"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-8"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="relative aspect-square overflow-hidden">
              <Image
                src="/images/historia/telar-01.jpg"
                alt="Telar artesanal con lana de oveja en tonos café y crema"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative aspect-square overflow-hidden">
              <Image
                src="/images/historia/poncho.jpg"
                alt="Poncho KALUN tejido a telar, de lana, con etiqueta de la marca"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* El oficio hoy — cuero y entrega */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatedSection className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/historia/proceso-01.jpg"
              alt="Manos de artesano colocando herrajes a una cartera de cuero KALUN"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/historia/packaging.jpg"
              alt="Bolsa burdeo de KALUN con una pieza envuelta en su bolsa de tela"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover"
            />
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <p className="max-w-2xl mx-auto text-center text-negro/70 leading-relaxed mt-10">
            Cada pieza está pensada para acompañar a sus dueños durante años, desarrollando una
            identidad propia con el uso y el paso del tiempo. Y cada entrega se cuida hasta el
            final: tu pieza llega protegida en su bolsa de tela, dentro de nuestra bolsa burdeo.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 bg-arena/20 pt-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-center mb-16">Nuestro camino</h2>
          </AnimatedSection>
          <Timeline />
        </div>
      </section>
    </>
  );
}
