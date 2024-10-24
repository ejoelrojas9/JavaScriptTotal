let boton = document.getElementById('miBoton');
let menu = document.getElementById('miMenu');

// boton.addEventListener('click', function() {
//   menu.style.display = 'block'; // Esta propiedad muestra el elemento
// })

boton.addEventListener('mouseover', function() {
  menu.style.display = 'block';
})

boton.addEventListener('mouseout', function() {
  menu.style.display = 'none';
})

document.addEventListener('mousemove', function(event) {
  console.log('Posición X: ' + event.clientX + 'Posición Y: ' + event.clientY);
})