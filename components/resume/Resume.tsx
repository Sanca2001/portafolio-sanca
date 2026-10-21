import Timeline from "@/components/resume/Timeline";
import Skills from "@/components/resume/Skills";
import { education, experience, skills } from "@/data/resume";

export default function Resume({ active }: { active: boolean }) {
  return (
    <article className={`resume ${active ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <Timeline title="Education" items={education} />
      <Timeline title="Experience" items={experience} />
      <Skills skills={skills} />
    </article>
  );
}
