function obtenerInformacion() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((respuesta) => {
    let listaInformacion = document.getElementById('listaInformacion');
    for(let i=0; i < respuesta.data.length; i++) {
      let itemLista = document.createElement('li');
      itemLista.innerText = respuesta.data[i].title;
      listaInformacion.appendChild(itemLista)
    }
  })
  .catch((error) => {
    console.log(error);
  })
}