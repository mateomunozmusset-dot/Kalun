"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // Salida más rápida (150ms) que la entrada (250ms) — enter/exit asimétrico (emil-design-eng)
          exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeOut" } }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-40 bg-negro text-blanco flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              // Stagger corto 50ms por ítem, decorativo, no bloquea interacción
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 0.05 * i }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="text-2xl font-display tracking-wide"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
