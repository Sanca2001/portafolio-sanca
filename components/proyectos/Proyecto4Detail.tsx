"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, Terminal, FileSpreadsheet, Mail, Workflow, CheckCircle, Cpu, ShieldCheck } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function Proyecto3Detail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#070b14] text-white selection:bg-[#FFD438] selection:text-black">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b14]/85 backdrop-blur-md border-b border-blue-900/30 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#FFD438] text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FFD438] bg-yellow-950/40 border border-yellow-500/30 px-3.5 py-1 rounded-full font-mono">
                        <Terminal className="w-3.5 h-3.5 text-[#306998]" />
                        Python Desktop Automation
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#306998]/15 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Columna Izquierda: Información */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                                <Cpu className="w-4 h-4 text-[#FFD438]" />
                                Software de Escritorio en Python
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] bg-gradient-to-r from-white via-neutral-200 to-blue-200 bg-clip-text text-transparent">
                                {proyecto.titulo}
                            </h1>

                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                                {proyecto.descripcion}. Diseñada para eliminar horas de trabajo manual reduciendo errores operativos en la gestión de logística y compras.
                            </p>

                            {/* Tags list */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-mono bg-blue-950/80 text-blue-200 border border-blue-800/40 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                                    <div className="text-[#FFD438] font-bold text-2xl">Python</div>
                                    <div className="text-neutral-400 text-xs mt-0.5">Core Engine</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                                    <div className="text-cyan-400 font-bold text-2xl">Pandas</div>
                                    <div className="text-neutral-400 text-xs mt-0.5">Excel Processing</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                                    <div className="text-emerald-400 font-bold text-2xl">MSAL</div>
                                    <div className="text-neutral-400 text-xs mt-0.5">Mail Auth API</div>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha: Mockup & Console Preview */}
                        <div className="lg:col-span-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-900/40 bg-neutral-950">
                                <div className="bg-[#0f172a] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                    </div>
                                    <div className="text-xs font-mono text-neutral-400">
                                        expediting_app.py — CustomTkinter UI
                                    </div>
                                    <div className="w-12" />
                                </div>

                                <div className="p-4 bg-neutral-950/90 font-mono text-xs text-neutral-300 space-y-2 border-b border-neutral-900">
                                    <div className="text-blue-400">[+] Starting Expediting Automation Service...</div>
                                    <div className="text-emerald-400">[SUCCESS] MSAL Authentication Token Acquired</div>
                                    <div className="text-neutral-400">[INFO] Reading pending tracking rows from Excel master database...</div>
                                    <div className="text-[#FFD438]">[STATUS] 48 automated email notifications dispatched.</div>
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

            {/* Workflow steps */}
            <section className="py-20 px-6 bg-[#090f1d] border-t border-blue-900/30">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-bold text-white">Flujo de Automatización</h2>
                        <p className="text-neutral-400 text-sm sm:text-base">
                            De datos tabulares en hojas de cálculo a comunicación automática directa con proveedores.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-950 text-[#FFD438] flex items-center justify-center border border-blue-800/40">
                                <FileSpreadsheet className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">1. Ingesta y Limpieza de Datos</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Lectura dinámica de archivos Excel con Pandas y Numpy para filtrar ítems pendientes y calcular fechas críticas de entrega.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/40">
                                <Workflow className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">2. Interfaz CustomTkinter</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Interfaz gráfica amigable y moderna para que el usuario controle los filtros, plantillas de mensaje y previsualizaciones.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-950 text-emerald-400 flex items-center justify-center border border-blue-800/40">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">3. Envío Seguro con MSAL</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Autenticación OAuth 2.0 segura con Microsoft Graph API para el despacho masivo y personalizado de correos de expediting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Carousel */}
            {/* <div className="bg-[#070b14]">
                <LogoCarrusel tags={stackTags} />
            </div> */}
        </div>
    );
}
