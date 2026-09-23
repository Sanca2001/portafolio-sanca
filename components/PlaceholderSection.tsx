"use client";

import React from "react";
import { TabType } from "./HeaderNav";

interface PlaceholderSectionProps {
  title: string;
  tab: TabType;
}

const descriptions: Record<string, string> = {
  experiments:
    "Esta sección contendrá experimentos interactivos, prototipos y pruebas de concepto. Próximamente se agregará más contenido.",
  about:
    "Aquí encontrarás información detallada sobre mi trayectoria, habilidades, enfoque de desarrollo y experiencia. Próximamente se agregará más información.",
  resume:
    "En esta sección podrás visualizar y descargar mi Currículum / Resume completo. Próximamente estará disponible.",
};

export default function PlaceholderSection({ title, tab }: PlaceholderSectionProps) {
  const description =
    descriptions[tab] || "Próximamente estaremos agregando más contenido en esta sección.";

  return (
    <div className="w-full py-12 min-h-[35vh] flex flex-col items-start justify-center">
      <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold mb-3 px-3 py-1 bg-purple-50 rounded-full border border-purple-100">
        {title}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      <p className="text-gray-500 text-base sm:text-lg max-w-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
