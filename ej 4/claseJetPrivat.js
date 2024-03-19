class JetPrivat extends Avio {
    constructor(numeroAvio, marca, modelo, carregaKg, llargariaM) {
        super(numeroAvio, marca, modelo, carregaKg, llargariaM)
    }

    netejarJetPrivat = (super.netejarAvio() / 2) + 15

    calcularCostReserva() {
        let passatgersU = prompt("Numeros de passatgers?")

        if (passatgersU > 10) {
            alert("El número màxim de passatgers és 10")
        } else {
            passatgersU * 1000 //per cada persona es paguen 1.000 €
            return
        }
    }

    toString() {
        let resultat = super.toString()
        //agregamos al result el numero de helices
        resultat += `
          Cost de resrva: ${this.calcularCostReserva()} <br>`
        return resultat
    }

}
