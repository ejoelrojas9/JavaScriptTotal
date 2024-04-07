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
// ////////////////////////
// let misAmigos = [ 'Monica', 'Ricky', 'Willmer', 'Giovanna', 'Aderson', 'David']
// misAmigos.length // Cantidad de elementos en un array
// misAmigos.indexOf('Ricky') // Indice del elemento Ricky en el array
// misAmigos.pop() // Salta al ultimo elemento del array y lo elimina
// let eliminado = misAmigos.pop() // Guarda el ultimo elemento que es eliminado en una variable
// eliminado => 'David'
// misAmigos.shift() // Elimina el primer elemento de una array
// misAmigos.unshift('Rachel') // Agrega un elemento en la primera posición del array
// misAmigos.push('Phoebe') // Agrega un elemento en la ultima posición del array
// misAmigos.splice(2, 3) // Elimina elementos a partir de cierta posición del array y la cantidad a eliminar
// misAmigos.forEach(function(amigo){console.log(amigo)}) // Recorre un array
// misAmigos.forEach(function(amigo, index){console.log(index + ": " + amigo)}) // Muestra el indice más el valor del indice
