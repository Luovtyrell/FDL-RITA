// todo se tiene que hacer con alerts y prompts
// 1 calcular material taula con una funcion que recibe boolean
// 2 imprimir forecast que es otra funcion
// 3 calcula cost per reserva otra funcion
// 4 sale del programa fins que la persona no escrigui un 4 el programa ha de continuar mostrant el menu i donar la possibilitat de fer accions

// UNA MANERITA DE HACERLO

// calcular material taula amb booleanos
function calcularMaterialTaula(experienciaU) { 
    if (experienciaU) {
        return "taula de fibra"
    } else {
        return "Taula d'espuma."
    }
}


// Pronostic temps
function imprimirForecast() {
    let alçadaU = parseFloat(prompt("Introdueix l'alçada de l'onada en metres:"))
    if (alçadaU > 2) {
        alert("Onades grans")
    } else {
        alert("Onades petites")
    }
}

// calcular cost reserva
function calcularCostPerReserva() {
    const minuts = parseInt(prompt("Introdueix els minuts de reserva:"))
    const taulaTipus = prompt("Introdueix el tipus de taula (espuma/fibra):").toLowerCase()
    let cost = 0
    if (taulaTipus === "espuma") {
        cost = Math.ceil(minuts / 60) * 20 //math.ceil es el redondeo matematico
    } else if (taulaTipus === "fibra") {
        cost = Math.ceil(minuts / 60)* 35
    } else {
        alert("Si us plau, introdueix 'espuma' o 'fibra'.");
        return calcularCostPerReserva()
    }
    alert(`El cost de la reserva és: ${cost} €`)
}

// funcio main con switch
function botigaSurf() {
    let opcion
    do {
        opcion = prompt(`Selecciona una opció:
          1. Calcular material de la taula
          2. Pronostic del temps
          3. Cost per reserva
          4. Surt del programa`)
        switch (opcion) {
            case "1":
                let experienciaU = confirm ("Tens experiència?") // si ok -> true si cancel -> false
                alert(`El material de la taula serà: ${calcularMaterialTaula(experienciaU)}`)
                break
            case "2":
                imprimirForecast()
                break
            case "3":
                calcularCostPerReserva()
                break
            case "4":
                alert("Gràcies per entrar a la botiga de surf Lucía, arreveure! Sortint del programa...")
                break
            default:
                alert("Has de triar una opció de l'1 al 4.")
        }
    } while (opcion !== "4")
}

// Iniciar el programa
botigaSurf()
