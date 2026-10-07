"use client";

import React, { useState } from "react";
import { Terminal, Wrench } from "lucide-react";

export interface ResumeItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  logoUrl?: string;
  iconBg?: string;
  iconColor?: string;
  customIcon?: React.ReactNode;
}

// Experiencias reales con imágenes de empresas
export const realResumeItems: ResumeItem[] = [
  {
    id: 1,
    role: "Informático",
    company: "Independiente",
    period: "ACTUALIDAD",
    location: "Remoto",
    description:
      "",
    iconBg: "bg-slate-900",
    iconColor: "text-white",
    customIcon: <Terminal className="w-5 h-5" />,
    
  },
  {
    id: 2,
    role: "Desarrollador Informático",
    company: "Tecsis Ingenieria S.A.",
    period: "Enero 2026 - Abril 2026",
    location: "Chepén, La Libertad",
    description:
      "Desarrollé soluciones de automatización de procesos administrativos utilizando Python, integrando Microsoft Graph API, Azure SQL y SAP. Automatizé el envío de correos, procesamiento de datos Excel, gestión de proveedores y generación de reportes, además de participar en el levantamiento de requerimientos y brindar soporte a los sistemas desarrollados.",
    logoUrl: "/images/empresas/tecsis.jfif",
  },
  {
    id: 3,
    role: "Auxiliar de Soporte",
    company: "Empacadora Sello Verde",
    period: "Octubre 2025 - Enero 2026",
    location: "Chépen, La Libertad",
    description:
      "Brindé soporte técnico de primer y segundo nivel a usuarios de áreas administrativas y de producción, atendiendo incidencias de hardware, software, redes y conectividad. Realicé mantenimiento y configuración de equipos, apoyé en sistemas de producción y logística, gestioné respaldos, escalamiento de incidencias y elaboración de reportes técnicos.",
    logoUrl: "/images/empresas/sello verde.jfif",
  },
  {
    id: 4,
    role: "Soporte TI",
    company: "Quimpac S.A.",
    period: "Junio 2024 - Junio 2025",
    location: "Huacho, Lima",
    description:
      "Brindé soporte técnico a usuarios, atendiendo incidencias de hardware, software y redes, además de realizar mantenimiento, instalación y configuración de equipos. Gestioné tickets y activos tecnológicos, coordiné con proveedores y desarrollé una aplicación móvil para el registro y control del inventario de equipos de TI.",
    logoUrl: "/images/empresas/quimpac.png",
  },
  {
    id: 5,
    role: "Diseñador UX/UI",
    company: "Agencia Online JF",
    period: "Enero 2024 - Mayo 2024",
    location: "San Isidro, Lima",
    description:
      "Diseñé interfaces y prototipos para aplicaciones web, de escritorio y móviles, realizando investigación y pruebas de usabilidad para identificar necesidades y mejorar la experiencia del usuario. Utilicé herramientas como Figma, Adobe XD y Sketch.",
    logoUrl: "/images/empresas/agenncia online.jfif",
  },
  {
    id: 6,
    role: "Practicante Pre - Profesional",
    company: "Municipalidad Distrital de Pacanga",
    period: "Octubre 2022 - Diciembre 2022",
    location: "Pacanga, La Libertad",
    description:
      "Brindé soporte técnico a usuarios, realizando mantenimiento preventivo y correctivo de equipos, instalación y configuración de software, solución de incidencias y apoyo en la gestión de activos tecnológicos y página web institucional.",
    logoUrl: "/images/empresas/municipalidad.jfif",
  },
];

interface ResumeSectionProps {
  items?: ResumeItem[];
}

function LogoBox({ item }: { item: ResumeItem }) {
  const [hasError, setHasError] = useState(false);

  if (item.logoUrl && !hasError) {
    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200/80 overflow-hidden flex items-center justify-center shrink-0 shadow-sm mt-0.5">
        <img
          src={item.logoUrl}
          alt={item.company}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${
        item.iconBg || "bg-slate-900"
      } ${
        item.iconColor || "text-white"
      } flex items-center justify-center shrink-0 shadow-sm mt-0.5 font-bold`}
    >
      {item.customIcon || item.company.charAt(0)}
    </div>
  );
}

export default function ResumeSection({ items = realResumeItems }: ResumeSectionProps) {
  return (
    <div className="w-full mx-auto py-6 sm:py-10">
      <div className="space-y-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.id}>
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Logo Icon Box */}
                <LogoBox item={item} />

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-900 font-semibold text-[15px] sm:text-[16px] leading-snug">
                    {item.role}{" "}
                    <span className="font-normal text-slate-500">
                      @ {item.company}
                    </span>
                  </h3>

                  <p className="text-[13px] sm:text-[13.5px] text-slate-400 font-normal mt-0.5 mb-2">
                    {item.period}{" "}
                    <span className="inline-block mx-1.5 opacity-40">•</span>{" "}
                    {item.location}
                  </p>

                  <p className="text-[13.5px]  w-[980] sm:text-[14px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {!isLast && (
                <div className="border-b border-dashed border-slate-200/90 my-6 sm:my-7" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
