import type { TimelineItem } from "@/data/resume";

type TimelineProps = {
  title: string;
  items: TimelineItem[];
  icon?: string;
};

export default function Timeline({ title, items, icon = "book-outline" }: TimelineProps) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>

        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item) => (
          <li className="timeline-item" key={item.title}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.period}</span>
            <p className="timeline-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
