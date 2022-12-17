import {MyMapClass} from "../../map/MyMapClass";
import {SpriteBox} from "../../map/SpriteBox";

test('sprite-box in map', () => {

    // --------
    // VALUES :
    // --------

    const myMap: MyMapClass = {
        dimension: {
            sizeXScreenPercent: 100,
            sizeYScreenPercent: 100
        },
        slotsInX: 0,
        slotInY: 0,
        slots: []
    }

    const positionSpriteBoxLeftX = 10
    const positionSpriteBoxBottomY = 10
    const widthSpriteBoxByScreenPercent = 10
    const heightSpriteBoxByScreenPercent = 20

    const valueExpected = true

    // ------
    // INIT :
    // ------

    const mySpriteBox = new SpriteBox({
        positionLeftX: positionSpriteBoxLeftX,
        positionBottomY: positionSpriteBoxBottomY,
        heightScreenPercent: heightSpriteBoxByScreenPercent,
        widthScreenPercent: widthSpriteBoxByScreenPercent
    })

    // ------
    // TEST :
    // ------
    expect(mySpriteBox.isOnMap(myMap.dimension)).toEqual(valueExpected);
});

test('sprite-box out left map', () => {

    // --------
    // VALUES :
    // --------

    const positionSpriteBoxLeftX = -1

    const valueExpected = false

    // ------
    // INIT :
    // ------

    const myMap: MyMapClass = {
        dimension: {
            sizeXScreenPercent: 100,
            sizeYScreenPercent: 100
        },
        slotsInX: 0,
        slotInY: 0,
        slots: []
    }

    const mySpriteBox = new SpriteBox({
        positionLeftX: positionSpriteBoxLeftX,
        positionBottomY: 10,
        heightScreenPercent: 20,
        widthScreenPercent: 10
    })

    // ------
    // TEST :
    // ------
    expect(mySpriteBox.isOnMap(myMap.dimension)).toEqual(valueExpected);
});

test('sprite-box out right map', () => {

    // --------
    // VALUES :
    // --------

    const sizeXScreenPercent = 100

    const myMap: MyMapClass = {
        dimension: {
            sizeXScreenPercent: sizeXScreenPercent,
            sizeYScreenPercent: 100
        },
        slotsInX: 0,
        slotInY: 0,
        slots: []
    }

    const widthSpriteBoxByScreenPercent = 10
    const positionSpriteBoxLeftX = sizeXScreenPercent - widthSpriteBoxByScreenPercent + 1

    const valueExpected = false

    // ------
    // INIT :
    // ------

    const mySpriteBox = new SpriteBox({
        positionLeftX: positionSpriteBoxLeftX,
        positionBottomY: 10,
        heightScreenPercent: 20,
        widthScreenPercent: widthSpriteBoxByScreenPercent
    })

    // ------
    // TEST :
    // ------
    expect(mySpriteBox.isOnMap(myMap.dimension)).toEqual(valueExpected);
});

test('sprite-box feet out top map', () => {

    // --------
    // VALUES :
    // --------

    const positionSpriteBoxBottomY = -1

    const valueExpected = false

    // ------
    // INIT :
    // ------

    const myMap: MyMapClass = {
        dimension: {
            sizeXScreenPercent: 100,
            sizeYScreenPercent: 100
        },
        slotsInX: 0,
        slotInY: 0,
        slots: []
    }

    const mySpriteBox = new SpriteBox({
        positionLeftX: 10,
        positionBottomY: positionSpriteBoxBottomY,
        heightScreenPercent: 20,
        widthScreenPercent: 10
    })

    // ------
    // TEST :
    // ------
    expect(mySpriteBox.isOnMap(myMap.dimension)).toEqual(valueExpected);
});

test('sprite-box out bottom map', () => {

    // --------
    // VALUES :
    // --------

    const sizeYScreenPercent = 100

    const myMap: MyMapClass = {
        dimension: {
            sizeXScreenPercent: 100,
            sizeYScreenPercent: sizeYScreenPercent
        },
        slotsInX: 0,
        slotInY: 0,
        slots: []
    }

    const positionSpriteBoxBottomY = sizeYScreenPercent + 1

    const valueExpected = false

    // ------
    // INIT :
    // ------

    const mySpriteBox = new SpriteBox({
        positionLeftX: 10,
        positionBottomY: positionSpriteBoxBottomY,
        heightScreenPercent: 20,
        widthScreenPercent: 10
    })

    // ------
    // TEST :
    // ------
    expect(mySpriteBox.isOnMap(myMap.dimension)).toEqual(valueExpected);
});
