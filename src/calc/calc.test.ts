import {describe, expect, test} from '@jest/globals';
import { calc } from "./calc";

describe("calculator", () => {
    describe("addition", ()=> {
        test.each([
            [1, 1, 2],
            [1, 2, 3],
            [-1, -1, -2],
            [10, -8, 2],
            [-8, 10, 2],
        ])("sum(%i, %i) is %i", () => {
            expect(calc.sum(6, 4)).toBe(10);
        });
    })

    describe("subtraction", () => {
        test("subtracts positive values", () => {
            expect(calc.diff(6, 4)).toBe(2);
        })
    
        test("subtracts negative values", () => {
            expect(calc.diff(6, -3)).toBe(9)
        })
    })
})