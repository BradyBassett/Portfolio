import React from "react";

const MyProjects: React.FC<{ index: number }> = ({ index }) => {
    return (
        <article className="flex justify-center my-20 md:my-36 lg:my-52">
            <span className="flex text-2xl lg:text-3xl 2xl:text-4xl">
                <h1 className="pr-1 text-green-400">[{index}]</h1>
                <h1 className="text-gray-300">My Projects</h1>
            </span>
            <ul>{}</ul>
        </article>
    );
};

export default MyProjects;
