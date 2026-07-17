interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="bg-arena/40 pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-5">
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-cafe-cuero">{eyebrow}</span>
        <h1 className="text-4xl md:text-6xl text-negro">{title}</h1>
        {description && <p className="max-w-xl text-negro/70 text-base md:text-lg">{description}</p>}
      </div>
    </header>
  );
}
