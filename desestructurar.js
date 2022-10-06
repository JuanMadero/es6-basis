let colors = require('colors');
const estudiantes1 = ["Juan Madero" ,
                     "Jakcson Gonzalez" ,
                     "Duvis Zapata" ,
                     "Avila"];

const estudiantes2 = ["Laura" ,
                     "Daniela" ,
                     "Valentina" ,
                     "Anfrea"]
     
//operador spead(resto)
const estudiantes3 = ["Veronica" ,
                     ...estudiantes1 ,
                     "Paula",
                     ...estudiantes2]


console.log( estudiantes3)    
