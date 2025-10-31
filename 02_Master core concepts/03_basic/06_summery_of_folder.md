# 🚀 JavaScript Functions Complete Guide

---

## 🧰 Prerequisites

- Node.js or browser DevTools (to run snippets)
- Basic knowledge of variables and console

**How to run**:

```bash
# Save snippet to file, e.g., functions.js
node functions.js
# Or paste into the browser console
```

---

## 1️⃣ Basic Function Declaration & Execution

```javascript
function myname() {
  console.log("K");
  console.log("R");
  console.log("I");
  console.log("S");
  console.log("H");
}

myname();
```

**Explanation**: Simple named function; calling `myname()` executes its block.

**Sample Output**:

```
K
R
I
S
H
```

---

## 2️⃣ Functions with Parameters (Arguments)

```javascript
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(5, 10); // Output: 15
```

**Explanation**: Parameters `num1`, `num2` receive values passed at call time.

---

## 3️⃣ `return` vs `console.log`

```javascript
function subTwoNumbers(num1, num2) {
  return num1 - num2; // Returns value to caller
}

console.log(subTwoNumbers(10, 5)); // Output: 5
```

**Key Difference**:

- **`return`**: Gives a value back (can be stored, reused, chained)
- **`console.log`**: Only displays value in console (for debugging)
- Code after `return` doesn't run

---

## 4️⃣ Default Parameters

```javascript
function multiTwoNumbers(num1 = 1, num2 = 1) {
  return num1 * num2;
}

console.log(multiTwoNumbers(5, 66)); // Output: 330
console.log(multiTwoNumbers()); // Output: 1 (using defaults)
```

**Explanation**: Default values are used when arguments are omitted.

---

## 5️⃣ Declaration vs Expression vs Arrow

```javascript
// 1. Declaration (hoisted - can call before declaration)
function greet() {
  console.log("Hello from declaration");
}

// 2. Expression (NOT hoisted - must declare before call)
let title = function () {
  console.log("Hello from expression");
};

// 3. Arrow function (ES6, NOT hoisted)
let city = () => {
  console.log("Hello from arrow function");
};

greet(); // Works - declaration is hoisted
title(); // Works
city(); // Works
```

**Output**:

```
Hello from declaration
Hello from expression
Hello from arrow function
```

**Hoisting Note**:

```javascript
console.log(addone(5)); // ✅ Works (hoisted)
console.log(addtwo(5)); // ❌ Error (not hoisted)

function addone(num) {
  return num + 1;
}

let addtwo = function (num) {
  return num + 2;
};
```

---

## 6️⃣ Rest Parameters & Spread Syntax

```javascript
// Rest parameter: gathers arguments into an array
function sumAllNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Output: 15

// Spread syntax: expands array elements
let arr = [1, 2, 3];
let expanded = [...arr, 4, 5];
console.log(expanded); // Output: [1, 2, 3, 4, 5]
```

**Rest with Mixed Parameters**:

```javascript
function calculatecartTotal(val1, val2, ...remaining) {
  return remaining; // Only collects extra args
}

console.log(calculatecartTotal(1, 2, 3, 5)); // Output: [3, 5]
```

---

## 7️⃣ Higher-Order Functions & Closures

```javascript
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

let doubler = createMultiplier(2);
console.log(doubler(5)); // Output: 10
```

**Explanation**: The returned function keeps access to `factor` via **closure**.

---

## 8️⃣ Pure vs Impure Functions

```javascript
// Pure: Only depends on inputs, no side effects
function pureMath(a, b) {
  return a + b;
}

// Impure: Modifies external state
let counter = 0;
function impureCounter() {
  return ++counter; // Side effect: modifies counter
}

console.log(pureMath(2, 3)); // Output: 5
console.log(impureCounter()); // Output: 1
console.log(impureCounter()); // Output: 2
```

**Takeaway**: Pure functions are predictable; impure have side effects.

---

## 9️⃣ Practical Examples

### 🏃 BMI Calculator

```javascript
function calculateBMI(weight, height) {
  return weight / height ** 2;
}

console.log(calculateBMI(70, 1.75).toFixed(2)); // Output: 22.86
```

### 💳 Discount Calculator

```javascript
function applyDiscount(price, discountPercent = 0) {
  return price - (price * discountPercent) / 100;
}

console.log(applyDiscount(100, 20)); // Output: 80
```

### 👋 Greeting with Default

```javascript
function personalGreeting(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(personalGreeting("Krish")); // Output: Welcome, Krish!
console.log(personalGreeting()); // Output: Welcome, Guest!
```

### 📦 Handle Objects

```javascript
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject({ username: "sam", price: 399 });
// Output: Username is sam and price is 399
```

### 📋 Return Array Element

```javascript
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400
```

---

## 🔟 Arrow Function Syntax Variations

```javascript
// Explicit return with {}
let fun1 = () => {
  return "hello";
};
console.log(fun1()); // Output: "hello"

// Implicit return with ()
let fun2 = (num1, num2) => num1 + num2;
console.log(fun2(5, 3)); // Output: 8

// Single parameter (parentheses optional)
let single = (name) => `Hello ${name}`;
console.log(single("Krish")); // Output: Hello Krish

// No parameters (parentheses required)
let noParams = () => "no parameters";
console.log(noParams()); // Output: no parameters

// Returning objects implicitly (wrap in parentheses)
let createUser = (name, age) => ({ username: name, userAge: age });
console.log(createUser("Alice", 25));
// Output: { username: "Alice", userAge: 25 }
```

---

## 1️⃣1️⃣ The `this` Keyword

```javascript
// In object methods, 'this' refers to the object
let user = {
  username: "krish",
  age: 20,
  welcome: function () {
    console.log(`Welcome ${this.username}, your age is ${this.age}`);
  },
};

user.welcome(); // Output: Welcome krish, your age is 20

// In regular functions: 'this' depends on context
function regularFunction() {
  console.log(this); // undefined (strict) or global object
}

// Arrow functions inherit 'this' from parent scope
let arrowFunction = () => {
  console.log(this); // Same 'this' as enclosing scope
};
```

---

## 1️⃣2️⃣ IIFE (Immediately Invoked Function Expression)

```javascript
// Regular function (execute later)
function halo() {
  console.log("halo world");
}
halo(); // Call it explicitly

// IIFE (execute immediately)
(function halo() {
  console.log("halo world");
})();

// IIFE with parameters
((name) => {
  console.log(`halo world ${name}`);
})("krish"); // Output: halo world krish
```

**Purpose**: Avoids global scope pollution by creating a local scope immediately.

**Syntax**: `(function() { ... })();` — wrap in parentheses, then call with `()`

---

## 1️⃣3️⃣ Scope & Variable Access

```javascript
// Global scope
let globalVar = "I'm global";

function outer() {
  let outerVar = "I'm in outer";

  function inner() {
    let innerVar = "I'm in inner";
    console.log(globalVar); // ✅ Can access parent
    console.log(outerVar); // ✅ Can access parent
    console.log(innerVar); // ✅ Own variable
  }

  inner();
  console.log(innerVar); // ❌ Can't access child scope
}

outer();
```

**Key Rule**: Child accesses parent's variables, but parent **cannot** access child's variables.

---

## 1️⃣4️⃣ Block Scope vs Function Scope

```javascript
if (true) {
  let a = 50; // Block scope
  const b = 60; // Block scope
  var c = 70; // Function scope
}

// console.log(a);  // ❌ ReferenceError (let is block-scoped)
// console.log(b);  // ❌ ReferenceError (const is block-scoped)
console.log(c); // ✅ 70 (var ignores blocks)

// Reassigning var across blocks
var c = 100;
if (true) {
  var c = 133; // Overwrites previous var c
}
console.log(c); // Output: 133

// let respects block boundaries
let a = 1250;
if (true) {
  let a = 133; // Different variable (block-scoped)
  console.log(a); // Output: 133
}
console.log(a); // Output: 1250
```

**Best Practice**: Use `let` and `const`; avoid `var`.

---

## ✨ Key Takeaways

- **🧩 Reusability**: Functions are reusable building blocks — prefer small, focused functions
- **🖨️ return vs console.log**: Use `return` for values; `console.log` only for debugging
- **🔒 Pure Functions**: Prefer pure functions for predictability; isolate side effects
- **✨ Flexibility**: Use default parameters and rest/spread to make flexible APIs
- **🔁 Higher-Order Functions**: Powerful for creating factories and callbacks
- **⏸️ IIFE**: Execute immediately to avoid global scope pollution
- **📊 Scope**: Child functions access parent scope; parents cannot access child scope
- **🎯 Arrow Functions**: Great for callbacks and concise syntax; use `=>` with implicit return `()`

---
