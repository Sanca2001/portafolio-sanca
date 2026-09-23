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
      className="inline-flex max-w-full overflow-x-auto items-center gap-0.5 sm:gap-1 rounded-[20px] bg-white/40 p-1 ring-1 ring-white/60 backdrop-blur-md no-scrollbar"
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
              "rounded-2xl px-2.5 sm:px-3.5 py-2 sm:py-2.5 cursor-pointer text-[13px] sm:text-[14px] font-medium transition-all whitespace-nowrap",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
              isActive
                ? "bg-white text-slate-900 shadow-sm font-semibold"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50",
            ].join(" ")}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
}