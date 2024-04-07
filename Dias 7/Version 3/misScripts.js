function crearParrafoTienda(textoLabel, valorMin) {
  // Crear etiqueta <p>
  let elementoParrafo = document.createElement('p');

  // Crear etiqueta <label>
  let elementoEtiqueta = document.createElement('label');

  // Conectar con el <input>
  elementoEtiqueta.setAttribute('for', textoLabel);

  // Creat <input>
  let elementoInput = document.createElement('input');

  // Establecer atributos de input
  elementoInput.setAttribute('type', 'number');
  elementoInput.setAttribute('id', textoLabel);
  elementoInput.setAttribute('min', valorMin);
  elementoInput.setAttribute('value', 0);

  // Agregar input al parrafo
  elementoParrafo.appendChild(elementoEtiqueta);
  elementoParrafo.appendChild(elementoInput);

  // Devolver el parrafo completo
  return elementoParrafo;
}

function extraerNumElement(elemento) {
  let miElemento = document.getElementById(elemento);
  let miTexto = miElemento.value;
  let miNumero = Number(miTexto);

  return miNumero
}

function calcular() {
  let ventas = [];

  ventas[0] = extraerNumElement("ventasTienda1");
  ventas[1] = extraerNumElement("ventasTienda2");
  ventas[2] = extraerNumElement("ventasTienda3");
  ventas[3] = extraerNumElement("ventasTienda4");
  ventas[4] = extraerNumElement("ventasTienda5");
  ventas[5] = extraerNumElement("ventasTienda6");

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = calcularMayor(ventas);
  let ventaMenor = calcularMenor(ventas); 


  let menSalida = "Total Ventas: " + totalVentas +
                  " / Venta Mayor: " + ventaMayor +
                  " / Venta Menor; " + ventaMenor;

  let elementoSalida = document.getElementById('parrafoSalida')

  elementoSalida.textContent = menSalida
}

function sumarTotal(array) {
  let total = 0;
  for (let venta of array) {
    total = total + venta;
  }
  return total;
}

function calcularMayor(array) {
  let maximo = array[0];

  for (const venta of array) {
    if (venta > maximo) {
      maximo = venta;
    }
  }
  return maximo;
}

function calcularMenor(array) {
  let minimo = array[0];

  for (const venta of array) {
    if (venta < minimo) {
      minimo = venta;
    }
  }
  return minimo;
}
