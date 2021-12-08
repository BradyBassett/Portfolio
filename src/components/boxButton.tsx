import React, { useState } from "react";
import BoxButtonIProps from "../interfaces/boxButtonIProps";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

const BoxButton: React.FC<BoxButtonIProps> = ({
    className,
    text,
    goTo,
    scroll,
}) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className={`${className} flex justify-center`}>
            <Link
                activeClass="active"
                to={goTo!}
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                className="text-2xl md:text-3xl text-green-400 cursor-pointer"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
            >
                <p className="border-2 rounded-lg border-green-400 p-2 hover:bg-gray-700 hover:p-3 md:p-3 md:hover:p-4 transition-all ease-out duration-200">
                    {text}
                </p>
                {isHovering && scroll && (
                    <FaAngleDown className="absolute left-0 right-0 mx-auto mt-3 animate-bounce" />
                )}
            </Link>
        </div>
    );
};

export default BoxButton;
