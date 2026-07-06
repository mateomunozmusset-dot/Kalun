import Link from "next/link";
import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-negro text-blanco hover:bg-burdeo",
  secondary: "border border-negro text-negro hover:bg-negro hover:text-blanco",
  ghost: "text-negro underline underline-offset-4 decoration-burdeo hover:text-burdeo",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  // Colores 200ms `ease`, presión 160ms ease-out fuerte + scale(0.97) — feedback táctil (emil-design-eng)
  const interaction =
    "[transition:background-color_200ms_ease,color_200ms_ease,transform_160ms_var(--ease-out-strong)] active:scale-[0.97]";
  const base =
    variant === "ghost"
      ? `inline-flex items-center gap-2 text-sm tracking-wide ${interaction}`
      : `inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-wide uppercase ${interaction}`;

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
