import type { Testimonial } from "@/data/about";

type TestimonialModalProps = {
  open: boolean;
  testimonial: Testimonial;
  onClose: () => void;
};

export default function TestimonialModal({ open, testimonial, onClose }: TestimonialModalProps) {
  return (
    <div className={`modal-container ${open ? "active" : ""}`}>
      <div className={`overlay ${open ? "active" : ""}`} onClick={onClose}></div>

      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt={testimonial.name} width="80" />
          </figure>

          <img src="https://i.postimg.cc/mZ00RwX7/icon-quote.png" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title">{testimonial.name}</h4>
          <time dateTime={testimonial.date}>{testimonial.dateLabel}</time>

          <div className="modal-text">
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
