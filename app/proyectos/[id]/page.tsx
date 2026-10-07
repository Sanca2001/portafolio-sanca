import { notFound } from 'next/navigation';
import { proyectos, getProyectoById } from '@/data/proyectos';

import Proyecto2Detail from '@/components/proyectos/Proyecto2Detail';
import Proyecto3Detail from '@/components/proyectos/Proyecto3Detail';
import Proyecto4Detail from '@/components/proyectos/Proyecto4Detail';
import Proyecto5Detail from '@/components/proyectos/Proyecto5Detail';
import Proyecto6Detail from '@/components/proyectos/Proyecto6Detail';
import Proyecto7Detail from '@/components/proyectos/Proyecto7Detail';
import DefaultProyectoDetail from '@/components/proyectos/DefaultProyectoDetail';

// Genera las rutas estáticas en build time
export function generateStaticParams() {
    return proyectos.map((proyecto) => ({
        id: proyecto.id.toString(),
    }));
}

type Props = {
    params: Promise<{ id: string }>;
};

// Metadata dinámica por proyecto
export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    const proyecto = getProyectoById(Number(id));
    if (!proyecto) return { title: 'Proyecto no encontrado' };
    return {
        title: `${proyecto.titulo} — Mi Portfolio`,
        description: proyecto.descripcion,
    };
}

export default async function ProyectoPage({ params }: Props) {
    const { id } = await params;
    const numericId = Number(id);
    const proyecto = getProyectoById(numericId);

    if (!proyecto) {
        notFound();
    }

    // Renderiza el componente con diseño único según el ID del proyecto
    switch (numericId) {
        case 1:
            return <DefaultProyectoDetail proyecto={proyecto} />; // Juego Abecedario
        case 2:
            return <Proyecto7Detail proyecto={proyecto} />; // Sistema de Programación de Turnos
        case 3:
            return <Proyecto2Detail proyecto={proyecto} />; // Control de Producción
        case 4:
            return <Proyecto3Detail proyecto={proyecto} />; // Página Web Mundial
        case 5:
            return <Proyecto4Detail proyecto={proyecto} />; // Expediting Python
        case 6:
            return <Proyecto5Detail proyecto={proyecto} />; // Inventarios AppSheet
        case 7:
            return <Proyecto6Detail proyecto={proyecto} />; // Sistema Inventarios Mobile Phones
        default:
            return <DefaultProyectoDetail proyecto={proyecto} />;
    }
}