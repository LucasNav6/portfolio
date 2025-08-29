'use client';

import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@/components/atoms/timeline";
import { formatDate } from "@/utils/formatDate";
import React from "react";

const experiences = [
    {
        position: 'Full-stack Developer & IA Creative Technologist',
        company: 'Lima innovation Lab.',
        start: 'Abr 2024',
        end: 'Present',
        responsabilities: "Lideré el desarrollo de un producto SaaS con integración de IA, optimizando flujos de trabajo y coordinación entre equipos, y desplegando soluciones full-stack escalables en plataformas como Azure, AWS y GCP.",
        achievements: [
            'Rediseño completo del dashboard.',
            'Optimización de carga en un 30%.',
            'Mentoría a desarrolladores junior.',
        ],
    },
    {
        position: 'Full-stack Developer',
        company: 'Lima innovation Lab.',
        start: 'Jul 2023',
        end: 'Abr 2024',
        responsabilities: "Lideré el desarrollo integral de un producto SaaS que combina automatización mediante sistemas de agentes de inteligencia artificial y desarrollo web, participando activamente en la ideación, diseño, desarrollo, pruebas y despliegue del producto, asegurando soluciones escalables y adaptadas a necesidades internas y B2B. Diseñé y optimicé flujos de trabajo que automatizan la maquetación y la lógica de proyectos a medida, facilitando la coordinación entre equipos de diseño y frontend, mejorando la eficiencia en la entrega de proyectos. Gestioné y desarrollé soluciones de software a medida orientadas a la comunicación entre empresas y clientes, reduciendo tiempos y optimizando procesos en áreas de atención al cliente mediante el uso de modelos multimodales de inteligencia artificial. Desplegué múltiples soluciones SaaS y proyectos de desarrollo full-stack con integración de IA en plataformas como Azure, AWS y GCP, abarcando tanto frontend como backend, garantizando escalabilidad, rendimiento y seguridad en las diferentes soluciones.",
        achievements: [
            'Lanzamiento del sistema de suscripciones.',
            'Desarrollo de APIs REST para app móvil.',
            'Automatización de tests reduciendo bugs en 40%.',
            'Configuración de pipelines CI/CD.',
        ],
    },
    {
        position: 'Front-end Developer',
        company: 'Lima innovation Lab.',
        start: 'May 2023',
        end: 'Jun 2023',
        responsabilities: "Lideré el desarrollo integral de un producto SaaS que combina automatización mediante sistemas de agentes de inteligencia artificial y desarrollo web, participando activamente en la ideación, diseño, desarrollo, pruebas y despliegue del producto, asegurando soluciones escalables y adaptadas a necesidades internas y B2B. Diseñé y optimicé flujos de trabajo que automatizan la maquetación y la lógica de proyectos a medida, facilitando la coordinación entre equipos de diseño y frontend, mejorando la eficiencia en la entrega de proyectos. Gestioné y desarrollé soluciones de software a medida orientadas a la comunicación entre empresas y clientes, reduciendo tiempos y optimizando procesos en áreas de atención al cliente mediante el uso de modelos multimodales de inteligencia artificial. Desplegué múltiples soluciones SaaS y proyectos de desarrollo full-stack con integración de IA en plataformas como Azure, AWS y GCP, abarcando tanto frontend como backend, garantizando escalabilidad, rendimiento y seguridad en las diferentes soluciones.",
        achievements: [
            'Mantenimiento de código legacy.',
            'Soporte a clientes internos.',
        ],
    },
    {
        position: 'Full-stack Developer',
        company: 'Fiverr (freelance)',
        start: 'Jun 2021',
        end: 'Mar 2023',
        responsabilities: [
            "Lideré el desarrollo integral de un producto SaaS que combina automatización mediante sistemas de agentes de inteligencia artificial y desarrollo web, participando activamente en la ideación, diseño, desarrollo, pruebas y despliegue del producto, asegurando soluciones escalables y adaptadas a necesidades internas y B2B.",
            "Diseñé y optimicé flujos de trabajo que automatizan la maquetación y la lógica de proyectos a medida, facilitando la coordinación entre equipos de diseño y frontend, mejorando la eficiencia en la entrega de proyectos.",
            "Gestioné y desarrollé soluciones de software a medida orientadas a la comunicación entre empresas y clientes, reduciendo tiempos y optimizando procesos en áreas de atención al cliente mediante el uso de modelos multimodales de inteligencia artificial.",
            "Desplegué múltiples soluciones SaaS y proyectos de desarrollo full-stack con integración de IA en plataformas como Azure, AWS y GCP, abarcando tanto frontend como backend, garantizando escalabilidad, rendimiento y seguridad en las diferentes soluciones."
        ],
        achievements: [
            'Mantenimiento de código legacy.',
            'Soporte a clientes internos.',
        ],
    },
];

export interface Experience {
    position: string;
    company: string;
    date: {
        start: Date;
        end: Date | 'Present';
    }
    roleDescription: string;
    achievements: string[];
}

export function ExperienceTimeline({ experiences }: { experiences?: Experience[] }) {
    return (
        <Timeline className="flex-grow">
            {experiences?.map((exp, index) => (
                <TimelineItem key={index} className="animate-appear-content">
                    <TimelineSeparator>
                        <TimelineDot className='text-primary' />
                        {index !== experiences.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent className="pb-8">
                        <header className="space-y-1 mb-4 bg-background z-10">
                            <strong className="text-md font-normal text-primary">{exp.position}</strong>
                            <p className="text-md font-normal flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                                {exp.company}
                                <small className="text-muted-foreground text-sm">
                                    ({formatDate(exp.date.start)} - {formatDate(exp.date.end)})
                                </small>
                            </p>
                        </header>

                        <div className="space-y-2">
                            <p className="text-sm mb-2">{exp.roleDescription}</p>
                            <strong className="text-sm font-medium underline">Achievements:</strong>
                            {exp.achievements && exp.achievements.length > 0 && (
                                <ul className="list-disc marker:text-primary list-inside space-y-1 text-sm">
                                    {exp.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
