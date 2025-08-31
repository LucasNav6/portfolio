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
        position: "Full-stack Developer & AI Creative Technologist",
        company: "Lima Innovation Lab.",
        date: {
            start: new Date("2024-04-01"),
            end: "Present",
        },
        roleDescription:
            "Led and developed full-stack SaaS solutions with AI, optimizing workflows and B2B communication, integrating on Azure, AWS, and GCP, ensuring scalability, efficiency, and security.",
        achievements: [
            "Achieved 4.6/5 in internal evaluation of the layout SaaS, strengthening team collaboration.",
            "Reduced customer service time from 2 weeks to 3 minutes with self-learning AI and minimal intervention.",
            "Improved client engagement through strategic POCs, obtaining highly positive feedback.",
            "Implemented multimodal agents that optimized UX and reduced internal times with scalability."
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
            "Led migration to microservices with Single SPA, implemented CI/CD, coordinated teams and quality practices, ensuring scalability, efficiency, and strategic alignment.",
        achievements: [
            "Migrated a monolith to microservices, reducing deployments from 40–50 min to 4 min, improving efficiency and consistency.",
            "Met 100% of code quality guidelines, shortening demos from 3 months to 2 weeks with atomic microservices and standardization.",
            "Fostered communication and feedback in the team, achieving synergy and active participation in product development.",
            "Achieved 4.2/5 in internal performance, with positive feedback from peers, supervisors, and clients for implemented improvements.",
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
            "Developed a metrics dashboard with interactive charts, integrated REST APIs and objectives, ensuring quality, maintainability, and UI/UX consistency for strategic decision-making.",
        achievements: [
            "Wrote clean code with unit and integration tests, achieving +76% coverage and ensuring system quality.",
            "Participated in meetings and dailys, fostering collaboration and good team relationships.",
            "Delivered features on time, meeting expectations and contributing value to the product during my training."
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
            "Developed web/mobile apps end-to-end, from architecture and APIs to UI/UX and production deployment, applying best practices, testing, optimization, and direct client communication.",
        achievements: [
            "Increased organic traffic by 50% by applying SEO strategies on developed platforms.",
            "Reduced average load time by 40%, improving user experience and system efficiency.",
            "Achieved an average of 4.12/5 stars with over 100 successful deliveries for different clients.",
            "Delivered tailored products aligned with business objectives, generating high impact and client satisfaction."
        ]
    },
];
