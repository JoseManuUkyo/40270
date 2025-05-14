import { Picture } from './picture.js';

const app = document.getElementById("app");

// Insertar imágenes en el HTML
app.innerHTML = Picture(1) + Picture(2) + Picture(3);

// Evento de click: cambiar estilo de las imágenes
const lista = app.querySelectorAll('img');
console.log(lista);

for (let i = 0; i < lista.length; i++) {
  lista[i].addEventListener("click", () => {
    lista[i].classList.toggle("redonda");
  });
}
