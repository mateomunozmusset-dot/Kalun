import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";

const COLLECTIONS = [
  { slug: "Origen", name: "Origen", image: "/images/collections/origen.jpg" },
  { slug: "Clásicos", name: "Clásicos", image: "/images/collections/clasicos.svg" },
  { slug: "Edición Especial", name: "Edición Especial", image: "/images/collections/edicion-especial.svg" },
];

export default function CollectionsShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 bg-gris-calido/50">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Colecciones" title="Tres formas de entender el cuero" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/productos?coleccion=${encodeURIComponent(c.slug)}`}
              className="group relative aspect-[3/4] overflow-hidden block"
            >
              <Image
                src={c.image}
                alt={`Colección ${c.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[400ms] ease-[var(--ease-out-strong)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-negro/70 via-negro/10 to-transparent" />
              <span className="absolute bottom-6 left-6 text-blanco text-2xl font-display">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
