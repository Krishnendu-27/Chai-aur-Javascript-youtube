// # JavaScript Functions — Notes & Examples ✨
//
// ------------------------------------------------------------
//
// ## 🚀 Overview
//
// This note covers functions in JavaScript: declarations, parameters, returns,
// default values, expressions, arrow functions, rest/spread, higher-order functions,
// pure vs impure, and practical examples (BMI, discount, greetings).
// Each example includes a short explanation and a simple sample input → output for quick revision.
//
// ------------------------------------------------------------
//
// ## 🧰 Prerequisites
//
// * Node.js or browser DevTools (to run snippets)
// * Basic knowledge of variables and console
//
// How to run:
// # Save snippet to file, e.g., functions.js
// node functions.js
// # Or paste into the browser console
//
// ------------------------------------------------------------
//
// ## 1) Basic function declaration & execution
//
function myname() {
  console.log("k");
  console.log("r");
  console.log("i");
  console.log("s");
  console.log("h");
  console.log("----------");
  console.log("G");
}
myname();
//
// Explanation: simple named function; calling `myname()` executes its block.
//
// Sample output:
// k
// r
// i
// s
// h
// ----------
// G
//
// ------------------------------------------------------------
//
// ## 2) Functions with parameters (arguments)
//
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers(5, 10);
//
// Explanation: parameters `num1`, `num2` receive values passed at call time.
// Sample output: 15
//
// ------------------------------------------------------------
//
// ## 3) `return` vs `console.log`
//
function subTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subTwoNumbers(10, 5));
//
// Explanation: `return` gives a value back to the caller (can be stored or used).
// Code after `return` doesn’t run.
// Sample output: 5
//
// ------------------------------------------------------------
//
// ## 4) Default parameters
//
function multiTwoNumbers(num1 = 1, num2 = 1) {
  return num1 * num2;
}
console.log(multiTwoNumbers(5, 66));
console.log(multiTwoNumbers());
//
// Explanation: default values are used when arguments are omitted.
// Sample output:
// 330
// 1
//
// ------------------------------------------------------------
//
// ## 5) Declaration vs Expression vs Arrow
//
// Declaration (hoisted)
function greet() {
  console.log("Hello from declaration");
}

// Expression (not hoisted)
let title = function () {
  console.log("Hello from expression");
};

// Arrow function (ES6)
let city = () => {
  console.log("Hello from arrow function");
};

greet();
title();
city();
//
// Sample output:
// Hello from declaration
// Hello from expression
// Hello from arrow function
//
// ------------------------------------------------------------
//
// ## 6) Rest parameters & spread syntax
//
function sumAllNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5));

let arr = [1, 2, 3];
let expanded = [...arr, 4, 5];
console.log(expanded);
//
// Explanation: `...numbers` gathers arguments into an array.
// Spread `...arr` expands elements.
//
// Sample output:
// 15
// [1,2,3,4,5]
//
// ------------------------------------------------------------
//
// ## 7) Higher-order functions & closures
//
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
let doubler = createMultiplier(2);
console.log(doubler(5));
//
// Explanation: functions can return functions.
// The returned function keeps access to `factor` via closure.
// Sample output: 10
//
// ------------------------------------------------------------
//
// ## 8) Pure vs Impure functions
//
// Pure
function pureMath(a, b) {
  return a + b;
}

// Impure
let counter = 0;
function impureCounter() {
  return ++counter; // modifies external state
}
console.log(pureMath(2, 3));
console.log(impureCounter());
console.log(impureCounter());
//
// Explanation: Pure functions depend only on inputs; impure functions have side effects.
// Sample output:
// 5
// 1
// 2
//
// ------------------------------------------------------------
//
// ## 9) Practical examples
//
// BMI calculator
function calculateBMI(weight, height) {
  return weight / height ** 2;
}
console.log(calculateBMI(70, 1.75).toFixed(2));
//
// Sample output: 22.86
//
// Discount calculator
function applyDiscount(price, discountPercent = 0) {
  return price - (price * discountPercent) / 100;
}
console.log(applyDiscount(100, 20));
//
// Sample output: 80
//
// Greeting with default parameter
function personalGreeting(name = "Guest") {
  return `Welcome, ${name}!`;
}
console.log(personalGreeting("Krish"));
console.log(personalGreeting());
//
// Sample output:
// Welcome, Krish!
// Welcome, Guest!
//
// ------------------------------------------------------------
//
// ## 10) Additional short snippets
//
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

function addTwoNumbers2(number1, number2) {
  return number1 + number2;
}
console.log(addTwoNumbers2(3, 5)); // 8

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject({ username: "sam", price: 399 });

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue([200, 400, 500, 1000])); // 400
//
// Sample outputs:
// H
// I
// T
// E
// S
// H
// 8
// Username is sam and price is 399
// 400
//
// ------------------------------------------------------------
//
// ## ⚡ Key takeaways
//
// * Functions are reusable building blocks — prefer small, focused functions. 🧩
// * Use `return` when you need a value; use `console.log` only for debugging. 🖨️
// * Prefer pure functions for predictability; isolate side effects. 🔒
// * Use default parameters and rest/spread to make APIs flexible. ✨
// * Higher-order functions + closures are powerful for creating factories. 🔁
//
// ------------------------------------------------------------
