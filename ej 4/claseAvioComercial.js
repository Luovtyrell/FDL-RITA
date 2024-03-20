class AvioComercial extends Avio {
    constructor(numeroAvio, marca, modelo, carregaKg, llargariaM) {
        super(numeroAvio, marca, modelo, carregaKg, llargariaM)
    }

    netejarAvioComercial() {
        let resultat = 
        super.netejarAvio() + 240
        return resultat
    }

    calcularCostMenjar() {
        let nombrePersonesU = prompt("Quantes persones hi ha?")
        return nombrePersonesU * 10
    }

    toString() {
        let resultat = super.toString()
        resultat += `
        Cost de la neteja: ${this.netejarAvioComercial()} euros. <br>
        Cost del menjar: ${this.calcularCostMenjar()} euros. <br>`
    return resultat
    }
}