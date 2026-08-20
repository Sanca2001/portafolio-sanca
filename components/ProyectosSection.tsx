"use client";

import React from 'react';
import Link from 'next/link';
import { proyectos, Proyecto } from '@/data/proyectos';

// Componente reutilizable para una tarjeta de proyecto
const ProjectCard = ({ proyecto }: { proyecto: Proyecto }) => {
    return (
        <div className="max-w-sm rounded-3xl overflow-hidden bg-[#1c1a19] border border-gray-800 flex flex-col h-full hover:border-gray-600 transition-all duration-300">

            {/* Sección superior clara con la imagen o mockup */}
            <div className="bg-[#f3f1ec] p-6 flex items-center justify-center min-h-[220px]">
                <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-auto max-h-[180px] object-contain transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Sección inferior oscura con la información */}
            <div className="p-6 space-y-4 flex flex-col flex-1">

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                    {proyecto.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full border border-gray-700 bg-neutral-900/60 text-gray-300 text-xs font-mono"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Título */}
                <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                    {proyecto.titulo}
                </h2>

                {/* Descripción */}
                <div className="text-gray-400 text-sm leading-relaxed">
                    <p>{proyecto.descripcion}</p>
                </div>

                {/* Enlace a detalle de proyecto */}
                <Link
                    href={`/proyectos/${proyecto.id}`}
                    className="inline-flex items-center gap-2 text-white text-base sm:text-lg font-medium mt-auto pt-4 group text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                    Saber más
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </Link>

            </div>
        </div>
    );
};

// Componente principal de la sección de proyectos
const ProyectosSection = () => {
    return (
        <section id="proyectos" className="min-h-screen bg-[#0A0A0A] pt-40 pb-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl text-center font-bold text-[#f5f5f5] tracking-tight">
                        Proyectos Desarrollados
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
                        Explora la selección de aplicaciones web, soluciones móviles y automatizaciones que he diseñado e implementado.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center">
                    {proyectos.map((proyecto) => (
                        <ProjectCard key={proyecto.id} proyecto={proyecto} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProyectosSection;