import React from 'react'
import ProjectsI from '../../interfaces/projectsI'

const Project: React.FC<{projectData: ProjectsI}> = ({projectData}) => {
    const {title, description, technologies, repoUrl, webUrl} = projectData;

    return (
        <li className=" rounded-sm">
            <p>{title}</p>
            <p>{description}</p>
            <p>{technologies}</p>
            <p>{repoUrl}</p>
            <p>{webUrl}</p>
        </li>
    )
}

export default Project
