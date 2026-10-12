"use client";

import Image from "next/image";
import { useState } from "react";
import { RotateCw, ZoomIn, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Media = { type: "image"; src: string } | { type: "video"; src: string };

export default function ProductGallery({
  images,
  name,
  video,
}: {
  images: string[];
  name: string;
  video?: string;
}) {
  // El video va al final: así la primera foto elegida sigue siendo la portada.
  const media: Media[] = [
    ...images.map((src) => ({ type: "image" as const, src })),
    ...(video ? [{ type: "video" as const, src: video }] : []),
  ];

  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const current = media[active] ?? media[0];
  const cycle = () => setActive((i) => (i + 1) % media.length);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={`relative aspect-square overflow-hidden bg-gris-calido/40 ${
          current.type === "image" ? "cursor-zoom-in" : ""
        }`}
        onClick={() => current.type === "image" && setZoomed((z) => !z)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={current.src}
                alt={`${name} — vista ${active + 1}`}
                fill
                priority={active === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-500 ${zoomed ? "scale-150" : "scale-100"}`}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {current.type === "image" && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {media.length > 1 && (
              <button
                type="button"
                aria-label="Ver otra vista"
                onClick={(e) => {
                  e.stopPropagation();
                  cycle();
                }}
                className="w-10 h-10 rounded-full bg-blanco/90 flex items-center justify-center"
              >
                <RotateCw size={16} />
              </button>
            )}
            <button
              type="button"
              aria-label={zoomed ? "Alejar" : "Acercar"}
              onClick={(e) => {
                e.stopPropagation();
                setZoomed((z) => !z);
              }}
              className="w-10 h-10 rounded-full bg-blanco/90 flex items-center justify-center"
            >
              <ZoomIn size={16} />
            </button>
          </div>
        )}
      </div>

      {media.length > 1 && (
        <div className="flex gap-3">
          {media.map((m, i) => (
            <button
              key={m.src}
              type="button"
              aria-label={
                m.type === "video" ? `Ver video de ${name}` : `Ver ${name} vista ${i + 1}`
              }
              onClick={() => {
                setActive(i);
                setZoomed(false);
              }}
              className={`relative w-20 h-20 overflow-hidden border ${
                active === i ? "border-cafe-cuero" : "border-negro/10"
              }`}
            >
              {m.type === "video" ? (
                <>
                  {/* #t=0.1 hace que iOS muestre el primer fotograma como miniatura */}
                  <video src={`${m.src}#t=0.1`} muted playsInline preload="metadata" className="w-full h-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-negro/25">
                    <Play size={18} className="text-blanco" fill="currentColor" />
                  </span>
                </>
              ) : (
                <Image src={m.src} alt="" fill sizes="80px" className="object-cover" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
