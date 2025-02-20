// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear array para almacenar nombres de amigos
let amigos = [];

/**  Funcion para agrega un nuevo amigo al array de amigos.
 * Valida que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

/**
 *Funcion para la visualización de la lista de amigos
 */
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

/*Funcion para sortear y muestra un amigo de la lista de amigos de manera aleatoria.
 * Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `Su amigo secreto es: ${amigos[indiceAmigo]}`;
  }
}
