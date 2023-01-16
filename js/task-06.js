let inputBox = document.getElementById("validation-input");
inputBox.addEventListener("input", function () {
  inputBox.classList.toggle("valid", inputBox.value.length === 6);
  inputBox.classList.toggle("invalid", inputBox.value.length !== 6);
});
