import { technologies } from "@/data/about";

export default function TechStack() {
    // Se duplica la lista para que el loop no tenga saltos
    const items = [...technologies, ...technologies];

    return (
        <section className="tech">
            <h3 className="h3 tech-title">Habilidades Tecnicas</h3>

            <div className="tech-carousel">
                <ul className="tech-track">
                    {items.map((tech, i) => (
                        <li
                            className="tech-item"
                            key={`${tech.name}-${i}`}
                            aria-hidden={i >= technologies.length}
                        >
                            <img src={tech.icon} alt={tech.name} />
                            {/* <span>{tech.name}</span> */}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}