// ----------------------------------------------
// JavaScript Conditionals – Clear and Engaging
// ----------------------------------------------
// Demonstrates branching logic with if/else, comparison and logical operators.

// ---------------------------------------------------
// 1. Basic if Statement
// ---------------------------------------------------
if (true) {
  console.log("enter"); // runs because condition is true
}

let loggedIn = true;
if (loggedIn) {
  console.log("Yes, you are logged in");
}

// ---------------------------------------------------
// 2. Comparison Operators
// ---------------------------------------------------
console.log(2 == "2"); // true   (loose equality: value only)
console.log(2 === "2"); // false  (strict equality: value + type)
console.log(2 != "2"); // false  (loose inequality)
console.log(2 !== "2"); // true   (strict inequality)
console.log(50 > 40); // true   (greater than)
console.log(50 >= 50); // true   (greater than or equal)

// ---------------------------------------------------
// 3. if…else
// ---------------------------------------------------
let age = 60;
if (age > 50) {
  console.log("Age is greater than 50");
} else {
  console.log("Age is 50 or younger");
}

// single-line syntax without braces
if (true) console.log("Why it's true");

// ---------------------------------------------------
// 4. Multiple Conditions with else if
// ---------------------------------------------------
const balance = 1000;
if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("900 or more");
}

// ---------------------------------------------------
// 5. Logical Operators
// ---------------------------------------------------
const userLoggedIn = true;
const hasCard = true;
const viaGoogle = false;
const viaEmail = true;

// AND: all conditions must be true
if (userLoggedIn && hasCard && 2 === 3) {
  console.log("Allow to buy course");
}

// OR: any one true
if (viaGoogle || viaEmail) {
  console.log("User logged in");
}

// NOT: reverses boolean
console.log(!userLoggedIn); // false

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Use if for simple branching and else/else if for multiple scenarios.
// • Prefer strict comparisons (===, !==) over loose (==, !=).
// • Logical operators (&&, ||, !) combine multiple conditions.
// • Omitting braces works for single statements but can reduce clarity—use braces by default.
