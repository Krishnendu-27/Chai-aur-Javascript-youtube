// {} -> its scope mens boundry
// let a = 50;
// const b = 60;
// var c = 70;

if (true) {
  let a = 50;
  const b = 60;
  var c = 70;
}
// console.log(a); // its not working becuse we decalre it in scope and let is a scope variable
// console.log(b); // its not working becuse we decalre it in scope const also a scope variable
console.log(c); // var is a functional scope it not care about any boundary

var c = 100;
if (true) {
  var c = 133;
}
console.log(c); // so becuse var dont care about places we avoid it and use let
let a = 1250;
console.log(a);

if (true) {
    let a = 133;
    console.log(a);
}
console.log(a);
