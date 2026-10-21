"use client";

import { useState } from "react";
import ContactItem from "@/components/ContactItem";
import { profile, contacts, socials } from "@/data/profile";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile.avatar} alt="avatar" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>
          <p className="title">{profile.title}</p>
        </div>

        <button
          className="info-more-btn"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info-more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {contacts.map((contact) => (
            <ContactItem key={contact.title} {...contact} />
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socials.map(({ label, icon, Icon, href }) => (
            <li className="social-item" key={label}>
              <a href={href} className="social-link" target="_blank" aria-label={label}>
                {Icon ? <Icon /> : <ion-icon name={icon}></ion-icon>}
              </a>
            </li>
          ))}


        </ul>
      </div>
    </aside>
  );
}
