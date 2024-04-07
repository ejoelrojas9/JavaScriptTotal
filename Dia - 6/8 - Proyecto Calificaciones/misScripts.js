let calificaciones = [ 7, 4, 2, 9, 6 ]

function mostrarNotas() {
  let elementCalificiationes = document.getElementById('calificiacionesUl');
  for(let cal of calificaciones) {
    let itemList = document.createElement('li');
    itemList.innerText = "La nota es: " + cal;

    elementCalificiationes.appendChild(itemList);
  }
}

function promedioNotas() {
  // let resultado = document.getElementById('mostrarPro');
  let promedio = 0;
  for(i = 0; i < calificaciones.length; i++) {
    promedio += calificaciones[i];
  }
  document.getElementById('mostrarPro').textContent = "El promedio de notas es: " + promedio / 5;
}

function notaAlta() {
  let notaAlta = 0;
  let i = 0;
  while (i < 5) {
    if (calificaciones[i] > notaAlta) {
      notaAlta = calificaciones[i];
    }
    i++;
  }
  document.getElementById('mostrarAlta').textContent = "La nota más alta es: " + notaAlta
}

function notaApla() {
  let aplazo = "No";
  let i = 0;
  do {
    if (calificaciones[i] < 4) {
      aplazo = "Si";
      break;
    }
    i++;
  } while (i < 5);
  document.getElementById('mostrarApla').textContent = "Hubo algún aplazo? " + aplazo;
}
