import React from "react";
import { socialIcons } from "../utils/data";

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex mt-20 justify-center">
                {socialIcons.map((icons, index) => {
                    const { icon, url } = icons;
                    return (
                        <a
                            href={url}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 px-4 hover:text-green-500
                        hover:transform hover:-translate-y-1 transition-all ease-out duration-200"
                        >
                            {icon}
                        </a>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <a
                    href="https://github.com/BradyBassett/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex my-3 text-gray-500 hover:animate-pulse"
                >
                    <p className="pr-2">Designed and built by </p>
                    <p className="text-green-500">Brady Bassett</p>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
