import type { Skill } from "@/data/resume";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My Skills</h3>

      <ul className="skills-list content-card">
        {skills.map((skill) => (
          <li className="skills-item" key={skill.name}>
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.value}>{skill.value}%</data>
            </div>

            <div className="skills-progress-bg">
              <div
                className="skills-progress-fill"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
