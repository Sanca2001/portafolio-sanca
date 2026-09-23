import NavPills from "./Navpills";

interface HeroProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Hero({ activeTab, onTabChange }: HeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-[#fafafa] font-sans">
      <div className="relative mx-auto max-w-[1170px] px-4 sm:px-6 pb-10 sm:pb-14 pt-6 sm:pt-10">
        {/* Nav centrada en móvil y en desktop */}
        <div className="mb-6 sm:mb-8 flex justify-center md:absolute md:left-1/2 md:top-10 md:mb-0 md:-translate-x-1/2">
          <NavPills activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        <img
          src="/images/bannerImage.png"
          alt="Retrato de Enrique Sandoval"
          width={60}
          height={60}
          className="size-[54px] sm:size-[60px] rounded-[18px] sm:rounded-[20px] bg-teal-100 object-cover"
        />

        <h1 className="mt-5 sm:mt-7 text-3xl sm:text-[40px] font-medium leading-tight tracking-tight text-slate-950">
          Enrique Sandoval
        </h1>

        <p className="mt-2.5 sm:mt-3 max-w-[400px] text-sm sm:text-[16px] leading-snug sm:leading-[23px] text-slate-500">
          Web designer &amp; Web developer
        </p>

        <div className="mt-5 sm:mt-6 flex items-center gap-2.5">
          <a
            href="#projects-grid"
            className="inline-flex h-10 sm:h-11 items-center rounded-2xl bg-slate-950 px-4 text-xs sm:text-[14px] font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          >
            Últimos Proyectos
          </a>
        </div>
      </div>
    </header>
  );
}