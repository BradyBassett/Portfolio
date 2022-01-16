import React from "react";
import BoxButton from "../boxButton";
import Canvas from "./canvas";

const Home: React.FC = () => {
    return (
        <article className="relative h-screen w-screen" id="home">
            <section className="absolute top-1/5 sm:top-1/4 left-0 right-0 mx-auto w-fit">
                <div className="text-center px-auto">
                    <h1 className="text-green-500 font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl pb-2 animate-shine">
                        Brady Bassett
                    </h1>
                    <h2 className=" text-gray-300 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-2">
                        Software Engineer
                    </h2>
                </div>
                <p className="text-gray-400 text-center mx-1/5 sm:mx-1/4 lg:mx-3/10 xl:mx-5/16 2xl:mx-3/8">
                    I am a passionate Full Stack Software Engineer. I have
                    experience in developing Web and Desktop applications using
                    a mix of React, Node.js, Java and much more!
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
            <Canvas className="absolute top-0 left-0 -z-1" />
        </article>
    );
};

export default Home;
