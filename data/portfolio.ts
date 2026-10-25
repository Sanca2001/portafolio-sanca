export const categories = [
  "Todos",
  "Desktop App",
  "Aplicaciones",
  "Desarrollo web",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  title: string;
  category: Exclude<Category, "Todos">;
  image: string;
  link?: string; // opcional: solo los proyectos con sitio web
};

export const projects: Project[] = [
  {
    title: "Sistema de Inventario",
    category: "Desarrollo web",
    image: "/images/projects/Sistema de Inventarios/mockup 1.png",
  },
  {
    title: "Aplicación de Inventario",
    category: "Aplicaciones",
    image: "/images/projects/Aplicacion de inventarios/1.png",
  },
  {
    title: "Aplicación Gestión de Expediting y Correos",
    category: "Desktop App",
    image:
      "/images/projects/Aplicación Gestión de Expediting y Correos/mockup 1.png",
  },

  {
    title: "Aplicación web - Control de Producción",
    category: "Desarrollo web",
    image:
      "/images/projects/Aplicación web - Control de Producción/mockup 1.png",
  },

  {
    title: "Sistema de Programación de Turnos",
    category: "Desarrollo web",
    image: "/images/projects/Sistema de Programación de Turnos/mockup 1.png",
  },

  {
    title: "Juego Abecedario",
    category: "Desarrollo web",
    image: "/images/projects/Juego Abecedario/mockup 1.png",
    link: "https://juego-abecedario.vercel.app/",
  },
];
