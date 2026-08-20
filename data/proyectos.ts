export interface Proyecto {
    id: number;
    imagen: string;
    imagenes?: string[];
    tags: string[];
    titulo: string;
    descripcion: string;
    link: string;
    mockup: string;
    stack: string[];
}

export const proyectos: Proyecto[] = [
    {
        id: 1,
        imagen: "/images/projects/proyecto_6.png",
        tags: ["PHP - LARAVEL", "SQL Server", "XAMPP"],
        titulo: "Sistema de Programación de Turnos",
        descripcion: "Aplicación Web para la gestión del personal en la asignación de turnos laborales",
        link: "",
        mockup: "/images/projects/proyecto_6.png",
        stack: ["laravel", "tailwind", "xampp", "sql server"],
    },
    {
        id: 2,
        imagen: "/images/projects/proyecto_5.png",
        tags: ["PHP - LARAVEL", "SQL Server", "XAMPP"],
        titulo: "Aplicación web - Control de Producción",
        descripcion: "Creación de una aplicación web para controlar el stock de producción en una empresa",
        link: "",
        mockup: "/images/mockups/proyecto_5.png",
        stack: ["laravel", "tailwind", "xampp", "sql server"],
    },
    {
        id: 3,
        imagen: "/images/projects/proyecto_4_1.png",
        tags: ["HTML", "CSS", "TAILWIND CSS", "ASTRO"],
        titulo: "Pagina Web - Mundial",
        descripcion: "Creación de una página web informativa y de entretenimiento sobre el mundial 2026",
        link: "https://pagina-mundial.vercel.app/",
        mockup: "/images/projects/proyecto_4_1.png",
        stack: ["html", "css", "tailwind", "astro"],
    },
    {
        id: 4,
        imagen: "/images/projects/proyecto_3.jpg",
        tags: ["Python", "CustomTkinter", "Excel", "Pandas", "Numpy", "openpyxl", "msal"],
        titulo: "Aplicación Gestión de Expediting y Correos",
        descripcion: "Solución de aplicación de escritorio para optimizar los procesos de seguimiento (expediting) y envío de correos",
        link: "#",
        mockup: "/images/mockups/proyecto_4.png",
        stack: ["python"],
    },
    {
        id: 5,
        imagen: "/images/projects/proyecto_2.jfif",
        tags: ["AppSheet - Low Code"],
        titulo: "Aplicación de Inventarios",
        descripcion: "Como parte de un proyecto personal implementé una aplicación móvil low code utilizando AppSheet para la gestión de inventarios de equipos de TI",
        link: "#",
        mockup: "/images/mockups/proyecto_2.png",
        stack: [""],
    },
    {
        id: 6,
        imagen: "/images/projects/proyecto_1.jfif",
        tags: ["HTML5", "CSS3", "JavaScript", "MySQL Workbench", "Xampp", "Laravel - PHP", "Blade", "Bootstrap"],
        titulo: "Sistema de Inventarios",
        descripcion: "Sistema de inventarios para la empresa Mobile Phones Servicios Generales, para el control, registro de productos y movimientos de stock",
        link: "#",
        mockup: "/images/projects/proyecto_1.jfif",
        stack: ["laravel", "mysql", "bootstrap", "javascript"],
    },
];

export function getProyectoById(id: number): Proyecto | undefined {
    return proyectos.find((p) => p.id === id);
}
