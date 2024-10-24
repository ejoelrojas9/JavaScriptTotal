let boton = document.getElementById('miBoton');

// boton.addEventListener('click', function() {
//   alert('El boton ha sido presionado');
// });

function mostrarMensaje() {
  alert('El boton ha sido presionado');
};
function mouseOver() {
  alert('Flotar');
};

// Cuando se hace click en el elemento
boton.addEventListener('click', mostrarMensaje);
// Cuando el cursor del mouse pasa sobre el elemento
boton.addEventListener('mouseover', mouseOver);