import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import ProjectGallery from "@/components/ProjectGallery";


type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    return {
        title: project ? `${project.title} | Portafolio` : "Proyecto no encontrado",
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();

    const project = projects[index];
    const prev = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    return (
        <div className="project-page">
            <section className="project-detail">
                <header className="project-detail-header">
                    <h1 className="h2 project-detail-title">{project.title}</h1>

                    <nav className="project-detail-nav" aria-label="Navegación de proyectos">
                        <Link
                            href={`/proyectos/${prev.slug}`}
                            className="detail-nav-btn"
                            aria-label="Proyecto anterior"
                        >
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </Link>
                        <Link
                            href={`/proyectos/${next.slug}`}
                            className="detail-nav-btn"
                            aria-label="Proyecto siguiente"
                        >
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </Link>
                        <Link
                            href="/#portfolio"
                            className="detail-nav-btn close"
                            aria-label="Volver al portafolio"
                        >
                            <ion-icon name="close-outline"></ion-icon>
                        </Link>
                    </nav>
                </header>

                <div className="project-detail-body">
                    <ProjectGallery
                        key={project.slug}
                        images={project.images}
                        title={project.title}
                    />

                    <div className="project-detail-info">
                        <div className="detail-block">
                            <h2 className="detail-label">Descripción</h2>
                            <div className="detail-text">
                                {project.description.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="detail-block">
                            <h2 className="detail-label">Categoría</h2>
                            <p className="detail-text">{project.category}</p>
                        </div>



                        {project.technologies && (
                            <div className="detail-block">
                                <h2 className="detail-label">Tecnologías</h2>
                                <ul className="detail-tags">
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.link && (
                            <a
                                className="detail-btn"
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visitar proyecto
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}