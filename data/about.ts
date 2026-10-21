export type Service = { icon: string; title: string; text: string };
export type Technology = { name: string; icon: string };

// export type Testimonial = {
//   id: number;
//   name: string;
//   avatar: string;
//   date: string;
//   dateLabel: string;
//   text: string;
// };

export const aboutText: string[] = [
  "Soy un profesional de tecnología de la información con experiencia en desarrollo de sistemas y soporte TI. Me especializo en crear aplicaciones y soluciones de software orientadas a optimizar procesos, mejorar la productividad y resolver necesidades reales mediante la tecnología.",
  "Cuento con experiencia en desarrollo de aplicaciones web y de escritorio, gestión de bases de datos, automatización de tareas y soporte técnico de hardware y software. Me motiva aprender nuevas tecnologías, afrontar desafíos y transformar ideas en soluciones funcionales, eficientes y fáciles de usar.",
];

export const services: Service[] = [
  {
    icon: "https://i.postimg.cc/4389jZkP/icon-design.png",
    title: "Diseño UX/UI",
    text: "Diseño interfaces modernas, intuitivas y atractivas, enfocadas en mejorar la experiencia del usuario y facilitar la interacción con aplicaciones web, móviles y de escritorio.",
  },
  {
    icon: "https://i.postimg.cc/ZqgqrqzG/icon-dev.png",
    title: "Desarrollo web",
    text: "Desarrollo sitios web modernos, responsivos y funcionales, adaptados a las necesidades de cada proyecto, con enfoque en rendimiento, usabilidad y una excelente experiencia de usuario.",
  },
  {
    icon: "https://i.postimg.cc/ZqgqrqzG/icon-dev.png",
    title: "Soporte TI",
    text: "Brindo soporte técnico para diagnosticar y resolver problemas de hardware, software y redes, realizando mantenimiento, instalación y configuración de equipos para garantizar su correcto funcionamiento.",
  },
];

// export const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: "Daniel Lewis",
//     avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
//     date: "2023-06-14",
//     dateLabel: "14 June, 2023",
//     text: "Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.",
//   },
//   {
//     id: 2,
//     name: "Jessica Miller",
//     avatar: "https://i.postimg.cc/DwY0yHtx/avatar-2.png",
//     date: "2023-06-14",
//     dateLabel: "14 June, 2023",
//     text: "Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.",
//   },
//   {
//     id: 3,
//     name: "Emily Evans",
//     avatar: "https://i.postimg.cc/fRFWhX9F/avatar-3.png",
//     date: "2023-06-14",
//     dateLabel: "14 June, 2023",
//     text: "I couldn't be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.",
//   },
//   {
//     id: 4,
//     name: "Henry Williams",
//     avatar: "https://i.postimg.cc/zXv1Xv81/avatar-4.png",
//     date: "2023-06-14",
//     dateLabel: "14 June, 2023",
//     text: "I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I've seen a 50% increase in traffic since the launch!",
//   },
// ];

export const clients: string[] = [
  "https://i.postimg.cc/YqfKyG66/logo-1-color.png",
  "https://i.postimg.cc/fWm6JtgG/logo-2-color.png",
  "https://i.postimg.cc/Bb07xpwd/logo-3-color.png",
  "https://i.postimg.cc/hv1yMmkh/logo-4-color.png",
  "https://i.postimg.cc/ry1P86Dc/logo-5-color.png",
  "https://i.postimg.cc/SsWDN8NV/logo-6-color.png",
];

export const technologies: Technology[] = [
  { name: "PHP", icon: "/icons/tech/php_dark.svg" },
  { name: "LARAVEL", icon: "/icons/tech/laravel.svg" },
  { name: "PYTHON", icon: "/icons/tech/python.svg" },
  { name: "HMTL", icon: "/icons/tech/html5.svg" },
  { name: "CSS", icon: "/icons/tech/css_old.svg" },
  { name: "JAVASCRIPT", icon: "/icons/tech/javascript.svg" },
  { name: "TAILWINDCSS", icon: "/icons/tech/tailwindcss-wordmark-dark.svg" },
  { name: "BOOTSTRAP", icon: "/icons/tech/bootstrap.svg" },
  { name: "MATERIALUI", icon: "/icons/tech/materialui.svg" },
  { name: "REACT", icon: "/icons/tech/react_dark.svg" },
  { name: "ASTRO", icon: "/icons/tech/astro-icon-dark.svg" },
  { name: "NODEJS", icon: "/icons/tech/nodejs.svg" },
  { name: "JSON", icon: "/icons/tech/json.svg" },
  { name: "JAVA", icon: "/icons/tech/java.svg" },
  { name: "JAVA", icon: "/icons/tech/mongodb-icon-dark.svg" },
  { name: "MARIADB", icon: "/icons/tech/mariadb.svg" },
  { name: "SQLLITE", icon: "/icons/tech/sqlite.svg" },
  { name: "SQLSERVER", icon: "/icons/tech/sql-server.svg" },
  { name: "MYSQL", icon: "/icons/tech/mysql-wordmark-dark.svg" },
];
