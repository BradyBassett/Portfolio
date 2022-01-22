import Star from "./star";
import { getRandomBias } from "../../utils/utils";
import { createTextChangeRange } from "typescript";

export default class Constellation {
    public starArray: Star[];
    constructor(
        public numberOfStars: number,
        public x1: number,
        public x2: number,
        public y1: number,
        public y2: number
    ) {
        this.numberOfStars = numberOfStars;
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.starArray = [];
    }

    createNewStar(star: HTMLImageElement, ctx: CanvasRenderingContext2D): Star {
        let scale = getRandomBias(0.01, 0.6, 0.3, 1);
        let width = Math.round(star.width * scale);
        let height = Math.round(star.height * scale);
        let velocityVariation = getRandomBias(0.001, 0.9999, 0.001, 0.75);
        let velocityX: number;
        let velocityY: number;
        if (ctx.canvas.width < 768) {
            velocityX = getRandomBias(0.001, 0.5, 0.01, 1);
            velocityY = getRandomBias(0.001, 0.5, 0.01, 1);
        } else {
            velocityX = getRandomBias(0.0001, 0.1, 0.001, 1);
            velocityY = getRandomBias(0.0001, 0.1, 0.001, 1);
        }
        let x = getRandomBias(this.x1, this.x2, (this.x1 + this.x2) / 2, 1);
        let y = getRandomBias(this.y1, this.y2, (this.y1 + this.y2) / 2, 1);
        let alpha = 0.002;

        return new Star(
            x,
            y,
            velocityX,
            velocityY,
            scale,
            width,
            height,
            alpha,
            star,
            true
        );
    }

    pathCreation(
        ctx: CanvasRenderingContext2D,
        index: number,
        lineToIndex: number
    ): void {
        lineToIndex++;

        if (lineToIndex !== this.numberOfStars) {
            ctx.globalAlpha = Math.min(
                this.starArray[index].alpha,
                this.starArray[lineToIndex].alpha
            );
            ctx.beginPath();
            ctx.moveTo(
                this.starArray[index].x + this.starArray[index].width / 2,
                this.starArray[index].y + this.starArray[index].height / 2
            );
            ctx.lineTo(
                this.starArray[lineToIndex].x +
                    this.starArray[lineToIndex].width / 2,
                this.starArray[lineToIndex].y +
                    this.starArray[lineToIndex].height / 2
            );
            ctx.strokeStyle = "rgba(254, 255, 224)";
            ctx.stroke();

            this.pathCreation(ctx, index, lineToIndex);
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.numberOfStars; i++) {
            let lineToIndex = i;
            this.pathCreation(ctx, i, lineToIndex);
        }
    }

    update(ctx: CanvasRenderingContext2D): void {
        for (let star of this.starArray) {
            if (star.alpha <= 0.001) {
                this.starArray.splice(this.starArray.indexOf(star), 1);
                this.numberOfStars--;
            }
        }
        this.draw(ctx);
    }
}
