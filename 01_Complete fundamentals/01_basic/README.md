# JavaScript Fundamentals — Notes & Examples ✨

## 🚀 Overview

These notes cover the essentials: where JavaScript runs today (Node, Deno, V8), how JS is parsed/compiled, basic I/O, variable kinds (`var` / `let` / `const`), data types (primitive vs reference), type coercion, truthy/falsy rules, common operators, and a lot of small examples with **sample input → output** to make things concrete.
Clean, practical notes about how JavaScript stores values (stack vs heap), when primitives get promoted to the heap, string/number/date utilities, and common pitfalls. Corrected grammar & spelling, kept the same casual voice. Each example includes a short explanation and a simple sample input → output where relevant.

---

## 🧰 Prerequisites

- Basic terminal / browser devtools familiarity
- Node.js or Deno installed to run JS on your machine (optional; browser console also works)

---

## 🧩 Where JS runs (then vs now)

- **Old days:** JS only ran inside browsers.
- **Now:** JS can run outside browsers using runtimes like **Node.js** and **Deno**. These embed a JavaScript engine (V8 for Node, V8 for Deno too) that compiles & executes JS on the machine.

### What is **V8**?

- V8 is Google’s high-performance open-source JavaScript and WebAssembly engine (written in C++).
- Used in Chrome and Node.js.
- Implements ECMAScript and WebAssembly and can be embedded into C++ apps.

---

## 🏗️ How JS becomes machine code (high-level)

1. **Source code** (for/while, functions, etc.)
2. **Tokenization / Parsing** → AST (Abstract Syntax Tree).
3. **Bytecode / Intermediate representation** (engine-dependent).
4. **Machine code** — executed by CPU (JIT compilation, optimizations).

(Short names: tokenization/parsing → bytecode → machine code.)

---

## 🖥️ Basic I/O (Node / console)

```js
// most basic way in browser or Node:
console.log("halo");
// Node-specific streaming:
process.stdout.write("hallo Bro\n");
// table pretty-print:
console.table({ city: "Kolkata", food: "mach vat" });
```

**Sample outputs**

```
console.log -> halo
process.stdout.write -> hallo Bro
console.table -> prints a small table in devtools/console
```

---

## 🏷️ Variable declarations: `var`, `let`, `const`

- `var` (ES5)
  - Function scoped
  - Can be redeclared
  - Hoisted (initialized to `undefined`)

- `let` (ES6)
  - Block scoped
  - Can be updated but not redeclared in same scope
  - Temporal Dead Zone (TDZ) before initialization

- `const` (ES6)
  - Block scoped
  - Must be initialized at declaration
  - Cannot be reassigned (but objects/arrays referenced by `const` can be mutated)

```js
var a = 12;
var a = 20; // allowed

let name = "krish";
name = "updated"; // allowed

const title = "rio";
// title = "new"; // ❌ error
```

**Sample behavior (console)**

```
var redeclare -> a becomes 20
let update -> name becomes "updated"
const reassign -> throws TypeError
```

---

## 🌐 Scope examples

```js
let g = 20; // global-ish in that module

{
  let g = 10; // block-scoped different variable
  console.log(`inside the block: ${g}`); // 10
}

console.log(`outside the block: ${g}`); // 20
```

**Output**

```
inside the block: 10
outside the block: 20
```

---

## 🧪 Data types (primitive vs reference)

**Primitive (7):** `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`
**Reference:** `object` (includes `Array`, `Function`, `Date`, plain objects)

```js
let str = "name"; // string
let num = 5; // number
let bignum = 123n; // bigint
let sym = Symbol("s"); // symbol
let boo = true; // boolean
let und; // undefined
let nul = null; // null

let arr = [1, 2, 3]; // object (array)
let obj = { name: "hi" }; // object
let fn = function () {}; // function (callable object)
```

**Notes:**

- `typeof null` returns `"object"` (historic JS quirk).
- Arrays are objects; use `Array.isArray()` to check arrays.

---

## 🔁 Primitive vs Reference behavior

```js
// primitive (copy by value)
let a = 12;
let b = a;
a += 12; // b stays 12

// reference (copy by reference)
let c = [1, 2, 3];
let d = c;
d.push(4);
console.log(c); // [1,2,3,4]  (both refer same array)
```

**Output**

```
primitive copy -> b = 12
reference copy -> c = [1,2,3,4]
```

---

## 🔢 `typeof` examples & quirks

```js
console.log(typeof "abc"); // "string"
console.log(typeof 123); // "number"
console.log(typeof 123n); // "bigint"
console.log(typeof []); // "object"
console.log(typeof null); // "object"  (historical quirk)
```

---

## 🎭 Truthy vs Falsy

**Falsy values:** `0`, `false`, `""` (empty string), `null`, `undefined`, `NaN`, `document.all` (weird legacy)
Everything else is **truthy**.

```js
console.log(!!0); // false
console.log(!!"0"); // true
console.log(!![]); // true
console.log(!!null); // false
```

---

## 🔄 Type coercion & equality

- `==` performs type coercion (loose equality)
- `===` no coercion (strict equality)

```js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

**Important operator behaviors with `+` and `-`:**

```js
console.log("5" + 1); // "51"  (string concatenation)
console.log("5" - 1); // 4     (numeric coercion)
```

**Tricky concatenation order:**

```js
console.log("1" + 2 + 2); // "122"
console.log(1 + "2" + 2); // "122"
console.log(1 + 2 + "2"); // "32"
```

---

## 🔢 Number conversion & special values

```js
Number("33"); // 33
Number("33abc"); // NaN
Number(null); // 0
Number(undefined); // NaN

let big = 9007199254740991n; // BigInt
```

**Note:** `NaN` is a number but means invalid numeric result. `Number.MAX_SAFE_INTEGER` is `9007199254740991`.

---

## ➕➖ Arithmetic, assignment, logical operators

Examples (all standard):

```js
console.log(1 + 2); // 3
console.log(5 % 2); // 1
console.log(2 ** 3); // 8

let x = 5;
x += 2; // x = 7
```

Logical:

- `&&` (AND), `||` (OR), `!` (NOT)

---

## 🔼 Pre-increment vs Post-increment

```js
let x = 3;
const y = x++; // y = 3, x becomes 4
console.log(`x:${x}, y:${y}`); // x:4, y:3

let a = 3;
const b = ++a; // a becomes 4, b = 4
console.log(`a:${a}, b:${b}`); // a:4, b:4
```

**Output**

```
x:4, y:3
a:4, b:4
```

---

## ⚖️ Comparison corner cases (null / undefined)

```js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(undefined <= 0); // false
```

> Comparisons and `==`/`===` have different internal rules — be careful with `null`/`undefined`.

---

## 🧩 `instanceof` vs `typeof`

- `typeof` → primitive types (strings, numbers, etc.)
- `instanceof` → checks prototype chain for objects/arrays

```js
let g = [];
console.log(g instanceof Object); // true
console.log(g instanceof Array); // true
```

---

## ⚠️ Converting types (practical examples)

```js
let score = "52";
let newscore = Number(score); // 52 (number)

let score2 = "5263sd";
let newscore2 = Number(score2); // NaN
console.log(newscore2);
```

**Boolean conversion**

```js
let isLoggedIn = "krish";
console.log(Boolean(isLoggedIn)); // true
console.log(Boolean("")); // false
```

---

## 🧾 Small resources

- MDN Web Docs — JS reference and guides (best single source)
- TC39 proposals — for language spec and upcoming features

## 🧠 Stack vs Heap — quick reminder

- **Stack**: fast, holds _primitive values_ (by value) when they're short-lived/local.
- **Heap**: larger, holds _objects/arrays/functions_ (by reference) and any value that **escapes** the local scope or is stored as part of an object.
- **Rule of thumb**: primitives → copy (value semantics). Objects/arrays/functions → reference (shared).

---

## 🔁 When are primitives stored in the heap?

Primitives are usually stack-allocated, but engines (e.g., V8) promote them to heap in certain situations:

### 1) Primitive as part of an object → stored in heap

```js
let user = {
  name: "Alice",
  age: 30,
};
```

- Explanation: the whole `user` object lives on the heap, so its primitive properties (`"Alice"`, `30`) are stored there as part of the object.

**Sample console**

```
console.log(user.name) // "Alice"
```

---

### 2) Primitive captured by a closure → moved to heap

```js
function outer() {
  let count = 0;
  return function inner() {
    console.log(count);
  };
}
let closure = outer();
closure(); // prints 0
```

- Explanation: `count` escapes its stack frame (captured by `inner`), so the engine keeps it alive (heap).

**Sample console**

```
0
```

---

### 3) Boxing for method call → temporary heap object

```js
let str = "hello";
let upper = str.toUpperCase();
console.log(upper); // "HELLO"
```

- Explanation: the primitive `"hello"` is temporarily wrapped (boxed) into a `String` object so methods can be called. The temporary object is discarded after use.

**Sample console**

```
HELLO
```

---

### 4) Interned literals / symbol pooling → heap

```js
let a = "hi";
let b = "hi";
console.log(a === b); // true
```

- Explanation: engines often intern identical string literals (one shared instance in heap) to save memory and speed up comparisons.

**Sample console**

```
true
```

---

### 5) Dynamic promotions (escape analysis)

```js
function factory() {
  let x = 42;
  setTimeout(() => console.log(x), 1000);
}
factory(); // after 1s prints 42
```

- Explanation: `x` escapes via async callback, so engines may promote it to heap.

**Sample console (after ~1s)**

```
42
```

---

## 📋 Conceptual table (short)

|                     Scenario | Stack | Heap |
| ---------------------------: | :---: | :--: |
| Local, short-lived primitive |  ✅   |  ❌  |
|            In object / array |  ❌   |  ✅  |
|          Captured by closure |  ❌   |  ✅  |
|       Boxing for method call |  ❌   |  ✅  |
|     Interned string / symbol |  ❌   |  ✅  |

---

## ⚠️ Pitfall: unintended mutation (references)

```js
let original = { name: "John", age: 25 };
let modified = original; // reference copy
modified.age = 30;
console.log(original.age); // 30 (original changed)
```

**Solution (shallow copy):**

```js
let copy = { ...original };
copy.age = 30;
console.log(original.age); // stays 25
```

**Deep copy (simple cases):**

```js
let deep = JSON.parse(JSON.stringify(obj)); // limited: loses functions, Dates, etc.
```

---

## ✂️ Strings — useful operations & examples

```js
let name1 = "K";
let title2 = "G";
console.log(`${name1}${title2}`); // template literal
```

**Output**

```
KG
```

**String object vs primitive**

```js
let prim = "halobro";
let objStr = new String("halobro");
console.log(prim[0]); // 'h'
console.log(objStr[0]); // 'h'
```

**Common methods**

```js
let s = "hello";
console.log(s.toUpperCase()); // "HELLO"
console.log(s.charAt(2)); // 'l'
console.log(s.indexOf("l")); // 2
console.log(s.substring(2, 5)); // "llo"
console.log("   hi  ".trim()); // "hi"
console.log("a,b,c".split(",")); // ["a","b","c"]
console.log("hello".includes("ll")); // true
```

**Sample outputs**

```
"HELLO"
"l"
2
"llo"
"hi"
["a","b","c"]
true
```

---

## 🔢 Numbers & Math — quick patterns

**Primitive number vs Number object**

```js
let n = 100; // primitive
let nObj = new Number(100); // object wrapper
console.log(nObj.toString()); // "100"
```

**Formatting**

```js
let v = 123.456;
console.log(v.toFixed(2)); // "123.46"
console.log(v.toPrecision(4)); // "123.5" (4 significant digits)
```

**BigInt**

```js
let big = 1000000000000000000n;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

**Math examples**

```js
console.log(Math.abs(-55)); // 55
console.log(Math.round(5.35)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 9, 3)); // 9
console.log(Math.random()); // e.g. 0.123456...
// random integer between min and max inclusive:
let min = 10,
  max = 20;
Math.floor(Math.random() * (max - min + 1) + min);
```

**Sample outputs (examples)**

```
55
5
5
4
1
9
0.483927...
14  // sample result for random [10,20]
```

---

## 🗓️ Date & Time — basics & common helpers

```js
let now = new Date();
console.log(now.toString()); // local full string
console.log(now.toISOString()); // ISO UTC
console.log(now.toLocaleString()); // locale-specific
console.log(Date.now()); // epoch ms
console.log(Math.floor(Date.now() / 1000)); // epoch seconds
```

**Month/day notes**

- Months are 0-indexed for some constructors: `new Date(2023, 0, 1)` → Jan 1, 2023.
- Bad date strings may roll over or return `Invalid Date`.

**Time zone example**

```js
console.log(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
// e.g. "10/9/2025, 12:30:00 AM"
```

---

## 🔍 Type coercion & equality — common gotchas

- `==` performs coercion, `===` does not. Prefer `===`.

```js
5 == "5"; // true
5 === "5"; // false
```

- `+` with strings concatenates; `-` forces numeric conversion:

```js
"5" + 1; // "51"
"5" - 1; // 4
```

- Order matters:

```js
"1" + 2 + 2; // "122"
1 + 2 + "2"; // "32"
```

---

## ✅ Truthy & Falsy

**Falsy values**: `0`, `false`, `""`, `null`, `undefined`, `NaN`
Everything else is truthy.

```js
!!0; // false
!!"0"; // true
!![]; // true
!!null; // false
```

---

## 🧾 `typeof` & `instanceof` quick guide

```js
typeof "a"; // "string"
typeof 1; // "number"
typeof 1n; // "bigint"
typeof Symbol(); // "symbol"
typeof []; // "object"
typeof null; // "object"  // historical quirk
```

```js
[] instanceof Array   // true
[] instanceof Object  // true
```

---

## 🧠 Best practices & tips

- Prefer `let` / `const`; avoid `var`. Use `const` by default.
- Use `===` for equality checks.
- Avoid mutating inputs unless allowed — copy objects when you need independent versions (`{...obj}`, `Array.slice()`, or `structuredClone()` for deep clone when supported).
- Use `toFixed`, `toPrecision`, and `Number()` carefully — `Number("12a")` → `NaN`.
- For random integer ranges: `Math.floor(Math.random() * (max - min + 1) + min)`.
- Use `Date` helpers and `toLocaleString()` for timezone formatting.
- Keep code readable — use Prettier for consistent formatting.

---

## ✨ Key Takeaways

- JS runs in browsers and in runtimes (Node, Deno) using engines like **V8**.
- Tokenize → parse → bytecode → machine code (JIT) is how engines process code.
- Primitive vs reference types behave differently (value vs reference).
- Use `let`/`const` (prefer `const` by default). Avoid `var` unless needed.
- Prefer `===` over `==` to avoid coercion surprises.
- `std::endl` is C++ — in JS use `"\n"` when printing to streams if needed (Node).
- Watch out for `null` and `undefined` edge cases.
- Use `BigInt` for integers beyond `Number.MAX_SAFE_INTEGER`.
- Readability > clever hacks — use Prettier/formatter for consistent style.
- Primitives are usually stack-allocated but can be promoted to heap when they escape (closures, objects, boxing, interning).
- Objects/arrays/functions always live in heap and are shared by reference.
- Understand copy vs reference to avoid accidental mutations.
- `typeof`, `==` vs `===`, and coercion rules are essential — prefer strict checks.
- Use built-in utils (`Math`, `Date`, `String` methods) responsibly and test edge cases (NaN, invalid dates, overflow).

---
