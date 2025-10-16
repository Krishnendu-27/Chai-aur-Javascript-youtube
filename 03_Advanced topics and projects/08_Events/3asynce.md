
## 📅 Thursday, October 16, 2025, 3:31 PM IST

# 🔄 JavaScript Asynchronous Behavior

***

## 🧵 Synchronous vs Asynchronous

**JavaScript is synchronous by default** — meaning code executes line by line, one operation at a time.

```javascript
console.log(1);
console.log(2);
// Output: 1, 2 (in order)
```

But JavaScript can also be **asynchronous** — allowing tasks to run in the background without blocking the main thread.

---

## 🏗️ Execution Context

- **Call Stack**: Keeps track of function calls (LIFO - Last In, First Out)
- **Memory Heap**: Stores objects and data
- Each operation waits for the previous one to complete

---

## 🚦 Blocking vs Non-Blocking Code

| Type                | Behavior                             | Example                         |
| ------------------- | ------------------------------------ | ------------------------------- |
| **🔴 Blocking**     | Stops program flow until complete    | `fs.readFileSync()`             |
| **🟢 Non-Blocking** | Allows multiple tasks simultaneously | `fs.readFile()`, `setTimeout()` |

> **💡 Use Case Dependent**: Both have their place — use blocking for simple scripts, non-blocking for servers/UIs.

---

## ⏰ Timing Functions

### 🕒 `setTimeout()`

**Runs a function once after a specified delay**

```javascript
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);
```

**Canceling**:

```javascript
const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout
```

**Syntax**:

```javascript
setTimeout(function, delay, ...args)
```

---

### 🔁 `setInterval()`

**Repeatedly runs a function at a specified interval**

```javascript
setInterval(() => {
  console.log("This runs every 1 second");
}, 1000);
```

**Canceling**:

```javascript
const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

clearInterval(intervalId); // Stops the interval
```

**Syntax**:

```javascript
setInterval(function, interval, ...args)
```

---

## 📊 When to Use Which?

| Use Case                             | Use `setTimeout`    | Use `setInterval` |
| ------------------------------------ | ------------------- | ----------------- |
| **Run code once after delay**        | ✅                  | ❌                |
| **Repeat code at regular intervals** | ❌                  | ✅                |
| **Simulate polling with delay**      | ✅ (with recursion) | ❌                |

---

## 🔄 Event Loop

The **Event Loop** enables JavaScript to handle async operations despite being single-threaded.

### 📝 Event Loop Process:

1. **Call Stack** executes synchronous code
2. **Web APIs** handle async operations (setTimeout, fetch, etc.)
3. **Task Queue** (Callback Queue) holds completed async callbacks
4. **Microtask Queue** holds Promises and high-priority tasks
5. **Event Loop** checks if Call Stack is empty, then moves tasks from queues

![diagram of event loop](../../imge%20for%20notes%20/image4.png)

```
┌─────────────┐
│ Call Stack  │ ← Executes code
└─────────────┘
       ↓
┌─────────────┐
│  Web APIs   │ ← setTimeout, fetch
└─────────────┘
       ↓
┌─────────────────┐
│ Microtask Queue │ ← Promises (HIGH priority)
└─────────────────┘
       ↓
┌─────────────────┐
│   Task Queue    │ ← setTimeout callbacks
└─────────────────┘
       ↑
   Event Loop
```

---

## 🎯 Priority Hierarchy

| Priority       | Type       | Examples                     |
| -------------- | ---------- | ---------------------------- |
| **🥇 Highest** | Microtasks | Promises, `queueMicrotask()` |
| **🥈 Medium**  | Rendering  | Browser paint, layout        |
| **🥉 Lower**   | Macrotasks | `setTimeout`, `setInterval`  |

### Example:

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Explanation:
// 1, 4 → Synchronous (Call Stack)
// 3 → Microtask (Promise) - Higher priority
// 2 → Macrotask (setTimeout) - Lower priority
```

---

## 🌐 `fetch()` — High Priority Async

`fetch()` returns a **Promise**, which goes to the **Microtask Queue** (higher priority than setTimeout).

```javascript
console.log("Start");

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));

setTimeout(() => console.log("Timeout"), 0);

console.log("End");

// Output Order:
// Start
// End
// [API data] (fetch Promise - Microtask)
// Timeout (setTimeout - Macrotask)
```

---

## 🛠️ Practical Examples

### ⏱️ **Delayed Message**

```javascript
setTimeout(() => {
  console.log("This appears after 3 seconds");
}, 3000);
```

### 🔄 **Repeating Counter**

```javascript
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId); // Stop after 5
  }
}, 1000);
```

### 🎯 **Polling with setTimeout (Recursive)**

```javascript
function poll() {
  console.log("Checking status...");

  setTimeout(() => {
    poll(); // Call itself again
  }, 2000);
}

poll(); // Start polling
```

---

## ✨ Key Takeaways

- **🔄 JavaScript**: Synchronous by default, but can be asynchronous
- **⏰ setTimeout**: Runs once after delay
- **🔁 setInterval**: Repeats at intervals
- **🎯 Event Loop**: Manages async operations via queues
- **🥇 Priority**: Microtasks (Promises) > Macrotasks (setTimeout)
- **🌐 fetch()**: Returns Promises (high priority)
- **🚦 Non-Blocking**: Allows concurrent operations without freezing UI

---
