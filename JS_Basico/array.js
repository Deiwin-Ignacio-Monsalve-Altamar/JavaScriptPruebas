// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var frutas = []; // Array Literal Syntax 

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(frutas[0]); // Los arrays inician en "0" 


// === Metodos para mutar arrays ===


// .push();
/**El método .push() nos permite agregar uno o más elementos al final de un array. */
var masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
console.log(frutas);

// .pop();
/**Eliminará el último elemento de un array*/
var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final 
console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio 
console.log(frutas);

// shift()
/**Elimina el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0*/
var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
console.log(frutas);