# JavaScript Conditionals — README ⚡

A consolidated, detailed README that combines three companion files about conditional logic in JavaScript:

- `conditionals.js` — Basic `if` / `else if` / comparison and logical operators.
- `switch-case.js` — Using `switch` for multi-value branching.
- `truthy-falsy.js` — Truthy/falsy values, `??` (nullish coalescing), ternary operator, and common conditional patterns.

This README preserves the detail from each file while organizing concepts for quick reference and practical use.

---

## Table of Contents

1. Overview
2. Conditionals (`if`, `else if`, `else`)
3. Comparison operators
4. Logical operators (AND, OR, NOT)
5. `switch` / `case`
6. Truthy vs Falsy values
7. Checking empty collections
8. Nullish coalescing (`??`) and `||` differences
9. Ternary operator and practical examples
10. Authentication & default value patterns
11. Data validation patterns
12. Quick reference & takeaways

---

## 1. Overview

JavaScript conditionals control program flow by evaluating expressions and branching accordingly. Use `if`/`else` for general branching, `else if` for multiple scenarios, `switch` for comparing one expression against many discrete values, and leverage truthy/falsy rules, `??`, and ternaries for concise logic and defaults.

---

## 2. Conditionals (`if`, `else if`, `else`)

### Basic `if` example

```js
if (true) {
  console.log("enter"); // runs because condition is true
}

let loggedIn = true;
if (loggedIn) {
  console.log("Yes, you are logged in");
}
```

### `if...else` example

```js
let age = 60;
if (age > 50) {
  console.log("Age is greater than 50");
} else {
  console.log("Age is 50 or younger");
}

// single-line syntax without braces
if (true) console.log("Why it's true");
```

**Notes**

- Prefer braces `{}` for clarity and to avoid subtle bugs.
- `else if` chains evaluate top-to-bottom; the first matching condition runs.

---

## 3. Comparison operators

```js
console.log(2 == "2"); // true  (loose equality: coerces types)
console.log(2 === "2"); // false (strict equality: value + type)
console.log(2 != "2"); // false (loose inequality)
console.log(2 !== "2"); // true  (strict inequality)
console.log(50 > 40); // true
console.log(50 >= 50); // true
```

**Recommendation:** Prefer strict comparisons `===` and `!==` to avoid unexpected type coercion.

---

## 4. Logical operators (AND, OR, NOT)

```js
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
```

**Tip:** Use `&&` when all conditions are required, `||` for alternatives, and `!` to invert booleans.

---

## 5. `switch` / `case`

`switch` is useful when comparing a single expression against many values. It's often cleaner than long `if/else if` chains when the expression is the same.

```js
switch (expression) {
  case value1:
    // runs if expression === value1
    break;
  case value2:
    // runs if expression === value2
    break;
  default:
    // runs if no case matches
    break;
}

// Month example
let month = 5;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  default:
    console.log("Month not in the first half of the year");
    break;
}
```

**Important**

- Always include `break` unless you intentionally want fall-through.
- Provide a `default` case to handle unexpected values.

---

## 6. Truthy vs Falsy values

JavaScript coerces values to boolean in conditional contexts. Only eight values are _falsy_ — everything else is _truthy_.

### Falsy values (the only ones)

- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

```js
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

### Truthy examples

```js
console.log(Boolean("0")); // true
console.log(Boolean("false")); // true
console.log(Boolean(" ")); // true (string with space)
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)
console.log(Boolean(function () {})); // true
```

---

## 7. Checking empty collections

- Arrays: use `.length === 0`

```js
let arr = [];
if (arr.length === 0) {
  console.log("Array is empty");
}
```

- Objects: use `Object.keys(obj).length === 0`

```js
let obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}
```

**Why `Object.keys()`?** It returns an array of an object's own enumerable property names — checking its `length` is a reliable way to detect an empty plain object.

---

## 8. Nullish coalescing (`??`) and `||` differences

The nullish coalescing operator `a ?? b` returns `b` only when `a` is `null` or `undefined`. Unlike `||`, it does not treat other falsy values (like `0` or `""`) as absent.

```js
let score = 0;
console.log(score || 100); // 100 (0 is falsy)
console.log(score ?? 100); // 0   (0 is not null/undefined)

let userAge = "";
console.log(userAge || "Unknown"); // "Unknown"
console.log(userAge ?? "Unknown"); // "" (empty string kept)
```

**When to use which**

- Use `||` if you want to treat all falsy values as "missing".
- Use `??` when only `null` or `undefined` should be considered absent (recommended for defaulting numbers or empty strings you want to keep).

---

## 9. Ternary operator and practical examples

Ternary operator (`condition ? exprIfTrue : exprIfFalse`) is a concise alternative to simple `if/else`.

```js
let price = 5;
price > 10 ? console.log("Expensive") : console.log("Affordable");

let isLoggedIn = true;
let status = isLoggedIn ? "Welcome" : "Please login";
console.log(status);

// Chained ternary (readability warning)
let examScore = 85;
let grade = examScore >= 90 ? "A" : examScore >= 80 ? "B" : "C";
console.log(grade);

// Return from functions
const getDiscount = (isPremium) => (isPremium ? 20 : 5);
console.log(getDiscount(true)); // 20
```

**Readability note:** Avoid long chained ternaries — prefer `if/else` when conditions become complex.

---

## 10. Authentication & default value patterns

```js
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
```

**Pattern:** Use `??` to provide defaults without clobbering valid falsy values such as `0` or `""`.

---

## 11. Data validation patterns

```js
let fetchedData = null;
let data = fetchedData ?? [];
let message = data.length > 0 ? "Data loaded" : "No data available";

console.log(username); // "Anonymous"
console.log(theme); // "light"
console.log(buttonClass); // "btn-primary"
console.log(message); // "No data available"
```

**Common pattern:** Default to an empty collection with `?? []` then inspect `.length` for presence.

---

## 12. Quick reference & takeaways ✅

- **Only 8 values are falsy**: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
- **Prefer strict equality** `===` / `!==` to avoid coercion surprises.
- **Use `??`** when you need to default `null`/`undefined` but keep other falsy values.
- **Use `||`** to treat any falsy value as missing (useful for strings/nil checks when empty strings should be replaced).
- **Use `switch`** for clear multi-value comparisons; remember `break` and `default`.
- **Ternary** is great for short conditional assignments; avoid chaining too deeply.
- **Check emptiness**: arrays with `.length === 0`, objects with `Object.keys(obj).length === 0`.
- **Always favor clarity**: prefer braces and explicit checks where ambiguity could cause bugs.

---

## 13. Suggested file map (for a repo)

```
/conditionals/
  ├─ conditionals.js         # basic if/else, comparisons, logical ops
  ├─ switch-case.js          # switch examples and notes
  └─ truthy-falsy.js         # falsy/truthy, ??, ?:, patterns

README.md                    # this file
```

---

