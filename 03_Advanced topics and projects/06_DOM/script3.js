// ----------------------------------------------
// DOM Traversal & Dynamic Element Creation – Clear and Engaging
// ----------------------------------------------
// Demonstrates navigating between parent, children, and sibling elements,
// and creating/attaching new elements dynamically using JavaScript.

// ---------------------------------------------------
// 1. DOM Traversal: Parent and Children
// ---------------------------------------------------
// Select parent element with class "week"
let week = document.querySelector(".week");

// Access its direct child elements (HTMLCollection)
let days = week.children;

// Convert to true array for array methods
let dayArr = Array.from(days);

// Apply alternating text colors to each day
dayArr.forEach((el, index) => {
  el.style.color = index % 2 === 0 ? "yellow" : "blue";
});

// Directly target first and last child
week.firstElementChild.style.color = "red";
week.lastElementChild.style.color = "red";

// ---------------------------------------------------
// 2. Navigating Upward and Sideways
// ---------------------------------------------------
// Select a specific child element
let day2 = document.querySelector(".day");

// Navigate to parent element
console.log(day2.parentElement);

// Navigate to next sibling element
console.log(day2.nextElementSibling.textContent);

// View all child nodes (includes text and comment nodes)
console.log(week.childNodes);

// ---------------------------------------------------
// 3. Dynamic Element Creation & Attachment
// ---------------------------------------------------
// 1. Create a new element in memory
let h13 = document.createElement("h1");

// 2. Set properties, attributes, and styles
h13.className = "dynamic-h1"; // add class name
h13.id = "h11"; // add ID
h13.setAttribute("title", "Generated Title"); // custom attribute
h13.style.color = "blue"; // inline style
h13.textContent = "Hello, world!"; // set text content mehord 1 non optimize
let tcontent = document.createTextNode("hola"); // its more optimize
h13.appendChild(tcontent);

// 3. Append the new element to the document body
document.body.appendChild(h13);
console.log(h13); // inspect the newly added element

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • querySelector and .children enable parent→child traversal.
// • firstElementChild and lastElementChild give direct child access.
// • parentElement and nextElementSibling navigate upward and sideways.
// • childNodes includes every node type: elements, text, comments.
// • createElement + setAttribute + appendChild support dynamic DOM updates.
// • Converting HTMLCollections with Array.from unlocks full array methods.
