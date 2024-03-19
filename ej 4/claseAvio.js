class Avio {
    constructor(numeroAvio, marca, modelo, carregaKg, llargariaM) {
        this.numeroAvio = numeroAvio
        this.marca = marca
        this.modelo = modelo
        this.carregaKg = carregaKg
        this.llargariaM = llargariaM
    }

    //haremos los getters, en este caso no haremos setters porqué no vamos a modificar nada pues en el ejercicio de CRUD nos pide: Create, Read y Delete
    getLlargariaM() { return this.llargariaM }


    netejarAvio() {
        let resultat = this.getLlargariaM() * 10
        return resultat
    }

    calcularCombustible() {
        let combustibleNecessari = this.llargariaM * this.carregaKg
        return combustibleNecessari
    }

    toString() {
        let resultat = `
        Número d'avió: ${this.numeroAvio} <br>
        Marca: ${this.marca} <br>
        Model: ${this.modelo} <br>
        Càrrega (Kg): ${this.carregaKg} <br>
        Longitud (M): ${this.llargariaM} <br>
        Combustible necessari: ${this.calcularCombustible()} litres. <br>
        `
        return resultat
    }
}

