import Star from "./star";

export class Point {
    constructor(public x: number, public y: number, public userData: Star) {}
}

export class Rectangle {
    constructor(public x: number, public y: number, public w: number, public h: number) {}

    contains(point: Point): boolean {
        return (
            point.x >= this.x - this.w &&
            point.x <= this.x + this.w &&
            point.y >= this.y - this.h &&
            point.y <= this.y + this.h
        );
    }

    intersects(range: Rectangle): boolean {
        return !(
            range.x - range.w > this.x + this.w ||
            range.x + range.w < this.x - this.w ||
            range.y - range.h > this.y + this.h ||
            range.y + range.h < this.y - this.h
        );
    }
}

export class Circle {
    public rSquared: number;

    constructor(public x: number, public y: number, public r: number) {
        this.rSquared = this.r * this.r;
    }

    contains(point: Point): boolean {
        let d = Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2);
        return d <= this.rSquared;
    }

    intersects(range: Rectangle): boolean {
        let xDist = Math.abs(range.x - this.x);
        let yDist = Math.abs(range.y - this.y);

        let r = this.r;

        let w = range.w;
        let h = range.h;

        let edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);

        if (xDist > r + w || yDist > r + h) return false;

        if (xDist <= w || yDist <= h) return true;

        return edges <= this.rSquared;
    }
}

export class QuadTree {
    public points: Point[];
    public divided: boolean;
    public northeast: QuadTree | null;
    public northwest: QuadTree | null;
    public southeast: QuadTree | null;
    public southwest: QuadTree | null;

    constructor(public boundary: Rectangle, public capacity: number) {
        this.points = [];
        this.divided = false;
        this.northeast = null;
        this.northwest = null;
        this.southeast = null;
        this.southwest = null;
    }

    subdivide(): void {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w / 2;
        let h = this.boundary.h / 2;

        let ne = new Rectangle(x + w, y, w, h);
        this.northeast = new QuadTree(ne, this.capacity);
        let nw = new Rectangle(x, y, w, h);
        this.northwest = new QuadTree(nw, this.capacity);
        let se = new Rectangle(x + w, y + h, w, h);
        this.southeast = new QuadTree(se, this.capacity);
        let sw = new Rectangle(x, y + h, w, h);
        this.southwest = new QuadTree(sw, this.capacity);

        this.divided = true;
    }

    insert(point: Point): boolean | void {
        if (!this.boundary.contains(point)) {
            return false;
        }

        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        }

        if (!this.divided) {
            this.subdivide();
        }

        if (this.northeast && this.northwest && this.southeast && this.southwest) {
            if (
                this.northeast.insert(point) ||
                this.northwest.insert(point) ||
                this.southeast.insert(point) ||
                this.southwest.insert(point)
            ) {
                return true;
            }
        } else {
            throw new Error("!Subdivided quadrants are of type null!");
        }
    }

    query(range: Rectangle | Circle, found?: Point[]): Point[] {
        if (!found) {
            found = [];
        }

        if (!range.intersects(this.boundary)) {
            return found;
        }

        for (let p of this.points) {
            if (range.contains(p)) {
                found.push(p);
            }
        }
        if (this.northeast && this.northwest && this.southeast && this.southwest) {
            if (this.divided) {
                this.northwest.query(range, found);
                this.northeast.query(range, found);
                this.southwest.query(range, found);
                this.southeast.query(range, found);
            }
        }

        return found;
    }
}
