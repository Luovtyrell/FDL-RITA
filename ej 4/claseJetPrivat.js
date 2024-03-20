class JetPrivat extends Avio {
    constructor(numeroAvio, marca, modelo, carregaKg, llargariaM) {
        super(numeroAvio, marca, modelo, carregaKg, llargariaM)
    }

    netejarJetPrivat() {
        let result =
            (super.netejarAvio() / 2) + 15
        return result
    }

    calcularCostReserva() {
        let passatgersU = prompt("Numeros de passatgers?")

        if (passatgersU > 10) {
            alert("El número màxim de passatgers és 10")
        } else {
           return passatgersU * 1000 //per cada persona es paguen 1.000 €
        }
    }

    toString() {
        let resultat = super.toString()
        //agregamos al result el numero de helices
        resultat += `
        Cost de la neteja: ${this.netejarJetPrivat()} euros.<br>
        Cost de resrva: ${this.calcularCostReserva()} euros.<br>`
        return resultat
    }

}
