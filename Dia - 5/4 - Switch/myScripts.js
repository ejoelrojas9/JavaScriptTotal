function consultarPrecio() {
  let elementRespuesta = document.getElementById("textoPrecio");

  let elementFruta = document.getElementById("numeroFruta");
  let fruta = elementFruta.value;

  switch (fruta) {
    case "1":
      elementRespuesta.textContent = "$8.45";
      break;
  
    case "2":
      elementRespuesta.textContent = "$6.32";
      break;

    case "3":
      elementRespuesta.textContent = "$2.36";
      break;

    case "4":
      elementRespuesta.textContent = "$1.58";
      break;

    case "5":
      elementRespuesta.textContent = "$7.21";
      break;
  }
}