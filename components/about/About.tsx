import Services from "@/components/about/Services";
// import Testimonials from "@/components/about/Testimonials";
import TechStack from "@/components/about/TechStack";
import { aboutText } from "@/data/about";

export default function About({ active }: { active: boolean }) {
  return (
    <article className={`about ${active ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Sobre Mi</h2>
      </header>

      <section className="about-text">
        {aboutText.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <Services />
      {/* <Testimonials /> */}
      <TechStack />
    </article>
  );
}
