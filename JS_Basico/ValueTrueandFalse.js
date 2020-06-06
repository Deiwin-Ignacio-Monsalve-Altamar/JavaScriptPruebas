/**
 * Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.

–> Falsy

Boolean() —> sin ningun valor es false
Boolean(0) —> false
Boolean(null) —> false
Boolean(NaN) —> false // NaN es Not and Number
Boolean(Undefined) —> false
Boolean(false) —> false
Boolean("") —> false
–> Truthy

Boolean(1) —> true //cualquier numero que no sea igual a cero es true
Boolean(“a”) —> true
Boolean(" ") —> true // siendo un espacio el valor es true
Boolean([]) —> true // un array nos da un true
Boolean({}) —> true // un objeto nos da el valor de true
Boolean(function() {}) —> true //una funcion tambien es true
Boolean(true) —> true
Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.
 */
var numV = 1; // true, valores mayor a 0 son verdaderos
var numF = 0; // false, el valor 0 es falso
var stringV = 'Hola no estoy vacio'; // true, strings no vacíos son verdaderos
var stringF = ''; // false, strings vacíos son falso;

var miFuncion = function() { returnfalse; }
console.log(Boolean(miFuncion)); // true, es verdadero porque le pasamos referencia de la función
console.log(Boolean(miFuncion())); // false, debido a que accionamos la función y esta regresa falso;

Boolean({}); // true, objetos vacíos son verdadero (depende la circunstancía o método)
Boolean([]); // true, los arreglos vacíos son verdadero (depende la circunstancía o método)

Boolean(undefined); // false
Boolean(null); // false

var numV = 1; // true, valores mayor a 0 son verdaderos
var numF = 0; // false, el valor 0 es falso
var stringV = 'Hola no estoy vacio'; // true, strings no vacíos son verdaderos
var stringF = ''; // false, strings vacíos son falso;

var miFuncion = function() { returnfalse; }
console.log(Boolean(miFuncion)); // true, es verdadero porque le pasamos referencia de la función
console.log(Boolean(miFuncion())); // false, debido a que accionamos la función y esta regresa falso;

Boolean({}); // true, objetos vacíos son verdadero (depende la circunstancía o método)
Boolean([]); // true, los arreglos vacíos son verdadero (depende la circunstancía o método)

Boolean(undefined); // false
Boolean(null); // false