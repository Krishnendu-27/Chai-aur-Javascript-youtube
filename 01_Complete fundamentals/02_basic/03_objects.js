// ----------------------------------------------
// Singleton and Object Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates a basic Singleton pattern, object creation, property access,
// symbols, freezing, and method definition on object literals.

// ---------------------------------------------------
// 1. Singleton Pattern Example
// ---------------------------------------------------
// A Singleton ensures only one instance exists and provides a global access point.
const AppConfig = (function () {
  let instance;

  function createInstance() {
    return { env: "production", version: "1.0.0" };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const config1 = AppConfig.getInstance();
const config2 = AppConfig.getInstance();
console.log(config1 === config2); // true, same instance

// ---------------------------------------------------
// 2. Object Literal and Symbol Properties
// ---------------------------------------------------
let sym = Symbol("teri");
let user = {
  name: "krish",
  age: 50,
  [sym]: "halobro",
  location: "kolkata",
  "full name": "krishG",
};
console.table(user);

// Accessing properties
console.log(user.age); // dot notation
console.log(user["full name"]); // bracket notation for keys with spaces
console.log(user[sym]); // symbol-keyed property

// ---------------------------------------------------
// 3. Freezing Objects
// ---------------------------------------------------
Object.freeze(user);
user.name = "kai"; // no effect on frozen object
console.log(user.name); // still "krish"

// ---------------------------------------------------
// 4. Adding Methods to Object Literal
// ---------------------------------------------------
user.halo = function () {
  console.log(`halo bro ${this.name}`);
};
user.halo(); // "halo bro krish"

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Singleton pattern controls instance creation and allows global access.
// • Object literals support symbols, string keys with spaces, and dynamic properties.
// • Object.freeze() prevents modification of existing properties.
// • Methods can be added to objects at runtime for flexible behavior.
