export interface Project {
    title: string;
    description: string;
    link: string;
    image: string | null;
    tags: string[];
}
export const PROJECTS: Project[] = [
    {
        slug: "",
        title: "Autonomous Multi-Agent System",
        description:
            "A demo of our multi-agent phone assistant handling restaurant reservations in real time. See how the system manages bookings seamlessly and efficiently!",
        link: "",
        image: null,
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
     {
        title: "Carpenter Composer: Command line Interface",
        description:
            "Figma-to-code automation CLI bridging the gap between design and development, improving product quality by streamlining collaboration across teams that speak different 'languages'.",
        link: "",
        image: null,
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
    {
        title: "Viuti 2.0",
        description:
            "Next-generation business management CMS, expanding capabilities and simplifying functionality for more powerful client use, including a training platform for seamless adoption.",
        link: "",
        image: "/images/projects/prickly.jpg",
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
    {
        title: "Viutify",
        description:
            "Business management CMS integrating resources, finance, and operations to optimize and streamline daily processes.",
        link: "",
        image: "/images/projects/viuti-2.0.jpg",
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
    {
        title: "Chapter lead challange",
        description:
            "Task management platform with project organization, featuring an authentication system. The app boasts an intuitive interface and provides administrative tools for renaming and deleting projects",
        link: "",
        image: null,
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
    {
        title: "Socio sostenible",
        description:
            "SocioSostenible helps organizations adopt sustainable practices aligned with UN SDGs by using AI to provide tailored solutions, easing the path to recognized licenses and certifications.",
        link: "",
        image: "/images/projects/socio-sostenible.jpg",
        tags: ["React", "Redux", "Firebase", "Material-UI"],
    },
];