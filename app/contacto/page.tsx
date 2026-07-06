import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/contacto/ContactForm";
import MapEmbed from "@/components/contacto/MapEmbed";
import { CONTACT, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por consultas, pedidos o trabajos a medida.",
};

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ producto?: string }>;
}) {
  const { producto } = await searchParams;
  const initialMessage = producto ? `Hola, me interesa el producto "${producto}".` : "";

  return (
    <>
      <PageHeader eyebrow="Contacto" title="Conversemos" />

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-10">
            <ContactForm initialMessage={initialMessage} />

            <div className="border-t border-negro/10 pt-8 flex flex-col gap-2 text-sm text-negro/70">
              <span>{CONTACT.email}</span>
              <span>{CONTACT.phone}</span>
              <span>{CONTACT.address}</span>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-cafe-cuero w-fit">
                Instagram
              </a>
            </div>
          </div>

          <MapEmbed />
        </div>
      </section>
    </>
  );
}
