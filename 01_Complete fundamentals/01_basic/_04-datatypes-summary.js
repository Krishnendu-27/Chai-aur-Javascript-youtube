// ----------------------------------------------
// 🔢 Primitive Types (7 types):
// its imutable we cannot change we can make them point anotehr value but we can not change like python . primitve are call by value
// ----------------------------------------------
// String, Number, Boolean, null, undefined, Symbol, BigInt

let str = "name"; // String
let num = 5; // Number
let bignum = 12345678901234567890n; // BigInt
let sym1 = Symbol("halo"); // Symbol
let sym2 = Symbol("halo"); // Symbol (always unique)
let bool = true; // Boolean
let und; // Undefined
let temp = null; // Null

console.log(sym1 === sym2); // false — each Symbol is unique

// Checking types of all primitive values
console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bignum); // "bigint"
console.log(typeof sym1); // "symbol"
console.log(typeof sym2); // "symbol"
console.log(typeof bool); // "boolean"
console.log(typeof und); // "undefined"
console.log(typeof temp); // "object" (special case for null in JS)

// ----------------------------------------------
// 🧱 Reference Types (Non-Primitive) . Non-Primitive are call by reference
// ----------------------------------------------
// Array, Object, Function

let arr = [1, 2, 5, 3]; // Array

let obb = {
  name: "hallo",
  age: 54,
}; // Object

// Functions can be treated as variables
let myfun = function () {
  console.log("myfuntion as variable");
};

myfun(); // Call the function

// Checking types of reference values
console.log(typeof arr); // "object" — arrays are special objects
console.log(typeof obb); // "object"
console.log(typeof myfun); // "function" — technically a callable object
