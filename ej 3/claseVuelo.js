class Vuelo {
    constructor(numeroVol, distanciaKm, companyia, numPassatgers, nombreMotors) {
        this.numeroVol = numeroVol
        this.distanciaKm = distanciaKm
        this.companyia = companyia
        this.numPassatgers = numPassatgers
        this.nombreMotors = nombreMotors
    }

    getNumeroVol() { return this.numeroVol }

    getDistanciaKm() { return this.distanciaKm; }

    getCompanyia() { return this.companyia; }

    getNumPassatgers() { return this.numPassatgers }

    getNombreMotors() { return this.nombreMotors }

    // Setters
    setNumeroVol(numeroVol) { this.numeroVol = numeroVol }

    setDistanciaKm(distanciaKm) { this.distanciaKm = distanciaKm }

    setCompanyia(companyia) { this.companyia = companyia }

    setNumPassatgers(numPassatgers) { this.numPassatgers = numPassatgers }

    setNombreMotors(nombreMotors) { this.nombreMotors = nombreMotors }

    //de un client
    calculaPetjadaCarboni() {
        // Supongamos que la huella de carbono se calcula simplemente multiplicando la distancia por el número de pasajeros
        let emisionesPorPasajero = this.numPassatgers * this.distanciaKm
        return emisionesPorPasajero
    }
}