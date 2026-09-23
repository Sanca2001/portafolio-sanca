"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import PlaceholderSection from "@/components/PlaceholderSection";
import Footer from "@/components/Footer";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("Proyectos");

  const handleNavigate = (tab: string) => {
    if (tab === "Projects" || tab === "Work") {
      setActiveTab("Proyectos");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <main className="bg-[#f8f9fb] min-h-screen flex flex-col justify-between selection:bg-violet-100 selection:text-violet-900">
      <div>
        <Hero activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="max-w-[1170px] mx-auto px-4 sm:px-6 pt-2 sm:pt-4">
          {(activeTab === "Proyectos" || activeTab === "Projects") && <ProjectsGrid />}

          {activeTab === "Experiments" && (
            <PlaceholderSection title="Experiments" tab="experiments" />
          )}

          {activeTab === "About" && (
            <PlaceholderSection title="About" tab="about" />
          )}

          {activeTab === "Resume" && (
            <PlaceholderSection title="Resume" tab="resume" />
          )}
        </div>
      </div>

      <Footer onNavigate={handleNavigate} />
    </main>
  );
}