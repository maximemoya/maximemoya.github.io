import {Point} from "../../../global_tools/Point";
import {Triangle} from "../../../global_tools/analyse_and_trigo/Triangle";

test('test triangle points order', () => {

    // --------
    // VALUES :
    // --------

    //(y)^
    // 5 |
    // 4 |<- P1  P4
    // 3 |   |
    // 2 |<- - P3  P2
    // 1 |   | |   |
    // 0 |   V V   V
    //   . - - - - - >
    //     0 1 2 3 4 (x)

    const p1 = new Point(1,4)
    const p2 = new Point(4, 2)
    const p3 = new Point(2, 2)
    const p4 = new Point(3,4)

    const p5 = new Point(2,3)
    const p6 = new Point(3,3)

    const pOut1 = new Point(1,2)
    const pOut2 = new Point(4,4)

    // ------
    // INIT :
    // ------

    const triangle1 = new Triangle([p1,p2,p3])
    const triangle2 = new Triangle([p1,p2,p4])

    // ------
    // TEST :
    // ------

    expect(triangle1.points).toEqual([p1,p3,p2]);
    expect(triangle1.isCollide(p5)).toEqual(true)
    expect(triangle1.isCollide(p6)).toEqual(false)
    expect(triangle1.isCollide(pOut1)).toEqual(false)
    expect(triangle1.isCollide(pOut2)).toEqual(false)

    expect(triangle2.points).toEqual([p1,p4,p2]);
    expect(triangle2.isCollide(p5)).toEqual(false)
    expect(triangle2.isCollide(p6)).toEqual(true)
    expect(triangle2.isCollide(pOut1)).toEqual(false)
    expect(triangle2.isCollide(pOut2)).toEqual(false)
});