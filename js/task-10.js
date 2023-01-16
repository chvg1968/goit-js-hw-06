function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Obtener los elementos del formulario y el contenedor de cajas
var input = document.querySelector("input");
var createButton = document.querySelector("[data-create]");
var destroyButton = document.querySelector("[data-destroy]");
var boxesContainer = document.querySelector("#boxes");

// Crear una función para crear cajas
function createBoxes(amount) {
  // Limpiar el contenedor de cajas
  boxesContainer.innerHTML = "";

  var size = 30;
  // Crear tantos elementos <div> como se especifique en amount
  for (var i = 0; i < amount; i++) {
    var box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Crear una función para borrar cajas
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

// Agregar un controlador de eventos para detectar clic en el botón de crear
createButton.addEventListener("click", function () {
  createBoxes(input.value);
});

// Agregar un controlador de eventos para detectar clic en el botón de borrar
destroyButton.addEventListener("click", function () {
  destroyBoxes();
});
