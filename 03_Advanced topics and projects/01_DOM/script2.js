// we select element via id , classname , elemntname
// document.getElementById('idname')

// we write className to find the class name
let h1 = document.getElementById("h1"); // mens we store h1 div in h1 variable
// via this we can find id and class

// doing "h1.id" or "document.getElementById("h1").id" both are same

console.log(h1.id); // it give the id name
console.log(h1.className); // it give the class name if it presnt

// we can find all attribute

console.log(h1.getAttribute("id")); // which attribute we need we write that and the value it give
// we can set attribute also but it overwrite previous attribute
// setAttribute('attribute name' , 'atribute value' , 'if needed another attribute value')
console.log(`previous classname: ${h1.className}`);
h1.setAttribute("class", "firstheading");
console.log(`now classname: ${h1.className}`);

// we can change style also
// variable name.style.backgroundColor = "colour name";
h1.style.backgroundColor = "blue";

// for selct the value we use 3 methoed innerhtml , textcontent , inertext

console.log(h1.textContent);
console.log(h1.innerHTML);
console.log(h1.innerText);
// both 3 give same value
// difference bettween textContent and  innerText
// innerText give result only visibel text
// textContent give its hid text also mens if that is display none it show that also
// innerHTML it give full html line

// querySelector it support all id , classname , elemnt name in real life it use but querySelector only give the first value but querySelectorAll five all same eelemnt in same name
// querySelector use same css selctor work so it easy to learn

let h1viaselctor = document.querySelector("h1");
console.log(h1viaselctor);
let h1viaselctorall = document.querySelectorAll("h1");
console.log(h1viaselctorall); // it return a array but not proper array its node list 
// example of use of querySelectorAll
// task : change color of 2nd h1 example
h1viaselctorall[2].style.color = "red";

 