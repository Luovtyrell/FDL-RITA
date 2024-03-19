class AvioComercial extends Avio {
    constructor(numeroAvio, marca, modelo, carregaKg, llargariaM) {
        super(numeroAvio, marca, modelo, carregaKg, llargariaM)
    }

    netejarAvioComercial = super.netejarAvio() + 240

    calcularCostMenjar() {
        let nombrePersonesU = prompt("Quantes persones hi ha?")
        return nombrePersonesU * 10
    }

    toString() {
        let resultat = super.toString()
        resultat += `
          Cost del menjar: ${this.calcularCostMenjar()} euros. <br>`
        return resultat
    }
}