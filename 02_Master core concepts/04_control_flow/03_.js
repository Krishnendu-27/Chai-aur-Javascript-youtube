// ----------------------------------------------
// JavaScript Truthy/Falsy & Conditional Operators – Clear and Engaging
// ----------------------------------------------
// Demonstrates truthy/falsy evaluation, nullish coalescing (??), ternary operator (?:),
// and practical patterns for conditional logic and default values.

// ---------------------------------------------------
// 1. Falsy Values (Only 8 Total)
// ---------------------------------------------------
console.log(Boolean(false)); // false - boolean false
console.log(Boolean(0)); // false - zero
console.log(Boolean(-0)); // false - negative zero
console.log(Boolean(BigInt(0n))); // false - BigInt zero
console.log(Boolean("")); // false - empty string
console.log(Boolean(null)); // false - null value
console.log(Boolean(undefined)); // false - undefined value
console.log(Boolean(NaN)); // false - Not a Number

// ---------------------------------------------------
// 2. Truthy Values (Everything Else)
// ---------------------------------------------------
console.log(Boolean("0")); // true - string with zero
console.log(Boolean("false")); // true - string "false"
console.log(Boolean(" ")); // true - string with space
console.log(Boolean([])); // true - empty array
console.log(Boolean({})); // true - empty object
console.log(Boolean(function () {})); // true - empty function

// ---------------------------------------------------
// 3. Checking Empty Collections
// ---------------------------------------------------
let arr = [];
if (arr.length === 0) {
  console.log("Array is empty");
}

let obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
  // Object.keys() converts object properties to array, then check length
}

// ---------------------------------------------------
// 4. Nullish Coalescing Operator (??)
// ---------------------------------------------------
// Returns right operand when left is null or undefined (not other falsy values)
let val4;

val4 = 5 ?? 10; // 5 (left exists)
console.log(val4); // Output: 5

val4 = null ?? 6; // 6 (left is null)
console.log(val4); // Output: 6

val4 = null ?? 10 ?? 20; // 10 (first non-nullish)
console.log(val4); // Output: 10

// ---------------------------------------------------
// 5. Nullish Coalescing (??) vs Logical OR (||)
// ---------------------------------------------------
let score = 0;
console.log(score || 100); // 100 (0 is falsy, triggers ||)
console.log(score ?? 100); // 0   (0 is not null/undefined, doesn't trigger ??)

let userAge = "";
console.log(userAge || "Unknown"); // "Unknown" (empty string is falsy)
console.log(userAge ?? "Unknown"); // ""        (empty string is not null/undefined)

// ---------------------------------------------------
// 6. Ternary Operator (? :)
// ---------------------------------------------------
// Shorthand for simple if-else conditions
let price = 5;
price > 10 ? console.log("Expensive") : console.log("Affordable");

// Equivalent full if-else:
if (price > 10) {
  console.log("Expensive");
} else {
  console.log("Affordable");
}

// ---------------------------------------------------
// 7. Practical Ternary Examples
// ---------------------------------------------------
let isLoggedIn = true;
let status = isLoggedIn ? "Welcome" : "Please login";
console.log(status);

// Chained ternary (use sparingly for readability)
let examScore = 85;
let grade = examScore >= 90 ? "A" : examScore >= 80 ? "B" : "C";
console.log(grade);

// Return from functions
const getDiscount = (isPremium) => (isPremium ? 20 : 5);
console.log(getDiscount(true)); // 20

// ---------------------------------------------------
// 8. Authentication and Default Value Patterns
// ---------------------------------------------------
let email = "user@gmail.com";
if (email) {
  console.log("User has email");
} else {
  console.log("No email provided");
}

// Default values with nullish coalescing
let userInput = null;
let username = userInput ?? "Anonymous";
let theme = undefined ?? "light";

// Conditional styling
let isActive = true;
let buttonClass = isActive ? "btn-primary" : "btn-secondary";

// ---------------------------------------------------
// 9. Data Validation Patterns
// ---------------------------------------------------
let fetchedData = null;
let data = fetchedData ?? [];
let message = data.length > 0 ? "Data loaded" : "No data available";

console.log(username); // "Anonymous"
console.log(theme); // "light"
console.log(buttonClass); // "btn-primary"
console.log(message); // "No data available"

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Only 8 specific values are falsy; everything else is truthy.
// • Use .length === 0 for arrays, Object.keys().length === 0 for objects.
// • ?? only triggers on null/undefined, not other falsy values like 0 or "".
// • Ternary operator provides concise conditional assignments and expressions.
// • These operators improve code readability and reduce boilerplate if-else blocks.
