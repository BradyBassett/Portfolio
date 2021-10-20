import React, { useRef, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Star from "./star";
import { getRandomBias } from "../../utils/utils";
// import { createTextSpanFromBounds } from "typescript";

const Canvas: React.FC<{ className: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = width;
        canvas.height = height;
        let animationFrameID: number;
        let starsArray: Star[] = [];
        let numberOfStars = (canvas.height * canvas.width) / 2000;

        const initStars = (): void => {
            for (let i = 0; i < numberOfStars; i++) {
                let radius = getRandomBias(0.1, 4, 0.1, 1);
                let x = getRandomBias(
                    radius * 2,
                    window.innerWidth - radius * 2,
                    window.innerWidth / 2,
                    1
                );
                let y = getRandomBias(
                    radius * 2,
                    window.innerHeight - radius * 2,
                    window.innerHeight / 2,
                    1
                );
                let velocityVariation = getRandomBias(
                    0.001,
                    0.9999,
                    0.001,
                    0.75
                );
                let velocityX = getRandomBias(0.01, 0.1, 0.05, 1);
                let velocityY = getRandomBias(0.01, 0.1, 0.05, 1);
                if (velocityVariation > 0.25 && velocityVariation < 0.5) {
                    velocityX *= -1;
                } else if (
                    velocityVariation > 0.25 &&
                    velocityVariation < 0.5
                ) {
                    velocityY *= -1;
                } else {
                    velocityX *= -1;
                    velocityY *= -1;
                }
                let alpha = getRandomBias(0.1, 0.5, 0.3, 1);

                starsArray.push(
                    new Star(x, y, velocityX, velocityY, radius, alpha)
                );
            }
        };

        const render = () => {
            animationFrameID = window.requestAnimationFrame(render);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            /* TODO
             * render a specified amount of stars that are place in set configurations with lines connecting each star
             * cause each star to have slightly varying velocities
             */
            for (let i = 0; i < starsArray.length; i++) {
                starsArray[i].update(ctx);
            }
        };
        initStars();
        render();

        return () => window.cancelAnimationFrame(animationFrameID);
    }, [width, height]);

    return <canvas className={className} ref={canvasRef}></canvas>;
};

export default Canvas;
