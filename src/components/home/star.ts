import { getRandomBias } from "../../utils/utils";

export default class Star {
    public color: string;
    public changeAlpha: number;
    public constellationFlag: boolean;

    constructor(
        public x: number,
        public y: number,
        public velocityX: number,
        public velocityY: number,
        public radius: number,
        public alpha: number
    ) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.radius = radius;
        this.alpha = alpha;
        this.color = "#FEFFE0";
        this.changeAlpha = getRandomBias(0.0003, 0.0008, 0.001, 1);
        if (Math.random() <= 0.05) {
            this.constellationFlag = true;
        } else {
            this.constellationFlag = false;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.radius * 2;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
    }

    update(ctx: CanvasRenderingContext2D) {
        if (
            this.x - this.radius > ctx.canvas.width ||
            this.x + this.radius < 0 ||
            this.y - this.radius > ctx.canvas.height ||
            this.y + this.radius < 0
        ) {
            this.x = getRandomBias(
                this.radius * 2,
                ctx.canvas.width - this.radius * 2,
                ctx.canvas.width - ctx.canvas.width / 4,
                0.7
            );
            this.y = getRandomBias(
                this.radius * 2,
                ctx.canvas.height - this.radius * 2,
                ctx.canvas.height / 2,
                1
            );
            this.alpha = 0.0001;
            this.changeAlpha = Math.abs(this.changeAlpha);
        }

        if (this.alpha >= 0.6) {
            this.changeAlpha *= -1;
        }
        if (this.alpha <= 0.001) {
            this.changeAlpha = Math.abs(this.changeAlpha);
            this.x = getRandomBias(
                this.radius * 2,
                ctx.canvas.width - this.radius * 2,
                ctx.canvas.width - ctx.canvas.width / 6,
                0.7
            );
            this.y = getRandomBias(
                this.radius * 2,
                ctx.canvas.height - this.radius * 2,
                ctx.canvas.height / 2,
                1
            );
        }
        if (ctx.canvas.width <= 768) {
            this.x += this.velocityX - 0.01;
        } else if (ctx.canvas.width > 768 && ctx.canvas.width <= 1024) {
            this.x += this.velocityX - 0.05;
        } else {
            this.x += this.velocityX - 0.1;
        }
        this.y += this.velocityY;
        this.alpha += this.changeAlpha;
        this.draw(ctx);
    }
}
