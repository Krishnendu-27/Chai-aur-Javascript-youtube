// we can check type 2 way
let score = "52";
console.log(typeof (score)); // with parenhesis
console.log(typeof score); // without parenhesis

/* type convertion */
let newscore = Number(score);
console.log(typeof newscore);
// but if score contain alpha numeric then
let score2 = "5263sd";
let newscore2 = Number(score2);
console.log(newscore2);
// if null then after convertion its become 0
// if undefined then after convertion its become NaN
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "krish"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true