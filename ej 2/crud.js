//comprobar si coje el getter
let passatgers = vols[1].getNombrePassatgers()
console.log(passatgers)

function createVol() {
  //limpiamos resultados
  clearResult()
  //recogemos id formulario
  let formcreacioVols = document.getElementById("creacioVols");
  // Si el formulario ya está visible, lo ocultamos, de lo contrario, lo mostramos
  if (formcreacioVols.style.display === "block") {
    formcreacioVols.style.display = "none"
  } else {
    formcreacioVols.style.display = "block"
  }

  //1 recogemos los datos
  let numeroVol = document.getElementById("numeroVol").value
  let distancia = parseFloat(document.getElementById("distancia").value)
  let companyia = document.getElementById("companyia").value
  let nombrePassatgers = parseInt(document.getElementById("nombrePassatgers").value)
  let nombreMotors = parseInt(document.getElementById("nombreMotors").value)
  let result = document.getElementById("result")

  //crearemos el vuelo si se han rellenado todos los datos
  if (numeroVol && distancia && companyia && nombrePassatgers && nombreMotors) {
    //si esta todo lleno creamos el objeto con los valores del formulario
    const volUsuari = new Vol(
      numeroVol,
      distancia,
      companyia,
      nombrePassatgers,
      nombreMotors
    )

    //lo agregamos al array
    vols.push(volUsuari)

    //mensajito creado bien
    result.innerHTML = `Vol ${numeroVol} creat correctament!`
  } else {
    result.innerHTML = "Completa totes les dades"
  }

  console.table(vols);
}

function readVol() {
  clearResult()
  let numeroVol = prompt("Ingresa el número de vol:", "Ex: IB123")
  let result = document.getElementById("result")
  let vol = null
  let i = 0

  while (i < vols.length) {
    if (vols[i].getNumeroVol() === numeroVol) {
      vol = vols[i]
      break
    }
    i++
  }
  if (vol) {
    result.innerHTML = vol
  } else {
    result.innerHTML = "Vol no trobat"
  }
  console.table(vols)
}

function updateVol() {
  clearResult()

  let result = document.getElementById("result")
  let formodTrue = document.getElementById("modTrue")
  // Si el formulario ya está visible, lo ocultamos, de lo contrario, lo mostramos
  if (formodTrue.style.display === "block") {
    formodTrue.style.display = "none"
  } else {
    formodTrue.style.display = "block"
  }

  // vamos a recoger datos
  let numeroVol = document.getElementById("numeroVolMod").value
  let distanciaU = parseFloat(document.getElementById("distanciaMod").value)
  let companyiaU = document.getElementById("companyiaMod").value
  let nombrePassatgersU = parseInt(document.getElementById("nombrePassatgersMod").value)
  let nombreMotorsU = parseFloat(document.getElementById("nombreMotorsMod").value)

  //buscamos el vuelo en el array vols esta vez con el metodo find
  let volTrobat = vols.find((vol) => vol.numeroVol === numeroVol)

  if (volTrobat) {
    //si lo encontramos modificamos los datos desde los y sin ellos, en este caso lo haremos variado para practicar
    volTrobat.distancia = distanciaU //se puede modificar así sin el set porqué no es privado
    volTrobat.setCompanyia(companyiaU)
    volTrobat.setNombrePassatgers(nombrePassatgersU) //en las privadas se podria modificar si tiene una condicion porque por eso son privadas ej DNI suele ser privado y no le ponen setter
    volTrobat.setNombreMotors(nombreMotorsU)

    result.innerHTML = `Vol ${numeroVol} modificat correctament`
  } else {
    result.innerHTML = "Revisa les dades"
  }

  console.table(vols)
}

function deleteVol() {
  clearResult()
  let result = document.getElementById("result")
  let numeroVol = prompt("Quin vol vols eliminar?", "Ex: IB123")

  //buscamos el vuelo en el array vols
  let volIndex = vols.findIndex((vol) => vol.numeroVol === numeroVol)

  if (volIndex !== -1 && confirm("Estàs segur que vols eliminar el vol?")) {
    vols.splice(volIndex, 1)
    result.innerHTML = `Vol ${numeroVol} eliminat correctament`
  } else {
    result.innerHTML =
      "No s'ha eliminat el vol o no s'ha trobat. Revisi les dades"
  }

  console.table(vols)
}
