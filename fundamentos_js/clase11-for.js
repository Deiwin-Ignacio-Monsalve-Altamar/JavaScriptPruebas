/**
 * Estructuras repetitivas: for
En esta clase estudiaremos una de las estructuras básicas de control.
El bucle for, se utiliza para repetir una o más instrucciones un determinado número de veces.

Para escribir un bucle for se coloca la palabra for seguida de paréntesis y llaves.
Ej. for( ){ }. Dentro de los paréntesis irán las condiciones para ejecutar el bucle,
y dentro las llaves irán las instrucciones que se deben repetir.

En este ejemplo la variable i la utilizamos como contador.
 */

var deiwin = {
    nombre: 'Deiwin',
    apellido: 'Monsalve',
    edad: 23,
    peso: 95
}

console.log(`Al inico del año ${deiwin.nombre} pesaba ${deiwin.peso}`);

const INCREMENTO_PESO = 0.2;
const DIAL_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO;


for (var i = 1; i < DIAL_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(deiwin);
    } else if (random < 0.5) {
        adelgazarPeso(deiwin);
    }
}

console.log(`Al Fin del año ${deiwin.nombre} peso ${deiwin.peso.toFixed(1)}`);