import Star from "./star";
import { getRandomBias } from "../../utils/utils";

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

    createNewStar(star: HTMLImageElement): Star {
        let scale = getRandomBias(0.01, 0.6, 0.3, 1);
        let width = Math.round(star.width * scale);
        let height = Math.round(star.height * scale);
        let velocityVariation = getRandomBias(0.001, 0.9999, 0.001, 0.75);
        let velocityX = getRandomBias(0.01, 0.1, 0.05, 1);
        let velocityY = getRandomBias(0.01, 0.1, 0.05, 1);
        if (velocityVariation > 0.25 && velocityVariation < 0.5) {
            velocityX *= -1;
        } else if (velocityVariation > 0.25 && velocityVariation < 0.5) {
            velocityY *= -1;
        } else {
            velocityX *= -1;
            velocityY *= -1;
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
            star
        );
    }

    draw(ctx: CanvasRenderingContext2D): void {
        for (let i = 0; i < this.numberOfStars; i++) {
            for (let j = 0; j < this.numberOfStars; j++) {
                if (i !== j) {
                    ctx.beginPath();
                    ctx.moveTo(
                        this.starArray[i].x + this.starArray[i].width / 2,
                        this.starArray[i].y + this.starArray[i].height / 2
                    );
                    ctx.lineTo(
                        this.starArray[j].x + this.starArray[j].width / 2,
                        this.starArray[j].y + this.starArray[j].height / 2
                    );
                    ctx.strokeStyle = `rgba(254, 255, 224, ${Math.min(
                        this.starArray[i].alpha,
                        this.starArray[j].alpha
                    )})`;
                    ctx.stroke();
                }
            }
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
