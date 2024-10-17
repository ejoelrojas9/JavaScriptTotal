let empleados = [];

function Empleado(legajo, nombre, apellido, nacimiento, cargo) {
  this.legajo = legajo;
  this.nombre = nombre;
  this.apellido = apellido;
  this.nacimiento = nacimiento;
  this.cargo = cargo;
};

function agregarEmpleado(){
  let legajo = document.getElementById('legajo').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let nacimiento = document.getElementById('nacimiento').value;
  let cargo = document.getElementById('cargo').value;

  let empleado = new Empleado(legajo, nombre, apellido, nacimiento, cargo);
  empleados.push(empleado);

  alert('El empleado ha sido agregado');
  limpiarCampos();
};

function listarEmpleados() {
  let listado = '';
  for(let item of empleados){
    for(const caracteristica in item){
      listado = listado + caracteristica.toUpperCase() + ': ' + item[caracteristica] + ', '
    }
    listado = listado + "\n";
  }
  alert(listado);
}

function limpiarCampos() {
  document.getElementById('legajo').value = "";
  document.getElementById('nombre').value = "";
  document.getElementById('apellido').value = "";
  document.getElementById('nacimiento').value = "";
  document.getElementById('cargo').value = "";
}

// function createInputs(contenedorID, min, cantidadInputs) {
//   let elementoContenedor = document.getElementById('itemInputs');

//   for(let conteoInputs = 1; conteoInputs <= cantidadInputs; conteoInputs++){
//     let textoEtiqueta = "Empleado " + conteoInputs;
//     let idInput = "empleado" + conteoInputs;

//     let parrafoEmpleado = crearParrafoEmpleado(textoEtiqueta, idInput, min);

//     elementoContenedor.appendChild(parrafoEmpleado);
//   }
// }

// function crearParrafoEmpleado(etiqueta, inputId, valorMin) {
//   let elementoParrafo = document.createElement('p');

//   let elementoEtiqueta = document.createElement('label');
//   elementoEtiqueta.innerText = etiqueta + ": ";

//   elementoEtiqueta.setAttribute('for', inputId);

//   let elementoInput = document.createElement('input');

//   elementoInput.setAttribute('type', 'text');
//   elementoInput.setAttribute('id', inputId);
//   elementoInput.setAttribute('min', valorMin);
//   elementoInput.setAttribute('value', "");

//   elementoParrafo.appendChild(elementoEtiqueta);
//   elementoParrafo.appendChild(elementoInput);

//   return elementoParrafo

// }