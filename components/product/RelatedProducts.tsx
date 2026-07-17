import type { Product } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductGrid from "./ProductGrid";

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-negro/10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="También te puede interesar" title="Productos relacionados" align="left" />
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
