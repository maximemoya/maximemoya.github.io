import {MyMapClass} from "../../map/MyMapClass";

test('map creation', () => {

    // --------
    // VALUES :
    // --------

    const slotsInX = 2
    const slotsInY = 3
    const slotSizeX = 10
    const slotSizeY = 10

    function expectedMapSizeXScreenPercent(): number {
        return slotsInX * slotSizeX
    }

    function expectedMapSizeYScreenPercent(): number {
        return slotsInY * slotSizeY
    }

    function expectedMapSlotsSize(): number {
        return slotsInX * slotsInY
    }

    // ------
    // INIT :
    // ------

    const map = new MyMapClass(
        slotsInX,
        slotsInY,
        {
            sizeXScreenPercent: slotSizeX,
            sizeYScreenPercent: slotSizeY
        }
    )

    // ------
    // TEST :
    // ------

    expect(map.dimension.sizeXScreenPercent).toEqual(expectedMapSizeXScreenPercent());
    expect(map.dimension.sizeYScreenPercent).toEqual(expectedMapSizeYScreenPercent());
    expect(map.slots.length).toEqual(expectedMapSlotsSize());
});
