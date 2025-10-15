let button = document.querySelector("button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(e.target.value);
  //   by doing value its give the value that the user is write
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;
  let results = document.querySelector("#results");

  let metter = height / 100;

  console.log(metter);
  let bmi = Math.round(weight / (metter * metter));
  results.textContent = `${bmi}`;
});
