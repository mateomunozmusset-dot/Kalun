"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/productos", label: "Colección" },
  { href: "/historia", label: "Historia" },
  { href: "/artesania", label: "Artesanía" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-blanco/90 backdrop-blur-md shadow-[0_1px_0_rgba(30,30,30,0.08)]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" className="text-xl tracking-[0.2em] font-display text-negro">
            KALUN
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group">
                <Link href={link.href} className="text-sm tracking-wide text-negro">
                  {link.label}
                </Link>
                <span className="absolute left-0 -bottom-1 h-px w-full origin-right scale-x-0 bg-burdeo transition-transform duration-[250ms] ease-[var(--ease-out-strong)] group-hover:origin-left group-hover:scale-x-100" />
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-negro"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  );
}
