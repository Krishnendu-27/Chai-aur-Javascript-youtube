// ----------------------------------------------
// 🧠 When Are Primitive Values Stored in the Heap?
// ----------------------------------------------
// By default, primitive values (string, number, boolean, null, undefined, symbol, bigint)
// are stored in the stack.
// But in some cases, JS engines like V8 move them to the heap.

// -------------------------------------------------
// ✅ 1. Primitive as Object Property → Stored in Heap
// -------------------------------------------------

let user = {
  name: "Alice", // "Alice" is a primitive, but stored in heap as part of the object
  age: 30        // same for 30
};

// The entire object 'user' is allocated on the heap,
// so its primitive properties are stored there too.

// -------------------------------------------------
// ✅ 2. Primitive Used in a Closure → Stored in Heap
// -------------------------------------------------

function outer() {
  let count = 0; // normally on stack

  return function inner() {
    console.log(count); // count is captured by closure → moved to heap
  };
}

let closure = outer();
closure(); // prints 0

// When a primitive escapes the local scope (like here), engines like V8
// move it to the heap to preserve it across calls.

// -------------------------------------------------
// ✅ 3. Method Call on Primitive → Boxing → Heap
// -------------------------------------------------

let str = "hello";
let upper = str.toUpperCase(); 
console.log(upper); // "HELLO"

// JS automatically wraps "hello" in a String object (on heap) so we can call methods.
// This temporary object is discarded after the method call.

// -------------------------------------------------
// ✅ 4. Interned Strings / Symbols → Heap
// -------------------------------------------------

let a = "hi";
let b = "hi";

console.log(a === b); // true → both point to same interned string in heap

// Engines often store identical string literals in a shared heap pool
// to reduce memory and improve performance.

// -------------------------------------------------
// ✅ 5. Engine Optimizations (Dynamic Promotion)
// -------------------------------------------------

// Example: values in recursion, async, or closures might be promoted.

function factory() {
  let x = 42; // might be promoted if accessed asynchronously

  setTimeout(() => {
    console.log(x); // closure keeps x alive → may be stored in heap
  }, 1000);
}

factory();

// The engine may promote x to the heap depending on escape analysis.

// -------------------------------------------------
// ✅ Summary Table (Conceptual)
// -------------------------------------------------

// | Scenario                     | Stack | Heap |
// |-----------------------------|-------|------|
// | Local variable (short-lived)|  ✅   | ❌   |
// | In object or array          |  ❌   | ✅   |
// | Captured by closure         |  ❌   | ✅   |
// | Method call (boxing)        |  ❌   | ✅   |
// | Interned string/symbol      |  ❌   | ✅   |

// -------------------------------------------------
// 🔁 Final Summary:
// -------------------------------------------------
// Primitives are usually stack-allocated,
// but they move to the heap when:
// - Used in objects
// - Captured by closures
// - Temporarily boxed for method calls
// - Interned for optimization
// - Escape the current stack frame (e.g., async, closures)

