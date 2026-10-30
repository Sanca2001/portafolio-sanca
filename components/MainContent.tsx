"use client";

import Navbar, { type Page } from "@/components/Navbar";
import About from "@/components/about/About";
import Resume from "@/components/resume/Resume";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import { useEffect, useState } from "react";


const PAGES: Page[] = [
  { id: "about", label: "Sobre Mi" },
  // { id: "resume", label: "Resumen" },
  { id: "portfolio", label: "Proyectos" },
  // { id: "blog", label: "Blog" },
  // { id: "contact", label: "Contact" },
];

export default function MainContent() {
  const [activePage, setActivePage] = useState("about");


  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (PAGES.some((page) => page.id === hash)) setActivePage(hash);
  }, []);

  const handleChange = (id: string) => {
    setActivePage(id);
    window.scrollTo(0, 0);
  };

  return (
    <div className="main-content">
      <Navbar pages={PAGES} activePage={activePage} onChange={handleChange} />

      <About active={activePage === "about"} />
      <Resume active={activePage === "resume"} />
      <Portfolio active={activePage === "portfolio"} />
      <Blog active={activePage === "blog"} />
      <Contact active={activePage === "contact"} />
    </div>
  );
}
