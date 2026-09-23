"use client";

import React from "react";
import Link from "next/link";
import { proyectos, Proyecto } from "@/data/proyectos";

// Pastel background gradients for cards to match reference design aesthetic
const cardGradients = [
  "bg-gradient-to-br from-blue-100/70 via-sky-50 to-indigo-100/60",
  "bg-gradient-to-br from-purple-100/60 via-pink-50 to-orange-100/50",
  "bg-gradient-to-br from-emerald-100/60 via-teal-50 to-cyan-100/60",
  "bg-gradient-to-br from-amber-100/60 via-orange-50 to-rose-100/50",
  "bg-gradient-to-br from-violet-100/60 via-indigo-50 to-purple-100/50",
  "bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-200/60",
];

interface ProjectsGridProps {
  items?: Proyecto[];
}

export default function ProjectsGrid({ items = proyectos }: ProjectsGridProps) {
  return (
    <div className="w-full pb-16 sm:pb-24" id="projects-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {items.map((proyecto, index) => {
          const bgGradient = cardGradients[index % cardGradients.length];
          const primaryTag = proyecto.tags[0] || "Web App";

          return (
            <Link
              key={proyecto.id}
              href={`/proyectos/${proyecto.id}`}
              className="group block cursor-pointer"
            >
              {/* Card Image Container */}
              <div
                className={`w-full aspect-[4/3] ${bgGradient} rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 relative border border-white/60`}
              >
                <div className="w-full h-full relative rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md group-hover:shadow-xl transition-shadow duration-300 bg-white/90 flex items-center justify-center">
                  <img
                    src={proyecto.imagen || proyecto.mockup}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.classList.add(
                          "bg-gradient-to-br",
                          "from-gray-100",
                          "to-gray-200"
                        );
                      }
                    }}
                  />
                </div>
              </div>

              {/* Subtitle & Metadata below card */}
              <div className="mt-3 px-1 flex items-baseline justify-between gap-3">
                <h3 className="text-gray-900 font-medium text-xs sm:text-sm md:text-base group-hover:text-black transition-colors line-clamp-1">
                  {proyecto.titulo}
                </h3>
                <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap font-normal shrink-0">
                  {primaryTag}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
