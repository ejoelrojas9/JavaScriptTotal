function cargarData() {
  // Cargar Cotizaciones
  cargarCotizaciones(mostrarContizacion);
  // Cargar Elementos
  loadLabels();
  // Cargar Textos
  mostrarContenido();
}

const loadLabels = () => {
  let h1Label = document.getElementById('h1Label');
  let h2Label = document.getElementById('h2Label');
  let imgBitcoin = document.getElementById('bitcoin');
  let imgEuro = document.getElementById('euro');
  let imgBolivar = document.getElementById('bolivar');
  let imgParg = document.getElementById('pesoArs');
  let imgLoading = document.getElementById('loading');
  

  h1Label.textContent = 'Cotizaciones Online';

  h2Label.textContent = 'U $ S';

  imgBitcoin.setAttribute('src', "img/bitcoin.jpg");
  imgBitcoin.setAttribute('alt', "bitcoin");

  imgEuro.setAttribute('src', "img/euro.jpg");
  imgEuro.setAttribute('alt', "euro");

  imgBolivar.setAttribute('src', "img/bolivar.png");
  imgBolivar.setAttribute('alt', "euro");

  imgParg.setAttribute('src', "img/peso-argentino.webp");
  imgParg.setAttribute('alt', "pesoArs");

  imgLoading.setAttribute('src', "img/loading.gif");
  imgLoading.style.visibility = 'visible'
}

async function cargarCotizaciones (callback) {

  await delay('2000');

  let respuestaBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  callback(await respuestaBitcoin.json());

  let respuestaEuro = await fetch('https://open.er-api.com/v6/latest/USD');
  let datosEuro = await respuestaEuro.json();
  document.getElementById('divEuro').append(datosEuro.rates.EUR);

  let respuestaBolivar = await fetch('https://pydolarve.org/api/v1/dollar?page=enparalelovzla');
  let datosBolivar = await respuestaBolivar.json();
  let bolivarValue = 1 / datosBolivar.monitors.enparalelovzla.price;
  
  document.getElementById('divBolivar').append(String(bolivarValue).substr(-20, 6));
  let respuestaPesoArg = await pesoArgentino('https://open.er-api.com/v6/latest/ARS')
  document.getElementById('divPesoArg').append(respuestaPesoArg.rates.USD);

  document.getElementById('loading').style.visibility = 'hidden'
  document.getElementById('cotizaciones').style.visibility = 'visible'
}

const mostrarContizacion = (datos) => {
  document.getElementById('divBitcoin').append(datos.bpi.USD.rate);
}

async function pesoArgentino(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.send();
  })
}

const mostrarContenido = (value) => {
  document.getElementById('divBitcoin').append("BITCOIN a USD: ")
  document.getElementById('divEuro').append("EURO a USD: ")
  document.getElementById('divBolivar').append("BOLIVAR a USD: ")
  document.getElementById('divPesoArg').append("PESO ARG a USD: ")

}

const delay = (ms) => {
  return new Promise((response) => {
    setTimeout(response, ms);
  })
}