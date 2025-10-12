// ----------------------------------------------
// String Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// This snippet showcases how to declare and manipulate strings
// with structured comments and modern best practices.

// ---------------------------------------------------
// 1. Declaring and Combining Strings
// ---------------------------------------------------
let name1 = "K"; // primitive string literal
let title2 = "G"; // corrected variable name from 'titel2'

console.log(name1 + title2);
// Not ideal: concatenation with '+' operator

console.log(`${name1}${title2}`);
// Preferred: template literal for interpolation

// ---------------------------------------------------
// 2. String Object vs Primitive
// ---------------------------------------------------
let newName = new String("halobro");
console.log(newName);
// String object provides access to prototype methods and properties

console.log(newName[0]); // first character of the string
console.log(newName.__proto__); // inspect String prototype

console.log(name1.length); // length of primitive string
console.log(newName.length); // length via object wrapper

// ---------------------------------------------------
// 3. Common String Methods
// ---------------------------------------------------
console.log(newName.toLocaleUpperCase());
// returns 'HALOBRO' without mutating original value

console.log(newName.charAt(5));
// character at index 5

console.log(newName.indexOf("o"));
// finds first occurrence of 'o'

let sliceA = newName.substring(2, 6);
console.log(sliceA);
// substring from index 2 up to (but not including) 6

let sliceB = newName.slice(-3, 1);
console.log(sliceB);
// slice supports negative indices (note: may return empty)

// ---------------------------------------------------
// 4. Trimming and Replacing
// ---------------------------------------------------
let trimExample = "               kio           ";
console.log(trimExample);
console.log(trimExample.trim());
// trim removes whitespace from both ends

const url = "https://kf.com/%20kemon";
console.log(url.replace("%20", "-"));
// replace percent-encoded spaces with hyphens

console.log(url.includes("kio"));
// includes() returns a boolean indicating substring existence

// ---------------------------------------------------
// 5. Splitting Strings into Arrays
// ---------------------------------------------------
let fruits = "apple,banana,cherry,dragonfruit";
let limited = fruits.split(",", 2);
console.log(limited);
// with limit=2: ["apple", "banana"]

console.log("one  tw o  three".split(" "));
// splitting on spaces: ["one","two","","three"]

// ---------------------------------------------------
// 🔑 Key Takeaways
// ---------------------------------------------------
// • Template literals improve readability and support embedded expressions.
// • Primitive strings are lightweight, but String objects enable method access.
// • Methods like .charAt(), .indexOf(), .substring(), and .slice() provide versatile substring operations.
// • .trim(), .replace(), .includes(), and .split() are essential for cleaning and parsing strings.
// • Understanding differences between primitives and objects helps avoid unexpected behavior.
