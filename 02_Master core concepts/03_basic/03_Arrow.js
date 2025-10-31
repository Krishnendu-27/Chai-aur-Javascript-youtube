// ----------------------------------------------
// The ‘this’ Keyword and Arrow Functions – Clear and Engaging
// ----------------------------------------------
// Demonstrates how ‘this’ binds in regular functions, differences in Node.js vs browser,
// arrow function syntax variations, and implicit vs explicit returns.

// ---------------------------------------------------
// 1. ‘this’ in Object Methods
// ---------------------------------------------------
let user = {
  username: "krish",
  age: 20,
  welcome: function () {
    console.log(`welcome ${this.username}, your age is ${this.age}`);
    console.log(this); // the user object itself
  },
};

user.welcome();
// In Node.js: 'this' is {}, in browsers: 'this' is window for unbound functions

// ---------------------------------------------------
// 2. ‘this’ in Standalone Functions
// ---------------------------------------------------
function regularFunction() {
  console.log(this);
  // strict mode → undefined, non-strict → global object (window/global)
}

// ---------------------------------------------------
// 3. Arrow Functions and ‘this’
// ---------------------------------------------------
// Arrow functions do not have their own ‘this’; they inherit from the parent scope
let arrowFunction = () => {
  console.log(this); // same 'this' as enclosing scope
};
arrowFunction();
// ---------------------------------------------------
// 4. Arrow Function Syntax Variations
// ---------------------------------------------------
// explicit use {} and also use return madetory
//  and implicit dont use {}  and also dont need to use return mandetory
let fun1 = () => {
  return "hello"; // explicit return required with {}
};
console.log(fun1()); // "hello"

let fun2 = (num1, num2) => num1 + num2; // implicit return with ()
console.log(fun2(5, 3)); // 8

// Single parameter → parentheses optional
let single = (name) => `Hello ${name}`;
console.log(single("Krish"));

// No parameters → parentheses required
let noParams = () => "no parameters";
console.log(noParams());

// ---------------------------------------------------
// 5. Returning Objects Implicitly
// ---------------------------------------------------
let createUser = (name, age) => ({ username: name, userAge: age });
console.log(createUser("Alice", 25));

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • ‘this’ in regular functions refers to the calling context (object, window, or undefined).
// • Arrow functions inherit ‘this’ from their surrounding scope—no own binding.
// • Use {} with explicit return; use () for concise implicit return.
// • To return object literals implicitly, wrap them in parentheses.
// • Regular functions are preferable for methods needing ‘this’ binding; arrow functions excel in callbacks and array methods.
