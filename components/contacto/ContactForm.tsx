"use client";

import { useState, type FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export default function ContactForm({ initialMessage = "" }: { initialMessage?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    // v1: sin backend real — simulación client-side.
    // TODO: conectar a un servicio de email real (ej. Resend) cuando el usuario lo pida.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-16" role="status">
        <span className="w-14 h-14 rounded-full bg-cafe-cuero/15 flex items-center justify-center">
          <Check className="text-cafe-cuero" />
        </span>
        <p className="text-lg">
          {name ? `Gracias, ${name}.` : "¡Gracias!"} Recibimos tu mensaje y te vamos a escribir pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input type="hidden" name="producto" value={initialMessage} />

      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="text-sm text-negro/70">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-negro/20 px-4 py-3 bg-transparent focus:border-cafe-cuero"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-negro/70">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-negro/20 px-4 py-3 bg-transparent focus:border-cafe-cuero"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensaje" className="text-sm text-negro/70">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          defaultValue={initialMessage}
          className="border border-negro/20 px-4 py-3 bg-transparent focus:border-cafe-cuero resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm tracking-wide uppercase bg-negro text-blanco hover:bg-cafe-cuero transition-colors duration-300 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="animate-spin" size={16} />}
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
