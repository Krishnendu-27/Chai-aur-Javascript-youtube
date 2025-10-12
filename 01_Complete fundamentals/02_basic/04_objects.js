// ----------------------------------------------
// Advanced Object Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates object creation patterns, nesting, optional chaining,
// object merging, destructuring, and API data handling.

// ---------------------------------------------------
// 1. Object Creation Patterns
// ---------------------------------------------------
let user = new Object(); // singleton pattern
let user2 = {}; // non-singleton object literal

user2.name = "japan";
user2.form = "asia";
user2.famous = "anime";

let user3 = {
  name: "India",
  form: "asia",
  famous: "culture",
};

console.log(user2);

// ---------------------------------------------------
// 2. Nested Object Structures
// ---------------------------------------------------
let class1 = {
  student1: {
    name: {
      fullname: "krish",
      lastname: "G",
    },
    age: 20,
  },
  student2: {
    name: {
      fullname: "naruto",
      lastname: "uzumaki",
    },
    age: 35,
  },
};

console.table(class1);
console.table(class1.student1);
console.table(class1.student2);
console.table(class1.student1.name);
console.table(class1.student2.name);

// Accessing deeply nested properties
console.log(class1.student1.name.fullname);
console.log(class1.student1.name.lastname);
console.log(class1.student2.name.fullname);
console.log(class1.student2.name.lastname);

// ---------------------------------------------------
// 3. Object Merging with Object.assign()
// ---------------------------------------------------
let user4 = Object.assign({}, user3, user2);
// {} ensures result is in target format, others are source objects
console.log(user4);

// Alternative with spread operator
let user5 = { ...user3, ...user2 };
console.log(user5);

// ---------------------------------------------------
// 4. Working with API Data Arrays
// ---------------------------------------------------
const data1 = [
  {
    id: 1,
    name: "Alice",
    age: 25,
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie",
    age: 28,
  },
];

console.log(data1[0].name); // "Alice"
console.log(Object.keys(data1)); // array indices as keys
console.log(Object.values(data1)); // nested object values
console.log(Object.entries(data1)); // key-value pairs

// Check property existence
console.log(data1[0].hasOwnProperty("name")); // true

// ---------------------------------------------------
// 5. Object Destructuring
// ---------------------------------------------------
let course = {
  coursename: "js in hindi",
  instructor: "hitesh sir",
};

let { instructor } = course;
console.log(instructor); // "hitesh sir"

// Custom variable names during destructuring
let { coursename: nameOfCourse } = course;
console.log(nameOfCourse); // "js in hindi"

// ---------------------------------------------------
// 6. API and JSON Concepts
// ---------------------------------------------------
// API: Application Programming Interface
// When we transfer our task to another service and only think about usage

// JSON: JavaScript Object Notation
// Keys and values are both strings in JSON format
// Example JSON structure:
// {
//   "name": "shine",
//   "title": "nozen"
// }

// ---------------------------------------------------
// 7. Advanced Object Operations
// ---------------------------------------------------
let user6 = {
  name: "krish",
  address: {
    village: "rajhat",
    pin: {
      lat: 75.85,
      lng: 8.85,
    },
  },
};

// Optional chaining (safe property access)
console.log(user6.address?.pin?.lat); // 75.85
console.log(user6.address?.city?.name); // undefined (no error)

// Deep destructuring
let {
  address: {
    pin: { lat, lng },
  },
} = user6;
console.log(lat, lng); // 75.85 8.85

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Object.assign() and spread operator merge objects effectively.
// • Nested objects enable complex data modeling with deep property access.
// • Destructuring simplifies property extraction with custom variable naming.
// • Optional chaining (?.) prevents errors when accessing undefined properties.
// • JSON format uses string keys and values for data interchange.
// • hasOwnProperty() checks direct property ownership on objects.
