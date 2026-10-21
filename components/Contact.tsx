"use client";

import { useState, type FormEvent } from "react";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd";

export default function Contact({ active }: { active: boolean }) {
  const [valid, setValid] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: conectar con tu backend / servicio de email (Resend, EmailJS, Formspree, API Route...)
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Mensaje:", data);
  };

  return (
    <article className={`contact ${active ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe src={MAP_SRC} width="400" height="300" loading="lazy"></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          className="form"
          onSubmit={handleSubmit}
          onChange={(e) => setValid(e.currentTarget.checkValidity())}
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="form-btn" type="submit" disabled={!valid}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
