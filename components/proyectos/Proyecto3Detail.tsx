"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, ExternalLink, Trophy, Flame, Globe2, Sparkles, Zap, Smartphone } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function Proyecto2Detail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#060813] text-white selection:bg-amber-400 selection:text-black">
            {/* Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060813]/85 backdrop-blur-md border-b border-indigo-900/30 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-amber-400 text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1 rounded-full font-semibold">
                        <Trophy className="w-3.5 h-3.5" />
                        World Cup 2026 Edition
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none" />
                <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Text info */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                                Plataforma Informativa & Entretenimiento
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] bg-gradient-to-r from-white via-amber-100 to-indigo-200 bg-clip-text text-transparent">
                                {proyecto.titulo}
                            </h1>

                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                {proyecto.descripcion}. Diseñada con un alto estándar estético usando Astro y Tailwind CSS para ofrecer una velocidad de carga ultrarrápida y navegación fluida entre sedes, equipos y novedades del torneo.
                            </p>

                            {/* Botón Acción Principal -> Link Vercel */}
                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                {proyecto.link && proyecto.link !== "#" && (
                                    <a
                                        href={proyecto.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold text-base px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
                                    >
                                        <Globe2 className="w-5 h-5" />
                                        Ver Proyecto en Vivo
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-4">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/40 rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Visual Card / Mockup container */}
                        <div className="lg:col-span-5">
                            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-amber-500/30 via-indigo-500/20 to-transparent shadow-2xl">
                                <div className="rounded-[22px] bg-[#0c0f20] p-6 space-y-6">
                                    <div className="flex items-center justify-between border-b border-indigo-900/40 pb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-sm">Copa Mundial 2026</h3>
                                                <p className="text-xs text-neutral-400">Sitio Web Oficial de la Fan Base</p>
                                            </div>
                                        </div>
                                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 text-sm">
                                            <span className="text-neutral-300 flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-amber-400" /> Rendimiento Lighthouse
                                            </span>
                                            <span className="font-mono text-emerald-400 font-bold">100/100</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 text-sm">
                                            <span className="text-neutral-300 flex items-center gap-2">
                                                <Sparkles className="w-4 h-4 text-amber-400" /> Framework
                                            </span>
                                            <span className="font-mono text-indigo-300 font-bold">Astro SSG</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/40 text-sm">
                                            <span className="text-neutral-300 flex items-center gap-2">
                                                <Smartphone className="w-4 h-4 text-amber-400" /> Adaptabilidad
                                            </span>
                                            <span className="font-mono text-amber-300 font-bold">100% Mobile Ready</span>
                                        </div>
                                    </div>

                                    <div className="pt-2 text-center">
                                        <p className="text-xs text-neutral-400">
                                            Desplegado en producción a través de la infraestructura global de Vercel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="py-20 px-6 bg-[#080b1a] border-t border-indigo-900/30">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-extrabold text-white">
                            Puntos Destacados de la Experiencia
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base">
                            Construido para brindar una experiencia inmersiva a los fanáticos del fútbol mundial.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 hover:border-amber-500/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Diseño UI Interactivo</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Componentes interactivos con animaciones micro-smooth construidas sobre Tailwind CSS.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 hover:border-amber-500/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Carga Ultrarrápida con Astro</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Generación de sitios estáticos (SSG) sin sobrecarga de JavaScript para respuestas inmediatas.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-900/40 hover:border-amber-500/40 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                                <Globe2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Secciones Informativas</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Cobertura detallada de las 16 sedes organizadoras en Canadá, Estados Unidos y México.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Carousel */}
            {/* <div className="bg-[#060813]">
                <LogoCarrusel tags={stackTags} />
            </div> */}
        </div>
    );
}
