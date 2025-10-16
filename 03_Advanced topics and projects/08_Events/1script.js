// ----------------------------------------------
// JavaScript Events & Event Properties – Clear and Engaging
// ----------------------------------------------
// Demonstrates attaching event handlers, event propagation, delegation,
// and inspecting common event properties for rich interactions.

// ---------------------------------------------------
// 1. Attaching Event Handlers
// ---------------------------------------------------
// Inline handler (not recommended)
let photo2 = document.querySelector("#japan");
photo2.onclick = function () {
  console.log("clicked photo 2");
};

// Preferred: addEventListener (supports multiple listeners, options)
let photo3 = document.querySelector("#river");
photo3.addEventListener(
  "click",
  function (event) {
    console.log("Great river clicked");
    console.log(event); // MouseEvent: coordinates, target, etc.
  },
  false // false → bubbling phase (default)
);

// ---------------------------------------------------
// 2. Event Propagation: Capturing vs Bubbling
// ---------------------------------------------------
// Bubbling phase (inner → outer)
document
  .querySelector("#images")
  .addEventListener("click", () => console.log("Images clicked"));

document.querySelector("#prayer").addEventListener("click", (e) => {
  console.log("Prayer clicked");
  e.stopPropagation(); // prevents bubbling to parent
});

// Capturing phase (outer → inner)
document
  .querySelector("#images")
  .addEventListener(
    "click",
    () => console.log("Images clicked (capturing)"),
    true
  );

document
  .querySelector("#prayer")
  .addEventListener(
    "click",
    () => console.log("Prayer clicked (capturing)"),
    true
  );

// ---------------------------------------------------
// 3. Event Delegation
// ---------------------------------------------------
// Single listener on parent handles events for children
document
  .getElementById("parentList")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      alert("You clicked on " + event.target.textContent);
    }
  });

// ---------------------------------------------------
// 4. Common Event Properties
// ---------------------------------------------------
// Element & Target Identification
// event.target: original element triggered
// event.currentTarget: element whose listener is running
// event.relatedTarget: element being entered/exited (mouse events)

// Pointer Coordinates
// event.clientX/Y: relative to viewport
// event.screenX/Y: relative to physical screen

// Modifier Keys
// event.altKey, event.ctrlKey, event.shiftKey

// Keyboard Identification
// event.key: character value (e.g., "Enter")
// event.code: physical key (e.g., "KeyA")
// event.keyCode: deprecated numeric code

// Default & Timing
// event.preventDefault(): cancel default action (e.g., form submit)
// event.timeStamp: ms since page load or worker creation

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Use addEventListener over inline handlers for flexibility.
// • Distinguish capturing (true) vs bubbling (false) propagation phases.
// • Use stopPropagation() to prevent unwanted bubbling.
// • Leverage event delegation for efficient child-element handling.
// • Inspect event.target, clientX/Y, and modifier keys for advanced interactions.
// • Prefer modern properties (event.key, event.code) over deprecated keyCode.
