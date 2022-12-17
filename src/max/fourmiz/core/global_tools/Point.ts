export enum PointLocation {
    Inside,
    Left, Right, Up, Down,
    UpLeft, UpRight, DownLeft, DownRight,
}

export class Point {

    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    locationOnXDirection(comparedPoint: Point): PointLocation {

        if (this.x < comparedPoint.x) {
            return PointLocation.Left
        } else if (this.x > comparedPoint.x) {
            return PointLocation.Right
        } else {
            return PointLocation.Inside
        }
    }

    locationOnYDirection(comparedPoint: Point): PointLocation {

        if (this.y < comparedPoint.y) {
            return PointLocation.Up
        } else if (this.y > comparedPoint.y) {
            return PointLocation.Down
        } else {
            return PointLocation.Inside
        }
    }

    pointLocation8Directions(comparedPoint: Point): PointLocation {

        if (this.x < comparedPoint.x) {

            if (this.y < comparedPoint.y) {
                return PointLocation.UpLeft
            } else if (this.y > comparedPoint.y) {
                return PointLocation.DownLeft
            } else {
                return PointLocation.Left
            }

        } else if (this.x > comparedPoint.x) {

            if (this.y < comparedPoint.y) {
                return PointLocation.UpRight
            } else if (this.y > comparedPoint.y) {
                return PointLocation.DownRight
            } else {
                return PointLocation.Right
            }

        } else {

            if (this.y < comparedPoint.y) {
                return PointLocation.Up
            } else if (this.y > comparedPoint.y) {
                return PointLocation.Down
            } else {
                return PointLocation.Inside
            }

        }
    }

    locationOnXBetween2Points(left: Point, right: Point): PointLocation {
        if (this.x < left.x) {
            return PointLocation.Left
        } else if (this.x > right.x) {
            return PointLocation.Right
        } else {
            return PointLocation.Inside
        }
    }

    locationOnYBetween2Points(up: Point, down: Point): PointLocation {
        if (this.y < up.y) {
            return PointLocation.Up
        } else if (this.y > down.y) {
            return PointLocation.Down
        } else {
            return PointLocation.Inside
        }
    }

}