// ----------------------------------------------
// Advanced Array Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates array concatenation, spread operator, flattening nested arrays,
// array creation methods, and comprehensive array manipulation techniques.

// ---------------------------------------------------
// 1. Array Concatenation Methods
// ---------------------------------------------------
let array1 = ["naruto", "light", "tyson"];
let array2 = ["naruto", "death notes", "beyblade"];

// array1.push(array2); // this would nest array2 inside array1
console.log(array1[0]); // "naruto"

let arr3 = array1.concat(array2);
console.log(arr3);
// concat creates new array with combined elements

// ---------------------------------------------------
// 2. Spread Operator for Array Expansion
// ---------------------------------------------------
let newArr = [...array1, ...array2];
console.log(newArr);
// spread operator (...) expands array elements

// ---------------------------------------------------
// 3. Flattening Nested Arrays
// ---------------------------------------------------
let arr4 = [
  1,
  2,
  3,
  [4, 5, 6, [7, 5, 8, 2], 5, 1, 5, [56, 4, [5, 7, 1, 4, 4, [41, 4, 7]]]],
];

console.log(arr4.flat(Infinity));
// flat() with Infinity depth flattens all nested levels

// ---------------------------------------------------
// 4. Array Detection and Creation Utilities
// ---------------------------------------------------
console.log(Array.isArray("jio"));
// false - checks if value is an array

console.log(Array.from("krish"));
// ["k", "r", "i", "s", "h"] - creates array from iterable

console.log(Array.from({ name: "krish" }));
// [] - returns empty array for non-iterable objects

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
// [100, 200, 300] - creates array from arguments

// ---------------------------------------------------
// 5. Core Array Methods Reference
// ---------------------------------------------------
let marks = [11, 22, 33, 44, 55];
console.log(marks[4]); // 55

marks[2] = 35; // update element at index 2
console.log(marks); // [11, 22, 35, 44, 55]

// Modification methods:
// push(val) - add to end
// pop() - remove from end
// shift() - remove from start
// unshift(val) - add to start
// splice(i, n) - remove n elements at index i
// slice(a, b) - copy elements from a to b (non-inclusive)

// ---------------------------------------------------
// 6. Higher-Order Array Methods
// ---------------------------------------------------
let arr5 = [4, 5, 8, 6, 9];

// Transform with map
let doubled = arr5.map(v => v * 2);
console.log(doubled); // [8, 10, 16, 12, 18]

// Filter with condition
let evenNumbers = arr5.filter(v => v % 2 === 0);
console.log(evenNumbers); // [4, 8, 6]

// Reduce to single value
let sum = arr5.reduce((acc, val) => acc + val, 0);
console.log(sum); // 32

// Find first matching element
let firstEven = arr5.find(v => v % 2 === 0);
console.log(firstEven); // 4

// ---------------------------------------------------
// 7. Practical Examples
// ---------------------------------------------------
// Student names iteration
let students = ["krish", "arya", "rio"];
students.forEach(name => console.log(name));

// GST calculation (18%)
let prices = [10, 20, 30];
let withGST = prices.map(p => p * 1.18);
console.log(withGST); // [11.8, 23.6, 35.4]

// Net pay calculation (40% deduction)
let grossSalary = [50000, 90000, 120000];
let netSalary = grossSalary.map(p => p * 0.6);
console.table(netSalary);

// Array sorting and reversal
let ages = [20, 30, 25];
let sortedAges = [...ages].sort((a, b) => a - b);
console.log(sortedAges); // [20, 25, 30]

// ---------------------------------------------------
// 8. Destructuring and Spread Operations
// ---------------------------------------------------
let coordinates = [1, 2, 3, 4];
let [x, y, z] = coordinates; // x=1, y=2, z=3
let copyArray = [...coordinates]; // creates shallow copy

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • concat() and spread operator both combine arrays, spread is more flexible.
// • flat(Infinity) completely flattens nested arrays of any depth.
// • Array.from() converts iterables to arrays; Array.of() creates from arguments.
// • Higher-order methods (map, filter, reduce) enable functional programming patterns.
// • Always use spread operator for immutable operations to avoid mutating originals.
// • Destructuring provides elegant syntax for extracting array elements.