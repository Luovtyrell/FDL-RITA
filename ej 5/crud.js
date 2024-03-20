const result = document.getElementById('result')

function create() {
    limpiarResultados()
    //caputrar datos 
    //select
    let selectBuilding = parseInt(document.getElementById('building').value)

    //general
    let nombreBuilding = document.getElementById('nombre').value
    let plantasBuilding = parseFloat(document.getElementById('plantas').value)
    let superficieBuilding = parseFloat(document.getElementById('superficie').value)

    switch (selectBuilding) {
        case 1:
            //caputar habitaciones
            let habitaciones = parseInt(document.getElementById('habitaciones').value)

            //crear la instancia con el parámetro que le pertoca
            const hotelU = new Hotel(nombreBuilding, plantasBuilding, superficieBuilding, habitaciones)

            //ahora lo metemos en el array
            edificis.push(hotelU)
            alert("Hotel creat", edificis)
            console.table(edificis)
            result.innerHTML = hotelU //.toString()
            break

        case 2:
            let malalts = parseInt(document.getElementById('malalts').value)

            const hospitalU = new Hospital(nombreBuilding, plantasBuilding, superficieBuilding, malalts)

            edificis.push(hospitalU)
            console.table(edificis)
            result.innerHTML = hospitalU
            break

        case 3:
            let entrada = parseInt(document.getElementById('entrada').value)
            let aforament = parseInt(document.getElementById('aforament').value)
            let asistencia = parseInt(document.getElementById('asistencia').value)

            const cinemaU = new Cinema(nombreBuilding, plantasBuilding, superficieBuilding, aforament, asistencia, entrada)

            edificis.push(cinemaU)
            console.table(edificis)
            result.innerHTML = cinemaU
            break
        default:
            Alert('Cap creació')
            break
    }
}
function readBuilding() {
    limpiarResultados()
    let result = document.getElementById('result')
    let nomEdificiU = prompt("Escriu el nom de l'edifici")

    //Buscamos con un bucle
    let i = 0
    let edifici = null
    while (i < edificis.length && !edifici) {
        if (edificis[i].nom === nomEdificiU) {
            edifici = edificis[i]
        }
        i++
    }
    if (edifici) {
        result.innerHTML += `Edifici trobat! Detalls: <br> ${edifici.toString()}`
    } else {
        result.innerHTML += `Edifici no trobat. `
    }

    console.table(edificis)

    if (edifici instanceof Hotel) {
        result.innerHTML +=  "L'eidifici és un hotel."

    } else if (edifici instanceof Cinema) {
        result.innerHTML +=  "L'edifici és un cinema."

    } else if (edifici instanceof Hospital) {
        result.innerHTML +=  "L'edifici és un hospital."

    } else {
        result.innerHTML += "Tipus d'edifici desconegut."
    }
}

function updateBuilding() {
    limpiarResultados()
    let nombreEdificio = prompt("Escriu el nom de l'edifici que vols actualitzar:")
    let edificioEncontrado = null;

    // Buscamos el edificio por su nombre
    for (let i = 0; i < edificis.length; i++) {
        if (edificis[i].nom === nombreEdificio) {
            edificioEncontrado = edificis[i];
            break;
        }
    }

    if (edificioEncontrado) {
        // Realizar aquí las actualizaciones necesarias según las propiedades específicas del tipo de edificio
        // Por ejemplo:
        if (edificioEncontrado instanceof Hotel) {
            // Actualizar el número de habitaciones
            let nuevasHabitaciones = parseInt(prompt("Introduce el nuevo número de habitaciones:"))
            edificioEncontrado.numeroHabitacions = nuevasHabitaciones;
            alert("hotel actualitzat!", edificioEncontrado);
        } else if (edificioEncontrado instanceof Hospital) {
            // Actualizar el número de pacientes
            let nuevosMalalts = parseInt(prompt("Introduce el nuevo número de pacientes:"))
            edificioEncontrado.numeroMalalts = nuevosMalalts;
            alert("hospital actualizat!", edificioEncontrado);
        } else if (edificioEncontrado instanceof Cinema) {
            // Actualizar el aforo máximo
            let nuevoAforo = parseInt(prompt("Introduce el nuevo aforo máximo:"))
            edificioEncontrado.aforamentMaxim = nuevoAforo;
            alert("cinema actualitzat!", edificioEncontrado)
        } else {
            alert("Tipus d'edifici desconegut")
        }
    } else {
        alert("Edifici no trobat")
    }
}

function deleteBuilding() {
    limpiarResultados()
    let nombreEdificio = prompt("Escriu el nom de l'edifici que vol eliminar:");

    // Buscamos el índice del edificio por su nombre
    let indiceEdificio = edificis.findIndex(edificio => edificio.nom === nombreEdificio);

    if (indiceEdificio !== -1 && confirm("Estàs segur que vols eliminar l'edifici?")) {
        // Si se encuentra el edificio, lo eliminamos del array
        edificis.splice(indiceEdificio, 1);
        alert("Edifici eliminat correctament");
    } else {
        alert("Edifici trobat");
    }
    console.table(edificis)
}
