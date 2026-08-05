"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

export default function ProductDetail({ product }: { product: Product }) {
  const colors = product.colors ?? [];
  const hasColors = colors.length > 1;
  const [active, setActive] = useState(0);

  const images = hasColors ? colors[active].images : product.images;

  const colorSelector = hasColors ? (
    <div>
      <span className="text-xs uppercase tracking-wide text-negro/50 mb-3 block">
        Color: <span className="text-negro/80">{colors[active].name}</span>
      </span>
      <div className="flex items-center gap-3">
        {colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver color ${c.name}`}
            aria-pressed={active === i}
            title={c.name}
            className={`w-8 h-8 rounded-full border transition-transform duration-150 active:scale-95 ${
              active === i
                ? "ring-2 ring-offset-2 ring-cafe-cuero border-transparent"
                : "border-negro/20 hover:scale-105"
            }`}
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
    </div>
  ) : null;

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <ProductGallery key={active} images={images} name={product.name} />
        <ProductInfo product={product} colorSelector={colorSelector} />
      </div>
    </div>
  );
}
