var form = document.querySelector(".login-form");

// Agregar un controlador de eventos para detectar el envío del formulario
form.addEventListener("submit", function (event) {
  // Prevenir la recarga de la página
  event.preventDefault();

  // Validar los campos
  var email = form.elements.email.value;
  var password = form.elements.password.value;
  if (!email || !password) {
    alert("Todos los espacios deben ser rellenados");
    return;
  }

  // Crear un objeto con los datos del formulario
  var data = {
    email: email,
    password: password,
  };

  // Mostrar el objeto en la consola
  console.log(data);

  // Limpiar los campos del formulario
  form.reset();
});

