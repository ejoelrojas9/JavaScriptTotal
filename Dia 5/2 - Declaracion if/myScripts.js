function checkSale() {
  let elementRespuesta = document.getElementById("decision");

  let elementPrecio = document.getElementById("textoPrecio");
  let precio = elementPrecio.value;

  if (precio < 5) {
    elementRespuesta.textContent = "Comprar dos litros de leche"
  }
}