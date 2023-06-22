// aplicamos el async await en una sola linea
// hacemos un metodo de promesas para que baje la informacion

function descargarClientes() {
    console.log("Descargando clientes...");
    return new Promise(resolve => {
        const valor = true;
        setTimeout(() => {
            // aplicamos if - else con otro operador
            (valor) ?
            (resolve("Clientes descargado"))
            :
            (reject("El cliente no se ha descargado"));
        }, 5000);
    })
}


function descargarProductos () {
    console.log("Descargando productos...");
    return new Promise (resolve => {
        const valor = true;
        setTimeout(() => {
            (valor) ?
            resolve("Producto descargado")
            :
            (reject("El producto no se ha descargado"));
        }, 3000);
    })
}

const app = async () => {
    // aplicamos dos metodos para el async / await
    // primer metodo
    /* try {
        const clientes = await descargarClientes();
        console.log(clientes);
        const productos = await descargarProductos();
        console.log(productos);
    } catch (error) { 
        console.log(error)
    } */
    // segundo metodo en una linea
    try { 
        const respuesta = await Promise.allSettled([descargarClientes(), descargarProductos()]);
        console.log(respuesta);
        mostrarHTML(respuesta)
    } catch (error) {
        console.log(error);
    }
}


//generamos h3 en el body despues de responder todas las lineas
function mostrarHTML(respuesta) {
    const body = document.querySelector("body")
    respuesta.map(dato => {
        console.log(dato.value);
        const title = document.createElement("h3")
        title.textContent = dato.value
        body.appendChild(title)
    })
}

app()