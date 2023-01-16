var input = document.getElementById("font-size-control");
var text = document.getElementById("text");

// Agregar un controlador de eventos para detectar cambios en el valor de entrada
input.addEventListener("input", function () {
  // Actualizar el estilo del elemento de span para cambiar el tamaño de la fuente
  text.style.fontSize = this.value + "px";
});