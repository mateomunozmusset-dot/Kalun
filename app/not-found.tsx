import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60svh] flex flex-col items-center justify-center gap-6 px-6 text-center pt-24">
      <span className="text-xs uppercase tracking-[0.25em] text-cafe-cuero">Error 404</span>
      <h1 className="text-3xl md:text-4xl">Esta página no existe</h1>
      <p className="text-negro/60 max-w-md">
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 text-sm tracking-wide uppercase bg-negro text-blanco hover:bg-cafe-cuero transition-colors duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
