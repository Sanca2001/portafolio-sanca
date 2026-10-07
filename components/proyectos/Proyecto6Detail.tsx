"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, ShoppingBag, Database, ShieldCheck, Layers, Server, Monitor } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function Proyecto5Detail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#0a0a14] text-white selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/85 backdrop-blur-md border-b border-purple-900/30 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-purple-400 text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/30 px-3.5 py-1 rounded-full font-semibold">
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Mobile Phones System
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Text info */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                                <Server className="w-4 h-4 text-purple-400" />
                                Sistema Web Comercial en Laravel
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] bg-gradient-to-r from-white via-neutral-200 to-purple-200 bg-clip-text text-transparent">
                                {proyecto.titulo}
                            </h1>

                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                Desarrollado para la empresa <span className="text-purple-300 font-semibold">Mobile Phones Servicios Generales</span>. {proyecto.descripcion}.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono bg-purple-950/80 text-purple-200 border border-purple-800/40 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-purple-400 font-extrabold text-2xl">Laravel</div>
                                    <div className="text-neutral-400 text-xs mt-1">PHP Framework</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-purple-400 font-extrabold text-2xl">MySQL</div>
                                    <div className="text-neutral-400 text-xs mt-1">Workbench DB</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-purple-400 font-extrabold text-2xl">Bootstrap</div>
                                    <div className="text-neutral-400 text-xs mt-1">UI Responsive</div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Mockup Showcase */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-900/40 bg-neutral-950">
                                <div className="bg-[#121024] px-4 py-3 border-b border-purple-900/40 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <div className="text-xs font-mono text-neutral-400">
                                        mobilephones.internal/admin
                                    </div>
                                    <div className="w-12" />
                                </div>

                                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                                    <img
                                        src={proyecto.mockup || proyecto.imagen}
                                        alt={proyecto.titulo}
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Modules section */}
            <section className="py-20 px-6 bg-[#0f0e21] border-t border-purple-900/30">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-bold text-white">Módulos del Sistema</h2>
                        <p className="text-neutral-400 text-sm sm:text-base">
                            Funcionalidades clave integradas en la solución comercial de inventario.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800/40">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Control de Stock y Movimientos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Registro de entradas por compras a proveedores y salidas por ventas o servicio técnico.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800/40">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Base de Datos MySQL Relacional</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Estructura relacional diseñada en MySQL Workbench con llaves foráneas para garantizar integridad de datos.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center border border-purple-800/40">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Plantillas Blade & Bootstrap</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Vistas modulares desarrolladas con el motor Blade de Laravel y estilizadas con Bootstrap para administración fluida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Carousel */}
            {/* <div className="bg-[#0a0a14]">
                <LogoCarrusel tags={stackTags} />
            </div> */}
        </div>
    );
}
