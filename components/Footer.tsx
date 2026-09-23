"use client";

import type { Tab } from "./Navpills";

type Props = {
  onNavigate: (tab: Tab) => void;
};

const links: { label: string; tab: Tab }[] = [
  { label: "Proyectos", tab: "Projects" },
  { label: "Experiments", tab: "Experiments" },
  { label: "About", tab: "About" },
  { label: "Resume", tab: "Resume" },
];

const linkClass =
  "text-[15px] text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded cursor-pointer";

const iconClass =
  "text-slate-500 transition-colors hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded";

const svgProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function Footer({ onNavigate }: Props) {
  const go = (tab: Tab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fafafa]">
      <div className="mx-auto grid max-w-[1150px]  gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/bannerImage.png"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full bg-teal-100 object-cover"
            />
            <span className="text-[20] font-medium text-slate-950">
              Enrique Sandoval
            </span>
          </div>
          <p className="mt-4 max-w-[400px] text-[14px] leading-[23px] text-slate-500">
            Diseñador &amp; desarrollador web centrado en sistemas limpios, interacciones fluidas y detalles significativos.
          </p>
          <p className="mt-2 text-[14px] font-medium text-slate-500">
            &copy; 2026 Enrique Sandoval
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Pie de página">
          <h2 className="text-[12px] font-semibold text-slate-950">Links</h2>
          <ul className="mt-3 space-y-2.5">
            {links.map(({ label, tab }) => (
              <li key={label}>
                <button type="button" onClick={() => go(tab)} className={linkClass}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h2 className="text-[13px] font-semibold text-slate-950">Contact</h2>
          <ul className="mt-3 space-y-2.5">
            <li>
              <a href="mailto:hello@aiko.com" className={linkClass}>
                absalonsandoval56@gmail.com
              </a>
            </li>
            <li>
              <a href="#" className={linkClass}>
                +51 948 749 893
              </a>
            </li>
          </ul>
          <div className="mt-4 flex items-center gap-3">

            <a href="https://www.linkedin.com/in/enrique-sanca/" target="_blank" aria-label="LinkedIn" className={iconClass}>
              <svg preserveAspectRatio="xMidYMid" width="20px" height="20px" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>
            </a>

            <a href="https://github.com/Sanca2001" target="_blank" aria-label="LinkedIn" className={iconClass}>
              <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="none"><path fill="#1b1f23" fill-rule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clip-rule="evenodd"/></svg>            
            </a>



          </div>
        </div>
      </div>
    </footer>
  );
}