export enum SlotType {
    Soft, Normal, Hard
}

export interface SlotConstructor {
    sizeXScreenPercent: number
    sizeYScreenPercent: number
}

export class Slot {

    readonly sizeXScreenPercent
    readonly sizeYScreenPercent
    slotType: SlotType

    constructor(slotConstructor: SlotConstructor = {
        sizeXScreenPercent: 0,
        sizeYScreenPercent: 0
    }) {
        this.sizeXScreenPercent = slotConstructor.sizeXScreenPercent
        this.sizeYScreenPercent = slotConstructor.sizeYScreenPercent
        this.slotType = SlotType.Normal
    }
}