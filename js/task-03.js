const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

var imageList = document.querySelector(".gallery");
var imageHTML = "";

// Crear la cadena de HTML de las imágenes
for (var i = 0; i < images.length; i++) {
  imageHTML +=
    "<li><img src='" + images[i].url + "' alt='" + images[i].alt + "'></li>";
}

// Insertar la cadena de HTML en el elemento "ul"
imageList.insertAdjacentHTML("beforeend", imageHTML);