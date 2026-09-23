"use client";

import React from "react";

export type TabType = "projects" | "experiments" | "about" | "resume";

interface HeroHeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  name?: string;
  role?: string;
  avatarUrl?: string;
  onWorkClick?: () => void;
  onChatClick?: () => void;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experiments", label: "Experiments" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
];

export default function HeroHeader({
  activeTab,
  onTabChange,
  name = "Enrique Sandoval",
  role = "Product & web designer focused on clean systems, smooth interactions, and meaningful details.",
  avatarUrl = "/images/bannerImage.png",
  onWorkClick,
  onChatClick,
}: HeroHeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto px-6 pt-8 pb-10">
      {/* Top Row: Avatar on Left & Pill Navigation Centered on the SAME Vertical Line */}
      <div className="relative flex items-center justify-between mb-8 min-h-[48px]">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/80 shadow-xs bg-gray-100 flex-shrink-0 z-10">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
        </div>

        {/* Pill Navigation Capsule - Centered at the exact same vertical position as Avatar */}
        <div className="sm:absolute sm:inset-0 flex items-center justify-center pointer-events-none z-20">
          <nav className="pointer-events-auto inline-flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-full shadow-xs transition-all">
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
          </nav>
        </div>
      </div>

      {/* Name, Tagline & CTAs Aligned on Left */}
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
          {name}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6 font-normal">
          {role}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={onWorkClick}
            className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-xs cursor-pointer active:scale-95"
          >
            My latest work
          </button>
          <button
            onClick={onChatClick}
            className="bg-gray-100/90 hover:bg-gray-200/90 text-gray-800 px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer active:scale-95"
          >
            Let's chat
          </button>
        </div>
      </div>
    </header>
  );
}
