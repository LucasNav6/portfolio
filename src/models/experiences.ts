export interface Experience {
  position: string;
  company: string;
  date: {
    start: Date;
    end: Date | "Present";
  };
  roleDescription: string;
  achievements: string[];
}
export const EXPERIENCE_TIMELINE: Experience[] = [
    {
        position: "Full-stack Developer & IA Creative Technologist",
        company: "Lima Innovation Lab.",
        date: {
            start: new Date("2024-04-01"),
            end: "Present",
        },
        roleDescription:
            "Lideré el desarrollo de un producto SaaS con integración de IA, optimizando flujos de trabajo y coordinación entre equipos, desplegando soluciones full-stack escalables en Azure, AWS y GCP.",
        achievements: [
            "Rediseño completo del dashboard.",
            "Optimización de carga en un 30%.",
            "Mentoría a desarrolladores junior.",
        ],
    },
    {
        position: "Full-stack Developer",
        company: "Lima Innovation Lab.",
        date: {
            start: new Date("2023-07-01"),
            end: new Date("2024-04-01"),
        },
        roleDescription:
            "Desarrollé integralmente un producto SaaS con automatización basada en agentes de IA, participando en diseño, desarrollo, pruebas y despliegue, garantizando escalabilidad y eficiencia en la entrega de proyectos.",
        achievements: [
            "Lanzamiento del sistema de suscripciones.",
            "Desarrollo de APIs REST para app móvil.",
            "Automatización de tests reduciendo bugs en 40%.",
            "Configuración de pipelines CI/CD.",
        ],
    },
    {
        position: "Front-end Developer",
        company: "Lima Innovation Lab.",
        date: {
            start: new Date("2023-05-01"),
            end: new Date("2023-06-30"),
        },
        roleDescription:
            "Mantenimiento y desarrollo front-end en un producto SaaS, optimizando interfaces y flujos de trabajo, coordinando con el equipo de diseño para mejorar la eficiencia y la experiencia de usuario.",
        achievements: [
            "Mantenimiento de código legacy.",
            "Soporte a clientes internos.",
        ],
    },
    {
        position: "Full-stack Developer",
        company: "Fiverr (freelance)",
        date: {
            start: new Date("2021-06-01"),
            end: new Date("2023-03-01"),
        },
        roleDescription:
            "Desarrollé soluciones full-stack personalizadas para clientes, incluyendo integración de IA, automatización de flujos y despliegue en múltiples plataformas, garantizando rendimiento y escalabilidad.",
        achievements: [
            "Mantenimiento de código legacy.",
            "Soporte a clientes internos.",
            "Optimización de procesos internos de clientes.",
            "Implementación de sistemas modulares y escalables.",
        ],
    },
];