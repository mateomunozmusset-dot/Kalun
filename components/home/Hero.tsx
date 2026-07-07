"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative h-svh min-h-[640px] w-full flex items-center justify-center overflow-hidden bg-burdeo text-blanco">
      <motion.div
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <Image
          src="/images/brand/logo-arena.png"
          alt="KALUN — Hecho a mano para toda la vida"
          width={560}
          height={560}
          priority
          className="w-[220px] md:w-[320px] lg:w-[360px] h-auto"
        />

        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="mt-2 text-2xl md:text-4xl font-display text-arena">
            Hecho a mano. Diseñado para durar.
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <CTAButton
              href="/productos"
              variant="primary"
              className="!bg-blanco !text-negro hover:!bg-negro hover:!text-blanco"
            >
              Explorar colección
            </CTAButton>
            <CTAButton href="/historia" variant="ghost" className="!text-blanco decoration-arena">
              Nuestra historia
            </CTAButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
