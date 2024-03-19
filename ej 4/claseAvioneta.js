class Avioneta extends Avio {
   static tipoAvio = "Avioneta"

   constructor(numeroAvio, marca, modelo, carregaKg, llargariaM, helix) {
      //llamamos al constructor de la clase Avio amb els parametres
      super(numeroAvio, marca, modelo, carregaKg, llargariaM)
      //iniciem la propietat especifica de la avioneta
      this.helix = helix
   }

   getHelix() { return this.helix }

   netejarAvioneta = super.netejarAvio() / 2 //llamamos funcion padre al hijo así

   calcularDistancia() {
      return this.getHelix() * 1000
   }

   toString() {
      //llamamos al metodo toString de la clase padre (Avio)
      let resultat = super.toString()
      //agregamos al result el numero de helices
      resultat += `
        Número de hèlix: ${this.helix} <br>
        Distància que pot recórrer: ${this.calcularDistancia()} Km <br>`
      return resultat
   }

}