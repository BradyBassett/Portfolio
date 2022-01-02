import React, { useRef, useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Star from "./star";
import { getRandomBias } from "../../utils/utils";
import star from "../../utils/images/star.png";
import Constellation from "./constellation";

const Canvas: React.FC<{ className: string }> = ({ className }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starRef = useRef<HTMLImageElement>(null);
    const { width, height } = useWindowDimensions();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current!;
        canvas.width = width;
        canvas.height = height;
        const star = starRef.current!;
        const ctx = canvas.getContext("2d")!;
        const starsArray: Star[] = [];
        const constellationArray: Constellation[] = [];
        const numberOfStars = Math.floor((canvas.height * canvas.width) / 2500);
        let numberOfConstellations: 3 | 5;
        if (canvas.width < 1024) {
            numberOfConstellations = 3;
        } else {
            numberOfConstellations = 5;
        }
        let animationFrameID: number;

        const initStars = (): void => {
            for (let i = 0; i < numberOfStars; i++) {
                let scale = getRandomBias(0.01, 0.6, 0.3, 1);
                let width = Math.round(starRef.current!.width * scale);
                let height = Math.round(starRef.current!.height * scale);
                let velocityVariation = getRandomBias(
                    0.001,
                    0.9999,
                    0.001,
                    0.75
                );
                let velocityX = getRandomBias(0.0001, 0.1, 0.001, 1);
                let velocityY = getRandomBias(0.0001, 0.1, 0.001, 1);
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
                    canvas.width - 18,
                    canvas.width / 2,
                    1
                );
                let y = getRandomBias(
                    0,
                    canvas.height - 18,
                    canvas.height / 2,
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
                        star,
                        false
                    )
                );
            }
        };

        const newConstellation = (): Constellation => {
            const numStarsContained = Math.ceil(getRandomBias(2, 5, 4, 1));
            const x1 = getRandomBias(
                0,
                canvas.width - 300,
                canvas.width / 2,
                0.4
            );
            const x2 = x1 + 300;
            const y1 = getRandomBias(
                0,
                canvas.height - 300,
                canvas.height / 2,
                0.4
            );
            const y2 = y1 + 300;

            return new Constellation(numStarsContained, x1, x2, y1, y2);
        };

        const newConstellationStars = (parent: Constellation): void => {
            for (let i = 0; i < parent.numberOfStars; i++) {
                parent.starArray.push(parent.createNewStar(star));
            }
        };

        const initConstellations = (): void => {
            for (let i = 0; i < numberOfConstellations; i++) {
                constellationArray.push(newConstellation());
                newConstellationStars(constellationArray[i]);
            }
        };

        const render = () => {
            animationFrameID = window.requestAnimationFrame(render);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            for (let i = 0; i < starsArray.length; i++) {
                starsArray[i].update(ctx);
            }
            for (let i = 0; i < constellationArray.length; i++) {
                if (constellationArray[i].numberOfStars === 0) {
                    let replacement = newConstellation();
                    newConstellationStars(replacement);
                    constellationArray.splice(i, 1, replacement);
                }
                for (let j = 0; j < constellationArray[i].numberOfStars; j++) {
                    constellationArray[i].starArray[j].update(ctx);
                }
                constellationArray[i].update(ctx);
            }
        };
        if (isLoaded) {
            initStars();
            initConstellations();
        }
        render();
        return () => window.cancelAnimationFrame(animationFrameID);
    }, [width, height, isLoaded]);

    return (
        <>
            <img
                src={star}
                alt="star"
                ref={starRef}
                onLoad={() => setIsLoaded(true)}
                className="hidden"
            />
            <canvas className={className} ref={canvasRef}></canvas>
        </>
    );
};

export default Canvas;
