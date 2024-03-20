class Edifici {

  static souVigilants = 1300

  constructor(nom, numeroPlantes, superficie) {
    this.nom = nom;
    this.numeroPlantes = numeroPlantes;
    this.superficie = superficie;
  }

  //Tots els edificis tindran certes dades comunes (nom, número de plantes, superfície (m²)) que es donaran en crear l’edifici i no es modificaran, però sí que s’haurà de poder accedir a elles per llegir-les. (pertant no creem setters)

  getNom() {
    return this.nom
  }
  getNumeroPlantes() {
    return this.numeroPlantes
  }
  getSuperficie() {
    return this.superficie
  }

  netejar() {
    let minuts = this.superficie / 5 // 1n minut per cada 5 m
    let cost = 0
    if (this.numeroPlantes > 1) { //si l'edifici te mes duna planta...
      minuts += 0.5 //...Afegirem mig minut per cada planta addicional
    }
    cost = minuts * 30
    return cost
  }

  calcularCostVigilancia() {
    let vigilants = Math.ceil(this.superficie / 1000)
    let costVig = vigilants * Edifici.souVigilants
    return costVig
  }

  toString() {
    return `
      Nom: ${this.nom} <br>
      Plantes: ${this.numeroPlantes} <br>
      Superfície: ${this.superficie} <br>
      `
  }
}

function limpiarResultados() {
  let result = document.getElementById('result')
  result.innerHTML = ''
}
