"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, Factory, Database, Layers, CheckCircle2, ShieldCheck, BarChart3, Cpu } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function Proyecto1Detail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#07090e] text-white selection:bg-cyan-500 selection:text-black">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/80 backdrop-blur-md border-b border-cyan-900/30 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-cyan-400 text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full font-mono">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        Enterprise Stock Control
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Columna Izquierda: Información Principal */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide">
                                <Factory className="w-4 h-4 text-cyan-400" />
                                Software de Gestión Industrial
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] bg-gradient-to-r from-white via-neutral-200 to-cyan-200 bg-clip-text text-transparent">
                                {proyecto.titulo}
                            </h1>

                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
                                {proyecto.descripcion}. Diseñado para optimizar y auditar el flujo constante de materia prima, stock terminado y rendimientos de producción dentro de la planta industrial.
                            </p>

                            {/* Tags de Tecnologías */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono bg-neutral-900/90 text-cyan-300 border border-cyan-900/50 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights Métricas */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80">
                                <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-cyan-400 font-extrabold text-2xl">100%</div>
                                    <div className="text-neutral-400 text-xs mt-1">Trazabilidad</div>
                                </div>
                                <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-cyan-400 font-extrabold text-2xl">SQL</div>
                                    <div className="text-neutral-400 text-xs mt-1">Server Enterprise</div>
                                </div>
                                <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-cyan-400 font-extrabold text-2xl">Realtime</div>
                                    <div className="text-neutral-400 text-xs mt-1">Control de Stock</div>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha: Mockup Interactivo */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900/90 group">
                                {/* Browser Bar */}
                                <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <div className="text-[11px] font-mono text-neutral-400 bg-neutral-900 px-4 py-0.5 rounded-full border border-neutral-800">
                                        system.internal/production-control
                                    </div>
                                    <div className="w-12" />
                                </div>

                                {/* Mockup Media */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                                    <img
                                        src={proyecto.mockup || proyecto.imagen}
                                        alt={proyecto.titulo}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Módulos Principales & Arquitectura */}
            <section className="py-20 px-6 border-t border-neutral-800/60 bg-[#090d16]">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            Características y Funcionalidades Clave
                        </h2>
                        <p className="text-neutral-400 text-sm sm:text-base">
                            Arquitectura robusta creada para entornos operativos que requieren alta disponibilidad y consistencia de datos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/40">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Integración SQL Server</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Consultas optimizadas y procedimientos almacenados para procesar grandes volúmenes de registros de stock e historial de lotes.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/40">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Panel de Control de Producción</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Vistas analíticas centralizadas para monitorear mermas, órdenes de producción en proceso y salidas hacia despacho.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-cyan-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800/40">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Validación de Roles y Permisos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Sistema de autenticación en Laravel con niveles de acceso estructurados para operadores, supervisores y administradores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Tecnológico Carrusel */}
            {/* <div className="bg-[#07090e]">
                <LogoCarrusel tags={stackTags} />
            </div> */}
        </div>
    );
}
