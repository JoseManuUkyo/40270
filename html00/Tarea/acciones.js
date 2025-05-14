export function conectarEvento() {
  const boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    let user = document.getElementById("user");
    let password = document.getElementById("password");

    console.log(user.value);
    console.log(password.value);

    user.setAttribute("name", "x");
    password.setAttribute("name", "y");

    let formulario = document.getElementsByTagName("form");
    formulario[0].setAttribute("action", "https://www.google.com/search");
    formulario[0].submit();
  });
}
