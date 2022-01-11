import { calc } from "./calc/calc";

function main(): void {
    const s = calc.sum(1,2);
    const d = calc.diff(2,1);
    console.log(`Sum: ${s}, Diff: ${d}`)
}

main()