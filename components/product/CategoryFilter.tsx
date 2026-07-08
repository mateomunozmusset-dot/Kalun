"use client";

import { CATEGORIES, type Category } from "@/data/products";

interface CategoryFilterProps {
  active: Category | "Todos";
  onChange: (value: Category | "Todos") => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const options: (Category | "Todos")[] = ["Todos", ...CATEGORIES];

  return (
    <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrar por categoría">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={active === opt}
          onClick={() => onChange(opt)}
          className={`px-5 py-2 text-sm tracking-wide border [transition:background-color_200ms_ease,border-color_200ms_ease,color_200ms_ease,transform_140ms_var(--ease-out-strong)] active:scale-[0.97] ${
            active === opt
              ? "bg-negro text-blanco border-negro"
              : "bg-transparent text-negro border-negro/20 hover:border-negro"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
