/**Introducción a arrays
 * Los arrays son estructuras que nos permiten organizar elementos dentro de una collección.
 * Estos elementos pueden ser números, strings, booleanos, objetos, etc.
 */

const { palegoldenrod } = require("color-name")

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

/**Organizando objetos */

var personas = [sacha, alan, martin, dario, vicky, paula]

/**Acceder a persona*/
personas[0]

//Recorres array e imprimir su altura
for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona} tiene su altura de ${persona.altura}`)
}


/*Filtrar elementos de un array */
/**Para filtrar siempre necesitamos establecer una condición.
 * En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos
que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío. */

//Funcion para saber si alta
const esAlta = persona => persona.altura > 1.8;
/* const esAlta = ({ altura }) => persona.altura > 1.8;
 */

//Funcion para saber si es baja
const esBaja = persona => persona.altura < 1.8;
/* const esBaja = ({ altura }) => !esAlta({altura}); */

var personasAltas = personas.filter(esAlta)
console.log(`Estas son altos: ${personasAltas}`);

var personasBajas = personas.filter(esBaja);
console.log(`Estos son bajas: ${personasBajas}`)

/* var personasAltas = personas.filter(function (persona){
    return persona.altura > 1.8
}) */


/**Transformar un array
En esta clase veremos cómo transformar un array. El método map() itera sobre
los elementos de un array en el orden de inserción y
devuelve array nuevo con los elementos modificados. */

const pasarAlturaACms = persona =>
    ({
        ...persona,
        altura: persona.altura *= 100
    });

var personasCms = personas.map(esAlta);

console.log(personasCms);


/**Reducir un array a un valor*/
/**El método reduce() nos permite reducir, mediante una función
 * que se aplica a cada uno de los elemento del array,
 * todos los elementos de dicho array, a un valor único. */


//Cantidad de total de libros
var acumulador = 0;

for (let index = 0; index < personas.length; index++) {
    acumulador += personas[i].cantidadDeLibros;

}

//o Tambien
const reducer = (acum, persona) => acum += persona.cantidadDeLibros;
//Desustructurar objetos
//const reducer = (acum, { cantidaDeLibros }) => acum += cantidadDeLibros;


var totaldeLibros = personas.reduce(reducer, 0);

console.log(`En toital hay ${totaldeLibros}`);