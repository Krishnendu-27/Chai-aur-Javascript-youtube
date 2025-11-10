// ----------------------------------------------
// DOM Element Selection & Manipulation – Clear and Engaging
// ----------------------------------------------
// Demonstrates Document Object Model selection methods, attribute manipulation,
// content access, styling, and modern querySelector techniques.

// ---------------------------------------------------
// 1. Element Selection by ID
// ---------------------------------------------------
// Select element with specific ID
let h1 = document.getElementById("h1");
console.log(h1.id);        // returns the ID name
console.log(h1.className); // returns the class name (if present)

// ---------------------------------------------------
// 2. Getting & Setting Attributes
// ---------------------------------------------------
// Get any attribute value
console.log(h1.getAttribute("id")); // returns attribute value

// Set attribute (overwrites previous value)
console.log(`Previous classname: ${h1.className}`);
h1.setAttribute("class", "firstheading");
console.log(`Now classname: ${h1.className}`);

// Remove attribute entirely
h1.removeAttribute("class");

// ---------------------------------------------------
// 3. Changing Styles Directly
// ---------------------------------------------------
// Modify CSS styles through JavaScript
h1.style.backgroundColor = "blue";
h1.style.color = "white";
h1.style.fontSize = "24px";
h1.style.padding = "10px";

// ---------------------------------------------------
// 4. Content Access Methods
// ---------------------------------------------------
// Three main ways to access/modify element content:

// textContent: gets all text (including hidden)
console.log(h1.textContent); // all text content regardless of visibility

// innerText: gets only visible text
console.log(h1.innerText);   // only user-visible text

// innerHTML: gets full HTML markup
console.log(h1.innerHTML);   // full HTML including tags

// Example differences:
/*
<div style="display: none;">Hidden Text</div>
<div>Visible <strong>Bold</strong> Text</div>

textContent: "Hidden TextVisible Bold Text"
innerText:   "Visible Bold Text" (no hidden text)
innerHTML:   "Hidden Text</div><div>Visible <strong>Bold</strong> Text"
*/

// ---------------------------------------------------
// 5. Modern Selection with querySelector
// ---------------------------------------------------
// querySelector supports all CSS selectors
let h1viaSelector = document.querySelector("h1");        // first h1 element
let h1ById = document.querySelector("#myId");            // element by ID
let h1ByClass = document.querySelector(".myClass");      // element by class

// querySelectorAll returns NodeList (array-like)
let allH1 = document.querySelectorAll("h1");
console.log(allH1); // NodeList containing all h1 elements

// Access specific elements by index
allH1[2].style.color = "red"; // change color of 3rd h1

// Note: This won't work (NodeList isn't a true array):
// allH1.style.color = "red"; // Error!

// ---------------------------------------------------
// 6. Collection Types and Conversions
// ---------------------------------------------------
// getElementsByClassName returns HTMLCollection
let allH1byClass = document.getElementsByClassName("h11");
console.log(allH1byClass); // HTMLCollection

// Convert HTMLCollection to true array
let newArr = Array.from(allH1byClass);
console.log(newArr); // true Array with all array methods

// Now array methods work
newArr.forEach((el) => {
  el.style.color = "blue";
  el.style.fontWeight = "bold";
});

// ---------------------------------------------------
// 7. Practical Examples
// ---------------------------------------------------
// Bulk styling with querySelectorAll
document.querySelectorAll(".highlight").forEach(el => {
  el.style.backgroundColor = "yellow";
  el.style.padding = "10px";
  el.style.border = "2px solid orange";
});

// Update multiple elements with dynamic content
const titles = document.querySelectorAll("h1");
titles.forEach((title, index) => {
  title.textContent = `Title ${index + 1}`;
});

// Dynamic class management
const button = document.querySelector("#toggleBtn");
const content = document.querySelector(".content");

if (button && content) {
  button.addEventListener("click", () => {
    content.classList.toggle("hidden");
  });
}

// ---------------------------------------------------
// 8. Advanced Selection Patterns
// ---------------------------------------------------
// Select by multiple criteria
let specificElements = document.querySelectorAll("div.container p.text");

// Select by attribute
let requiredInputs = document.querySelectorAll("input[required]");

// Select by pseudo-selectors
let firstChild = document.querySelector("ul li:first-child");
let lastChild = document.querySelector("ul li:last-child");

// ---------------------------------------------------
// 9. Performance Considerations
// ---------------------------------------------------
// getElementById is fastest for single element selection
let fastSelection = document.getElementById("myElement");

// querySelector is most flexible but slightly slower
let flexibleSelection = document.querySelector("#myElement");

// Cache selections when used multiple times
let cachedElement = document.querySelector(".frequently-used");
// Use cachedElement instead of selecting repeatedly

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • querySelector/querySelectorAll are most versatile - support all CSS selectors.
// • Use getAttribute() and setAttribute() for complete attribute control.
// • Choose textContent, innerText, or innerHTML based on specific content needs.
// • Convert HTMLCollection/NodeList to arrays with Array.from() for full array methods.
// • getElementById is fastest; querySelector is most flexible for selection.
// • Cache frequently accessed elements to improve performance.
/*
 * lecture 32 summery 
 *This script demonstrates DOM manipulation in JavaScript: selecting elements using IDs, classes, and query selectors; getting and setting attributes; changing styles directly; and accessing content via textContent, innerText, and innerHTML. It covers HTMLCollection vs NodeList, converting them to arrays, bulk styling, dynamic content updates, class toggling, and best practices for performance and caching frequently used elements.
 */
