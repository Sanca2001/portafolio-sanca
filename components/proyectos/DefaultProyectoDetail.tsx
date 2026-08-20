"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function DefaultProyectoDetail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-800 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="max-w-3xl space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {proyecto.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black">{proyecto.titulo}</h1>
                        <p className="text-neutral-400 text-lg leading-relaxed">{proyecto.descripcion}</p>

                        {proyecto.link && proyecto.link !== "#" && (
                            <a
                                href={proyecto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-neutral-200 transition"
                            >
                                <Globe className="w-4 h-4" />
                                Visitar Proyecto
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>

                    {(proyecto.mockup || proyecto.imagen) && (
                        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 max-w-5xl shadow-2xl">
                            <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-neutral-600" />
                                <div className="w-3 h-3 rounded-full bg-neutral-600" />
                                <div className="w-3 h-3 rounded-full bg-neutral-600" />
                            </div>
                            <img
                                src={proyecto.mockup || proyecto.imagen}
                                alt={proyecto.titulo}
                                className="w-full object-cover max-h-[600px]"
                            />
                        </div>
                    )}
                </div>
            </section>

            <LogoCarrusel tags={stackTags} />
        </div>
    );
}
