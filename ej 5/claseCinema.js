class Cinema extends Edifici {
    constructor(nom, numeroPlantes, superficie, aforamentMaxim) {
        super(nom, numeroPlantes, superficie)

        this.aforamentMaxim = aforamentMaxim
    }

    getAforamentMaxim() { return this.aforamentMaxim }

    //setters porque el aforament puede cambiar....
    setAforamentMaxim(aforamentMaxim) { this.aforamentMaxim = aforamentMaxim }

    netejarCine() {
        return super.netejar()
    }

    vigilanciaCine() {
        return super.calcularCostVigilancia() + 3000
    }


    projectarSessio() {
        let asistensU = parseInt(document.getElementById('asistencia').value)
        let preuEntradaU = parseFloat(document.getElementById('entrada').value)

        if (asistensU > this.aforamentMaxim) {
            return `No es pot projectar la sessió`
        }
        let recaptacio = asistensU * preuEntradaU
        return recaptacio
    }

    toString() {
        let resultat = super.toString()
        //agregamos al result el aforament maxim y los otros metodos
        resultat += `
        Neteja cine: ${this.netejarCine()} <br>
        Aforament: ${this.aforamentMaxim} <br>
        Vigilancia: ${this.vigilanciaCine()} <br>
        Recaptació : ${this.projectarSessio()} <br>
        `
        return resultat
    }
}
