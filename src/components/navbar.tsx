import React, { useState, useEffect } from "react";
import { links } from "../utils/data";
import useWindowDimensions from "../hooks/useWindowDimensions";
import resume from "../utils/Brady-Bassett-Resume.pdf";
import logo from "../utils/images/Portfolio Logo.png";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
    const { width } = useWindowDimensions();
    const [burgerActive, setBurgerActive] = useState(false);
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [burgerClasses, setBurgerClasses] = useState("h-20");
    const [transparent, setTransparent] = useState("");
    const [toggleY, setToggleY] = useState("");
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        if (width < 768) {
            setBurgerActive(true);
            setToggleY("transform translate-y-0");
        } else {
            setBurgerActive(false);
            setBurgerClicked(false);
        }
    }, [width]);

    useEffect(() => {
        const onScroll = () => {
            let currentPos = window.pageYOffset;

            if (!burgerActive) {
                if (currentPos > scrollTop) {
                    setToggleY("transform -translate-y-full");
                } else {
                    setToggleY("transform translate-y-0");
                }
            }

            if (currentPos === 0) {
                setTransparent("bg-opacity-0 shadow-none");
            } else {
                setTransparent("bg-opacity-1 shadow-lg");
            }

            if (currentPos <= 0) {
                setScrollTop(0);
            } else {
                setScrollTop(currentPos);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop, burgerActive]);

    useEffect(() => {
        if (burgerClicked) {
            document.body.classList.add("overflow-hidden");
            setBurgerClasses("h-screen");
            setTransparent("bg-opacity-1 shadow-lg");
        } else {
            document.body.classList.remove("overflow-hidden");
            setBurgerClasses("h-20");
            window.pageYOffset === 0 &&
                setTransparent("bg-opacity-0 shadow-none");
        }
    }, [burgerClicked]);

    return (
        <nav
            className={`${toggleY}  ${transparent} ${burgerClasses} bg-gray-800 fixed z-10 w-full transition-all linear
            ${burgerActive ? "duration-1000" : "duration-700"}`}
        >
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >
                <img
                    src={logo}
                    alt="Brady Bassett Logo"
                    className="absolute h-14 mt-3 ml-3 z-20 md:ml-4 lg:ml-6 hover:h-16 hover:mt-2 transition-all ease-out duration-300 cursor-pointer"
                />
            </Link>
            <button
                onClick={() => setBurgerClicked(!burgerClicked)}
                className="absolute right-5 top-7 z-20 select-none md:hidden"
            >
                <div
                    className={`h-1 bg-gray-400 m-1 transition-all ease-in duration-100 ${
                        burgerClicked
                            ? "w-9 transform rotate-45 translate-y-2 translate-x-1"
                            : "w-7"
                    }`}
                ></div>
                <div
                    className={`w-7 h-1 bg-gray-400 m-1 transition-none ${
                        burgerClicked ? "hidden" : ""
                    }`}
                ></div>
                <div
                    className={`h-1 bg-gray-400 m-1 transition-all ease-in duration-100 ${
                        burgerClicked
                            ? "w-9 transform -rotate-45 translate-x-1"
                            : "w-7"
                    }`}
                ></div>
            </button>
            <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 opac ${
                    burgerActive
                        ? "transition-all linear duration-1500"
                        : "transition-none"
                }
            ${
                burgerClicked
                    ? "-translate-y-1/2 "
                    : "-translate-y-full opacity-0"
            }
                md:opacity-100 md:translate-y-0 md:translate-x-0 md:top-0 md:left-0 md:w-full`}
            >
                <ul className="md:flex md:w-2/3 xl:w-1/2 2xl:w-1/3 md:justify-around md:mx-auto md:py-6">
                    {links.map((link, index) => {
                        const { id, text } = link;
                        return (
                            <li key={index}>
                                <Link
                                    activeClass="active"
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    <div className="text-gray-400 flex text-xl py-16 md:py-0 hover:text-green-400 hover:text-2xl transition-all ease-out duration-200 cursor-pointer">
                                        <p className="text-green-400 pr-2">
                                            [{index}]
                                        </p>
                                        <p>{text}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="py-16 flex justify-center md:py-0 md:absolute md:right-0 md:top-0 md:mr-6 xl:mr-8 md:mt-4 hover:mt-3 md:transition-all ease-out duration-200">
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-xl border-2 rounded-xl border-green-400 py-2 px-2
                    hover:bg-gray-700 hover:border-green-600 hover:py-3 hover:px-3 hover:animate-pulse transition-all ease-out duration-200"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
