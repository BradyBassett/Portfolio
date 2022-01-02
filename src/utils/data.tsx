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
    "Hello! My name is Brady, I am a Dallas-Fort Worth based computer science student. Software Engineering is my passion, and I am always looking for the next new thing that I can create. I specialize in fullstack web development, though I am more than capable when it comes to desktop, or even mobile development. Please feel free to stay awhile, and contact me if you have any offers or just want to say hi!";

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
            "This is what you are looking at right now! My goal with this website was to put myself on display, (not in a weird way), and to show all that I have to offer as a developer.",
        technologies: ["React", "Tailwind CSS", "TypeScript"],
        repoUrl: "https://github.com/BradyBassett/Portfolio",
        webUrl: "https://bradybassett.me/",
    },
    {
        title: "Inventory System",
        description:
            "A school project where I was tasked with creating a simple GUI inventory system in a given scenario. I believe that this could certainly be scaled up, potentially including some sort of database functionality.",
        technologies: ["Java", "JavaFX", "Scene Builder"],
        repoUrl: "https://github.com/BradyBassett/InventorySystem",
    },
    {
        title: "Class Roster",
        description:
            "A school project where I was given the assignment creating a CLI class roster. I feel like this project really helped cement my understanding of both object-oriented design and memory management in C++.",
        technologies: ["C++"],
        repoUrl: "https://github.com/BradyBassett/ClassRoster",
    },
    {
        title: "Simple ATM Application",
        description:
            "This is a simple CLI ATM application. I wanted to use this project to teach myself the basics of object-oriented design, and though it's not perfect by any means, I certainly learned a lot from it.",
        technologies: ["Python"],
        repoUrl: "https://github.com/BradyBassett/Simple-ATM",
    },
    {
        title: "Laser Pointer",
        description:
            "A simple laser pointer controller arduino breadboard project that I created. I used this project as a way to get my feet wet in hardware development.",
        technologies: ["Python", "Arduino", "Processing.py"],
        repoUrl: "https://github.com/BradyBassett/Laser-Pointer",
    },
    {
        title: "A Year Worth Remembering",
        description:
            "This project is a website I designed to host my Phi Theta Kappa chapter's end of the year project. This was my first ever attempt at creating a website from scratch. This project is responsible for teaching much of what would be my web development foundation.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/BradyBassett/A-Year-Worth-Remembering",
        webUrl: "https://ptkcollegeproject.github.io/a-year-worth-remembering/",
    },
];
