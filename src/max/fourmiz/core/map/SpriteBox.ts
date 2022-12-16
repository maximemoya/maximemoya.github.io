import {MyMapDimension} from "./MyMapClass";

export interface SpriteBoxConstructor {
    positionLeftX: number
    positionBottomY: number
    widthScreenPercent: number
    heightScreenPercent: number
}

export class SpriteBox {

    positionLeftX: number
    positionRightX: number
    positionTopY: number
    positionBottomY: number
    widthScreenPercent: number
    heightScreenPercent: number

    constructor(spriteBoxConstructor: SpriteBoxConstructor = {
        positionLeftX: 0,
        positionBottomY: 0,
        widthScreenPercent: 0,
        heightScreenPercent: 0
    }) {
        this.positionLeftX = spriteBoxConstructor.positionLeftX
        this.positionRightX = spriteBoxConstructor.positionLeftX + spriteBoxConstructor.widthScreenPercent
        this.positionBottomY = spriteBoxConstructor.positionBottomY
        this.positionTopY = spriteBoxConstructor.positionBottomY + spriteBoxConstructor.heightScreenPercent
        this.widthScreenPercent = spriteBoxConstructor.widthScreenPercent
        this.heightScreenPercent = spriteBoxConstructor.heightScreenPercent
    }

    isOnMap(mapDimension: MyMapDimension): boolean {
        return !(this.positionLeftX < 0
            || this.positionRightX > mapDimension.sizeXScreenPercent
            || this.positionBottomY < 0
            || this.positionBottomY > mapDimension.sizeYScreenPercent);
    }

}