// Estrellas discretas y elegantes (brief: "no usar estrellas enormes").
// Server-safe: SVG inline, sin estado.
interface StarRatingProps {
  rating: number; // 0 a 5
  size?: number; // px por estrella
  className?: string;
}

function Star({ fill, size }: { fill: number; size: number }) {
  // fill: 0 = vacía, 1 = llena, 0..1 = parcial
  // Id determinista por porcentaje: gradientes con igual fill son idénticos,
  // así que compartir id entre estrellas no altera el resultado visual.
  const id = `k-star-${Math.round(fill * 100)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={id}>
          <stop offset={`${fill * 100}%`} stopColor="var(--color-burdeo)" />
          <stop offset={`${fill * 100}%`} stopColor="var(--color-gris-calido)" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.58l-5.9 3.1 1.13-6.58L2.45 9.44l6.6-.96L12 2.5z"
      />
    </svg>
  );
}

export default function StarRating({ rating, size = 14, className = "" }: StarRatingProps) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Valoración: ${rating} de 5 estrellas`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} fill={Math.max(0, Math.min(1, rating - (i - 1)))} />
      ))}
    </span>
  );
}
