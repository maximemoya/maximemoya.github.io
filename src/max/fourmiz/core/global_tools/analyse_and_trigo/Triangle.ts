import {Point} from "../Point";
import {LinearFunction} from "./LinearFunction";

export class Triangle {

    points: [Point, Point, Point]
    fx: ((x: number) => number)[] = []

    constructor(points: [Point, Point, Point]) {
        this.points = points
        this.points.sort((a, b) => (a.x - b.x))

        const f1 = LinearFunction.getEquationFrom2Points(this.points[0], this.points[1])
        if (f1 !== undefined) {
            this.fx.push(f1)
        }
        const f2 = LinearFunction.getEquationFrom2Points(this.points[1], this.points[2])
        if (f2 !== undefined) {
            this.fx.push(f2)
        }
        const f3 = LinearFunction.getEquationFrom2Points(this.points[2], this.points[0])
        if (f3 !== undefined) {
            this.fx.push(f3)
        }
    }

    isCollide(point: Point): boolean {
        this.points.sort((a, b) => (a.x - b.x))
        if (this.fx.length === 3) {
            if (point.x >= this.points[0].x && point.x <= this.points[this.points.length - 1].x) {
                if (point.x < this.points[1].x) {
                    const y1 = this.fx[0](point.x)
                    const y2 = this.fx[2](point.x)
                    const pointsY = [y1, y2].sort()
                    if (point.y >= pointsY[0] && point.y <= pointsY[1]) {
                        return true
                    }
                } else {
                    const y1 = this.fx[1](point.x)
                    const y2 = this.fx[2](point.x)
                    const pointsY = [y1, y2].sort()
                    if (point.y >= pointsY[0] && point.y <= pointsY[1]) {
                        return true
                    }
                }
            }
        } else if (this.fx.length === 2) {
            if (point.x >= this.points[0].x && point.x <= this.points[this.points.length - 1].x) {
                const y1 = this.fx[0](point.x)
                const y2 = this.fx[1](point.x)
                const pointsY = [y1, y2].sort()
                if (point.y >= pointsY[0] && point.y <= pointsY[1]) {
                    return true
                }
            }
        } else {
            if (point.x === this.points[0].x) {
                this.points.sort((a, b) => a.y - b.y)
                if (point.y >= this.points[0].y && point.y <= this.points[2].y) {
                    return true
                }
            }
        }
        return false
    }

}
