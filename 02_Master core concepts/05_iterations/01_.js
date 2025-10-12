// ----------------------------------------------
// JavaScript Loops – Clear and Engaging
// ----------------------------------------------
// Demonstrates for, while, do-while loops, break/continue, and practical patterns
// for repetitive tasks and data iteration.

// ---------------------------------------------------
// 1. Basic for Loop
// ---------------------------------------------------
for (let i = 0; i < 10; i++) {
  const e = i;
  console.log(e); // prints 0 through 9
}

// ---------------------------------------------------
// 2. Loop Control: break and continue
// ---------------------------------------------------
// break stops the loop immediately
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("it's break");
    break; // exits loop at i = 5
  }
  console.log(i); // prints 0, 1, 2, 3, 4
}

// continue skips current iteration
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("it's continue");
    continue; // skips console.log(i) when i = 5
  }
  console.log(i); // prints 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// ---------------------------------------------------
// 3. while and do-while Loops
// ---------------------------------------------------
let i = 0;
while (i < 5) {
  console.log(i);
  i++; // prints 0 through 4
}

let j = 0;
do {
  console.log(j);
  j++; // prints 0 through 4 (runs at least once)
} while (j < 5);

// ---------------------------------------------------
// 4. Common Loop Patterns
// ---------------------------------------------------
// Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print even numbers 1-20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Reverse a string
let str = "haras";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev); // "sarah"

// Sum all numbers in an array
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum); // 15

// ---------------------------------------------------
// 5. for...of and for...in Loops
// ---------------------------------------------------
// for...of iterates over values
for (let char of "krish") {
  console.log(char); // k, r, i, s, h
}

// for...in iterates over keys/indices
let obj = { name: "krish", age: 30 };
for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// ---------------------------------------------------
// 6. Advanced Patterns
// ---------------------------------------------------
// Skip and break combined
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("its 5");
    continue;
  }
  if (i === 9) break;
  console.log(i);
}

// Triangle pattern with nested loops
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row); // *, **, ***, ****, *****
}

// Sum of even numbers using forEach
let nums = [1, 2, 3, 4, 5, 6];
let total = 0;
nums.forEach((n) => {
  if (n % 2 === 0) total += n;
});
console.log(total); // 12 (2 + 4 + 6)

// ---------------------------------------------------
// 7. Choosing the Right Loop
// ---------------------------------------------------
// Use for: when you know start → end → step
// Use while: when you know start → condition → step
// Use for...of: for iterable elements (arrays, strings)
// Use for...in: for object properties

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • for loops are ideal for known iteration counts and ranges.
// • while/do-while loops work best with condition-based repetition.
// • break exits the loop entirely; continue skips to next iteration.
// • for...of iterates values; for...in iterates keys/properties.
// • Nested loops enable pattern creation and multi-dimensional data processing.
