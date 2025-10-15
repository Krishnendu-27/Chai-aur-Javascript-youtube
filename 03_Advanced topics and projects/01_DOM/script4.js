// ----------------------------------------------
// Adding & Modifying List Items Dynamically – Clear and Engaging
// ----------------------------------------------
// Demonstrates creating, appending, and updating <li> elements without re-rendering the entire DOM.

// ---------------------------------------------------
// 1. Simple innerHTML Approach
// ---------------------------------------------------
function addLi(content) {
  // Create a new <li> element
  let li = document.createElement("li");

  // Append the new <li> directly to the parent <ul>
  document.querySelector(".ul").appendChild(li);

  // Set its HTML content (may reparse HTML)
  li.innerHTML = content;
}

// Usage example
addLi("C++");

// ---------------------------------------------------
// 2. Optimized Text Node Approach
// ---------------------------------------------------
function optAddLi(content) {
  // Create a new <li> element
  let li = document.createElement("li");

  // Create a text node for the content
  let textNode = document.createTextNode(content);

  // Append the text node to the <li>
  li.appendChild(textNode);

  // Append <li> to the parent <ul>
  document.querySelector(".ul").appendChild(li);
}

// Usage example
optAddLi("Java");

// Why this is optimized:
// • Avoids reparsing HTML
// • Works purely with text nodes

// ---------------------------------------------------
// 3. Updating an Existing <li> by Index
// ---------------------------------------------------
function changeLi(index, newText) {
  // 1. Select all <li> elements
  const items = document.querySelectorAll("li");

  // 2. Validate the index
  if (index >= 0 && index < items.length) {
    // 3. Update the text content of the targeted <li>
    items[index].textContent = newText;
  } else {
    console.warn("Index out of range");
  }
}

// Usage examples
changeLi(1, "C"); // Updates second item
changeLi(2, "Python"); // Updates third item

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • createElement + appendChild adds new nodes without full DOM traversal.
// • createTextNode is more efficient than innerHTML for plain text.
// • NodeList from querySelectorAll can be indexed to select specific elements.
// • Always validate indexes before modifying to prevent runtime warnings/errors.
