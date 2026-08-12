"use client";

import type { ReactNode } from "react";
import { trackWhatsAppContact } from "@/lib/analytics";

// Enlace <a> a WhatsApp que registra el clic como conversión "Contact" en Meta.
export default function WhatsAppLink({
  href,
  source,
  className,
  children,
}: {
  href: string;
  source?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppContact(source)}
      className={className}
    >
      {children}
    </a>
  );
}
