class Client {

    static tones = 0.5

    #dni

    constructor(dni, edat, nacionalitat, nombreVols) {
        this.#dni = dni
        this.edat = edat
        this.nacionalitat = nacionalitat
        this.nombreVols = nombreVols
    }

    //getters los haremos todos para practicar
    getDni() { return this.#dni }
    getEdat() { return this.edat }
    getNacionalitat() { return this.nacionalitat }
    getNombreVols() { return this.nombreVols }

    //setters en este caso dni no porque es prop privada que no se cambiara
    setEdat(edat) { this.edat = edat }
    setNacionalitat(nacionalitat) { this.nacionalitat = nacionalitat }
    setNombreVols(nombreVols) { this.nombreVols = nombreVols }

    //empezamos a hacer los metodos de la clase que nos piden en este caso del crud el Read y Update, petjada carboni y toString

    calcularPetjadaCarboni() {
        let petjadaCarboni = (Client.tones) * (parseInt(this.nombreVols))
        return petjadaCarboni
    }

    toString() {
        let resultado = `
        DNI: ${this.#dni} <br>
        Edat: ${this.edat} <br>
        Nacionalitat: ${this.nacionalitat} <br>
        Nombre de vols: ${this.nombreVols} <br>
        Petjada de Carboni: ${this.calcularPetjadaCarboni().toFixed(2)} CO2 emès.
        `
        return resultado
    }

}
