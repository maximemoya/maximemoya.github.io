import {Point} from "../Point";

export class LinearFunction {

    private static getDirectorCoefficientFrom2Points(left:Point, right:Point): number{
        return ((right.y - left.y)/(right.x - left.x))
    }
    static getEquationFrom2Points(left:Point, right:Point): (x:number)=>number {
        const a = this.getDirectorCoefficientFrom2Points(left, right)
        const b = left.y - (a * left.x)
        return (x:number)=> (a*x + b)
    }

}