import {Point} from "../../../global_tools/Point";
import {LinearFunction} from "../../../global_tools/analyse_and_trigo/LinearFunction";

test('get linear-equation from 2 points of the line', () => {

    // --------
    // VALUES :
    // --------

    //(y)^
    // 6 |
    // 5 |
    // 4 |<- P1
    // 3 |   |
    // 2 |<- - P2
    // 1 |   | |
    // 0 |   V V
    //   . - - - - - >
    //     0 1 2 3 4 (x)

    const p1 = new Point(1,4)
    const p2 = new Point(2, 2)

    // ------
    // INIT :
    // ------

    const f1 = LinearFunction.getEquationFrom2Points(p1,p2)
    const f2 = LinearFunction.getEquationFrom2Points(p2,p1)

    // ------
    // TEST :
    // ------

    expect(f1(0)).toEqual(6);
    expect(f2(0)).toEqual(6);
    expect(f1(3)).toEqual(0);
    expect(f2(3)).toEqual(0);
});