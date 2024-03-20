class Cliente {
    #dni; //propiedad privada

    constructor(dni, nombre, apellido, nacionalidad, edad) {
        this.#dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        //array vacio de vuelos ahora
        this.vuelos = []; //asi se unen las clases porque tenemos otra clase que se llama vuelos
        //esto tiene que tener un metodo add vuelos que recibe un vuelo (un objeto vuelo)
    }

    getDni() { return this.#dni}
    getNombre() { return this.nombre }
    getApellido() { return this.apellido }
    getNacionalidad() { return this.nacionalidad }
    getEdad() { return this.edad }

    //setters en este caso dni no porque es prop privada que no se cambiara
    setNombre(nombre) { this.nombre = nombre }
    setApellido(apellido) { this.apellido = apellido }
    setNacionalidad(nacionalidad) { this.nacionalidad = nacionalidad }
    setEdad(edad) { this.edad = edad }

    //aqui tenemos el metodo addVuelos que le tenemos que agregar en el array con el push y será llamado
    addVuelos(vuelo) {
        this.vuelos.push(vuelo)
    }
}