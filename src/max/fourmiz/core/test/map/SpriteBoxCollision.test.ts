import {SpriteBox} from "../../map/SpriteBox";
import {Collision} from "../../global_tools/Collision";

test('two spriteBoxes do not collide by moving around', () => {

    // ------
    // INIT :
    // ------

    ////////////
    //
    // A-----
    // A-----
    // -    -
    // - BB -
    // - BB -
    // -    -
    // ------
    // ------

    const spriteBoxA = new SpriteBox({
        positionLeftX: 0,
        widthScreenPercent: 1,
        positionBottomY: 2,
        heightScreenPercent: 2
    })

    const spriteBoxB = new SpriteBox({
        positionLeftX: 2,
        widthScreenPercent: 2,
        positionBottomY: 5,
        heightScreenPercent: 2
    })

    // ------
    // TEST :
    // ------

    for (let i = 0; i < 5; i++) {
        spriteBoxA.moveToRight(1)
        expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    }
    for (let i = 0; i < 6; i++) {
        spriteBoxA.moveToDown(1)
        expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    }
    for (let i = 0; i < 5; i++) {
        spriteBoxA.moveToLeft(1)
        expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    }
    for (let i = 0; i < 4; i++) {
        spriteBoxA.moveToUp(1)
        expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    }

});

test('two spriteBoxes collision on A bottom B top by moving A', () => {

    // ------
    // INIT :
    // ------

    //////////
    //A----->
    //A-XX-->
    //  BB
    //

    // FALSE      TRUE        TRUE        TRUE        TRUE        FALSE
    //////////  //////////  //////////  //////////  //////////  //////////
    //A         // A        //  A       //   A      //    A     //     A
    //A BB      // ABB      //  AB      //  BA      //  BBA     //  BB A
    //  BB      //  BB      //  BB      //  BB      //  BB      //  BB
    //          //          //          //          //          //

    const spriteBoxA = new SpriteBox({
        positionLeftX: 0,
        widthScreenPercent: 1,
        positionBottomY: 2,
        heightScreenPercent: 2
    })

    const spriteBoxB = new SpriteBox({
        positionLeftX: 2,
        widthScreenPercent: 2,
        positionBottomY: 3,
        heightScreenPercent: 2
    })

    // ------
    // TEST :
    // ------

    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);

});

test('two spriteBoxes collision on A top B bottom by moving A', () => {

    // ------
    // INIT :
    // ------

    //////////
    //
    //  BB
    //A-XX-->
    //A----->
    //

    // FALSE      TRUE        TRUE        TRUE        TRUE        FALSE
    //////////  //////////  //////////  //////////  //////////  //////////
    //          //          //          //          //          //
    //  BB      //  BB      //  BB      //  BB      //  BB      //  BB
    //A BB      // ABB      //  AB      //  BA      //  BBA     //  BB A
    //A         // A        //  A       //   A      //    A     //     A

    const spriteBoxA = new SpriteBox({
        positionLeftX: 0,
        widthScreenPercent: 1,
        positionBottomY: 4,
        heightScreenPercent: 2
    })

    const spriteBoxB = new SpriteBox({
        positionLeftX: 2,
        widthScreenPercent: 2,
        positionBottomY: 3,
        heightScreenPercent: 2
    })

    // ------
    // TEST :
    // ------

    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(true);
    spriteBoxA.moveToRight(1)
    expect(Collision.isColliding(spriteBoxA,spriteBoxB)).toEqual(false);

});
