"use client";

import Image from "next/image";
import { useState } from "react";
import { RotateCw, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const cycle = () => setActive((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative aspect-square overflow-hidden bg-gris-calido/40 cursor-zoom-in"
        onClick={() => setZoomed((z) => !z)}
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
            <Image
              src={images[active]}
              alt={`${name} — ángulo ${active + 1}`}
              fill
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-transform duration-500 ${zoomed ? "scale-150" : "scale-100"}`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 flex gap-2">
          {images.length > 1 && (
            <button
              type="button"
              aria-label="Ver otro ángulo (vista 360° simulada)"
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
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              aria-label={`Ver ${name} ángulo ${i + 1}`}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 overflow-hidden border ${
                active === i ? "border-cafe-cuero" : "border-negro/10"
              }`}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
