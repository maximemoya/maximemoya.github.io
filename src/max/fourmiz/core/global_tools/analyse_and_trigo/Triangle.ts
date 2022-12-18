import {Point} from "../Point";
import {LinearFunction} from "./LinearFunction";

export class Triangle {

    points: [Point, Point, Point]
    fx: ((x:number)=>number)[] = []

    constructor(points: [Point, Point, Point]) {
        this.points = points
        this.points.sort((a,b) => (a.x - b.x))
        this.fx.push(LinearFunction.getEquationFrom2Points(this.points[0], this.points[1]))
        this.fx.push(LinearFunction.getEquationFrom2Points(this.points[1], this.points[2]))
        this.fx.push(LinearFunction.getEquationFrom2Points(this.points[2], this.points[0]))
    }

    isCollide(point:Point):boolean{
        if (point.x >= this.points[0].x && point.x <= this.points[this.points.length-1].x){
            if (point.x < this.points[1].x){
                const y1 = this.fx[0](point.x)
                const y2 = this.fx[2](point.x)
                const pointsY = [y1,y2].sort()
                if(point.y >= pointsY[0] && point.y <= pointsY[1]){
                    return true
                }
            }
            else {
                const y1 = this.fx[1](point.x)
                const y2 = this.fx[2](point.x)
                const pointsY = [y1,y2].sort()
                if(point.y >= pointsY[0] && point.y <= pointsY[1]){
                    return true
                }
            }
        }
        return false
    }

}
