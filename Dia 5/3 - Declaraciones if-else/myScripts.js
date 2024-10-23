function checkSale() {
  let elementRespuesta = document.getElementById("decision");

  let elementPrecio = document.getElementById("textoPrecio");
  let precio = elementPrecio.value;

  if (precio < 5) {
    elementRespuesta.textContent = "Comprar dos litros de leche";
  } else {
    if (precio < 8) {
      elementRespuesta.textContent = "Comprar un litro leche";
    } else {
      elementRespuesta.textContent = "No Comprar leche";
    }
  }
}