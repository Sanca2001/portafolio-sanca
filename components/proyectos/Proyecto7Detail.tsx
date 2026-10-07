"use client";

import React from "react";
import Link from "next/link";
import { Proyecto } from "@/data/proyectos";
import LogoCarrusel from "@/components/Carrusel/Languagesmarquee";
import { ArrowLeft, Clock, Users, Calendar, ShieldCheck, Database, Server } from "lucide-react";


import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Feature = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

interface Destination {
    id: number;
    name: string;
    image: string;
}

const features: Feature[] = [
    {
        title: "Cronogramas",
        description:
            "Organiza los turnos de tu equipo en un calendario visual, fácil de consultar y actualizar.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="17" rx="2" stroke="#ffffff" strokeWidth="1.8" />
                <path d="M3 9H21" stroke="#ffffff" strokeWidth="1.8" />
                <path d="M8 2V6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 2V6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Personal asignado",
        description:
            "Visualiza qué empleados están cubriendo cada turno y en qué sucursal se encuentran.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="3.5" stroke="#ffffff" strokeWidth="1.8" />
                <path
                    d="M4.5 20C4.5 16.4 7.9 14 12 14C16.1 14 19.5 16.4 19.5 20"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        ),
    },
    {
        title: "Turnos flexibles",
        description:
            "Define horarios personalizados por turno y ajusta la duración según las necesidades de cada sucursal.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.8" />
                <path
                    d="M12 7V12L15.5 14"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        title: "Reportes en PDF",
        description:
            "Genera y descarga reportes detallados del cronograma, listos para imprimir o compartir.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 19V5C4 3.9 4.9 3 6 3H16L20 7V19C20 20.1 19.1 21 18 21H6C4.9 21 4 20.1 4 19Z"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
                <path d="M8 12H16" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 16H13" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Sucursales",
        description:
            "Administra múltiples sucursales desde un solo panel, cada una con su propio equipo y horarios.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="#ffffff" strokeWidth="1.8" />
                <path d="M3 9H21" stroke="#ffffff" strokeWidth="1.8" />
                <circle cx="8" cy="14" r="1.4" fill="#ffffff" />
                <circle cx="12" cy="14" r="1.4" fill="#ffffff" />
                <circle cx="16" cy="14" r="1.4" fill="#ffffff" />
            </svg>
        ),
    },
    {
        title: "Roles y Permisos",
        description: "Control de acceso con super admin, administradores y usuarios.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L4 14H11L10 21L20 9H13L13 3Z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const destinations: Destination[] = [
    {
        id: 1,
        name: "Login",
        image:
            "/images/turnos/login.png",
    },
    {
        id: 2,
        name: "Cronograma",
        image:
            "/images/turnos/cronograma.png",
    },
    {
        id: 3,
        name: "Dashboard",
        image:
            "/images/turnos/dashboard.png",
    },
    {
        id: 4,
        name: "Turnos",
        image:
            "/images/turnos/turnos.png",
    },
];

const navLinks = [
    { label: "Why HR", hasDropdown: false },
    { label: "Products", hasDropdown: true },
    { label: "Solution", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
];

const logos = ["airbnb", "afterpay", "slack", "hashicorp", "basecamp", "hellosign", "treehouse", "maze"];



interface Props {
    proyecto: Proyecto;
}

export default function Proyecto6Detail({ proyecto }: Props) {

    const [active, setActive] = useState(1);

    const goPrev = () => setActive((prev) => (prev - 1 + destinations.length) % destinations.length);
    const goNext = () => setActive((prev) => (prev + 1) % destinations.length);

    const getPosition = (index: number) => {
        const diff =
            (index - active + destinations.length) % destinations.length;
        if (diff === 0) return "center";
        if (diff === 1 || diff === -(destinations.length - 1)) return "right";
        return "left";
    };


    const stackTags = proyecto.stack && proyecto.stack.length > 0 && proyecto.stack[0] !== ""
        ? proyecto.stack
        : proyecto.tags;

    return (
        <>
            <div className="min-h-screen w-full bg-white font-[Inter,ui-sans-serif] text-[#1E1B3A] antialiased">
                {/* ------------------------------------------------------------------ */}
                {/* Hero + Nav (gradient surface)                                     */}
                {/* ------------------------------------------------------------------ */}
                <div className="relative overflow-hidden bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] pb-24 sm:pb-32 md:pb-40">
                    {/* faint decorative grid */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />

                    {/* Navbar */}
                    <nav className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-8 md:p-10 max-w-7xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-neutral-400 hover:text-emerald-400 text-sm font-medium transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Volver a Portafolio
                        </Link>
                        <div className="inline-flex w-fit items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 sm:px-3.5 py-1 rounded-full font-mono">
                            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            Shift Scheduling System
                        </div>

                    </nav>


                    {/* Hero copy */}
                    <div className="relative z-10 mx-auto mt-6 sm:mt-10 max-w-3xl px-5 sm:px-6 text-center">
                        <h1 className="font-[\'Space_Grotesk\',sans-serif] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                            {proyecto.titulo}
                        </h1>
                        <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                            {proyecto.descripcion}. Diseñado para optimizar la planificación de jornadas laborales, rotación de personal, control de asistencias y disponibilidad operativa del equipo.
                        </p>

                        {/* <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <button className="rounded-lg bg-[#FF5A36] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-900/25 transition hover:bg-[#f04a26]">
                            How It Works
                        </button>
                        <button className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                            Try for Free
                        </button>
                    </div> */}


                    </div>
                </div>

                {/* ------------------------------------------------------------------ */}
                {/* Floating product mockup (image supplied by the user)              */}
                {/* ------------------------------------------------------------------ */}
                <div className="relative z-20 mx-auto -mt-16 sm:-mt-24 md:-mt-32 max-w-6xl px-3 sm:px-6">
                    <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-black/5 bg-white shadow-2xl shadow-violet-900/20">
                        <img
                            src={proyecto.mockup || proyecto.imagen}
                            alt="MarcoHR dashboard preview"
                            className="h-auto w-full"
                        />
                    </div>
                </div>

            </div>

            <div className="bg-gradient-to-b from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6]">
                <div
                    className="cards-section grid grid-cols-1 gap-5 mx-auto box-border px-4 sm:px-6 pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 md:grid-cols-2 lg:grid-cols-3 max-w-6xl"

                >
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-[14px] p-6 sm:p-7 px-5 sm:px-6"
                            style={{
                                background: "white",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            <div
                                className="flex items-center justify-center mb-4 sm:mb-5"
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 10,
                                    background: "linear-gradient(135deg, #7c6cf0 0%, #6a4de0 100%)",
                                }}
                            >
                                {feature.icon}
                            </div>
                            <div className="text-black text-base sm:text-[17px] font-semibold mb-2.5">{feature.title}</div>
                            <div className="text-[#010101] text-sm leading-[1.55]">{feature.description}</div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Stack Carousel */}
            <div className="bg-white">
                <LogoCarrusel />
            </div>

            <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 select-none">
                {/* Header */}
                {/* <div className="max-w-2xl mx-auto text-center mb-14">
                    <h2 className="text-[#C9A15E] tracking-[0.35em] text-2xl md:text-3xl font-serif uppercase mb-6">
                        Popular Destinations
                    </h2>
  
                </div> */}

                {/* Carousel */}
                <div className="relative max-w-7xl mx-auto h-[260px] sm:h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden">
                    {destinations.map((dest, index) => {
                        const position = getPosition(index);

                        const base =
                            "absolute top-0 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 ease-out";

                        let positionClasses = "";
                        let width = "w-[90vw] sm:w-[520px] md:w-[600px]";
                        let height = "h-[220px] sm:h-[320px] md:h-[400px]";
                        let z = "z-10";
                        let opacity = "opacity-100";
                        let visibility = "";

                        if (position === "center") {
                            positionClasses = "left-1/2 -translate-x-1/2";
                            z = "z-30";
                        } else if (position === "left") {
                            positionClasses = "left-0 -translate-x-[15%] sm:-translate-x-1/4";
                            width = "w-[220px] sm:w-[340px] md:w-[420px]";
                            height = "h-[190px] sm:h-[280px] md:h-[350px]";
                            z = "z-10";
                            opacity = "opacity-70";
                            visibility = "hidden sm:block";
                        } else {
                            positionClasses = "right-0 translate-x-[15%] sm:translate-x-1/4";
                            width = "w-[220px] sm:w-[340px] md:w-[420px]";
                            height = "h-[190px] sm:h-[280px] md:h-[350px]";
                            z = "z-10";
                            opacity = "opacity-70";
                            visibility = "hidden sm:block";
                        }

                        return (
                            <div
                                key={dest.id}
                                className={`${base} ${positionClasses} ${width} ${height} ${z} ${opacity} ${visibility}`}
                                style={{ top: position === "center" ? "0px" : "25px" }}
                            >
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Dark overlay for readability */}
                                {position === "center" && (
                                    <>


                                    </>
                                )}
                                {position !== "center" && (
                                    <>
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                                            <h3 className="text-white text-sm sm:text-lg font-serif tracking-widest uppercase drop-shadow-lg">
                                                {dest.name}
                                            </h3>
                                        </div>
                                        <button
                                            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] tracking-[0.2em] uppercase px-3 sm:px-4 py-1.5 sm:py-2 border border-white/40 transition-colors"
                                            onClick={() => setActive(index)}
                                        >
                                            Discover
                                        </button>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
                    <button
                        onClick={goPrev}
                        aria-label="Anterior"
                        className="text-gray-700 hover:text-[#C9A15E] transition-colors"
                    >
                        <ChevronLeft size={22} strokeWidth={1.5} />
                    </button>

                    <div className="flex items-center gap-2">
                        {destinations.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                aria-label={`Ir al destino ${index + 1}`}
                                className={`rounded-full transition-all ${index === active
                                    ? "w-2.5 h-2.5 bg-gray-800"
                                    : "w-2 h-2 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={goNext}
                        aria-label="Siguiente"
                        className="text-gray-700 hover:text-[#C9A15E] transition-colors"
                    >
                        <ChevronRight size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </section>






        </>
    );
}