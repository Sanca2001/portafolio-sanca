import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({
  slug,
  title,
  category,
  images,
  link,
}: Project) {
  return (
    <li className="project-item active">
      <Link href={`/proyectos/${slug}`}>
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src={images[0]} alt={title.toLowerCase()} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </Link>

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