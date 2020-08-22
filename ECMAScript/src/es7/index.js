//NOVEDADES DE EMACS 7

/* Includes: Trabaja sobre un arreglo o string,
nos permite saber si hay un elemento dentro de este valor.
Es una forma muy útil de validar elementos dentro de. */

let numbers = [1, 2, 3, 4, 5, , 7];

if (numbers.includes(7)) {
    console.log("Si se encuentra el valor 7");
} else {
    console.log('No se encuentra');
}
let base = 4;
let exponent = 3;
//ELEVANDO al exponente
let result = base ** exponent

console.log(result)