const input = document.getElementById("input");
let equal = document.querySelector(".equal");
document.body.onload = function () {
  input.focus();
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    finalRes();
  }
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    event.preventDefault();
    input.value = ``;
  }
});

equal.addEventListener("click", function (e) {
  finalRes();
});

function finalRes() {
    input.value = eval(input.value);

}
