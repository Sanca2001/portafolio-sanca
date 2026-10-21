"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/portfolio";

export default function Portfolio({ active }: { active: boolean }) {
  const [category, setCategory] = useState<Category>("All");
  const [selectOpen, setSelectOpen] = useState(false);

  const visibleProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  const chooseFromSelect = (value: Category) => {
    setCategory(value);
    setSelectOpen(false);
  };

  return (
    <article className={`portfolio ${active ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title"> Portafolio </h2>
      </header>

      <section className="projects">
        {/* Filtros para pantallas grandes */}
        <ul className="filter-list">
          {categories.map((item) => (
            <li className="filter-item" key={item}>
              <button
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Select para pantallas pequeñas */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? "active" : ""}`}
            onClick={() => setSelectOpen((prev) => !prev)}
          >
            <div className="select-value">
              {category === "All" ? "Select Category" : category}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map((item) => (
              <li className="select-item" key={item}>
                <button onClick={() => chooseFromSelect(item)}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </section>
    </article>
  );
}
