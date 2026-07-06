"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function HistoryTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-24, 24]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10 bg-arena/30">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0">
            <Image
              src="/images/brand/logo-cuero.jpg"
              alt="Monograma KALUN grabado a mano sobre cuero cognac"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-cafe-cuero">Nuestra historia</span>
          <h2 className="text-3xl md:text-5xl">
            KALUN nace de la pasión por la artesanía en cuero.
          </h2>
          <p className="text-negro/70 text-base md:text-lg max-w-lg">
            No producimos en masa. Creamos piezas con identidad, duraderas y atemporales que acompañan
            la vida de nuestros clientes durante muchos años.
          </p>
          <div>
            <CTAButton href="/historia" variant="ghost">
              Leer más →
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
