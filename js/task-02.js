const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientR = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++) {
  const elemLi = document.createElement("li");
  elemLi.innerText = ingredients[i];
  elemLi.setAttribute("class", "itemI");
  ingredientR.appendChild(elemLi);
}