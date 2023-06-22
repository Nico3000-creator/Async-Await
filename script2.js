const url = "http://picsum.photos/list"
const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function(){
    obtenerDatos()
})

// Primer metodo aprendido
/* const obtenerDatos = () => {
    fetch(url)
    .then(datos => datos.json())
    .then(photos => mostrar(photos))
    .catch(error => console.log(error))
} */

// Segundo metodo aprendido async await
const obtenerDatos = async () => {
    try {
        const resultado = await fetch(url);
        const resulJson = await resultado.json();
        mostrarHTML(resulJson);

    }   catch (error) {
        console.log(error);
    }
}

// Segundo metodo aprendido

function mostrarHTML(datos) {
    console.log(datos)
    let html = '';

    datos.map(dato => {
        const {id, author, post_url} = dato
        const div = document.createElement("div")
        div.innerHTML = `
            <p> --------------- </p>
            <p> Autor: ${author} </p>
            <p> Id: ${id} </p>
            <a href="${post_url}" target="_blank">ver imagen</a>
            <p> ---------------- </p>
        `
        body.appendChild(div)
    })

    const hoja = document.querySelector ("body > div:nth-child(7)")
    hoja.classList.add("parrafo2")
}

// tercer metodo aprendido 
/*
const mostrarHTML = (datos) => {
    datos.map(dato => {
        const {id, author} = dato
        const div = document.createElement('div');
        div.innerHTML = "<div class='nombre-clase' id='id' >ID:" + id + "</div>" + "<div>Nombre del Autor:" + author + "</div>"
        body.appendChild(div);
    })
} */