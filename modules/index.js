import { add, subtract, multiplication, division } from "./lib.js";

console.log("example addition");
console.log("1 + 2 =", add(1, 2));
console.log("100 + 100 =", add(100, 100));

console.log("example subtract");
console.log("10 - 5 =", subtract(10, 5));
console.log("100 - 55 =", subtract(100, 55));

console.log("example multiplication");
console.log("100 * 100 =", multiplication(100, 100));
console.log("23 * 2 =", multiplication(23, 3));

console.log("example division");
console.log("90 / 3 =", division(90, 3));
console.log("29 / 7 =", division(49, 7));
