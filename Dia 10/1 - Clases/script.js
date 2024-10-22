// Declaracion de Clase
class Papel {
  constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
  }
};

// Expresion de Clase
// Anonima
let Papel = class {
  constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
  }
};

// Nombrada
let Papel = class MiPapel {
  constructor(alto, ancho){
    this.alto = alto;
    this.ancho = ancho;
  }
};
