function calcularLitros() {
  var elementKm = document.getElementById("textoKm");
  var textoKm = elementKm.value;
  var cantKm = Number(textoKm);

  // Con Math.ceil redondeamos la cantidad de litros hacia arriba
  var canLitros = Math.ceil(cantKm / 8.8);

  var resultado = document.getElementById("textoResultado");
  resultado.textContent = "Carga " + canLitros + " litros de combustible"
}