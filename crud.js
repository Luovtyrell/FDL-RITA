let result = document.getElementById('result')

// Create
function createAvio() {
    let tipusAvio = document.getElementById("tipusAvio").value
    let numeroAvio = prompt("Introduïu el número d'avio:")
    let marca = prompt("Introduïu la marca:")
    let modelo = prompt("Introduïu el model:")
    let carregaKg = prompt("Introduïu la càrrega (en Kg):")
    let llargariaM = prompt("Introduïu la llargària (en m):")

    if (isNaN(carregaKg) || isNaN(llargariaM)) {
        result.innerHTML = "Revisa la càrrega (Kg) y llargària (m), han de ser dades numèriques"
        return
    }

    switch (tipusAvio) {
        case 'comercial':
            avioUsuari = new AvioComercial(numeroAvio, marca, modelo, carregaKg, llargariaM)
            break;

        case 'avioneta':
            let helix = prompt("Introduïu el nombre d'hèlix")
            avioUsuari = new Avioneta(numeroAvio, marca, modelo, carregaKg, llargariaM, helix)
            break;

        case 'jet':
            avioUsuari = new JetPrivat(numeroAvio, marca, modelo, carregaKg, llargariaM)
            break;
    }
    avions.push(avioUsuari)
    console.table(avions)
}

// Read
function readAvio() {
    let numeroAvioU = document.getElementById("numeroAvio").value

    //Buscamos con un bucle
    let i = 0;
    let avio = null;
    while (i < avions.length) {
        if (avions[i].numeroAvio === numeroAvioU) {
            avio = avions[i]
            break
        }
        i++
    }
    if (avio) {
        result.innerHTML = `${avio}`
    } else {
        result.innerHTML = `Avió no trobat. `
    }

    console.table(avions)

    if (avio instanceof AvioComercial) {
        result.innerHTML += "L'avio és un Avió Comercial."

    } else if (avio instanceof Avioneta) {
        result.innerHTML += "L'avio és una Avioneta."

    } else if (avio instanceof JetPrivat) {
        result.innerHTML += "L'avió és un Jet Privat."

    } else {
        result.innerHTML += "Tipus d'avió desconegut."
    }
}

// delete
function deleteAvio() {
    let numeroAvioDeleteU = document.getElementById('numeroAvioDelete').value
    let avioIndex = avions.findIndex((avio) => avio.numeroAvio === numeroAvioDeleteU)

    if (avioIndex !== -1 && confirm("Estàs segur que vols eliminar l'avió?")) {
        avions.splice(avioIndex, 1)
        result.innerHTML = `Avió eliminat correctament`
    } else {
        result.innerHTML =
            "No s'ha eliminat el vol o no s'ha trobat. Revisi les dades"
    }

    console.table(avions)
}
