import {MyMapDimension} from "./MyMapClass";
import {Point} from "../global_tools/Point";

export interface SpriteBoxConstructor {
    positionLeftX: number
    positionBottomY: number
    widthScreenPercent: number
    heightScreenPercent: number
}

export class SpriteBox {
    widthScreenPercent: number
    heightScreenPercent: number

    pointTopLeft: Point
    private pointBuffer: Point = new Point(0, 0)
    // todo make getPoint() using pointBuffer and referring to pointTopLeft =>
    pointBottomLeft: Point
    pointBottomRight: Point

    constructor(spriteBoxConstructor: SpriteBoxConstructor = {
        positionLeftX: 0,
        positionBottomY: 0,
        widthScreenPercent: 0,
        heightScreenPercent: 0
    }) {
        const positionLeftX = spriteBoxConstructor.positionLeftX
        const positionRightX = spriteBoxConstructor.positionLeftX + spriteBoxConstructor.widthScreenPercent
        const positionBottomY = spriteBoxConstructor.positionBottomY
        const positionTopY = spriteBoxConstructor.positionBottomY - spriteBoxConstructor.heightScreenPercent

        this.pointTopLeft = new Point(positionLeftX, positionTopY)
        // this.pointTopRight = new Point(positionRightX, positionTopY)
        this.pointBottomLeft = new Point(positionLeftX, positionBottomY)
        this.pointBottomRight = new Point(positionRightX, positionBottomY)

        this.widthScreenPercent = spriteBoxConstructor.widthScreenPercent
        this.heightScreenPercent = spriteBoxConstructor.heightScreenPercent

    }

    getPointTopRight(): Point {
        this.pointBuffer.x = this.pointTopLeft.x + this.widthScreenPercent
        this.pointBuffer.y = this.pointTopLeft.y
        return this.pointBuffer
    }

    isOnMap(mapDimension: MyMapDimension): boolean {
        return !(this.pointTopLeft.x < 0
            || this.getPointTopRight().x > mapDimension.sizeXScreenPercent
            || this.pointBottomLeft.y < 0
            || this.pointBottomLeft.y > mapDimension.sizeYScreenPercent);
    }

    moveToLeft(x: number) {
        this.pointTopLeft.x -= x
        this.pointBottomLeft.x -= x
        this.pointBottomRight.x -= x
    }

    moveToRight(x: number) {
        this.pointTopLeft.x += x
        this.pointBottomLeft.x += x
        this.pointBottomRight.x += x
    }

    moveToUp(y: number) {
        this.pointTopLeft.y -= y
        this.pointBottomLeft.y -= y
        this.pointBottomRight.y -= y
    }

    moveToDown(y: number) {
        this.pointTopLeft.y += y
        this.pointBottomLeft.y += y
        this.pointBottomRight.y += y
    }

}