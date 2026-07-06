"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/data/products";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";

export default function ProductsPageClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Category | "Todos">("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? products : products.filter((p) => p.category === active)),
    [active, products]
  );

  return (
    <div className="flex flex-col gap-12">
      <CategoryFilter active={active} onChange={setActive} />
      <ProductGrid products={filtered} />
    </div>
  );
}
