import { services } from "@/data/about";

export default function Services() {
  return (
    <section className="service">
      <h3 className="h3 service-title">{"Lo que desarrollo"}</h3>

      <ul className="service-list">
        {services.map((service) => (
          <li className="service-item" key={service.title}>
            <div className="service-icon-box">
              <img src={service.icon} alt="icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{service.title}</h4>
              <p className="service-item-text">{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
