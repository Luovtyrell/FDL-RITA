class Hotel extends Edifici {
    constructor (nom, numeroPlantes, superficie, numeroHabitacions) {
        super(nom, numeroPlantes, superficie)

        this.numeroHabitacions = numeroHabitacions
    }

    netejaHotel(){
        return super.netejar()
    }

    vigilanciaHotel() {
        return super.calcularCostVigilancia() + 500 //plus perillositat
    }

   //calculem primer personal necesari pel servei d'habitacions
   calcularPersonal(){
    let habitacionsPerTreballador = 20
    let treballadorsNecessaris = Math.ceil(this.numeroHabitacions / habitacionsPerTreballador)
    return treballadorsNecessaris
   }

   //metodo per calcular-ne el cost total dels sous del personal del servei d'hab
   calcularSous (){
    let sou = 1000
    let treballadorsNecessaris = this.calcularPersonal()
    let costTotal = treballadorsNecessaris * sou
    return costTotal
   }

   toString(){
    let resultat = super.toString()
    resultat += `
    Numero d'habitacions: ${this.numeroHabitacions} <br>
    Cost neteja hotel: ${this.netejaHotel()} euros. <br>
    Vigilància hotel: ${this.vigilanciaHotel()} euros. <br>
    Personal: ${this.calcularPersonal()} <br>
    Sous personal: ${this.calcularSous()} euros. <br>
    `
    return resultat
   }
}
