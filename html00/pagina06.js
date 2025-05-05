const Picture = (id) => {
    return `<figure >
            <img src="https://picsum.photos/id/200/200" alt="John Cena">
            <figcaption>John Cena Cenanation</figcaption> 
        </figure>
        <figure>    
            <img src="https://picsum.photos/id/200/200" alt="Jill Valentine">
            <figcaption> Jill Valentine</figcaption>
        </figure>`
}

const p = document.getElementById("app")
p.innerHTML = Picture(1) + Picture(2) + Picture(3)

const mensaje = (id) => {alert("Hola" + id)}

const lista= app.querySelectorAll('img')
console.log(lista)
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
    lista[i].addEventListener("click",
        () => {
            lista[i].classList.toggle("redonda")
        }
    )
}