import React from "react";
import { socialIcons } from "../utils/data";

const SideElement: React.FC = () => {
    return (
        <div className="hidden lg:block text-gray-350 text-lg xl:text-xl">
            <div className="fixed flex-row left-11 bottom-0 z-10">
                <ul className="pb-5">
                    {socialIcons.map((iconElement, index) => {
                        const { icon, url } = iconElement;
                        return (
                            <li
                                className="mt-5 hover:text-green-500 hover:transform hover:translate-x-1 transition-all"
                                key={index}
                            >
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className="ml-2 w-px bg-gray-350 h-32"></div>
            </div>
            <div className="fixed right-10 bottom-32 pb-5 z-10">
                <a
                    href="mailto:bradydbassett@gmail.com"
                    className="vertical-rl hover:text-green-500 hover:animate-pulse transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    bradydbassett@gmail.com
                </a>
            </div>
            <div className="fixed w-px bg-gray-350 right-14 bottom-0 h-32 z-10"></div>
        </div>
    );
};

export default SideElement;
