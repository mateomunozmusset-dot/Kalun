"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/shared/AnimatedSection";

const STEPS = [
  {
    title: "Selección del cuero",
    text: "Cada piel se revisa a mano, descartando cualquier imperfección que comprometa la pieza final.",
    image: "/images/artesania/seleccion.jpg",
  },
  {
    title: "Corte y armado",
    text: "Los patrones se trazan, cortan y arman uno por uno, golpe a golpe, sin troqueles industriales.",
    image: "/images/artesania/corte.jpg",
  },
  {
    title: "Costura",
    text: "Costura reforzada en cada punto de tensión, con hilo en contraste cosido con calma.",
    image: "/images/artesania/costura.jpg",
  },
  {
    title: "Herrajes y terminaciones",
    text: "Argollas, mosquetones y remaches se colocan a mano, pieza por pieza.",
    image: "/images/artesania/terminaciones.jpg",
  },
  {
    title: "Control de calidad",
    text: "Cada pieza se revisa antes de salir del taller. Si no cumple el estándar, no sale a la venta.",
    image: "/images/artesania/control-calidad.jpg",
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
