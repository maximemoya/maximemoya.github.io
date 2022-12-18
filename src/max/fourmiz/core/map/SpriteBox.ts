import {MyMapDimension} from "./MyMapClass";
import {Point} from "../global_tools/Point";

export interface SpriteBoxConstructor {
    positionLeftX: number
    positionBottomY: number
    widthScreenPercent: number
    heightScreenPercent: number
}

export class SpriteBox {

    pointTopLeft: Point
    private pointBuffer: Point = new Point(0, 0)
    widthScreenPercent: number
    heightScreenPercent: number

    constructor(spriteBoxConstructor: SpriteBoxConstructor = {
        positionLeftX: 0,
        positionBottomY: 0,
        widthScreenPercent: 0,
        heightScreenPercent: 0
    }) {
        const positionLeftX = spriteBoxConstructor.positionLeftX
        const positionTopY = spriteBoxConstructor.positionBottomY - spriteBoxConstructor.heightScreenPercent

        this.pointTopLeft = new Point(positionLeftX, positionTopY)

        this.widthScreenPercent = spriteBoxConstructor.widthScreenPercent
        this.heightScreenPercent = spriteBoxConstructor.heightScreenPercent
    }

    getPointTopRight(): Point {
        this.pointBuffer.x = this.pointTopLeft.x + this.widthScreenPercent
        this.pointBuffer.y = this.pointTopLeft.y
        return this.pointBuffer
    }

    getPointBottomLeft(): Point {
        this.pointBuffer.x = this.pointTopLeft.x
        this.pointBuffer.y = this.pointTopLeft.y + this.heightScreenPercent
        return this.pointBuffer
    }
    getPointBottomRight(): Point {
        this.pointBuffer.x = this.pointTopLeft.x + this.widthScreenPercent
        this.pointBuffer.y = this.pointTopLeft.y + this.heightScreenPercent
        return this.pointBuffer
    }

    isOnMap(mapDimension: MyMapDimension): boolean {
        return !(this.pointTopLeft.x < 0
            || this.getPointTopRight().x > mapDimension.sizeXScreenPercent
            || this.getPointBottomLeft().y < 0
            || this.getPointBottomLeft().y > mapDimension.sizeYScreenPercent);
    }

    moveToLeft(x: number) {
        this.pointTopLeft.x -= x
    }

    moveToRight(x: number) {
        this.pointTopLeft.x += x
    }

    moveToUp(y: number) {
        this.pointTopLeft.y -= y
    }

    moveToDown(y: number) {
        this.pointTopLeft.y += y
    }

}