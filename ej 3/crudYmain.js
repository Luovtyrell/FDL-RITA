function crearClient() {
    let dniU = prompt("Introdueix el DNI:", "12345678D")
    let nombreU = prompt("Introdueix el teu nom:", "Pepito")
    let apellidoU = prompt("Introdueix el teu cognom:", "Perez")
    let nacionalidadU = prompt("Introdueix la nacionalitat", "IT")
    let edadU = parseInt(prompt("Introdueix l'edat:", 50))

    //ahora hacemos la instancia
    const cliente = new Cliente(dniU, nombreU, apellidoU, nacionalidadU, edadU)
    //ahora lo pasamos al array
    clientes.push(cliente)
    alert("Client creat correctament")
    console.table(clientes)

}

// ahora buscar clientes por dni en la variable clientes y luego eliminarlo
function eliminarClient() {
    let dniU = prompt("Introdueix el DNI:", "12345678A")
    let clienteEncontrado = null
    let i = 0

    while (i < clientes.length) {
        if (clientes[i].getDni() === dniU) {
            clienteEncontrado = clientes[i]
            break
        }
        i++
    }
    if (clienteEncontrado) {
        clientes.splice(clienteEncontrado, 1)
        alert(`Client ${dniU} eliminat correctament`)
    } else {
        alert("Client no trobat")
    }
    console.table(clientes)
}

function crearVol() {
    let dniClienteU = prompt('A quin client?', '12345678A')
    let numVolU = prompt('Numero de vol:', 'IB1')
    let distanciaKmU = prompt('Distància en Km', '1000')
    let companyiaU = prompt('Companyia', 'Iberia')
    let numPassatgersU = prompt('Passatgers', '2')
    let nombreMotorsU = prompt('Motors', '4')

    if (numVolU && distanciaKmU && companyiaU && numPassatgersU && nombreMotorsU) {
        //creamos nuevo vuelo tipo objeto
        let vueloNuevo = new Vuelo(numVolU, distanciaKmU, companyiaU, numPassatgersU, nombreMotorsU)

        //busquem client per dni
        let clienteEncontrado = clientes.find(cliente => cliente.getDni() === dniClienteU)

        if (clienteEncontrado) {
            clienteEncontrado.addVuelos(vueloNuevo) //lamamos el metodo addvuelo de la clase cliente
            alert("Vol creat i agregat al client correctament")
        } else {
            alert("No s'ha trobat el client corresponent")
        }
    } else {
        alert("Has de completar totes les dades")
    }

    //comprobaciones
    console.table(clientes)
    console.table(clientes[0].vuelos)
}

function mostrarMitjanaEdat() { //devuelve booleano
    // 1 filtramos los mayores de edad
    // 2 calculamos la suma
    // 3 dividimos entre el num de clientes mayores edad

    let clientesMayores = clientes.filter(cliente => cliente.getEdad() >= 18)

    if (clientesMayores.length > 0) {
        let sumaEdades = clientesMayores.reduce((total, cliente) => total + cliente.getEdad(), 0)
        let media = sumaEdades / clientesMayores.length
        alert(`La mitjana edat dels clients majors d'edat és ${media.toFixed(2)}`)
    } else {
        alert("No hi ha clients m'ajors d'edat")
    }
}

function calcularPetjadaCarboni() {
    let dniClienteU = prompt('A quin client?', '12345678A')
    let clienteEncontrado = clientes.find(cliente => cliente.getDni() === dniClienteU)
    if (clienteEncontrado) {
        let huellaCarbonoTotal = 0;
        let vuelosCliente = clienteEncontrado.vuelos;
        for (let i = 0; i < vuelosCliente.length; i++) {
            huellaCarbonoTotal += vuelosCliente[i].calculaPetjadaCarboni()
        }
        alert(`Petjada de carboni total del client (co2): ${huellaCarbonoTotal}`)
    } else {
        alert("El client no s'ha trobat");
    }
}

function calcularMitjanaPetjadaCarboni() {
    let sumaHuellaCarbono = 0
    let numeroTotalClientes = clientes.length

    // Iterar sobre cada cliente y sumar su huella de carbono
    clientes.forEach(cliente => {
        let huellaCarbonoCliente = 0;
        let vuelosCliente = cliente.vuelos;
        for (let i = 0; i < vuelosCliente.length; i++) {
            huellaCarbonoCliente += vuelosCliente[i].calculaPetjadaCarboni()
        }
        sumaHuellaCarbono += huellaCarbonoCliente
    })

    // Calcular la huella de carbono promedio
    let huellaCarbonoPromedio;
    if (numeroTotalClientes > 0) {
        huellaCarbonoPromedio = sumaHuellaCarbono / numeroTotalClientes;
    } else {
        huellaCarbonoPromedio = 0;
    }

    // Mostrar el resultado en una alerta
    alert(`Petjada de carboni (co2) mitjana de tots els vols: ${huellaCarbonoPromedio.toFixed(2)}`)
}

