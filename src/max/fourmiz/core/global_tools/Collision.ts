import {SpriteBox} from "../map/SpriteBox";
import {PointLocation} from "./Point";

export abstract class Collision {

    static isColliding(reference: SpriteBox, compared: SpriteBox): boolean {

        const rightPointLocationOnX = reference.getPointTopRight()
            .locationOnXBetween2Points(compared.pointTopLeft, compared.getPointTopRight())

        if (rightPointLocationOnX === PointLocation.Left) {
            return false
        }
        else {

            const leftPointLocationOnX = reference.pointTopLeft
                .locationOnXBetween2Points(compared.pointTopLeft, compared.getPointTopRight())

            if (leftPointLocationOnX === PointLocation.Right){
                return false
            }

            const topPointLocationOnY = reference.pointTopLeft
                .locationOnYBetween2Points(compared.pointTopLeft, compared.pointBottomLeft)

            if (topPointLocationOnY === PointLocation.Down){
                return false
            }

            else {

                const bottomPointLocationOnY = reference.pointBottomLeft
                    .locationOnYBetween2Points(compared.pointTopLeft, compared.pointBottomLeft)

                if (bottomPointLocationOnY === PointLocation.Up){
                    return false
                }

            }

            return true
        }

    }

}