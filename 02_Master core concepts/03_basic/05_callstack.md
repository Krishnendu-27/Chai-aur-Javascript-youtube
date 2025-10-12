---

## 📅 Saturday, October 11, 2025, 8:10 PM IST

# 🚀 JavaScript Execution Context & Call Stack

Understanding how JavaScript executes code is fundamental to mastering the language.

---

## 🌍 Execution Context Types

JavaScript runs code in **3 types** of execution contexts:

| Type               | Description                       | Example                  |
| ------------------ | --------------------------------- | ------------------------ |
| **🌐 Global EC**   | Default context for all code      | Window object in browser |
| **🔧 Function EC** | Created when function is called   | Each function call       |
| **📝 Eval EC**     | Created by `eval()` (avoid using) | Part of Global EC        |

---

## ⚡ JavaScript Execution Phases

Every execution context runs in **2 phases**:

### 1️⃣ **Memory Creation Phase** (Creation Phase)

- 📋 Allocates memory for all variables and functions
- 🔤 Variables get `undefined`
- 🎯 Functions store their complete definition

### 2️⃣ **Execution Phase**

- 🎯 Assigns actual values to variables
- 🚀 Executes function calls

---

## 📊 Step-by-Step Example

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

### 🌐 Global Execution Context

#### **Phase 1: Memory Creation**

```
val1     → undefined
val2     → undefined
addNum   → function definition
result1  → undefined
result2  → undefined
```

#### **Phase 2: Execution**

```
val1     → 10
val2     → 5
addNum   → (stored function)
result1  → addNum() call → creates new EC
result2  → addNum() call → creates new EC
```

---

## 🔧 Function Execution Context

When `addNum(val1, val2)` is called:

### 📦 New Execution Context Created

- **🔧 Variable Environment**: Stores function's variables
- **🎯 Execution Thread**: Executes the function code

#### **Phase 1: Memory Creation**

```
num1   → undefined
num2   → undefined
total  → undefined
```

#### **Phase 2: Execution**

```
num1   → 10 (from val1)
num2   → 5 (from val2)
total  → 15 (10 + 5)
return → 15 (back to Global EC)
```

### 🗑️ Context Cleanup

After function completes, its execution context is **deleted**.

---

## 📚 Call Stack (LIFO - Last In, First Out)

The **Call Stack** manages execution contexts like a stack of plates.

### 🔄 Call Stack Process

```
Step 1: Global EC pushed
┌─────────────────┐
│   Global EC     │ ← Current
└─────────────────┘

Step 2: addNum() called - new EC pushed
┌─────────────────┐
│   addNum EC     │ ← Current
├─────────────────┤
│   Global EC     │
└─────────────────┘

Step 3: addNum() completes - EC popped
┌─────────────────┐
│   Global EC     │ ← Back to Global
└─────────────────┘

Step 4: Second addNum() called
┌─────────────────┐
│   addNum EC     │ ← New instance
├─────────────────┤
│   Global EC     │
└─────────────────┘
```

---

## 🛠️ Debugging with Call Stack

### 🔍 Chrome DevTools

1. Open **Sources** tab
2. Set **breakpoints** in your code
3. Watch the **Call Stack** panel
4. Step through execution to see contexts being created/destroyed

```javascript
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
  console.trace(); // Shows call stack
}

first(); // Creates chain: Global → first() → second() → third()
```

---

## 🎯 Visual Call Stack Example

```javascript
function a() {
  console.log("a");
  b();
}

function b() {
  console.log("b");
  c();
}

function c() {
  console.log("c");
}

a(); // Start the chain
```

**Call Stack Progression**:

```
1. [Global]
2. [Global, a()]
3. [Global, a(), b()]
4. [Global, a(), b(), c()]
5. [Global, a(), b()]      ← c() finished
6. [Global, a()]           ← b() finished
7. [Global]                ← a() finished
```

---

## ⚠️ Common Issues & Solutions

### 🚨 Stack Overflow

```javascript
function infiniteLoop() {
  infiniteLoop(); // ❌ Never stops calling itself
}
// infiniteLoop(); // Don't run this!
```

**Solution**: Ensure recursive functions have proper **base cases**.

### 🐛 Hoisting Confusion

```javascript
console.log(x); // undefined (not error!)
var x = 5;

// Why? Memory phase allocated x as undefined
```

---

## 📋 Key Concepts Summary

| Concept                | Description                      | Example                       |
| ---------------------- | -------------------------------- | ----------------------------- |
| **🌐 Global EC**       | Main execution environment       | `window` in browser           |
| **🔧 Function EC**     | Created per function call        | Each `addNum()` call          |
| **📚 Call Stack**      | LIFO management of contexts      | Chrome DevTools visualization |
| **💾 Memory Phase**    | Allocate memory, set `undefined` | Variable hoisting             |
| **⚡ Execution Phase** | Assign values, run code          | Actual computation            |

---

## ✨ Key Takeaways

- **🚀 Every JavaScript code** runs in an execution context
- **📚 Call Stack** manages multiple contexts using LIFO principle
- **⚡ Two phases**: Memory creation → Execution
- **🔧 Function calls** create new execution contexts
- **🗑️ Cleanup happens** automatically when functions complete
- **🛠️ Debug using** Chrome DevTools Call Stack panel

---
