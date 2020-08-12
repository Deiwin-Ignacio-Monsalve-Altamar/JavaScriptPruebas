//Manipulado objetos

/**Los objetos se definen con {}(llaves) para asignarlo
 * a una variable se hace de esta manera var ejemplo = {}
Los objetos se componen por propiedades y valores, 
se utiliza ’,' para separar cada propiedad */
var Deiwin = {
    /*Un atributo se compone de una clave (key) y un valor (value),
    que se separan entre sí por dos puntos “”:"".
    Los valores pueden ser de tipo string, número, booleano, etc.*/
    nombre: 'Deiwin',
    apellido: 'MOnsalve',
    edad: 38
}

var Cristin = {
    nombre: 'Cristian',
    apellido: 'Zapate',
    edad: 27
}

/**Las últimas versiones de JavaScript nos permiten desglosar
 * el objeto para acceder únicamente al atributo que nos interesa.
 * Esto se consigue encerrando el nombre del atributo entre llaves { }.*/
function imprimirNombreEnMayuscula({ nombre }) {
    //Es lo mismo nomvre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayuscula(Deiwin);
imprimirNombreEnMayuscula(Cristin);


var persona = {
    nombre = "",
    edad = 0
}

function saludarAPersonas(nombre, edad) {
    console.log(`Hola me lla {nombre} y tengo {edad} años`)
}

var Dario = persona("Dario", 30)



//Pasando parametros por funciones
function cumpleanos(persona) {
    persona.edad += 1;
}
/**Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función.
 * Para solucionar esto se puede crear un objeto diferente.
 * Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona. */

function sumar1(persona) {
    return { // return siginifca que la funcion "devuelve"  
        ...persona, // desglosamos al objecto y podemos modificar o añadir nuevos atributos o propiedades, hay que poner la , para poner lo siguiente 
        edad: persona.edad + 1 //aqui estamos moficando solo la propiedad 
    }
    // con return hemos creado un nuevo objeto  nombre: el mismo que hemos invocado pq no lo hemos modificado pero la edad cambiada
}

sumar1(sacha)

//si llamamos a sacha el objecto antiguo sigue siendo el mismo.....por lo tanto para tener ese nuevo objeto definimos una nueva variable  y llamamos a la función 

const personaMasVieja = sumar1(sacha)