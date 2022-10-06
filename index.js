//traer dependencia del componente suma
import { sumar , restar } from './sumar.js'
import estudiantes from './materias.js'
import materias from './materias.js'

//1. RECORRIDO DE ARREGLO: forEach
materias.forEach((materia) => {
    if(materia.profesor == 'Cristian Buitrago'){
        console.log (`materia: ${materia.name}`)
        console.log (`notas: ${materia.notas}`)
    }       
})


/*
//2. CONVERTIR A UN ARREGLO DE PROFESORES
let profesores = materias.map(function(materia){
    return materia.profesor
})
console.log(profesores)
*/

/*
//3. AGREGAR UNA MATERIA AL ARREGLO DE MATERIAS PUSH()
materias.push(
    {
        id: 4 ,
        name: "Cultura Fisica" ,
        profesor: "Luis Enrrique" ,
        notas: [
            2 ,
            3.5
        ]
    }
    )
    
  
  console.log(materias)  
  */

//4. BUSQUEDA EN ARREGLOS:  find
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)

/*
//DESESTRUCTURACION:
let { first_name, last_name , id } = estudiantes

console.log(`Nombre estudiante ${ first_name }`)
console.log(`Apellido estudiante ${ last_name }`)
console.log(`Apellido estudiante ${ id }`)
*/



/*
//Variablle tipo let:
let a = 10
//constantes const:
const b = 29


console.log(`Suma de a+b:${ sumar(a , b) }`)
console.log(`Suma de a+b:${ restar(a , b) }`)
*/
