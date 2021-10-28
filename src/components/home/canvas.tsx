import React, { useRef, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Star from "./star";
import { getRandomBias } from "../../utils/utils";
import star from "../../utils/images/star.png";

const Canvas: React.FC<{ className: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starRef = useRef<HTMLImageElement>(null);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        const canvas = canvasRef.current!;
        const star = starRef.current!;
        const ctx = canvas.getContext("2d")!;
        canvas.width = width;
        canvas.height = height;
        let animationFrameID: number;
        let starsArray: Star[] = [];
        // let numberOfStars = 1;
        let numberOfStars = (canvas.height * canvas.width) / 2500;

        const initStars = (): void => {
            for (let i = 0; i < numberOfStars; i++) {
                let scale = getRandomBias(0.01, 0.8, 0.3, 1);
                let width = Math.round(starRef.current!.width * scale);
                let height = Math.round(starRef.current!.height * scale);
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
                let x = getRandomBias(
                    0,
                    window.innerWidth - 18,
                    window.innerWidth / 2,
                    1
                );
                let y = getRandomBias(
                    0,
                    window.innerHeight - 18,
                    window.innerHeight / 2,
                    1
                );
                let alpha = getRandomBias(0.1, 0.5, 0.3, 1);

                starsArray.push(
                    new Star(
                        x,
                        y,
                        velocityX,
                        velocityY,
                        scale,
                        width,
                        height,
                        alpha,
                        star
                    )
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
        starsArray[0].draw(ctx);
        render();

        return () => window.cancelAnimationFrame(animationFrameID);
    }, [width, height]);

    return (
        <>
            <img src={star} alt="star" ref={starRef} className="hidden" />
            <canvas className={className} ref={canvasRef}></canvas>
        </>
    );
};

export default Canvas;
