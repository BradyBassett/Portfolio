import { useState, useEffect } from "react";
import DimensionsI from "../interfaces/dimensionsI";

const getWindowDimensions = (): DimensionsI => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
};

const useWindowDimensions = (): DimensionsI => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        const handleResize = (): void => {
            setWindowDimensions(getWindowDimensions());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
