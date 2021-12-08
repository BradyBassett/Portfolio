import React from "react";
import BoxButton from "../boxButton";
import Canvas from "./canvas";

const Home: React.FC = () => {
    return (
        <article className="relative h-screen" id="home">
            <section className="absolute top-1/4 mx-10 sm:mx-24 md:mx-20 lg:mx-40 xl:mx-72 2xl:mx-96">
                <h1 className="relative text-green-500 font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl pb-2 animate-shine">
                    Brady Bassett
                </h1>
                <h2 className=" text-gray-300 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-2">
                    Software Engineer
                </h2>
                <p className="text-gray-400 break-words sm:mr-3/16 lg:mr-5/16 xl:text-lg 2xl:mr-7/16">
                    Dallas-Fort Worth based computer science student. Currently
                    pursuing a Bachelor of Science Computer Science degree
                    through Western Governors University.
                </p>
            </section>
            <section>
                <BoxButton
                    className="absolute left-0 right-0 bottom-1/10 mx-auto w-auto"
                    text="Learn More"
                    goTo="aboutMe"
                    scroll={true}
                />
                <div className="absolute top-0 h-14 w-full bg-gradient-to-b from-gray-800"></div>
                <div className="absolute bottom-0 h-14 w-full bg-gradient-to-t from-gray-800"></div>
            </section>
            <Canvas className="absolute top-0 left-0 -z-1 filter blur-xs" />
        </article>
    );
};

export default Home;
