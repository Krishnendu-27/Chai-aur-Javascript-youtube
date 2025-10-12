// ----------------------------------------------
// Array Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates array creation, manipulation methods, shallow vs deep copies,
// and the important difference between slice() and splice().

// ---------------------------------------------------
// 1. Array Declaration and Properties
// ---------------------------------------------------
// Arrays are always written in []
// Features: resizable, mixed data types, zero-indexed, not associative
let arr = [0, 8, 6, 5, 8, 2, 2];

console.log(arr[3]);
// access element at index 3

// ---------------------------------------------------
// 2. Shallow vs Deep Copy Concepts
// ---------------------------------------------------
// JavaScript array-copy operations create shallow copies
// Shallow copy: properties share the same references (stored in heap)
// Deep copy: properties do not share the same references (separate data)

let arr2 = ["light", "lelouch", "saitama"];
// standard array literal syntax

let arr3 = new Array(4, 5, 8, 1, 2);
console.log(arr3);
// constructor syntax for array creation

// ---------------------------------------------------
// 3. Array Manipulation Methods
// ---------------------------------------------------
arr3.push(4);
// adds element to end of array

arr3.pop();
// removes last element from array
console.log(arr3);

arr.unshift(55);
// adds element to beginning of array
console.log(arr);

arr.shift();
// removes first element from array
console.log(arr);

// ---------------------------------------------------
// 4. Array Search Methods
// ---------------------------------------------------
console.log(arr2.includes("light"));
// checks if value exists in array (returns boolean)

let arr4 = [1, 2, 5, 63];
console.log(arr4.indexOf(63));
// returns index of first occurrence, or -1 if not found

// ---------------------------------------------------
// 5. Array Joining
// ---------------------------------------------------
let newArr = arr4.join("-");
console.log(newArr);
// converts array to string with specified separator

// ---------------------------------------------------
// 6. Slice vs Splice - Critical Difference
// ---------------------------------------------------
console.log("A ", arr3);

let new1 = arr3.slice(1, 3);
console.log(new1);
// slice: returns copy of portion, original unchanged

console.log("B ", arr3);

let new2 = arr3.splice(1, 3);
console.log(new2);
// splice: removes elements from original, returns removed elements

console.log("C ", arr3);
// original array is now modified by splice

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Arrays are zero-indexed, resizable containers for mixed data types.
// • push/pop work on array end; unshift/shift work on array beginning.
// • includes() checks existence; indexOf() finds position or returns -1.
// • join() converts array to string with custom separator.
// • slice() creates copy without modifying original; splice() modifies original.
// • Understanding shallow vs deep copy is crucial for reference management.