// ----------------------------------------------
// Mixed JavaScript Behaviors and Concepts
// ----------------------------------------------

console.log(100110); // Just a number

console.log("1" + 2 + 2); // "122" - all converted to string and concatenated
console.log(1 + "2" + 2); // "122" - first number + string => string, then + 2 = concat
console.log(1 + 2 + "2"); // "32" - first numbers added => 3, then + "2" => "32"

// Type coercion behavior:
console.log("10" - 2);
// 8 — because '-' only works with numbers, so "10" becomes 10, then 10 - 2

// If string has alphabets: "10px" - 2 → NaN

// Post-increment vs Pre-increment
let x = 3;
const y = x++; // y = 3, then x becomes 4
console.log(`x:${x}, y:${y}`); // x:4, y:3

let a = 3;
const b = ++a; // a becomes 4 first, then b = 4
console.log(`a:${a}, b:${b}`); // a:4, b:4

// ----------------------------------------------
// 🧮 Arithmetic Operators

// Operator | Description       | Example    | Output
// -------- | ----------------- | ---------- | ------
// +        | Addition          | 1 + 2      | 3
// -        | Subtraction       | 1 - 2      | -1
// *        | Multiplication    | 1 * 2      | 2
// /        | Division          | 1 / 2      | 0.5
// %        | Modulus           | 5 % 2      | 1
// **       | Exponentiation    | 2 ** 3     | 8

console.log(1 + 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(5 % 2);
console.log(2 ** 3);

// ----------------------------------------------
// ⚖️ Comparison & Equality

// Operator | Description             | Example      | Output
// -------- | ----------------------- | ------------ | -------
// ==       | Loose equality          | 5 == "5"     | true
// ===      | Strict equality         | 5 === "5"    | false
// !=       | Loose inequality        | 5 != "5"     | false
// !==      | Strict inequality       | 5 !== "5"    | true
// <, >     | Less than / Greater than| 12 > 11      | true
// <=, >=   | LTE / GTE               | 12 >= 12     | true

console.log(12 == 13); // false
console.log(12 === 12); // true
console.log("12" === 12); // false
console.log(12 != 13); // true
console.log(12 > 12); // false
console.log(12 >= 12); // true
// make sure both compartion data type same
console.log("-------");

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null <= 0); // true
console.log(undefined <= 0); // false
console.log("-------"); // false

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
*/
// ----------------------------------------------
// 📝 Assignment Operators

let assign = 12;
assign += 5; // 17
assign -= 10; // 7
assign *= 5; // 35
assign /= 5; // 7
assign %= 4; // 3
console.log(assign); // final value

// ----------------------------------------------
// 🎲 Logical Operators

// Operator | Description     | Example         | Output
// -------- | --------------- | --------------- | -------
// &&       | Logical AND     | true && false   | false
// ||       | Logical OR      | true || false   | true
// !        | Logical NOT     | !true           | false

let logic1 = !!12; // true (truthy)
let logic2 = !!"krish"; // true (non-empty string)
console.log(logic1, logic2);

// ----------------------------------------------
// ➕➖ Unary Operators

// + converts strings to numbers
let c = "55";
let d = +"66"; // unary plus
console.log(typeof d); // "number"

// ++ / --: Pre and Post
let e = 5;
console.log(e++); // 5, then e becomes 6
console.log(++e); // 7

// ----------------------------------------------
// ❓ Ternary Operator

let ans = 50 > 40 ? "age 50" : "age 40";
console.log(ans); // "age 50"

// ----------------------------------------------
// 🧩 typeof vs instanceof

// typeof → primitive type check
// instanceof → reference type check

let g = [];
console.log(g instanceof Object); // true
console.log(g instanceof Array); // true

// ----------------------------------------------
// ✨ Key Takeaways

// - Arithmetic: Use +, -, *, /, %, **
// - Comparisons: Use == for value, === for type + value
// - Logical: +=, -=, *=, etc. for shorthand
// - Logical: &&, ||, !, and double negation (!!) to test truthy/falsy
// - Unary: + to convert string to number, ++/-- for increments
// - Ternary: condition ? true : false
// - Type checking: typeof (primitive), instanceof (objects)

// video summary 
// there 6 type of operation Arithmetic , Logical , Logical , Unary , Ternary . we can concatinate string via + when we use string + number concatinate its convert the number tto string then add 
// console.log(1 + '2'); // 12
// console.log(1 + '2' + 1); // 121
// console.log(1 + 2 + '1'); // 31
// when js convertion done please check properly in real life redable code is first proprity but in - its gets diffrent bacuse when + there a choice bettween concatinate and addition but in use of - it alwsys subtract
// prefix and postfix is needed to learn
