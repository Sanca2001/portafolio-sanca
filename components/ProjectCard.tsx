import type { Project } from "@/data/portfolio";

export default function ProjectCard({ title, category, image }: Project) {
  return (
    <li className="project-item active">
      <a href="#">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img src={image} alt={title.toLowerCase()} loading="lazy" />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  );
}
