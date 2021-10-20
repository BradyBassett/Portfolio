import React from "react";
import { projects } from "../../utils/data";
import BoxButton from "../boxButton";
import Project from "./project";

const MyProjects: React.FC<{ index: number }> = ({ index }) => {
    return (
        <article className="my-20 md:my-36 lg:my-52" id="myProjects">
            <span className="flex justify-center text-2xl lg:text-3xl 2xl:text-4xl">
                <h1 className="pr-1 text-green-400">[{index}]</h1>
                <h1 className="text-gray-300">My Projects</h1>
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto gap-5 mt-20 mx-12 py-5 lg:mx-32 lg:gap-6 xl:mx-48">
                {projects.map((project, index) => {
                    return <Project projectData={project} key={index} />;
                })}
            </ul>
            <BoxButton
                className="mt-20 md:my-36 lg:my-52"
                text="Contact Me"
                goTo="/"
                scroll={true}
            />
        </article>
    );
};

export default MyProjects;
