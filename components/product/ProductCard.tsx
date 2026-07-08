import Image from "next/image";
import Link from "next/link";
import { getAverageRating, type Product } from "@/data/products";
import StarRating from "@/components/shared/StarRating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col gap-4">
      <Link href={`/productos/${product.slug}`} className="relative block aspect-square overflow-hidden bg-gris-calido/40">
        <Image
          src={product.images[0]}
          alt={`${product.name} — vista principal`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 ease-[var(--ease-out-strong)] group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg">{product.name}</h3>
        <p className="text-sm text-negro/60">{product.shortDescription}</p>
        {product.reviews.length > 0 && (
          <StarRating rating={getAverageRating(product)} size={12} className="mt-1" />
        )}
        <span className="text-sm text-cafe-cuero mt-1">
          ${product.price.toLocaleString("es-CL")} CLP
        </span>
        <Link
          href={`/productos/${product.slug}`}
          className="mt-3 text-xs uppercase tracking-wide underline underline-offset-4 decoration-burdeo w-fit transition-colors duration-200 hover:text-burdeo"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}
