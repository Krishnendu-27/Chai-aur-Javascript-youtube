// how to calculate n number of number via function

// we can use this via rest operator
function calculatecartTotal(...arrg) {
  return arrg;
}
console.log(calculatecartTotal(1, 2, 3, 5));
// now it give return value in array
// if someone write like this

function calculatecartTotal2(val1, val2, ...arrg) {
  return arrg;
}
console.log(calculatecartTotal2(1, 2, 3, 5)); // only print 3 and 5 becuse val1 and 2 took first 2 value

let user = {
  name: "K",
  title: "G",
};
function objexample(params) {
  return `username is ${params.name} and title is ${params.title}`;
}
console.log(objexample(user));
console.log(
  objexample({
    name: "obito",
    title: "uchiha",
  })
);
