// Map, Filter, and Reduce – Clear and Engaging
// ----------------------------------------------
// Demonstrates three powerful higher-order functions for transforming,
// selecting, and combining data in arrays.

// ---------------------------------------------------
// 1. map() — Transform Each Item
// ---------------------------------------------------
// Applies a function to every element and returns a new array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// Key points:
// • Doesn't modify the original array
// • The callback runs once per element
// • Useful for transformations and format conversions

// Example: Convert names to uppercase
const names = ["kai", "luffy", "zoro"];
const upper = names.map(name => name.toUpperCase());
console.log(upper); // ["KAI", "LUFFY", "ZORO"]

// Example: Extract prices from product objects
const products = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 300 }
];
const prices = products.map(product => product.price);
console.log(prices); // [200, 50, 300]

// ---------------------------------------------------
// 2. filter() — Keep Only What Passes a Test
// ---------------------------------------------------
// Creates a new array with elements that return true
const allNumbers = [1, 2, 3, 4, 5];
const evens = allNumbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]

// Key points:
// • Returns a subset of the array
// • Doesn't modify the original array
// • Used for filtering data based on conditions

// Example: Filter words by length
const words = ["apple", "kiwi", "banana"];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ["apple", "banana"]

// Example: Filter products over a price threshold
const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts);
// [{ item: "Book", price: 200 }, { item: "Bag", price: 300 }]

// Example: Filter active users
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);
// [{ name: "Alice", active: true }, { name: "Charlie", active: true }]

// ---------------------------------------------------
// 3. reduce() — Combine Everything into One
// ---------------------------------------------------
// Executes a reducer function on each element, accumulating into a single value
const sumNumbers = [1, 2, 3, 4];
const sum = sumNumbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10

// Key points:
// • acc → accumulator (stores running total/result)
// • num → current value being processed
// • 0 → initial value for the accumulator
// • Can return any type: number, string, object, array

// Example: Sum product prices from cart
const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 300 }
];
const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total); // 550

// Example: Concatenate strings
const words2 = ["Hello", "World", "JavaScript"];
const sentence = words2.reduce((acc, word) => acc + " " + word, "");
console.log(sentence); // " Hello World JavaScript"

// Example: Count occurrences
const items = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, cherry: 1 }

// ---------------------------------------------------
// 4. Chaining Them Together
// ---------------------------------------------------
// Combine map, filter, and reduce for powerful data pipelines
const dataset = [1, 2, 3, 4, 5, 6];

const result = dataset
  .filter(num => num % 2 === 0)    // even numbers → [2, 4, 6]
  .map(num => num * num)           // square → [4, 16, 36]
  .reduce((acc, val) => acc + val, 0); // sum → 56

console.log(result); // 56

// Example: E-commerce workflow
const sales = [
  { product: "Laptop", price: 50000, sold: 3 },
  { product: "Mouse", price: 500, sold: 20 },
  { product: "Keyboard", price: 2000, sold: 5 }
];

const totalRevenue = sales
  .filter(item => item.price > 1000)       // expensive items
  .map(item => item.price * item.sold)     // calculate revenue per item
  .reduce((acc, revenue) => acc + revenue, 0); // total revenue

console.log(totalRevenue); // (50000 * 3) + (2000 * 5) = 160000

// ---------------------------------------------------
// 5. Summary Table
// ---------------------------------------------------
// Function | Purpose | Returns | Example
// map()    | Transform elements | New array | double numbers
// filter() | Select elements | New array | keep even numbers
// reduce() | Combine into one | Single value | sum of numbers

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • map(): Transform each element while maintaining structure
// • filter(): Select elements matching a condition
// • reduce(): Combine all elements into a single accumulated value
// • Chain them for powerful data transformation pipelines
// • All three are immutable (don't modify original array)
// • Preferred over loops for functional programming patterns
