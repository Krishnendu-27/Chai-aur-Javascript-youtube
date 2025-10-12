// ----------------------------------------------
// JavaScript switch…case – Clear and Engaging
// ----------------------------------------------
// Use switch when comparing one expression against multiple values for clear branching.

// ---------------------------------------------------
// 1. Syntax Overview
// ---------------------------------------------------
switch (expression) {
  case value1:
    // runs if expression === value1
    break; // stops further case checks
  case value2:
    // runs if expression === value2
    break;
  // … additional cases
  default:
    // runs if no case matches
    break;
}

// ---------------------------------------------------
// 2. Month Example
// ---------------------------------------------------
let month = 5;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  default:
    console.log("Month not in the first half of the year");
    break;
}

// 'break' prevents fall-through to following cases.
// 'default' handles any unmatched values.

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Use switch for concise multi-value comparisons over if/else chains.
// • Always include 'break' to prevent unintended fall-through, unless intentional.
// • Provide a 'default' case to handle unexpected or unmatched values.
