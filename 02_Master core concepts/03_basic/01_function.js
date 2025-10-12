// ----------------------------------------------
// Functions in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates function declaration, parameters, return values, default parameters,
// and the fundamental concepts of reusable code blocks.

// ---------------------------------------------------
// 1. Basic Function Declaration and Execution
// ---------------------------------------------------
// Functions are like personal assistants - when called, they do their job
function myname() {
  console.log("k");
  console.log("r");
  console.log("i");
  console.log("s");
  console.log("h");
  console.log("----------");
  console.log("G");
}
myname(); // function call executes the code block

// ---------------------------------------------------
// 2. Functions with Parameters
// ---------------------------------------------------
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
// JavaScript doesn't require strict parameter typing
addTwoNumbers(5, 10); // outputs: 15

// ---------------------------------------------------
// 3. Return Statement vs Console.log
// ---------------------------------------------------
function subTwoNumbers(num1, num2) {
  return num1 - num2;
  // code after return won't execute
}
console.log(subTwoNumbers(10, 5)); // outputs: 5

// Important: console.log and return serve different purposes
// console.log displays output; return provides value for further use

// ---------------------------------------------------
// 4. Default Parameters
// ---------------------------------------------------
function multiTwoNumbers(num1 = 1, num2 = 1) {
  return num1 * num2;
}
console.log(multiTwoNumbers(5, 66)); // outputs: 330
console.log(multiTwoNumbers()); // outputs: 1 (uses defaults)

// ---------------------------------------------------
// 5. Function Expression vs Declaration
// ---------------------------------------------------
// Function Declaration (hoisted)
function greet() {
  console.log("Hello from declaration");
}

// Function Expression (not hoisted)
let title = function () {
  console.log("Hello from expression");
};

// Arrow Function (modern ES6 syntax)
let city = () => {
  console.log("Hello from arrow function");
};

greet();
title();
city();

// ---------------------------------------------------
// 6. Rest Parameters and Spread Syntax
// ---------------------------------------------------
function sumAllNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // outputs: 15

// Spread operator usage
let arr = [1, 2, 3];
let expandedArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

// ---------------------------------------------------
// 7. Higher-Order Functions
// ---------------------------------------------------
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

let doubler = createMultiplier(2);
console.log(doubler(5)); // outputs: 10

// ---------------------------------------------------
// 8. Pure vs Impure Functions
// ---------------------------------------------------
// Pure function: same input always produces same output
function pureMath(a, b) {
  return a + b;
}

// Impure function: depends on external state
let counter = 0;
function impureCounter() {
  return ++counter; // modifies external variable
}

// ---------------------------------------------------
// 9. Practical Function Examples
// ---------------------------------------------------
// BMI Calculator
function calculateBMI(weight, height) {
  return weight / height ** 2;
}
console.log(calculateBMI(70, 1.75)); // outputs: ~22.86

// Discount Calculator
function applyDiscount(price, discountPercent = 0) {
  return price - (price * discountPercent) / 100;
}
console.log(applyDiscount(100, 20)); // outputs: 80

// Greeting with default parameter
function personalGreeting(name = "Guest") {
  return `Welcome, ${name}!`;
}
console.log(personalGreeting("Krish")); // "Welcome, Krish!"
console.log(personalGreeting()); // "Welcome, Guest!"

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Functions encapsulate reusable code blocks for better organization.
// • Parameters accept inputs; return statements provide outputs.
// • Default parameters prevent undefined values and improve robustness.
// • Arrow functions offer concise syntax for simple operations.
// • Higher-order functions enable powerful functional programming patterns.
// • Pure functions are predictable; impure functions have side effects.
