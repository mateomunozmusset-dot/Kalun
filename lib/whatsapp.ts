import { WHATSAPP_NUMBER } from "./constants";

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductInquiryMessage(productName: string, slug: string, origin = ""): string {
  const url = origin ? `${origin}/productos/${slug}` : `/productos/${slug}`;
  return `Hola KALUN, me interesa el producto "${productName}" (${url}). ¿Podrían darme más información?`;
}
