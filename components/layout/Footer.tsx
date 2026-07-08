"use client";

import Link from "next/link";
import Image from "next/image";
import { InstagramIcon, FacebookIcon } from "@/components/shared/SocialIcons";
import { BRAND, CONTACT, SOCIAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-negro text-blanco pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/brand/logo-arena.png"
            alt={`${BRAND.name} — logotipo`}
            width={150}
            height={150}
            className="w-[132px] h-auto -ml-1"
          />
          <p className="text-sm text-blanco/60 max-w-xs">{BRAND.tagline}</p>
          <div className="flex gap-4 mt-2">
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-blanco/50">Explorar</span>
          <Link href="/productos" className="text-sm text-blanco/80 hover:text-blanco">
            Colección
          </Link>
          <Link href="/historia" className="text-sm text-blanco/80 hover:text-blanco">
            Nuestra historia
          </Link>
          <Link href="/artesania" className="text-sm text-blanco/80 hover:text-blanco">
            Artesanía
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-blanco/50">Contacto</span>
          <a href={`mailto:${CONTACT.email}`} className="text-sm text-blanco/80 hover:text-blanco">
            {CONTACT.email}
          </a>
          <span className="text-sm text-blanco/80">{CONTACT.phone}</span>
          <span className="text-sm text-blanco/80">{CONTACT.address}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.2em] text-blanco/50">Newsletter</span>
          <p className="text-sm text-blanco/60">Novedades y lanzamientos, sin spam.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="tu@email.com"
              className="flex-1 min-w-0 bg-transparent border border-blanco/30 px-3 py-2 text-sm placeholder:text-blanco/40 focus:border-arena transition-colors duration-200"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm uppercase tracking-wide bg-burdeo text-blanco [transition:background-color_200ms_ease,transform_160ms_var(--ease-out-strong)] hover:bg-burdeo/85 active:scale-[0.97]"
            >
              Unirme
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-6 border-t border-blanco/10 text-xs text-blanco/40">
        © {new Date().getFullYear()} {BRAND.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
