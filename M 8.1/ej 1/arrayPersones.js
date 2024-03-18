const personas = [
  {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"],
  },
  {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr", "viajar"],
  },
  {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"],
  },
  {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["hacer deporte", "viajar"],
  },
  {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer deporte"],
  },
];

let result = document.getElementById('result')
result.innerHTML = ''

// Busca una persona por su DNI
function Buscar(){
   let personaTrobada = personas.find(persona => persona.dni === document.getElementById('dni').value)
   let personaPosicion = personas.findIndex(persona => persona.dni === document.getElementById('dni').value)

    if (personaTrobada){
       result.innerHTML =`La persona és ${personaTrobada.nombre} y està a la posició: ${personaPosicion + 1}` //quien es y posicion q tiene al array +1 porque empieza por 0
    } else {
       result.innerHTML = 'No esta a la app'
    }
}

// muestra las personas q tienen el hobby puesto
function hobbyBuscar(){
    let hobby = document.getElementById('hobby').value
    let hobbyTrobat = personas.filter(persona => persona.hobbies.includes(hobby)) //filtramos metodo filter() / flecha, includes

    if(hobbyTrobat.length > 0){
    //creamos el array de nombres de las personas que se han encontrado
    let personasEncontradas = hobbyTrobat.map(persona => persona.nombre)
        result.innerHTML = `Persones amb el hobby ${hobby}: ${personasEncontradas}`
    } else {
        result.innerHTML= 'no hi han'
    }
}

// muestra total de hobbies
function hobbyReduce(){
    let hobbiesReduce = personas.reduce((TotsElsHobbies, personas) => {return[...TotsElsHobbies, ...personas.hobbies]}, []) //metodo reduce segun el viddeo del moodle: https://www.youtube.com/watch?v=5yPf74sCu2k
        result.innerHTML= `El total de hobbies que tenen les persones és: ${hobbiesReduce.length}`

}

// verifica si algu te el hobbie introducido
function verificarSome() {
    let hobbySome = document.getElementById('hobbySome').value
    let algunaPersonaTieneHobby = personas.some(persona => persona.hobbies.includes(hobbySome))
    if (algunaPersonaTieneHobby) {
        result.innerHTML = "Al menys una persona té aquest hobby."
    } else {
        result.innerHTML = "Cap persona té aquest hobby"
    }
}

// ARRAY MAJUSCULES
function majuscules(){
let arrayMajuscules = personas.map(persona => persona.nombre.toUpperCase()) //recorre el array y con uppercase lo pone en mayusculas
    result.innerHTML= `L'array en majúscules és: ${arrayMajuscules.join(', ')}`
}
