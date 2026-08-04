interface ExperienciaItem {
    id: number;
    titulo: string;
    periodo: string;
    lugar: string;
    descripcion: string[];
}

const experiencia: ExperienciaItem[] = [

    {
        id: 1,
        titulo: "Informático Independiente",
        periodo: "2022 - Actualidad",
        lugar: "Freelance",
        descripcion: [
            "Diagnóstico y solución de problemas de hardware y software en computadoras y laptops.",
            "Instalación y configuración de sistemas operativos, programas y redes básicas.",
            "Mantenimiento preventivo y correctivo de equipos informáticos.",
            "Atención y soporte técnico a clientes de manera presencial y remota.",
            "Respaldo y recuperación básica de información.",
            "Asesoría en compra y mejora de equipos tecnológicos.",
            "Configuración de impresoras y redes Wi-Fi."
        ],
    },

    {
        id: 2,
        titulo: "Desarrollador Informático",
        periodo: "Enero 2026 - Abril 2026",
        lugar: "Tecsis Ingenieria S.A. San Isidro, Lima",
        descripcion: [
            "Desarrolle e implemente sistemas de automatización de procesos administrativos mediante Python y CustomTkinter, reduciendo tiempos operativos del equipo de Expediting.",
            "Automatice el envío masivo de correos personalizados mediante integración con Microsoft Graph API y autenticación OAuth, eliminando el proceso manual de comunicación con proveedores.",
            "Desarrolle un robot de procesamiento de datos Excel para cruce, validación y migración de información entre múltiples plantillas, reemplazando tareas manuales repetitivas del equipo.",
            "Construcción de sistema de gestión de proveedores con interfaz gráfica, sincronización en nube mediante Azure SQL Database e importación/exportación masiva de datos, automatizando el mantenimiento de la base de datos de contactos.",
            "Diseñe e implemente un módulo de generación automática de reportes Expediting, integrando datos SAP con plantillas corporativas para su distribución automatizada.",
            "Participe en levantamiento de requerimientos funcionales con usuarios finales para identificar procesos susceptibles de automatización y traducirlos en soluciones técnicas.",
            "Proporcione soporte técnico según la necesidad de los usuarios y también soporte de software a los sistemas desarrollados."
        ],
    },


    {
        id: 3,
        titulo: "Inspector de Packing",
        periodo: "Octubre 2025 - Enero 2026",
        lugar: "Empacadora Sello Verde Chepén, La Libertad",
        descripcion: [
            "Informe por horas especificando el tipo de fruta y respectivo lote.",
            "Reporte final en Excel, describiendo por toneladas la fruta procesada y la de descarte.",
            "Control del pesaje de vehiculos (Uso del software de pesado).",
            "Seguimiento del programa de producción diario.",
            "Apoye en tareas de soporte técnico básico, configuración de equipos y solución de incidencias informáticas."
        ],
    },
    {
        id: 4,
        titulo: "Sopore TI",
        periodo: "Junio 2024 – Junio 2025",
        lugar: "Quimpac S.A. Huacho, Lima",
        descripcion: [
            "Brindé soporte técnico a los usuarios, resolviendo problemas relacionados con hardware, software y redes.",
            "Realicé el mantenimiento preventivo y correctivo de computadoras y otros dispositivos tecnológicos.",
            "Instalé y configuré sistemas operativos, aplicaciones y hardware en los equipos de los usuarios.",
            "Registré, clasifiqué, documenté y realicé seguimiento a incidencias y solicitudes de soporte a traves del sistema de tickets propias de la empresa. .",
            "Brindé formación y apoyo a los usuarios sobre el uso de software y herramientas tecnológicas.",
            "Asisti en la organización y control básico de equipos tecnológicos, realizando registro, diagnóstico, mantenimiento y seguimiento de laptops, PCs y periféricos.",
            "Coordine con proveedores para la resolución de solicitudes.",
            "Desarrolle una aplicación móvil para el registro y control de inventarios de equipos de TI.",

        ],
    },
    {
        id: 5,
        titulo: "Diseñador UX/UI",
        periodo: "Enero 2024 – Mayo 2024",
        lugar: "Agencia Online JF - Lima",
        descripcion: [
            "Diseñé y maqueté sitios web responsive.",
            "Investigué los requerimientos y necesidades del usuario.",
            "Diseñé páginas web para empresas, landing pages y blogs.",
            "Participé activamente en cursos de capacitación en diseño UX."
        ],
    },
    {
        id: 6,
        titulo: "Practicante Pre - Profesional",
        periodo: "Octubre 2022 – Diciembre 2022",
        lugar: "Municipalidad Distrital de Pacanga - Pacanga, La Libertad",
        descripcion: [

            "Realicé el mantenimiento preventivo y correctivo de equipos.",
            "Instalé, configure y actualicé software en equipos de cómputo.",
            "Apoyé a usuarios en temas de ofimática.",
            "Resolví problemas técnicos relacionados con hardware y software.",
            "Asistí en el mantenimiento y actualización de la página web del municipio.",
            "Capacité a los usuarios en herramientas digitales.",
            "Asisti en la gestión y organización de activos tecnológicos.",
        ],


    },
];

const Experiencia = () => {
    return (
        <div className="bg-[#0A0A0A] pt-60">

            <h2 className="text-3xl sm:text-3xl text-center font-bold text-[#f5f5f5] dark:text-white mb-4">
                Experiencia Profesional
            </h2>


            <div className="max-w-6xl mx-auto pt-10">
                {experiencia.map((item, index) => {
                    const esUltimo = index === experiencia.length - 1;

                    return (
                        <div
                            key={item.id}
                            className={`
                                grid grid-cols-[auto_1fr] sm:grid-cols-[1fr_auto_1fr]
                                gap-x-4 sm:gap-x-16 gap-y-3
                                [grid-template-areas:'rail_info'_'rail_desc']
                                sm:[grid-template-areas:'info_rail_desc']
                                ${!esUltimo ? "pb-10 sm:pb-16" : ""}
                            `}
                        >
                            {/* Rail: punto + línea */}
                            <div className="[grid-area:rail] flex flex-col items-center self-stretch">
                                <div className="w-3 h-3 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                                <div className="w-px flex-1 bg-orange-500 mt-1" />
                            </div>

                            {/* Título + meta */}
                            <div className="[grid-area:info] min-w-0">
                                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                                    {item.titulo}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {item.periodo}
                                </p>
                                <p className="text-gray-300 text-sm sm:text-base">
                                    {item.lugar}
                                </p>
                            </div>

                            {/* Viñetas */}
                            <ul className="[grid-area:desc] min-w-0 space-y-2">
                                {item.descripcion.map((punto, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-300 text-sm sm:text-base leading-relaxed flex gap-2"
                                    >
                                        <span className="text-orange-500 flex-shrink-0">•</span>
                                        <span>{punto}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Experiencia;