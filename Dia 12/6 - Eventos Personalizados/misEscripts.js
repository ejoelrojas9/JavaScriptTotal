let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion() {
  let cancionElegida = listaCanciones.value;
  // Llamada al objeto que vamos a modificar, en este caso el reproductor de audio
  audio.src = cancionElegida;
  audio.play();
  // Creando el evento
  let evento = new CustomEvent('cambioDeCancion');
  // Despachando el evento creado
  audio.dispatchEvent(evento);
}

audio.addEventListener('cambioDeCancion', mostrarCancion);

// Funcion para mostrar en consola el cambio de la canción
function mostrarCancion() {
  console.log('La canción es ' + listaCanciones.value);
}