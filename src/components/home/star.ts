import { getRandomBias } from "../../utils/utils";

export default class Star {
    public color: string;
    public changeAlpha: number;

    constructor(
        public x: number,
        public y: number,
        public velocityX: number,
        public velocityY: number,
        public scale: number,
        public width: number,
        public height: number,
        public alpha: number,
        public star: HTMLImageElement,
        public inConstellation: boolean
    ) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.scale = scale;
        this.alpha = alpha;
        this.star = star;
        this.color = "#FEFFE0";
        this.changeAlpha = getRandomBias(0.0001, 0.0004, 0.001, 1);
        this.inConstellation = inConstellation;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.star, this.x, this.y, this.width, this.height);
    }

    update(ctx: CanvasRenderingContext2D): void {
        if (!this.inConstellation) {
            if (
                this.x - this.width > ctx.canvas.width ||
                this.x + this.width * this.scale < 0 ||
                this.y - this.height * this.scale > ctx.canvas.height ||
                this.y + this.height * this.scale < 0
            ) {
                this.x = getRandomBias(
                    this.width,
                    ctx.canvas.width - this.width,
                    ctx.canvas.width - ctx.canvas.width / 4,
                    0.7
                );
                this.y = getRandomBias(
                    this.height,
                    ctx.canvas.height - this.height,
                    ctx.canvas.height / 2,
                    1
                );
                this.alpha = 0.0001;
                this.changeAlpha = Math.abs(this.changeAlpha);
            }
        }

        if (this.alpha >= 0.6) {
            this.changeAlpha *= -1;
        }
        if (this.alpha <= 0.001) {
            this.changeAlpha = Math.abs(this.changeAlpha);
            this.x = getRandomBias(
                this.width,
                ctx.canvas.width - this.width,
                ctx.canvas.width - ctx.canvas.width / 6,
                0.7
            );
            this.y = getRandomBias(
                this.height,
                ctx.canvas.height - this.height,
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
