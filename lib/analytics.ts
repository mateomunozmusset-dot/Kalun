// Utilidades de analítica / conversiones (Meta Pixel).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Registra un contacto por WhatsApp como conversión "Contact" en Meta.
// `source` identifica de dónde salió el clic (nombre del producto o sección).
export function trackWhatsAppContact(source?: string): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", source ? { content_name: source } : undefined);
  }
}
