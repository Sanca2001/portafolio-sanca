import type { Project } from "@/data/portfolio";

export default function ProjectCard({ title, category, image, link }: Project) {
  return (
    <li className="project-item active">
      <a>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src={image} alt={title.toLowerCase()} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>

      {link && (
        <div className="project-links">
          <a
            href={link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar sitio de ${title}`}
            title="Visitar sitio"
          >
            <ion-icon name="globe-outline"></ion-icon>
          </a>
        </div>
      )}
    </li>
  );
}