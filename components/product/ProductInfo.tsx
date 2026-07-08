import { getAverageRating, type Product } from "@/data/products";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import StarRating from "@/components/shared/StarRating";

export default function ProductInfo({ product }: { product: Product }) {
  const rating = getAverageRating(product);
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-cafe-cuero">
          {product.category} · {product.collection}
        </span>
        <h1 className="text-3xl md:text-4xl mt-2">{product.name}</h1>
        {product.reviews.length > 0 && (
          <span className="mt-3 inline-flex items-center gap-2 text-sm text-negro/60">
            <StarRating rating={rating} />
            {rating} ({product.reviews.length})
          </span>
        )}
        <p className="text-xl text-negro/70 mt-3">${product.price.toLocaleString("es-CL")} CLP</p>
      </div>

      <p className="text-negro/70 leading-relaxed">{product.longDescription}</p>

      <div>
        <WhatsAppButton productName={product.name} slug={product.slug} />
      </div>

      <dl className="grid grid-cols-1 gap-6 pt-6 border-t border-negro/10">
        <div>
          <dt className="text-xs uppercase tracking-wide text-negro/50 mb-2">Materiales</dt>
          <dd className="text-sm text-negro/80">{product.materials.join(", ")}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-negro/50 mb-2">Cuidados</dt>
          <dd>
            <ul className="text-sm text-negro/80 list-disc list-inside space-y-1">
              {product.careInstructions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-negro/50 mb-2">Tiempo de fabricación</dt>
          <dd className="text-sm text-negro/80">{product.fabricationTime}</dd>
        </div>
      </dl>
    </div>
  );
}
