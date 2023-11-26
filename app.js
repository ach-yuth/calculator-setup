const button = document.querySelectorAll(".btn");
const allclear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
let input = document.querySelector("input");
button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.target.btn;
    input.value += e.target.innerHTML;
  });
});
allclear.addEventListener("click", function () {
  input.value = "";
});
del.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});
equal.addEventListener("click", function () {
  input.value = eval(input.value);
});
