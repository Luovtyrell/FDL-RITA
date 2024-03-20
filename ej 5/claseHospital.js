class Hospital extends Edifici {
    static apats = 3

    constructor(nom, numeroPlantes, superficie, numeroMalalts) {
        super(nom, numeroPlantes, superficie)

        this.numeroMalalts = numeroMalalts
    }

    //getters y setters porque se modifican num de malalts
    getNumeroMalalts() { return this.numeroMalalts }
    //setter
    setNumeroMalalts(numeroMalalts) { this.numeroMalalts = numeroMalalts }

    netejarHospital(){
        return super.netejar() //llama neteja padre
    }
 
    vigilanciaHospital(){
        return super.calcularCostVigilancia() //llama vigilancia padre
    }

    repartirDinar() {
        let resultatDinar =  this.getNumeroMalalts() * Hospital.apats //queremos coger por eso get no establecerlo que seria set
        return resultatDinar
    }

    toString() {
        let resultat = super.toString()
        resultat += `
        Cost neteja hospital: ${this.netejarHospital()} euros. <br>
        Vigilància hospital: ${this.vigilanciaHospital()} euros. <br>
        S'estan repartint ${this.repartirDinar()} racions.
        `
        return resultat
    }
}
