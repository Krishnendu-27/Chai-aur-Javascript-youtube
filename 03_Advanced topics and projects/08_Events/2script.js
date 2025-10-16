let list = document.querySelector("#itemList");

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove(); // or e.target.style.display = "none";
  }
});
