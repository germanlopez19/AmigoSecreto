// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){

    //Capturar el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    //Agregar el nombre al array
    amigos.push(nombre);

    //Mostrar en la lista
    actualizarLista();
    //Limpiar el input
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //limpiar lista antes de volver a pintarla

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> Tu amigo secreto es : <strong>${amigoSeleccionado}</strong></li>`
    //alert(`El amigo seleccionado es: ${amigoSeleccionado}`);
}
