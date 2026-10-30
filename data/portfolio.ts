export const categories = [
  "Todos",
  "Desktop App",
  "Aplicaciones",
  "Desarrollo web",
] as const;

export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, "Todos">;
  description: string[]; // un string por párrafo
  technologies?: string[];
  images: string[]; // la primera es la portada
  link?: string; // opcional: solo los proyectos con sitio web
};

export const projects: Project[] = [
  {
    slug: "sistema-inventario",
    title: "Sistema de Inventario",
    category: "Desarrollo web",
    description: [
      "Desarrollado para la empresa Mobile Phones Servicios Generales un Sistema de inventarios para el control, registro de productos y movimientos de stock.",
    ],
    technologies: [],
    images: [
      "/images/projects/Sistema de Inventarios/1.jfif",
      "/images/projects/Sistema de Inventarios/2.png",
      "/images/projects/Sistema de Inventarios/3.png",
      "/images/projects/Sistema de Inventarios/4.png",
      "/images/projects/Sistema de Inventarios/5.png",
      "/images/projects/Sistema de Inventarios/6.png",
      "/images/projects/Sistema de Inventarios/7.png",
      "/images/projects/Sistema de Inventarios/8.png",
      "/images/projects/Sistema de Inventarios/9.png",
      "/images/projects/Sistema de Inventarios/10.png",
      "/images/projects/Sistema de Inventarios/11.png",
      "/images/projects/Sistema de Inventarios/12.png",
    ],
  },
  {
    slug: "aplicacion-inventario",
    title: "Aplicación de Inventario",
    category: "Aplicaciones",
    description: [
      "Como parte de un proyecto personal implementé una aplicación móvil low code utilizando AppSheet para la gestión de inventarios de equipos de TI. Diseñada para permitir al personal de TI auditar, registrar y verificar el estado físico de componentes y laptops en campo de manera rápida y sin complicaciones desde dispositivos móviles.",
    ],
    technologies: [],
    images: [
      "/images/projects/Aplicacion de inventarios/1.png",
      "/images/projects/Aplicacion de inventarios/2.jfif",
      "/images/projects/Aplicacion de inventarios/3.png",
    ],
  },
  {
    slug: "aplicacion-expediting-correos",
    title: "Aplicación Gestión de Expediting y Correos",
    category: "Desktop App",
    description: [
      "Solución de aplicación de escritorio para optimizar los procesos de seguimiento (expediting) y envío de correos. Diseñada para eliminar horas de trabajo manual reduciendo errores operativos en la gestión de logística y compras."
    ],
    technologies: [],
    images: [
      "/images/projects/Aplicación Gestión de Expediting y Correos/1.jpg",
      "/images/projects/Aplicación Gestión de Expediting y Correos/2.jpg",
      "/images/projects/Aplicación Gestión de Expediting y Correos/3.jpg",
      "/images/projects/Aplicación Gestión de Expediting y Correos/4.jpg",
      "/images/projects/Aplicación Gestión de Expediting y Correos/5.jpg",
    ],
  },

  {
    slug: "web-control-produccion",
    title: "Aplicación web - Control de Producción",
    category: "Desarrollo web",
    description: [
      "Creación de una aplicación web para controlar el stock de producción en una empresa. Diseñado para optimizar y auditar el flujo constante de materia prima, stock terminado y rendimientos de producción dentro de la planta industrial.",
    ],
    technologies: [],
    images: [
      "/images/projects/Aplicación web - Control de Producción/1_.png",
      "/images/projects/Aplicación web - Control de Producción/2_.png",
      "/images/projects/Aplicación web - Control de Producción/3_.png",
      "/images/projects/Aplicación web - Control de Producción/4_.png",
      "/images/projects/Aplicación web - Control de Producción/5_.png",
      "/images/projects/Aplicación web - Control de Producción/6_.png",
    ],
  },

  {
    slug: "sistema-turnos",
    title: "Sistema de Programación de Turnos",
    category: "Desarrollo web",
    description: [
      "Aplicación Web para la gestión del personal en la asignación de turnos laborales. Diseñado para optimizar la planificación de jornadas laborales, rotación de personal, control de asistencias y disponibilidad operativa del equipo.",
    ],
    technologies: [],
    images: [
      "/images/projects/Sistema de Programación de Turnos/1.png",
      "/images/projects/Sistema de Programación de Turnos/2.png",
      "/images/projects/Sistema de Programación de Turnos/3.png",
    ],
  },

  {
    slug: "juego-abecedario",
    title: "Juego Abecedario",
    category: "Desarrollo web",
    description: [
      "Juego Abecedario desarrollado con Estudiantes Universitarios de la carrera de Educación Inicial, como parte de un proyecto que permite a los niños de 5 años aprender e interactuar sobre el tema del abecedario",
    ],
    technologies: [],
    images: [
      "/images/projects/Juego Abecedario/1_.png", 
      "/images/projects/Juego Abecedario/2_.png", 
      "/images/projects/Juego Abecedario/3_.png",
      "/images/projects/Juego Abecedario/4_.png"
  ],
    link: "https://juego-abecedario.vercel.app/",
  },
];
