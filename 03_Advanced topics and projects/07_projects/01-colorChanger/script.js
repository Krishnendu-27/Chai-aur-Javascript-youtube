let body = document.body;
let button = document.querySelectorAll(".button");

button.forEach((btn) => {
  let color = btn.id;
  console.log(color);
  //   eventlistener for listen the event that happend in the browser
  btn.addEventListener("click", function (e) {
    // here we add event listener in each button so by clciking anyone it trigger that button and change the color
    // e.preventDefault();
    body.style.backgroundColor = `${color}`;
  });
});
