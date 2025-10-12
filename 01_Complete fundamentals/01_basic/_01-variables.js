// 📝 Words vs Keywords

// Term        | Definition                          | Example
// ----------- | ----------------------------------- | ------------------
// 📖 Words     | Normal words we use                 | halo, bro
// 🔑 Keywords  | Reserved words that do something    | for, else, if

// 🏷️ Variable Types

// ---- var (ES5) ----

// ✅ Can be redeclared without error
// ✅ Function scoped
// ✅ Added to window object
// ⚠️ Subject to hoisting

var a; // declaration
a = 12; // initialization

var b = 10;
var b = 20; // No error - redeclaration allowed

// ---- let (ES6) ----

// ❌ Cannot be redeclared
// ✅ Can be updated
// 🔒 Block scoped
// ⚠️ Temporal Dead Zone applies

let name = "krish"; // declaration + initialization
name = "updated"; // ✅ Update allowed
// let name = "error"; // ❌ Redeclaration not allowed

// ---- const (ES6) ----

// ❌ Cannot be redeclared
// ❌ Cannot be reassigned
// 🔒 Block scoped
// ⚠️ Must initialize on same line

const title = "rio"; // ✅ Declaration + initialization required
// const title; // ❌ Error - needs initialization
// title = "new"; // ❌ Error - cannot reassign
// we can do this also but not ideal
adress = "world";
// 🌐 Scope Types

// ---- 🌍 Global Scope ----

let c = 50; // Available everywhere

// ---- 🔧 Function Scope ----

function istrue(param) {
  param = 50; // Only available inside this function
  if (param == true) {
    return param;
  }
}

// Example call (not required but can be used)
// console.log(istrue(true));

// ---- 📦 Block Scope ----

let g = 20; // Global

{
  let g = 10; // Block scoped - different variable
  console.log(`inside the block: ${g}`); // 10
}

console.log(`outside the block: ${g}`); // 20
