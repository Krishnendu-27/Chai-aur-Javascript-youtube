# JavaScript — Arrays, Objects & Utility Patterns ✨

---

## 🚀 Overview

This note collects practical examples and explanations for arrays, advanced array operations, and object patterns in JavaScript. It’s formatted for quick revision and onboarding: corrected grammar, kept your voice, and **each example includes a simple sample input → output**.

---

## 🧰 Prerequisites

- Node.js or browser console
- Basic knowledge of JS syntax (variables, functions)

Run examples with:

```bash
# in Node
node filename.js
# or paste code into browser DevTools console
```

---

## 1) Arrays — Basics ✅

```js
let arr = [0, 8, 6, 5, 8, 2, 2];
console.log(arr[3]);
```

**What it shows**: arrays are zero-indexed; `arr[3]` reads the 4th element.

**Sample output**

```
5
```

### Common methods

```js
let arr3 = [4, 5, 8, 1, 2];
arr3.push(4); // add at end
arr3.pop(); // remove last
arr.unshift(55); // add at start
arr.shift(); // remove first
```

**Notes**: `push/pop` operate on end; `unshift/shift` operate on start.

**Sample sequence** (starting `arr3 = [4,5,8,1,2]`):

```
After push(4): [4,5,8,1,2,4]
After pop():    [4,5,8,1,2]
```

### Search & join

```js
let arr2 = ["light", "lelouch", "saitama"];
console.log(arr2.includes("light")); // true
let arr4 = [1, 2, 5, 63];
console.log(arr4.indexOf(63)); // 3
console.log(arr4.join("-")); // "1-2-5-63"
```

**Sample output**

```
true
3
1-2-5-63
```

---

## 2) `slice()` vs `splice()` — Critical Difference ⚠️

```js
let a = [1, 2, 3, 4, 5];
let s = a.slice(1, 3); // returns [2,3], original unchanged
let r = a.splice(1, 3); // returns [2,3,4], original modified to [1,5]
```

**Key**: `slice` → non-destructive copy; `splice` → modifies original array.

**Sample outputs**

```
slice result: [2,3]
original after slice: [1,2,3,4,5]
splice result: [2,3,4]
original after splice: [1,5]
```

---

## 3) Shallow vs Deep Copy

**Shallow copy**: copies references (nested objects still shared). Methods: spread `[...]`, `Array.prototype.slice()`, `Array.from()`.

```js
let arrA = [{ x: 1 }, { x: 2 }];
let shallow = [...arrA];
shallow[0].x = 99; // affects arrA[0]
```

**Deep copy** (simple cases):

```js
let deep = JSON.parse(JSON.stringify(arrA));
```

**Warning**: `JSON` approach fails on functions, Dates, `undefined`, `BigInt`, `Symbol`.

**Sample behavior**

```
shallow change -> original changed (shared nested objects)
deep copy -> original unchanged
```

---

## 4) Advanced Array Operations ✨

### Concatenation & Spread

```js
let array1 = ["naruto", "light", "tyson"];
let array2 = ["death notes", "beyblade"];
let concat = array1.concat(array2);
let spread = [...array1, ...array2];
```

**Sample output**

```
concat: ["naruto","light","tyson","death notes","beyblade"]
spread: same as above
```

### Flatten nested arrays

```js
let nested = [1, 2, 3, [4, 5, [6, 7]]];
console.log(nested.flat(Infinity)); // fully flattened
```

**Output**

```
[1,2,3,4,5,6,7]
```

### Utility & creation

```js
Array.isArray("jio"); // false
Array.from("krish"); // ['k','r','i','s','h']
Array.of(100, 200); // [100,200]
```

### Higher-order methods

```js
let arr5 = [4, 5, 8, 6, 9];
arr5.map((v) => v * 2); // [8,10,16,12,18]
arr5.filter((v) => v % 2 === 0); // [4,8,6]
arr5.reduce((acc, v) => acc + v, 0); // 32
arr5.find((v) => v % 2 === 0); // 4
```

**Sample outputs**

```
map -> [8,10,16,12,18]
filter -> [4,8,6]
reduce -> 32
find -> 4
```

### Sorting immutably

```js
let ages = [20, 30, 25];
let sorted = [...ages].sort((a, b) => a - b); // [20,25,30]
```

---

## 5) Destructuring & Spread for arrays

```js
let coords = [1, 2, 3, 4];
let [x, y, z] = coords; // x=1,y=2,z=3
let copy = [...coords]; // shallow copy
```

**Output**

```
x=1, y=2, z=3
copy = [1,2,3,4]
```

---

## 6) Singleton Pattern (simple) 🧩

```js
const AppConfig = (function () {
  let instance;
  function create() {
    return { env: "production" };
  }
  return {
    getInstance() {
      if (!instance) instance = create();
      return instance;
    },
  };
})();
const c1 = AppConfig.getInstance();
const c2 = AppConfig.getInstance();
console.log(c1 === c2); // true
```

**Sample output**

```
true
```

---

## 7) Object basics, Symbols & freezing 🧱

```js
let sym = Symbol("teri");
let user = { name: "krish", age: 50, [sym]: "halobro", "full name": "krishG" };
console.table(user);
console.log(user.age); // dot
console.log(user["full name"]); // bracket
console.log(user[sym]); // symbol

Object.freeze(user);
user.name = "kai"; // no effect
```

**Sample behavior**

```
user.age -> 50
user['full name'] -> 'krishG'
user[sym] -> 'halobro'
user.name stays 'krish' after freeze
```

---

## 8) Adding methods & Optional chaining

```js
user.halo = function () {
  console.log(`halo bro ${this.name}`);
};
user.halo(); // halo bro krish

// optional chaining
console.log(user.address?.pin?.lat); // undefined (no error)
```

**Sample output**

```
halo bro krish
undefined
```

---

## 9) Object merging & destructuring

```js
let a = { name: "India" };
let b = { form: "asia" };
let merged = { ...a, ...b };
let { form } = merged;
```

**Sample output**

```
merged -> { name: 'India', form: 'asia' }
form -> 'asia'
```

---

## 10) Working with API-like arrays & JSON

```js
const data1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
console.log(data1[0].name); // Alice
console.log(Object.keys(data1)); // indices
console.log(Object.values(data1));
console.log(Object.entries(data1));
```

**Sample outputs**

```
Alice
['0','1']
[ {...}, {...} ]
[ ['0', {...}], ['1', {...}] ]
```

---

## ✅ Key Takeaways

- Arrays are flexible, zero-indexed and support many built-in helpers (`map`, `filter`, `reduce`).
- Use spread / concat / slice for non-mutating operations; `splice` mutates.
- Shallow vs deep copy matters when nested objects exist — use structured cloning or deep utilities for deep copies.
- Objects are reference types: mutations affect all references unless you copy.
- Use `Object.freeze()` to prevent changes, and optional chaining `?.` to avoid errors on deep access.

---
