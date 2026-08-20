"use client";

import React from "react";
import { getTechIcon } from "./techIcons";

type LogoCarruselProps = {
    tags: string[];
};

function IconRow({ tags, reverse = false }: { tags: string[]; reverse?: boolean }) {
    return (
        <div
            className={`flex shrink-0 items-center gap-16 pr-16 ${
                reverse ? "animate-marquee-reverse" : "animate-marquee"
            }`}
        >
            {tags.map((tag, i) => {
                const { icon: Icon,  } = getTechIcon(tag);
                return (
                    <div
                        key={`${tag}-${i}`}
                        className="flex flex-col items-center gap-2 shrink-0"
                        title={tag}
                    >
                        <Icon
                            className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                            style={{  }}
                        />
                        <span className="text-[11px] text-neutral-400 whitespace-nowrap">
                            {tag}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default function LogoCarrusel({ tags }: LogoCarruselProps) {
    if (!tags || tags.length === 0) return null;

    return (
        <div className="flex  flex-col w-full items-center justify-center bg-white py-16 px-6">
            <h2 className="text-3xl sm:text-3xl text-center font-bold text-[#000000] dark:text-white mb-8">
                Stack Tecnológico
            </h2>
            <div className="relative w-full max-w-3xl overflow-hidden py-6">
                {/* fades laterales */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

                <div className="flex w-max">
                    <IconRow tags={tags} />
                    <IconRow tags={tags} />
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
}