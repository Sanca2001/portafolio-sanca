import NavPills from "./Navpills";

interface HeroProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function Hero({ activeTab, onTabChange }: HeroProps) {
  return (
    <header className="relative isolate overflow-hidden bg-[#fafafa] font-sans">
  
      <div className="relative mx-auto max-w-[1170px] px-6 pb-14 pt-10">
        {/* Nav centrada respecto al contenedor en desktop */}
        <div className="mb-8 md:absolute md:left-1/2 md:top-10 md:mb-0 md:-translate-x-1/2">
          <NavPills activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        <img
          src="/images/bannerImage.png"
          alt="Retrato de Aiko Tanaka"
          width={60}
          height={60}
          className="size-[60px] rounded-[20px] bg-teal-100 object-cover"
        />

        <h1 className="mt-7 text-[40px] font-medium leading-tight tracking-tight text-slate-950">
          Enrique Sandoval
        </h1>

        <p className="mt-3 max-w-[400px] text-[16px] leading-[23px] text-slate-500">
          Web designer &amp; Web developer
        </p>

        <div className="mt-6 flex items-center gap-2.5">
          <a
            href="#projects"
            className="inline-flex h-11 items-center rounded-2xl bg-slate-950 px-3 text-[14px] font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
          >
            Ultimos Proyectos
          </a>
   
        </div>
      </div>
    </header>
  );
}