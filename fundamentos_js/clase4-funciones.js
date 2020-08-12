//Declarando funcion
/**Las funciones son fracciones de código reutilizable.
 * Para definir una función utilizaremos la palabra reservada ““function””. */
var nombre = 'Dewin',
    edad = 28;

function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} años`)
}

/**Delimitamos el cuerpo de la función usando 
 * llaves { }. Los parámetros de la función son
 * variables que se pasan a la función escribíendolos entre paréntesis () */
imprimirEdad(nombre, edad);
imprimirEdad("Vicky", 18);
imprimirEdad("Dario", 34);

//Alcance de las funciones
//ES una variable de alcance global Si una variable no está definida 
//dentro del cuerpo de una función hablamos de una variable global.
var nombre = 'Dewin';

function imprimirNombreEnMayuscula(nombre2) {
    nombre2 = nombre.toUpperCase();
    console.log(nombre2);
}

imprimirNombreEnMayuscula();