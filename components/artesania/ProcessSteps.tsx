"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/shared/AnimatedSection";

const STEPS = [
  {
    title: "Selección del cuero",
    text: "Cada piel se revisa a mano, descartando cualquier imperfección que comprometa la pieza final.",
    image: "/images/artesania/seleccion.svg",
  },
  {
    title: "Corte manual",
    text: "Los patrones se trazan y cortan uno por uno, sin troqueles industriales.",
    image: "/images/artesania/corte.svg",
  },
  {
    title: "Costura",
    text: "Costura a mano o a máquina plana, reforzando cada punto de tensión.",
    image: "/images/artesania/costura.svg",
  },
  {
    title: "Terminaciones",
    text: "Bordes pulidos y teñidos a mano, uno por uno, hasta quedar parejos.",
    image: "/images/artesania/terminaciones.svg",
  },
  {
    title: "Control de calidad",
    text: "Cada pieza se revisa antes de salir del taller. Si no cumple el estándar, no sale a la venta.",
    image: "/images/artesania/control-calidad.svg",
  },
];

export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
  const steps = compact ? STEPS : STEPS;

  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer(0.12)}
      className={`grid grid-cols-1 ${compact ? "sm:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-5"} gap-8`}
    >
      {steps.map((step, i) => (
        <motion.li key={step.title} variants={staggerItem(null)} className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover"
            />
          </div>
          <span className="text-xs uppercase tracking-wide text-cafe-cuero">Paso {i + 1}</span>
          <h3 className="text-lg">{step.title}</h3>
          {!compact && <p className="text-sm text-negro/60">{step.text}</p>}
        </motion.li>
      ))}
    </motion.ol>
  );
}
