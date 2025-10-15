// ----------------------------------------------
// DOM Manipulation in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates Document Object Model concepts, element selection, content modification,
// attribute manipulation, dynamic DOM updates, and styling through JavaScript.

// ---------------------------------------------------
// 1. Understanding DOM Basics
// ---------------------------------------------------
// DOM (Document Object Model) is the structure of a web page
// Everything in HTML is a node (elements, text, attributes, etc.)
// Window = entire browser window; Document = HTML document

// Use console.dir(document) to see all document properties and methods

// ---------------------------------------------------
// 2. Element Selection Methods
// ---------------------------------------------------
// Select by ID (returns single element)
let elementById = document.getElementById("myId");
console.log(elementById);

// Select by class name (returns HTMLCollection - array-like)
let elementsByClass = document.getElementsByClassName("myClass");
console.log(elementsByClass);
// Note: HTMLCollection looks like array but isn't - index starts from 0

// Select first matching element
let firstElement = document.querySelector("h1");
console.log(firstElement);

// Select all matching elements (returns NodeList)
let allElements = document.querySelectorAll("h1");
console.log(allElements);

// ---------------------------------------------------
// 3. Content Modification
// ---------------------------------------------------
// Three ways to change content: textContent, innerText, innerHTML

// textContent: gets/sets all text including hidden
elementById.textContent = "New text content";

// innerText: gets/sets visible text only
elementById.innerText = "Visible text only";

// innerHTML: gets/sets HTML content (can include tags)
elementById.innerHTML = "<strong>Bold HTML content</strong>";

// For class collections, target specific index
elementsByClass[0].innerHTML = "<i>Italic text in first element</i>";

// Hide/show elements
firstElement.hidden = true; // hides the element
firstElement.hidden = false; // shows the element

// ---------------------------------------------------
// 4. Attribute Manipulation
// ---------------------------------------------------
// Attributes are properties inside HTML tags like <a href="...">

// Direct attribute access
let linkElement = document.querySelector("a");
linkElement.href = "https://www.google.com";

// setAttribute: modify any attribute (takes attributeName, value)
linkElement.setAttribute("href", "https://www.github.com");
linkElement.setAttribute("target", "_blank");

let imageElement = document.querySelector("img");
imageElement.setAttribute("src", "https://example.com/image.jpg");
imageElement.setAttribute("alt", "Example image");

// getAttribute: retrieve attribute value
console.log(imageElement.getAttribute("height"));
console.log(linkElement.getAttribute("href"));

// removeAttribute: remove specific attribute
linkElement.removeAttribute("target");

// ---------------------------------------------------
// 5. Dynamic DOM Manipulation
// ---------------------------------------------------
// createElement: create new HTML elements
let newHeading = document.createElement("h2");
newHeading.textContent = "I am using appendChild";
document.body.appendChild(newHeading); // adds to end

// prepend: add element at beginning
let anotherHeading = document.createElement("h3");
anotherHeading.textContent = "I am using prepend";
document.body.prepend(anotherHeading); // adds to start

// Alternative syntax without storing body reference
let paragraph = document.createElement("p");
paragraph.innerHTML = "Dynamic paragraph content";
document.body.appendChild(paragraph);

// removeChild: remove element from DOM
// document.body.removeChild(paragraph);

// ---------------------------------------------------
// 6. Style Manipulation
// ---------------------------------------------------
let styledElement = document.querySelector("#styledElement");

// Direct style modification
styledElement.style.color = "red";
styledElement.style.fontSize = "20px";
styledElement.style.backgroundColor = "yellow";

// Class manipulation
styledElement.classList.add("newClass"); // add class
styledElement.classList.remove("oldClass"); // remove class
styledElement.classList.toggle("toggleClass"); // add if absent, remove if present

// Check if class exists
console.log(styledElement.classList.contains("newClass")); // true/false

// ---------------------------------------------------
// 7. Node Types Reference
// ---------------------------------------------------
// Different node types have numeric identifiers:
console.log(document.nodeType); // 9 (Document node)
console.log(elementById.nodeType); // 1 (Element node)

// Common node types:
// 1 = Element node (HTML tags)
// 3 = Text node (text content)
// 8 = Comment node (<!-- comments -->)
// 9 = Document node (entire document)

// ---------------------------------------------------
// 8. Practical Example: Creating a Dynamic List
// ---------------------------------------------------
let listContainer = document.createElement("div");
listContainer.className = "todo-container";

let listTitle = document.createElement("h3");
listTitle.textContent = "Dynamic Todo List";
listContainer.appendChild(listTitle);

let todoList = document.createElement("ul");
let todos = ["Learn DOM", "Practice JavaScript", "Build Projects"];

todos.forEach((todo) => {
  let listItem = document.createElement("li");
  listItem.textContent = todo;
  listItem.style.padding = "5px";
  listItem.style.borderBottom = "1px solid #ccc";
  todoList.appendChild(listItem);
});

listContainer.appendChild(todoList);
document.body.appendChild(listContainer);

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • DOM represents web page structure as a tree of nodes.
// • Use getElementById for single elements, querySelector for flexible selection.
// • innerHTML allows HTML insertion; textContent/innerText for plain text.
// • setAttribute/getAttribute provide full attribute control.
// • createElement + appendChild enable dynamic content generation.
// • classList methods offer clean class manipulation without string concatenation.
