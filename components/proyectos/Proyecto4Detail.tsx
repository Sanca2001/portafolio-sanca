"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/loop/Loop";
import { ArrowLeft, Smartphone, QrCode, Cloud, Boxes, ShieldCheck, CheckCircle2 } from "lucide-react";

interface Props {
    proyecto: Proyecto;
}

export default function Proyecto4Detail({ proyecto }: Props) {
    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <div className="min-h-screen bg-[#090d14] text-white selection:bg-teal-400 selection:text-black">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#090d14]/85 backdrop-blur-md border-b border-teal-900/30 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-neutral-400 hover:text-teal-400 text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Portafolio
                    </Link>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-500/30 px-3.5 py-1 rounded-full font-semibold">
                        <Smartphone className="w-3.5 h-3.5 text-teal-400" />
                        AppSheet Mobile Solution
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Text info */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                                <Boxes className="w-4 h-4 text-teal-400" />
                                Solución Móvil Low-Code
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] bg-gradient-to-r from-white via-neutral-200 to-teal-200 bg-clip-text text-transparent">
                                {proyecto.titulo}
                            </h1>

                            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                                {proyecto.descripcion}. Diseñada para permitir al personal de TI auditar, registrar y verificar el estado físico de componentes y laptops en campo de manera rápida y sin complicaciones desde dispositivos móviles.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {proyecto.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3.5 py-1 text-xs font-mono bg-teal-950/80 text-teal-200 border border-teal-800/40 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800">
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-teal-400 font-extrabold text-2xl">Low-Code</div>
                                    <div className="text-neutral-400 text-xs mt-1">AppSheet Platform</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-teal-400 font-extrabold text-2xl">Mobile</div>
                                    <div className="text-neutral-400 text-xs mt-1">Android & iOS</div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800">
                                    <div className="text-teal-400 font-extrabold text-2xl">Cloud</div>
                                    <div className="text-neutral-400 text-xs mt-1">Sync Instantáneo</div>
                                </div>
                            </div>
                        </div>

                        {/* Mockup Container */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative rounded-[32px] p-3 bg-neutral-900 border border-teal-500/30 shadow-2xl max-w-sm w-full">
                                <div className="relative rounded-[24px] overflow-hidden bg-neutral-950 border border-neutral-800 aspect-[9/18]">
                                    <img
                                        src={proyecto.mockup || proyecto.imagen}
                                        alt={proyecto.titulo}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-x-0 top-0 h-8 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center">
                                        <div className="w-16 h-3 bg-neutral-800 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="py-20 px-6 bg-[#0c121c] border-t border-teal-900/30">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-3">
                        <h2 className="text-3xl font-bold text-white">Ventajas Operativas</h2>
                        <p className="text-neutral-400 text-sm sm:text-base">
                            Optimización directa para procesos de inventario en almacén y oficinas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center border border-teal-800/40">
                                <QrCode className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Escaneo de Códigos de Barra</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Lectura desde la cámara del smartphone para ubicar y actualizar rápidamente la ficha técnica del equipo.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center border border-teal-800/40">
                                <Cloud className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Sincronización en la Nube</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Actualizaciones inmediatas en hojas de cálculo centrales y bases de datos sin requerir servidores dedicados.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 transition-colors space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center border border-teal-800/40">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Fácil Adopción Operativa</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Interfaz simplificada orientada al usuario final, reduciendo la curva de capacitación para auditorías de inventario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Carousel */}
            {/* <div className="bg-[#090d14]">
                <LogoCarrusel tags={stackTags} />
            </div> */}
        </div>
    );
}
