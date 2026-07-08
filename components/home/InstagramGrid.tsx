import Image from "next/image";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { SOCIAL } from "@/lib/constants";

const IMAGES = [
  "/images/products/escencia/01.jpg",
  "/images/lifestyle/tote-negro-01.jpg",
  "/images/products/raiz/01.jpg",
  "/images/lifestyle/cartera-cel-02.jpg",
  "/images/products/travesia/03.jpg",
  "/images/lifestyle/tote-negro-02.jpg",
];

export default function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Síguenos" title="@kalun.cl en Instagram" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {IMAGES.map((src, i) => (
            <a
              key={src}
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden block"
            >
              <Image
                src={src}
                alt={`Publicación de Instagram KALUN ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-blanco opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={22} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
