function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

var button = document.querySelector(".change-color");
var colorSpan = document.querySelector(".color");

// Agregar un controlador de eventos para detectar clic en el botón
button.addEventListener("click", function () {
  // Generar un color aleatorio
  var color = getRandomHexColor();

  // Actualizar el estilo del elemento <body>
  document.body.style.backgroundColor = color;

  // Actualizar el contenido del elemento <span>
  colorSpan.textContent = color;
});
