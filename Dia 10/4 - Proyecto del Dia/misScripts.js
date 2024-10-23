animales = [];
liId = 0;

class Animal {
  constructor(nombre, peso, edad){
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }
  informacion(){
    return `${this.nombre} - ${this.peso}kg. - ${this.edad} años`;
  }
}

class Perro extends Animal {
  constructor(nombre, peso, edad, raza) {
    super(nombre, peso, edad);
    this.raza = raza;
  }
  informacion(){
    return `Nombre: ${this.nombre} \n Peso: ${this.peso}kg \n Edad: ${this.edad} \n Raza: ${this.raza}`;
  }
}

class Gato extends Animal {
  constructor(nombre, peso, edad, sexo) {
    super(nombre, peso, edad);
    this.sexo = sexo;
  }
  informacion(){
    return `Nombre: ${this.nombre} \n Peso: ${this.peso}kg \n Edad: ${this.edad} \n Sexo: ${this.sexo}`;
  }
}

class Conejo extends Animal {
  constructor(nombre, peso, edad, color) {
    super(nombre, peso, edad);
    this.color = color;
  }
  informacion(){
    return `Nombre: ${this.nombre} \n Peso: ${this.peso}kg \n Edad: ${this.edad} \n Color: ${this.color}`;
  }
}

let perro1 = new Perro("Candado", 25, 15, "Labrador");
let gato1 = new Gato("Negro", 8, 9, "Macho");
let conejo1 = new Conejo("Bugs", 3, 6, "Blanco")
animales.push(perro1, gato1, conejo1);

function mostrarAnimales() {
  let listarAnimales = document.getElementById('animalesList');

  for (const animal of animales) {
    let liAnimal = document.createElement('li');
    liAnimal.setAttribute('id', `animal${liId += 1}` );
    liAnimal.innerText = animal.informacion();
    listarAnimales.appendChild(liAnimal);
  }
}