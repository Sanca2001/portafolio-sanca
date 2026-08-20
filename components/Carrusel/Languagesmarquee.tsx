import React from "react";
import { IconType } from "react-icons";
import { Code2 } from "lucide-react";
import { Laravel } from "@/components/iconos/LaravelIcon";
import { Bootstrap } from "@/components/iconos/Bootstrap";
import { Jquery } from "@/components/iconos/jquery";
import { Html5 } from "@/components/iconos/html5";
import { Css3 } from "@/components/iconos/css_old";
import { Javascript } from "@/components/iconos/javascript"
import { Php } from "@/components/iconos/php";
import { Mysql } from "@/components/iconos/mysql-wordmark-light";
import { Github } from "@/components/iconos/github_light";
import { HopeUI } from "@/components/iconos/hope ui";
import { FullCalendar } from "@/components/iconos/full calendar";
import { Sweetalert2 } from "@/components/iconos/sweetalert";
import { Spatie } from "@/components/iconos/spatie";
import { Apexcharts } from "@/components/iconos/apexcharts";
import { Datatables } from "@/components/iconos/datatables";
import { DomPDF } from "@/components/iconos/dompdf";


export type Language = {
    name: string;
    icon: React.ElementType | React.ReactNode;
};



const languages: Language[] = [
    { name: "Laravel", icon: Laravel },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Jquery", icon: Jquery },
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
    { name: "JavaScript", icon: Javascript },
    { name: "PhP", icon: Php },
    { name: "MySQL", icon: Mysql },
    { name: "GitHub", icon: Github },

    { name: "Hope UI", icon: HopeUI },
    { name: "Full Calendar", icon: FullCalendar },
    { name: "Sweetalert2", icon: Sweetalert2 },
    { name: "Spatie Permission", icon: Spatie },
    { name: "ApexCharts", icon: Apexcharts },
    { name: "DataTables", icon: Datatables },
    { name: "DOM PDF", icon: DomPDF },

];



function splitInHalf<T>(items: T[]): [T[], T[]] {
    const mid = Math.ceil(items.length / 2);
    return [items.slice(0, mid), items.slice(mid)];
}

function IconRenderer({ icon }: { icon: React.ElementType | React.ReactNode }) {
    if (React.isValidElement(icon)) {
        return icon;
    }
    if (typeof icon === "function" || (typeof icon === "object" && icon !== null)) {
        const IconComponent = icon as React.ElementType;
        return <IconComponent className="h-6 w-6 shrink-0" />;
    }
    return <Code2 className="h-6 w-6 shrink-0 text-slate-400" />;
}

function MarqueeRow({
    items,
    direction,
    speedSeconds = 30,
}: {
    items: Language[];
    direction: "left" | "right";
    speedSeconds?: number;
}) {
    // Duplicate 4x so the loop covers extra wide screens seamlessly with -50% translateX loop
    const looped = [...items, ...items, ...items, ...items];

    return (
        <div className="group relative overflow-hidden py-1">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

            <div
                className={`flex w-max items-center gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
                    } group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: `${speedSeconds}s` }}
            >
                {looped.map((lang, i) => (
                    <div
                        key={`${lang.name}-${i}`}
                        className="flex shrink-0 items-center gap-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:border-slate-300 dark:hover:border-slate-700"
                    >
                        <IconRenderer icon={lang.icon} />
                        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                            {lang.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function LanguagesMarquee() {
    const [rowA, rowB] = splitInHalf(languages);

    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-slate-400">
                Stack Tecnológico
            </p>
            <div className="flex flex-col gap-6">
                <MarqueeRow items={rowA} direction="left" speedSeconds={35} />
                <MarqueeRow items={rowB} direction="right" speedSeconds={40} />
            </div>

            {/* Keyframes for the two scroll directions */}
            <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation-name: marquee-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee-right {
          animation-name: marquee-right;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left,
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
}