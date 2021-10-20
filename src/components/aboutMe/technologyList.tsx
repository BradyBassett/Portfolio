import React from "react";
import { technologies } from "../../utils/data";
import { FaAngleRight } from "react-icons/fa";

const TechnologyList = () => {
    return (
        <section className="text-gray-400 my-4">
            <p>Here are some technologies I have used recently.</p>
            <ul className="grid grid-cols-3 col-span-1 grid-rows-2 row-span-1 grid-flow-col gap-2 pt-2 xl:mr-52">
                {technologies.map((technology, index) => {
                    return (
                        <li
                            className="flex text-sm w-auto lg:text-base"
                            key={index}
                        >
                            <FaAngleRight className="mt-1 text-green-400" />
                            <p className="hover:text-green-400 transition-all ease-in duration-75">
                                {technology}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default TechnologyList;
