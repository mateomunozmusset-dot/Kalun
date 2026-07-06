import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProductsPageClient from "@/components/product/ProductsPageClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Colección",
  description: "Bolsos, carteras, bandoleras y accesorios de cuero hechos a mano por KALUN.",
};

export default function ProductosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Colección"
        title="Cada pieza, hecha a mano"
        description="Bolsos, carteras, bandoleras y accesorios en cuero curtido vegetal."
      />
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1600px] mx-auto">
          <ProductsPageClient products={products} />
        </div>
      </section>
    </>
  );
}
