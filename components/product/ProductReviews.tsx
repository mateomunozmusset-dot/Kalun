"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import StarRating from "@/components/shared/StarRating";
import type { Review } from "@/data/products";

const EMPTY: Review[] = [];
const CHANGE_EVENT = "kalun-reviews-change";
const snapshotCache = new Map<string, { raw: string; parsed: Review[] }>();

// Lee localStorage con caché por referencia (requisito de useSyncExternalStore).
function readLocalReviews(key: string): Review[] {
  const raw = window.localStorage.getItem(key) ?? "";
  const hit = snapshotCache.get(key);
  if (hit && hit.raw === raw) return hit.parsed;
  let parsed: Review[] = EMPTY;
  try {
    parsed = raw ? (JSON.parse(raw) as Review[]) : EMPTY;
  } catch {
    parsed = EMPTY;
  }
  snapshotCache.set(key, { raw, parsed });
  return parsed;
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

interface ProductReviewsProps {
  slug: string;
  seedReviews: Review[];
}

// Valoraciones del cliente: las nuevas se guardan en este navegador (localStorage).
// TODO: conectar a un backend real cuando la marca lo pida.
export default function ProductReviews({ slug, seedReviews }: ProductReviewsProps) {
  const storageKey = `kalun-reviews-${slug}`;
  const localReviews = useSyncExternalStore(
    subscribe,
    () => readLocalReviews(storageKey),
    () => EMPTY,
  );
  const [draftRating, setDraftRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [sent, setSent] = useState(false);

  const reviews = [...localReviews, ...seedReviews];
  const average =
    reviews.length > 0
      ? Math.round((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length) * 10) / 10
      : 0;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (draftRating === 0) return;
    const data = new FormData(e.currentTarget);
    const review: Review = {
      author: String(data.get("nombre") || "Cliente KALUN").trim() || "Cliente KALUN",
      rating: draftRating,
      text: String(data.get("comentario") || "").trim(),
    };
    try {
      window.localStorage.setItem(storageKey, JSON.stringify([review, ...localReviews]));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch {
      /* sin almacenamiento disponible: la valoración no persiste */
    }
    setSent(true);
  };

  return (
    <section aria-labelledby="reviews-title" className="pt-10 border-t border-negro/10">
      <div className="flex items-baseline justify-between flex-wrap gap-3">
        <h2 id="reviews-title" className="text-2xl">
          Valoraciones
        </h2>
        {reviews.length > 0 && (
          <span className="inline-flex items-center gap-2 text-sm text-negro/60">
            <StarRating rating={average} />
            {average} · {reviews.length} {reviews.length === 1 ? "opinión" : "opiniones"}
          </span>
        )}
      </div>

      <ul className="mt-8 flex flex-col gap-6">
        {reviews.map((r, i) => (
          <li key={`${r.author}-${i}`} className="border border-negro/10 bg-blanco p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="text-sm font-medium">{r.author}</span>
              <StarRating rating={r.rating} size={12} />
            </div>
            {r.text && <p className="mt-3 text-sm text-negro/70 leading-relaxed">{r.text}</p>}
          </li>
        ))}
      </ul>

      {sent ? (
        <p role="status" className="mt-8 text-sm text-negro/70">
          Gracias por tu valoración — ya quedó publicada aquí arriba.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5 max-w-lg">
          <h3 className="text-lg">Deja tu valoración</h3>

          <div className="flex items-center gap-1" role="radiogroup" aria-label="Tu puntuación">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                role="radio"
                aria-checked={draftRating === star}
                aria-label={`${star} ${star === 1 ? "estrella" : "estrellas"}`}
                onClick={() => setDraftRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 [transition:transform_140ms_var(--ease-out-strong)] active:scale-90"
              >
                <svg width={22} height={22} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill={star <= (hoverRating || draftRating) ? "var(--color-burdeo)" : "var(--color-gris-calido)"}
                    style={{ transition: "fill 150ms ease" }}
                    d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.58l-5.9 3.1 1.13-6.58L2.45 9.44l6.6-.96L12 2.5z"
                  />
                </svg>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="review-nombre" className="text-sm text-negro/70">
              Tu nombre
            </label>
            <input
              id="review-nombre"
              name="nombre"
              type="text"
              className="border border-negro/20 px-4 py-2.5 bg-transparent focus:border-burdeo transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="review-comentario" className="text-sm text-negro/70">
              Comentario (opcional)
            </label>
            <textarea
              id="review-comentario"
              name="comentario"
              rows={3}
              className="border border-negro/20 px-4 py-2.5 bg-transparent focus:border-burdeo transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={draftRating === 0}
            className="w-fit inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide uppercase bg-negro text-blanco hover:bg-burdeo [transition:background-color_200ms_ease,transform_160ms_var(--ease-out-strong)] active:scale-[0.97] disabled:opacity-40 disabled:active:scale-100"
          >
            Publicar valoración
          </button>
          {draftRating === 0 && (
            <span className="text-xs text-negro/40 -mt-3">Elige las estrellas para publicar.</span>
          )}
        </form>
      )}
    </section>
  );
}
