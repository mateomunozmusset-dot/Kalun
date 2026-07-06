import { MAP_COORDS } from "@/lib/constants";

export default function MapEmbed() {
  const { lat, lng } = MAP_COORDS;
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;

  return (
    <div className="aspect-[4/3] md:aspect-auto md:h-full w-full bg-gris-calido">
      <iframe
        title="Ubicación de KALUN"
        src={src}
        className="w-full h-full border-0 grayscale contrast-125"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
