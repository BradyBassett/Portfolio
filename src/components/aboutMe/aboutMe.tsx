import React from "react";
import { aboutMeDescription } from "../../utils/data";
import headShot from "../../utils/images/Headshot.jpeg";
import BoxButton from "../boxButton";
import TechnologyList from "./technologyList";


const AboutMe: React.FC<{ index: number }> = ({ index }) => {
    return (
        <article className="mx-6 my-20 md:mx-16 md:my-36 lg:mx-32 lg:my-52 xl:mx-52 2xl:mx-80">
            <span className="flex text-2xl lg:text-3xl 2xl:text-4xl">
                <h1 className="pr-1 text-green-400">[{index}]</h1>
                <h1 className="text-gray-300">About Me</h1>
            </span>
            <div className="md:flex">
                <section>
                    <p className="text-gray-400 pt-4">{aboutMeDescription}</p>
                    <TechnologyList />
                </section>
                <img
                    className="h-96 rounded-xl mx-auto md:ml-8"
                    src={headShot}
                    alt="Personal Headshot"
                />
            </div>
            <BoxButton className="mt-20 md:mt-36 lg:my-48" text="See my Projects" goTo="/" scroll={true} />
        </article>
    );
};

export default AboutMe;
