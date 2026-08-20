import { IconType } from "react-icons";
import {
    SiPhp,
    SiLaravel,
    SiMysql,
    SiXampp,
    SiHtml5,

    SiTailwindcss,
    SiAstro,
    SiPython,
    SiPandas,
    SiNumpy,

    SiJavascript,
    SiBootstrap,
    SiReact,
    SiGithub,
    SiDocker,
} from "react-icons/si";

import { Code2 } from "lucide-react";
import {Laravel} from "@/components/iconos/LaravelIcon";
import { TailwindCSS } from "@/components/iconos/Tailwind";
import { Xampp } from "@/components/iconos/XamppIcon";
import { MicrosoftSQLServer } from "@/components/iconos/SQLServer";
import { Python } from "@/components/iconos/PythonIcon";





type TechIcon = {
    icon: IconType | typeof Code2;
};

// Reglas de coincidencia: se evalúan en orden, con "includes" sobre el tag en minúsculas.
// Así "PHP - LARAVEL" hace match con las reglas "php" y "laravel" por separado.
const rules: { test: string; icon: IconType | typeof Code2; }[] = [
    { test: "laravel", icon: Laravel},
    { test: "php", icon: SiPhp },
    { test: "sql server", icon: MicrosoftSQLServer }, // SQL Server no tiene simple-icon propio
    { test: "mysql", icon: SiMysql},
    { test: "xampp", icon: Xampp },
    { test: "tailwind", icon: TailwindCSS},
    { test: "astro", icon: SiAstro },
    { test: "html", icon: SiHtml5 },
    { test: "javascript", icon: SiJavascript},
    { test: "bootstrap", icon: SiBootstrap },
    { test: "python", icon: Python },
    { test: "customtkinter", icon: SiPython },
    { test: "pandas", icon: SiPandas },
    { test: "numpy", icon: SiNumpy },
    { test: "react", icon: SiReact},
    { test: "github", icon: SiGithub },
    { test: "docker", icon: SiDocker},
];

// Tecnologías sin logo disponible (openpyxl, msal, AppShet, Blade, Low Code, etc.)
// caen en este ícono genérico, manteniendo el nombre como etiqueta.
const fallback: TechIcon = { icon: Code2 };

export function getTechIcon(tag: string): TechIcon {
    const normalized = tag.toLowerCase();
    const match = rules.find((r) => normalized.includes(r.test));
    return match ? { icon: match.icon, } : fallback;
}