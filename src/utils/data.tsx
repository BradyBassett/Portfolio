import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import ProjectsI from "../interfaces/projectsI";

export const links: { url: string; text: string }[] = [
    {
        url: "/",
        text: "About Me",
    },
    {
        url: "/",
        text: "My Projects",
    },
    {
        url: "/",
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
            "A personal website portfolio I designed to host all of my personal projects.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
        repoUrl: "https://github.com/BradyBassett/Portfolio-Website--OLD-",
        webUrl: "https://bradybassett.me/",
    },
];
