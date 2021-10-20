import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import ProjectsI from "../interfaces/projectsI";

export const links: { id: string; text: string }[] = [
    {
        id: "aboutMe",
        text: "About Me",
    },
    {
        id: "myProjects",
        text: "My Projects",
    },
    {
        id: "contactMe",
        text: "Contact Me",
    },
];

export const socialIcons: { icon: JSX.Element; url: string }[] = [
    {
        icon: <FaGithub />,
        url: "https://github.com/BradyBassett",
    },
    {
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/brady-bassett-056453173/",
    },
    {
        icon: <FaTwitter />,
        url: "https://twitter.com/BradyBassett_",
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/bradydbassett/",
    },
    {
        icon: <FaFacebook />,
        url: "https://www.facebook.com/bradydbassett",
    },
];

export const aboutMeDescription: string =
    "Hello! My name is Brady Bassett, I love working with all things computers related, whether that be designing websites, building computers, or programming. I have always been interested in computers to some extent, since I was young, but I became addicted in 2017 when I saved up enough to build my first computer, and it's been uphill since then. Nowadays I am enrolled at WGU's Bachelors of Computer Science, with aspirations of becoming a software engieer.";

export const technologies: string[] = [
    "ReactJS",
    "JavaFX",
    "Java",
    "Python",
    "TypeScript",
    "TailwindCSS",
];

export const projects: ProjectsI[] = [
    {
        title: "Portfolio Website",
        description:
            "A personal website portfolio I designed using React, TypeScript and tailwindcss.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        repoUrl: "https://github.com/BradyBassett/Portfolio",
        webUrl: "https://bradybassett.me/",
    },
    {
        title: "Inventory System",
        description:
            "A school project where I was tasked with creating a simple GUI inventory system for a company in a given scenario.",
        technologies: ["Java", "JavaFX", "Scene Builder"],
        repoUrl: "https://github.com/BradyBassett/InventorySystem",
    },
    {
        title: "Class Roster",
        description:
            "A school project where I was tasked with creating a command-line class roster.",
        technologies: ["C++"],
        repoUrl: "https://github.com/BradyBassett/ClassRoster",
    },
    {
        title: "Simple ATM Application",
        description:
            "This is a simple command-line ATM application I created in order to get an understanding of object-oriented design.",
        technologies: ["Python"],
        repoUrl: "https://github.com/BradyBassett/Simple-ATM",
    },
    {
        title: "Laser Pointer",
        description:
            "A simple laser pointer controller arduino breadboard project that I created.",
        technologies: ["Python", "Arduino", "Processing.py"],
        repoUrl: "https://github.com/BradyBassett/Laser-Pointer",
    },
    {
        title: "A Year Worth Remembering",
        description:
            "This project is a website I designed to host my Phi Theta Kappa chapters end of the year project",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/BradyBassett/Portfolio-Website--OLD-",
        webUrl: "https://bradybassett.me/",
    },
];
