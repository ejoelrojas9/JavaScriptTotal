// Web Socket es un protocolo de comunicasión en tiempo real que posee javascript
// que permite la transmision de datos entre el navegador y el servidor

let socket = new WebSocket('ws://localhost:8080');
let mensaeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');

function mostrarMensajes(contenido) {
  let contenedorMensajes = document.getElementById('mensajeChat');
  let elementoMensaje = document.createElement('p');
  elementoMensaje.innerText = contenido;
  contenedorMensajes.appendChild(elementoMensaje);
}

botonEnviar.onclick = function() {
  let mensaje = mensaeIngresado.value;
  mostrarMensajes(mensaje);
  socket.send(mensaje);
}

socket.onmessage = function (event) {
  let mensaje = event.data;
  mostrarMensajes(mensaje);
}