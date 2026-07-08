"use client";

import { buildProductInquiryMessage, buildWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  productName: string;
  slug: string;
  className?: string;
}

// CTA "Comprar" — nunca lleva la clase .magnetic ni ningún hover eufórico:
// es la acción de conversión principal, debe sentirse estable y confiable.
export default function WhatsAppButton({ productName, slug, className = "" }: WhatsAppButtonProps) {
  const handleClick = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const link = buildWhatsAppLink(buildProductInquiryMessage(productName, slug, origin));
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide uppercase bg-negro text-blanco hover:bg-burdeo [transition:background-color_200ms_ease,transform_160ms_var(--ease-out-strong)] active:scale-[0.97] ${className}`}
    >
      Comprar por WhatsApp
    </button>
  );
}
