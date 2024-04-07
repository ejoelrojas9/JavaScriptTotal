function extraerNumElement(elemento) {
  let miElemento = document.getElementById(elemento);
  let miTexto = miElemento.value;
  let miNumero = Number(miTexto);

  return miNumero
}
function calcular() {
  let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;

  ventas1 = extraerNumElement("ventasTienda1");
  ventas2 = extraerNumElement("ventasTienda2");
  ventas3 = extraerNumElement("ventasTienda3");
  ventas4 = extraerNumElement("ventasTienda4");
  ventas5 = extraerNumElement("ventasTienda5");
  ventas6 = extraerNumElement("ventasTienda6");

  let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6

  let menSalida = "Total Ventas: " + totalVentas;

  let elementoSalida = document.getElementById('parrafoSalida')

  elementoSalida.textContent = menSalida
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
