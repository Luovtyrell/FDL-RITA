//1 classe
//2 static
//3 propiedades privadas
//4 constructor
//5 getters
//6 setters
//7 funciones (metodos) en este caso calculaPejadaCarboni()
//8 toString()

//-----en otro js en x ejemplo main------//
//1 crear array
//2 new vol pushearlo al array

//-----hacer el crud en crud js------//
//1 create
//2 read
//3 update
  //desde los setters que para eso estan
//4 delete

class Vol {
  static tones = 0.1 //demanar perquè static
  //pertenece a la clase, su valor es el mismo para todas las instancias

  #nombrePassatgers
  //es una propiedad privada entonces se define arriba desde la act ECMA2020

  constructor(numeroVol, distancia, companyia, nombrePassatgers, nombreMotors) {
    this.numeroVol = numeroVol
    this.distancia = distancia
    this.companyia = companyia
    this.#nombrePassatgers = nombrePassatgers
    this.nombreMotors = nombreMotors
  }

  //getters
  getNumeroVol() {return this.numeroVol}
  getDistancia() {return this.distancia}
  getCompanyia() {return this.companyia}
  getNombrePassatgers() {return this.#nombrePassatgers}
  getNombreMotors() {return this.nombreMotors}

  //setters
  setNumerovol(numeroVol) {this.numeroVol = numeroVol}
  setDistancia(distancia) {this.distancia = distancia}
  setCompanyia(companyia) {this.companyia = companyia} //no haría falta porque no es privado pero es para practicar
  setNombrePassatgers(nombrePassatgers) {this.#nombrePassatgers = nombrePassatgers} //atributo privado
  setNombreMotors(nombreMotors) {this.nombreMotors = nombreMotors}

  calculaPejadaCarboni() {
    let petjadaCarboni = Vol.tones * parseFloat(this.distancia) * parseInt(this.nombreMotors)
    return petjadaCarboni;
  }

  toString() {
    let resultado = `
        Número de vol: ${this.numeroVol} <br>
        Distància km: ${this.distancia} <br>
        Companyia: ${this.companyia} <br>
        Nombre de passatgers: ${this.#nombrePassatgers} <br>
        Nombre de motors: ${this.nombreMotors} <br>
        La petjada de carboni es de ${this.calculaPejadaCarboni()} de CO2 emès.
        `
    return resultado;
  }
}

//limpiar resultados
function clearResult() {
  let result = document.getElementById("result")
  result.innerHTML = " "
}
