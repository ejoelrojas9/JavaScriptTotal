function formRegistro() {
  let showPhone = document.getElementById('consulDiv');
      let phoneId = `
        <label for="marca">Marca:</label><br><textarea name="" id="marca" cols="30" rows="3"></textarea><br>
        <label for="modelo">Modelo:</label><br><textarea name="" id="modelo" cols="30" rows="3"></textarea><br>
        <label for="color">Color:</label><br><textarea name="" id="color" cols="30" rows="3"></textarea><br>
        <label for="almacenamiento">Almacenamiento:</label><br><textarea name="" id="almacenamiento" cols="30" rows="3"></textarea><br>
        <label for="procesador">Procesador:</label><br><textarea name="" id="procesador" cols="30" rows="3"></textarea><br><br>
        <button id="cancel" onclick="cargarPagina()">Cancelar</button>
        <button id="success" onclick="crearRegistro()">Enviar Cambios</button>`;
      showPhone.innerHTML = phoneId;
}

function cargarPagina() {
  location.reload();
}

function crearRegistro() {
  let itemId = document.getElementById('inputId');
  let itemMarca = document.getElementById('marca').value;
  let itemModelo = document.getElementById('modelo').value;
  let itemColor = document.getElementById('color').value;
  let itemAlmacenamiento = document.getElementById('almacenamiento').value;
  let itemAProcesador = document.getElementById('procesador').value;
  fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      marca: itemMarca,
      modelo: itemModelo,
      color: itemColor,
      almacenamiento: itemAlmacenamiento,
      procesador: itemAProcesador
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    itemId.value = "";
    alert("El registro ha sido creado");
    location.reload();
  })
  .catch( error => console.log("El error recibido es: ", error))
}

function consultarRegistro() {
  let showPhone = document.getElementById('consulDiv');
  let searchPhone = document.getElementById('buscarDiv');
  showPhone.style.display = 'none';
  searchPhone.style.display = 'block';
}

function loadTable() {
  fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(
    data => {
      let tbodyItem = document.getElementById('miTabla');
      let trItem = '';
        for(let item of data){
          trItem += `
          <tr>
            <td>${item.id}</td>
            <td>${item.marca}</td>
            <td>${item.modelo}</td>
            <td>${item.color}</td>
            <td>${item.almacenamiento}</td>
            <td>${item.procesador}</td>
          </tr>
          `;
        }
      tbodyItem.innerHTML = trItem;
    }
  )
  .catch(error => console.log("El error recibido es: ", error))
}

function buscarRegistro() {
  let itemId = document.getElementById('inputId');
  fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${itemId.value}`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(data => {
    if (String(data.id) != 'undefined') {
      let showPhone = document.getElementById('showPhone');
      let phoneId = `
        <label for="marca${data.id}">Marca:</label><br><textarea name="" id="marca${data.id}" cols="30" rows="3">${data.marca}</textarea><br>
        <label for="modelo${data.id}">Modelo:</label><br><textarea name="" id="modelo${data.id}" cols="30" rows="3">${data.modelo}</textarea><br>
        <label for="color${data.id}">Color:</label><br><textarea name="" id="color${data.id}" cols="30" rows="3">${data.color}</textarea><br>
        <label for="almacenamiento${data.id}">Almacenamiento:</label><br><textarea name="" id="almacenamiento${data.id}" cols="30" rows="3">${data.almacenamiento}</textarea><br>
        <label for="procesador${data.id}">Procesador:</label><br><textarea name="" id="procesador${data.id}" cols="30" rows="3">${data.procesador}</textarea><br><br>
        <button id="cancel" onclick="cargarPagina()">Cancelar</button>
        <button id="success" onclick="cambiarRegistro()">Enviar Cambios</button>`;
      showPhone.innerHTML = phoneId;
    } else {
      itemId.value = "";
      alert("El Registro no Existe");
    }
  })
  .catch(error => console.log("El error recibido es: ", error))
}

function cambiarRegistro() {
  let itemId = document.getElementById('inputId');
  let itemMarca = document.getElementById(`marca${itemId.value}`).value;
  let itemModelo = document.getElementById(`modelo${itemId.value}`).value;
  let itemColor = document.getElementById(`color${itemId.value}`).value;
  let itemAlmacenamiento = document.getElementById(`almacenamiento${itemId.value}`).value;
  let itemAProcesador = document.getElementById(`procesador${itemId.value}`).value;
  fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${itemId.value}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
      marca: itemMarca,
      modelo: itemModelo,
      color: itemColor,
      almacenamiento: itemAlmacenamiento,
      procesador: itemAProcesador
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    itemId.value = "";
    alert("El registro ha sido modificado");
    location.reload();
  })
  .catch( error => console.log("El error recibido es: ", error))
}

function borrarRegistro() {
  let showPhone = document.getElementById('consulDiv');
  let deletePhone = document.getElementById('borrarDiv');
  showPhone.style.display = 'none';
  deletePhone.style.display = 'block';
}

function eliminarRegistro() {
  let itemId = document.getElementById('deleteId');
  fetch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${itemId.value}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => { 
    itemId.value = "";
    alert("Resgistro eliminado");
    location.reload();
  })
  .catch(error => console.log("El error recibido es: ", error))
}