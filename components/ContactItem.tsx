import type { Contact } from "@/data/profile";

export default function ContactItem({ icon, title, type, label, href, datetime }: Contact) {
  return (
    <li className="contact-item">
      <div className="icon-box">
        <ion-icon name={icon}></ion-icon>
      </div>

      <div className="contact-info">
        <p className="contact-title">{title}</p>

        {type === "link" && (
          <a href={href} className="contact-link">
            {label}
          </a>
        )}
        {type === "time" && <time dateTime={datetime}>{label}</time>}
        {type === "address" && <address>{label}</address>}
      </div>
    </li>
  );
}
