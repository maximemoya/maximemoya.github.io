import {Point} from "../Point";

export class LinearFunction {

    private static getDirectorCoefficientFrom2Points(left: Point, right: Point): number | undefined {
        const deltaX = right.x - left.x
        return (deltaX === 0) ? undefined : ((right.y - left.y) / (right.x - left.x))
    }

    static getEquationFrom2Points(left: Point, right: Point): ((x: number) => number) | undefined {
        const a = this.getDirectorCoefficientFrom2Points(left, right)
        if (a === undefined) {
            return undefined
        } else {
            const b = left.y - (a * left.x)
            return (x: number) => (a * x + b)
        }
    }

}