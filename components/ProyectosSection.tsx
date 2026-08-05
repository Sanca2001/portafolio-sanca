import React from 'react';

// 1. Definimos el tipo de un proyecto
interface Proyecto {
    id: number;
    imagen: string;
    tags: string[];
    titulo: string;
    descripcion: string;
    link: string;
}

// 2. Array con los datos de cada proyecto
const proyectos: Proyecto[] = [


    {
        id: 1,
        imagen: "/images/projects/proyecto_5.png",
        tags: ["PHP - LARAVEL", "SQL Server","XAMPP"],
        titulo: "Aplicación web - Control de Producción",
        descripcion: "Creacion de una aplicacion web para controlar el stock de produccion en una empresa",
        link: "",
    },

    {
        id: 2,
        imagen: "/images/projects/proyecto_4_1.png",
        tags: ["HTML", "CSS", "TAILWIND CSS", "ASTRO"],
        titulo: "Pagina Web - Mundial",
        descripcion: "Creacion de una pagina web informativa y de entretenimiento sobre el mundial 2026",
        link: "https://pagina-mundial.vercel.app/",
    },

    {
        id: 3,
        imagen: "/images/projects/proyecto_3.jpg",
        tags: ["Python", "CustomTkinter", "Excel", "Pandas", "Numpy", "openpyxl", "msal"],
        titulo: "Aplicación Gestión de Expediting y Correos",
        descripcion: "Solución de aplicaci{on de escritorio, para optimizar los procesos de seguimiento (expediting), y envio de correos",
        link: "#",
    },

    {
        id: 4,
        imagen: "/images/projects/proyecto_2.jfif",
        tags: ["AppShet - Low Code"],
        titulo: "Aplicación de Inventarios",
        descripcion: "Como parte de un proyecto personal implemente una aplicación móvil low code utilizando AppShet para la gestión de inventarios de equipos de TI",
        link: "#",
    },

    {
        id: 5,
        imagen: "/images/projects/proyecto_1.jfif",
        tags: ["HTML5", "CSS3", "JavaScript", "MySQL WorkBeanch", "Xampp", "Laravel - PHP", "Blade", "Bootstrap"],
        titulo: "Sistema de Inventarios",
        descripcion: "Sistema de inventarios para la empresa Mobile Phones Servicios Generales, en donde Diseñe y desarrolle un sistema de inventarios para el control, registro de productos y movimientos de stock",
        link: "#",
    },





];

// 3. Componente reutilizable para UNA tarjeta
const ProjectCard = ({ proyecto }: { proyecto: Proyecto }) => {
    return (
        <div className="max-w-sm rounded-3xl overflow-hidden bg-[#1c1a19] border border-gray-800 flex flex-col h-full">


            {/* Sección superior clara con el mockup */}
            <div className="bg-[#f3f1ec] p-6 flex items-center justify-center gap-4">

                <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Sección inferior oscura con la info */}
            <div className="p-6 space-y-4 flex flex-col flex-1">

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">

                    {proyecto.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-gray-600 text-gray-300 text-sm"

                        >
                            {tag}
                        </span>
                    ))}
                </div>


                {/* Título */}
                <h2 className="text-white text-3xl font-bold">
                    {proyecto.titulo}

                </h2>

                {/* Descripción */}
                <div className="text-gray-400 text-sm leading-relaxed">
                    <p>
                        {proyecto.descripcion}

                    </p>
                </div>

                {/* Link con flecha */}
                <a
                    href={proyecto.link}
                    target='_blank'
                    className="inline-flex items-center gap-2 text-white text-lg font-medium mt-auto group"
                >
                    Ver Proyecto
                    <span className="transition-transform group-hover:translate-x-1">
                        →
                    </span>
                </a>

            </div>
        </div>

    );
};

// 4. Componente principal que recorre el array
const Saludo = () => {
    return (
        <div className='min-h-screen bg-[#0A0A0A] pt-60'>
            <h2 className="text-3xl sm:text-3xl text-center font-bold text-[#f5f5f5] dark:text-white mb-4">
                Proyectos Desarrollados
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 max-w-7xl mx-auto pt-5 pb-5 items-stretch">
                {proyectos.map((proyecto) => (
                    <ProjectCard key={proyecto.id} proyecto={proyecto} />
                ))}
            </div>
        </div>
    );
};

export default Saludo;