"use strict"; // treat all code as new stander

// coding mostt importent is readibility

// 🔢 JavaScript Data Types

// Category       | Types
// -------------- | --------------------------------------------------
// Primitive       | string, number, boolean, null, undefined, Symbol, bigint
// Reference       | object (including Array, Function, Date, etc.)

// 📦 Primitive vs Reference

// Primitive: stored by value.
let a = 12;
let b = a; // b is a copy of a
a += 12; // b stays 12

// Reference: stored by reference (address).
let c = [1, 2, 3];
let d = c; // d refers to same array
d.push(4);
console.log(c); // [1, 2, 3, 4]

// ------------------------------------------------------------
// ✏️ Literal Types

// String:   'hello', "world", `template ${expr}`
// Number:   42, 3.14, 1e3
// BigInt:   12345678901234567890n
// Boolean:  true, false
// Null:     null (intentional absence)
// Undefined: undefined (no value assigned)
// Symbol:   Symbol("desc") (unique, immutable)

let s1 = Symbol("halo");
let s2 = Symbol("halo");
console.log(s1 === s2); // false

// ------------------------------------------------------------
// ⚖️ Type Checking & Conversion

// typeof operator:
console.log(typeof "abc"); // "string"
console.log(typeof 123); // "number"
console.log(typeof 123n); // "bigint"
console.log(typeof []); // "object"
console.log(typeof null); // "object"

// Loose vs Strict Equality:
console.log(5 == "5"); // true   (type coercion)
console.log(5 === "5"); // false  (no coercion)

// Type Coercion in Operations:

// + with string: concatenation
console.log("5" + 1); // "51"
console.log(1 + "5"); // "15"

// - forces numeric conversion
console.log("5" - 1); // 4
console.log(5 - "1"); // 4

// ------------------------------------------------------------
// 🌀 Dynamic Typing

// Variables can change type at runtime:
let x = 50;
x = true;
x = "hatori";

// ------------------------------------------------------------
// 🚩 Special Values

// NaN (Not a Number): result of invalid numeric operations
// Number.MAX_SAFE_INTEGER: largest integer JS can safely represent
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt for beyond safe integer range:
let big = 9007199254740991n;
big += 52n;

// ------------------------------------------------------------
// ✅ Truthy vs Falsy

// Falsy values: 0, false, "", null, undefined, NaN, document.all
// Truthy: everything else

console.log(!!0); // false
console.log(!!"0"); // true
console.log(!![]); // true
console.log(!!null); // false
console.log(!!document.all); // false (quirky JS behavior)

// ------------------------------------------------------------
// 📝 Summary

// - JavaScript has primitive and reference types.
// - typeof, == vs ===, and operator behavior are key for type checking.
// - Variables are dynamically typed — they can change type.
// - Use BigInt for very large integers.
// - Understand truthy and falsy values for conditionals.

// video summary

/*
Using 'use strict' ensures code runs in modern JavaScript mode. It’s not mandatory now but still a good habit. The alert() function works only in browsers, not in Node.js. Code readability matters most—use the Prettier extension to format code neatly. For docs, visit MDN for learning or TC39 ECMAScript for official standards. JavaScript has primitive (number, string, boolean, null) and non-primitive (array, object, function) types. Use typeof to check them.
*/
