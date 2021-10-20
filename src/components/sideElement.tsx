import React from "react";
import { socialIcons } from "../utils/data";

const SideElement: React.FC<{ position: string }> = ({ position }) => {
    return (
        <div className="fixed z-10">
            {position === "left" ? (
                <ul>
                    {socialIcons.map((iconElement, index) => {
                        const { icon, url } = iconElement;
                        return <li key={index}>{icon}</li>;
                    })}
                </ul>
            ) : (
                <h2>bradydbassett@gmail.com</h2>
            )}
            <hr className="w-px h-1/6 bg-gray-300" />
        </div>
    );
};

export default SideElement;
