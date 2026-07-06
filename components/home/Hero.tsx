"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative h-svh min-h-[640px] w-full flex items-end overflow-hidden bg-arena/30">
      <Image
        src="/images/hero/hero-product.jpg"
        alt="Bolso Legado II de cuero cognac sobre tela blanca, colección Origen de KALUN"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-negro/50 via-negro/10 to-transparent" />

      <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-blanco mb-6">
            Hecho a mano.
            <br />
            Diseñado para durar.
          </h1>
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap items-center gap-6"
          >
            <CTAButton href="/productos" variant="primary" className="!bg-blanco !text-negro hover:!bg-burdeo hover:!text-blanco">
              Explorar colección
            </CTAButton>
            <CTAButton href="/historia" variant="ghost" className="!text-blanco decoration-arena">
              Nuestra historia
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
