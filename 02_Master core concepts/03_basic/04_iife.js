// imeditaeely invoked function expresion (IIFE)

function halo() {
  console.log("halo world");
}
(function halo() {
  console.log("halo world");
})();
((name) => {
  console.log(`halo world ${name}`);
})("krish"); // by this we can give value

// iife use to excute the fucntion imidetly becuse for end the global scope polution we use this it done by wrap the parenthes then end add ()
// to end the the iife we need to add ;
