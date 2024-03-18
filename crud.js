//metodo read y update que nos piden, lo haremos con un switch case para practicar
// se llamara RU de Read y Update
function RU() {
  let RUusuari = document.getElementById("RU").value;
  let result = document.getElementById("result");

  switch (RUusuari) {
    case "Read":
      let dniUsuari = prompt('Introdueix el DNI del client', '12345678A')
      let clientU = clients.find(client => client.getDni() === dniUsuari)
      if (clientU) {
        result.innerHTML = clientU.toString()
      } else {
        result.innerHTML = "Dni no trobat, revisi les dades";
      }
      break;
      
    case "Update":
      let dniUsuariUp = prompt('Introdueix el DNI del client a modificar', '12345678A')
      let clientUp = clients.find(client => client.getDni() === dniUsuariUp)
      // recogemos datos
      let edatU = prompt('Ingresa la nova edat', 'ex 25')
      let nacionalitatU = prompt('Ingresa la nova nacionalitat', 'FR')
      let nombreVolsU = prompt('Ingresa el nou nombre de vols', '13')

      if (clientUp) {
        clientUp.edat = edatU //ejemplo de modificar propiedades
        clientUp.nacionalitat = nacionalitatU
        clientUp.setNombreVols(nombreVolsU) //ejemplo desde el set

        result.innerHTML = `Client amb DNI ${dniUsuariUp} modificat`

        console.table(clients)

      } else {
        result.innerHTML = 'Client no trobat, revisi les dades'
      }
      break
  }
}
