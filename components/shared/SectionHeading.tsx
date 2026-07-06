interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span
          className={`text-xs uppercase tracking-[0.25em] font-medium ${
            light ? "text-arena" : "text-cafe-cuero"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl ${light ? "text-blanco" : "text-negro"}`}>{title}</h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? "text-gris-calido" : "text-negro/70"}`}>{subtitle}</p>
      )}
    </div>
  );
}
