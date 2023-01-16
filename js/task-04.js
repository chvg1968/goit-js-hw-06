let counterValue = 0;

// Obtener los elementos del DOM
let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');
let counterValueSpan = document.querySelector("#value");

// Agregar event listeners a los botones
decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

function incrementCounter() {
  counterValue++;
  updateCounterValue();
}

function updateCounterValue() {
  counterValueSpan.innerHTML = counterValue;
}
