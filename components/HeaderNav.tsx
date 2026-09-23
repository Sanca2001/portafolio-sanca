"use client";

import React from "react";

export type TabType = "projects" | "experiments" | "about" | "resume";

interface HeaderNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experiments", label: "Experiments" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
];

export default function HeaderNav({ activeTab, onTabChange }: HeaderNavProps) {
  return (
    <nav className="flex justify-center items-center pb-8 pt-2 sticky top-4 z-50">
      <div className="inline-flex items-center gap-1 p-1 bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-full shadow-xs transition-all">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 select-none cursor-pointer ${
                isActive
                  ? "bg-white text-gray-900 shadow-xs"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/60"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
