// we can acesss global scope everywhere

// child acess parents variable but parent can not acess child variable

function one() {
  let a = 10;
  function two() {
    return a;
  }
  return two();
}
console.log(one());

// when we hold function in variable is called expresion

console.log(addone(5)); // its normal function so we can acess it before declartion
console.log(addtwo(5)); //  it can not acess becuse we want to acess function before declaration 

function addone(num) {
  return num + 1;
}
let addtwo = function (num) {
  return num + 2;
};
