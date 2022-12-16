import {Slot, SlotConstructor} from "./Slot";

export type MyMapDimension = { sizeXScreenPercent: number, sizeYScreenPercent: number }

export class MyMapClass {

    readonly slotsInX: number
    readonly slotInY: number
    readonly dimension: MyMapDimension
    readonly slots: Slot[] = []

    constructor(slotsInX: number = 5,
                slotsInY: number = 5,
                slotConstructor: SlotConstructor = {
                    sizeXScreenPercent: 20,
                    sizeYScreenPercent: 20
                }
    ) {
        this.slotsInX = slotsInX
        this.slotInY = slotsInY
        for (let i = 0; i < (slotsInX * slotsInY); i++) {
            this.slots.push(new Slot(slotConstructor))
        }
        this.dimension = {
            sizeXScreenPercent: slotConstructor.sizeXScreenPercent * slotsInX,
            sizeYScreenPercent: slotConstructor.sizeYScreenPercent * slotsInY
        }

    }

}

