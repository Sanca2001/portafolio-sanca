"use client";

import { useState } from "react";

const items = ["Proyectos", "Experiments", "About", "Resume"] as const;

export type Tab = (typeof items)[number] | "Projects";

interface NavPillsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function NavPills({ activeTab, onTabChange }: NavPillsProps) {
  const [internalActive, setInternalActive] = useState<(typeof items)[number]>("Proyectos");

  const active = activeTab ?? internalActive;

  const handleSelect = (item: (typeof items)[number]) => {
    setInternalActive(item);
    onTabChange?.(item);
  };

  return (
    <nav
      aria-label="Principal"
      className="inline-flex items-center gap-1 rounded-[20px] bg-white/30 p-1 ring-1 ring-white/40 backdrop-blur-md"
    >
      {items.map((item) => {
        const isActive = item === active;   
        return (
          <button
            key={item}
            type="button"
            aria-current={isActive ? "page" : undefined}
            onClick={() => handleSelect(item)}
            className={[
              "rounded-2xl px-3 py-2.5 cursor-pointer text-[14px] font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
              isActive
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900",
            ].join(" ")}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}