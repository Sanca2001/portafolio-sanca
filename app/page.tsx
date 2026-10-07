"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import PlaceholderSection from "@/components/PlaceholderSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("Proyectos");

  // Al cargar el componente, recuperar la pestaña guardada desde la URL o localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    const savedTab = localStorage.getItem("portfolio_active_tab");

    const validTabs = ["Proyectos", "Projects", "Experiments", "About", "Resume"];
    const tabToUse = tabParam || savedTab;

    if (tabToUse && validTabs.includes(tabToUse)) {
      if (tabToUse === "Projects" || tabToUse === "Work") {
        setActiveTab("Proyectos");
      } else {
        setActiveTab(tabToUse);
      }
    }
  }, []);

  // Al cambiar la pestaña, guardar en localStorage y actualizar la URL sin recargar
  const changeTab = (tab: string) => {
    const newTab = (tab === "Projects" || tab === "Work") ? "Proyectos" : tab;
    setActiveTab(newTab);
    localStorage.setItem("portfolio_active_tab", newTab);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", newTab);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <main className="bg-[#f8f9fb] min-h-screen flex flex-col justify-between selection:bg-violet-100 selection:text-violet-900">
      <div>
        <Hero activeTab={activeTab} onTabChange={changeTab} />

        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 pt-2 sm:pt-4">
          {(activeTab === "Proyectos" || activeTab === "Projects") && <ProjectsGrid />}

          {activeTab === "Experiments" && (
            <PlaceholderSection title="Experiments" tab="experiments" />
          )}

          {activeTab === "About" && (
            <PlaceholderSection title="About" tab="about" />
          )}

          {activeTab === "Resume" && <ResumeSection />}
        </div>
      </div>

      <Footer onNavigate={changeTab} />
    </main>
  );
}