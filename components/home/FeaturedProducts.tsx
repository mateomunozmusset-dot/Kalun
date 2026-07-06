import { getFeaturedProducts } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection from "@/components/shared/AnimatedSection";
import ProductGrid from "@/components/product/ProductGrid";
import CTAButton from "@/components/shared/CTAButton";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Selección" title="Productos destacados" />
        </AnimatedSection>

        <div className="mt-16">
          <ProductGrid products={featured} />
        </div>

        <div className="mt-16 flex justify-center">
          <CTAButton href="/productos" variant="secondary">
            Ver toda la colección
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
