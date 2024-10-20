let automoviles = [];
let liId = 0;

let Automovil = function(marca, modelo, color, anio, titular){
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.anio = anio;
  this.titular = titular;
}

let automovil1 = new Automovil("Jeep", "Cherokee", "Dorado", 2001, "Joel Rojas");
let automovil2 = new Automovil("Kia", "Picanto", "Gris", 2016, "Paola Torres");
let automovil3 = new Automovil("Fiat", "Palio", "Blanco", 1998, "Carlos Balanta");
automoviles.push(automovil1, automovil2, automovil3);

Automovil.prototype.venderAutomovil = function(nuevoTitular){
  this.titular = nuevoTitular;
};

Automovil.prototype.verAuto = function(){
  let ver = `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Titular: ${this.titular}`
  return ver;
};

Automovil.prototype.encender = function(){
  alert(this.marca + " esta en marcha");
}

function verRegistros() {
  let ulAutos = document.getElementById('listAutos');

  for(let auto of automoviles){
    let liAuto = document.createElement('li');
    liAuto.setAttribute('id', `auto${liId += 1}`);
    liAuto.textContent = auto.verAuto();
    // liAuto.innerText = auto.verAuto();
    ulAutos.appendChild(liAuto);
    
  }
};