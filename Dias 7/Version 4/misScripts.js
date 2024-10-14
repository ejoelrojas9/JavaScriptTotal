function crearTiendas(contenedorID, min, cantidadTiendas) {
  // Encontrar contenedor por id
  let elementoContenedor = document.getElementById(contenedorID);

  // Loop para crear tantas tiendas como se pidan
  for (let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++) {
    // Crear el texto de label para poder llamar a la función
    let textoEtiqueta = "Tienda " + conteoTiendas;
    let idInput = "ventasTienda" + conteoTiendas

    // Crear tiendas con crearParrafoTienda (función)
    let parrafoTienda = crearParrafoTienda(textoEtiqueta, idInput, min);

    // Agregar el parrafo al contenedor
    elementoContenedor.appendChild(parrafoTienda);
  }
}

function crearParrafoTienda(textoLabel, inputId, valorMin) {
  // Crear etiqueta <p>
  let elementoParrafo = document.createElement('p');

  // Crear etiqueta <label>
  let elementoEtiqueta = document.createElement('label');
  elementoEtiqueta.innerText = textoLabel + ": ";
  // elementoEtiqueta.innerText = textoLabel + ":" + "\n";

  // Conectar con el <input>
  elementoEtiqueta.setAttribute('for', inputId);
  // elementoEtiqueta.textContent = textoLabel;

  // Creat <input>
  let elementoInput = document.createElement('input');

  // Establecer atributos de input
  elementoInput.setAttribute('type', 'number');
  elementoInput.setAttribute('id', inputId);
  elementoInput.setAttribute('min', valorMin);
  elementoInput.setAttribute('value', 0);

  // Agregar input al parrafo
  elementoParrafo.appendChild(elementoEtiqueta);
  elementoParrafo.appendChild(elementoInput);

  // Devolver el parrafo completo
  return elementoParrafo;
}

function extraerNumElement(elemento) {
  let miTexto = elemento.value;
  let miNumero = Number(miTexto);

  return miNumero
}

function calcular() {
  let ventas = [];
  let posicionVentas = 0;
  let elementosVentas = document.getElementById('itemsTiendas');
  let valorMayor = Number(document.getElementById('ventasTienda1').value);;
  let valorMenor = Number(document.getElementById('ventasTienda1').value);
  let itemMenor = document.getElementById('ventasTienda1').setAttribute('class', 'colorNul')
  let itemMayor = document.getElementById('ventasTienda1').setAttribute('class', 'colorNul')
  
  for(let item of elementosVentas.children){
    let valorVenta = extraerNumElement(item.children[1]);
    ventas[posicionVentas] = valorVenta;
    posicionVentas += 1;
  }

  for(let item of elementosVentas.children){
    let valorVenta = extraerNumElement(item.children[1]);

    if (valorVenta > valorMayor) {
      valorMayor = valorVenta
      itemMayor = item.children[1]
    }
    else if (valorVenta <= valorMenor && valorVenta <= valorMayor) {

      valorMenor = valorVenta
      itemMenor = item.children[1]
    }
  }

  itemMayor.setAttribute('class', 'colorMayor');
  itemMenor.setAttribute('class', 'colorMenor');

  let totalVentas = sumarTotal(ventas);

  let menSalida = "Total Ventas: " + totalVentas

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
