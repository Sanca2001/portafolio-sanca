"use client";

import React from "react";

interface HeroProfileProps {
  name?: string;
  role?: string;
  avatarUrl?: string;
  onWorkClick?: () => void;
  onChatClick?: () => void;
}

export default function HeroProfile({
  name = "Enrique Sandoval",
  role = "Product & web designer focused on clean systems, smooth interactions, and meaningful details.",
  avatarUrl = "/images/bannerImage.png",
  onWorkClick,
  onChatClick,
}: HeroProfileProps) {
  return (
    <div className="w-full pb-8">
      {/* Avatar */}
      <div className="mb-5 inline-block">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/80 shadow-xs bg-gray-100 flex items-center justify-center">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
        {name}
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed mb-7 font-normal">
        {role}
      </p>

      {/* Action Buttons */}
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
  );
}
