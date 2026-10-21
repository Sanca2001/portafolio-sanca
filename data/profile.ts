import type { ComponentType, SVGProps } from "react";
import { GitHub } from "@/components/icons/GitHub";
import { LinkedIn } from "@/components/icons/LinkedIn";

export type Contact = {
  icon: string;
  title: string;
  type: "link" | "time" | "address";
  label: string;
  href?: string;
  datetime?: string;
};

export type Social = {
  label: string;
  href: string;
  icon?: string; // nombre de Ionicons
  Icon?: ComponentType<SVGProps<SVGSVGElement>>; // o un componente propio
};

export const profile = {
  name: "Enrique Sandoval",
  title: "Programador",
  avatar: "/images/bannerImage.png",
};

export const contacts: Contact[] = [
  {
    icon: "mail-outline",
    title: "Correo",
    type: "link",
    label: "absalonsandoval56@gmail.com",
    href: "mailto:absalonsandoval56@gmail.com",
  },
  {
    icon: "phone-portrait-outline",
    title: "Celular",
    type: "link",
    label: "+51 948 749 893",
    href: "tel:+51948749893",
  },
  // { icon: "calendar-outline", title: "Birthday", type: "time", label: "June 23, 1982", datetime: "1982-06-23" },
  {
    icon: "location-outline",
    title: "Localidad",
    type: "address",
    label: "Lima, Perú",
  },
];

export const socials: Social[] = [
  { label: "GitHub", Icon: GitHub, href: "https://github.com/Sanca2001" },
  { label: "LinkedIn", Icon: LinkedIn, href: "https://www.linkedin.com/in/enrique-sanca/" },
];
