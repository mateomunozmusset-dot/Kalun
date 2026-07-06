"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Hammer, Gem, ShieldCheck, Infinity as InfinityIcon, HeartHandshake, Leaf } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/shared/AnimatedSection";

const VALUES = [
  { icon: Hammer, title: "Artesanía", text: "Cada pieza pasa por manos, no por líneas de producción." },
  { icon: Gem, title: "Calidad", text: "Materiales seleccionados uno por uno, sin atajos." },
  { icon: InfinityIcon, title: "Durabilidad", text: "Piezas para acompañar años, no temporadas." },
  { icon: ShieldCheck, title: "Diseño Atemporal", text: "Formas que no responden a tendencias pasajeras." },
  { icon: HeartHandshake, title: "Honestidad", text: "Precios y procesos claros, sin letra chica." },
  { icon: Leaf, title: "Sostenibilidad", text: "Producción responsable, en lotes pequeños." },
];

export default function EssenceGrid() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        <AnimatedSection>
          <SectionHeading eyebrow="Por qué KALUN" title="Nuestra esencia" />
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer(0.1)}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14"
        >
          {VALUES.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={staggerItem(reduced)} className="flex flex-col items-center text-center gap-4">
              <Icon size={28} strokeWidth={1.25} className="text-cafe-cuero" />
              <h3 className="text-xl">{title}</h3>
              <p className="text-sm text-negro/60 max-w-[220px]">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
