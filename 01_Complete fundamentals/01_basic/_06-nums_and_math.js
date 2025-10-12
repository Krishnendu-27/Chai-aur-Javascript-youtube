// ----------------------------------------------
// Number and Math Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates primitive vs Number object, formatting methods,
// safe integer limits, and Math library functions.

// ---------------------------------------------------
// 1. Primitive Number vs Number Object
// ---------------------------------------------------
let num1 = 100;
console.log(num1);
// primitive number literal

let num2 = new Number(100);
console.log(num2);
// Number object wrapper provides additional methods

console.log(num2.toString());
// convert Number object to string representation

// ---------------------------------------------------
// 2. Numeric Formatting Methods
// ---------------------------------------------------
console.log(num2.toFixed(2));
// fixed-point notation: two digits after decimal ("100.00")

let num3 = 4563.924541524;
console.log(num3.toPrecision(4));
// precision specifies total significant digits ("4564")

// ---------------------------------------------------
// 3. BigInt and Localized Formatting
// ---------------------------------------------------
let indNum = 1000000000000000000n;
console.log(indNum.toLocaleString("en-IN"));
// locale-specific formatting: Indian number grouping

// ---------------------------------------------------
// 4. Safe Integer Limits
// ---------------------------------------------------
console.log(Number.MAX_SAFE_INTEGER);
// maximum safe integer (2^53 - 1)

console.log(Number.MIN_SAFE_INTEGER);
// minimum safe integer (-(2^53 - 1))

// ---------------------------------------------------
// 5. Math Library Essentials
// ---------------------------------------------------
let pi = Math.PI;
console.log(pi);
// circle constant π (~3.14159)

console.log(Math.abs(-55));
// absolute value: converts negative to positive

console.log(Math.round(5.35123));
// round to nearest integer

console.log(Math.ceil(4.1));
// round up to next integer

console.log(Math.floor(4.1));
// round down to previous integer

console.log(Math.min(4, 5, 6, 9, 7, 4));
// minimum value among arguments

console.log(Math.max(4, 5, 6, 9, 7, 4));
// maximum value among arguments

console.log(Math.random());
// random decimal in [0,1)

console.log(Math.random() + 1);
// [1,2)

console.log(Math.random() * 10 + 1);
// [1,11)

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// random integer in [10,20]

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Primitive numbers are lightweight; Number objects offer methods.
// • toFixed() and toPrecision() control numeric display.
// • BigInt supports integers beyond safe limits and local formatting.
// • Math library provides constants and functions for common operations.
// • Random range generation requires scaling and shifting formulas.
