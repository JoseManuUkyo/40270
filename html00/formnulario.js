console.log("inicio")

function muestra() {
    let user = document.getElementById("user")
    let password = document.getElementById("password")

    console.log(user.value)
    console.log(password.value)
}

//ejemplo de funcion de callback, no debe de llevar parentesis
const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra)

//ejemplo de funcion anonima de tipo arrow
boton.addEventListener("click",
    () => {
        let user = document.getElementById("user")
        let password = document.getElementById("password")

        console.log(user.value)
        console.log(password.value)
    }
)