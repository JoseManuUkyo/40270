import { Picture } from './picture.js';

const app = document.getElementById("app");

app.innerHTML =
  Picture(1) +
  Picture(2) +
  Picture(3) +
  Picture(4);
