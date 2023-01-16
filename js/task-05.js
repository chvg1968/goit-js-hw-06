let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  let inputValue = nameInput.value;
  if (inputValue === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = inputValue;
  }
});