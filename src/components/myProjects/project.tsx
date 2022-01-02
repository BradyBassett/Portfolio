import React from "react";
import ProjectsI from "../../interfaces/projectsI";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Project: React.FC<{ projectData: ProjectsI }> = ({ projectData }) => {
    const { title, description, technologies, repoUrl, webUrl } = projectData;

    return (
        <li className="relative h-72 rounded-md bg-gray-750 px-5 py-5 shadow-lg hover:transform hover:-translate-y-2 hover:shadow-2xl transition-all ease-linear">
            <div className="absolute flex right-0 mr-5 text-2xl text-gray-400">
                {webUrl && (
                    <a href={webUrl} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="hover:text-green-400 hover:animate-bounce" />
                    </a>
                )}
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="ml-2 hover:text-green-400 hover:animate-bounce" />
                </a>
            </div>
            <div className="mt-6">
                <h2 className="text-gray-300 text-lg">{title}</h2>
                <p className="text-gray-400 lg:mr-10">{description}</p>
                <ul className="absolute flex bottom-5 text-xs text-green-600">
                    {technologies.map((technology, index) => {
                        return (
                            <li className="pr-3" key={index}>
                                {technology}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};

export default Project;
