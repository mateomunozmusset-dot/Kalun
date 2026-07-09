"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/productos", label: "Colección" },
  { href: "/historia", label: "Historia" },
  { href: "/artesania", label: "Artesanía" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En la home, sobre el hero burdeo (sin scroll), el texto va en claro; en el resto, oscuro.
  const overHero = pathname === "/" && !scrolled;
  const textColor = overHero ? "text-blanco" : "text-negro";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-blanco/90 backdrop-blur-md shadow-[0_1px_0_rgba(30,30,30,0.08)]" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" aria-label="KALUN — inicio" className="flex items-center">
            <Image
              src="/images/brand/logo-burdeo.png"
              alt="KALUN"
              width={112}
              height={112}
              priority
              className="h-12 w-12 md:h-14 md:w-14"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group">
                <Link href={link.href} className={`text-sm tracking-wide transition-colors duration-300 ${textColor}`}>
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
            className={`md:hidden transition-colors duration-300 ${textColor}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </>
  );
}
