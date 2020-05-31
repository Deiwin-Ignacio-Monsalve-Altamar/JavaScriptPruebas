/* El scope puede definirse como el alcance que una variable 
tendrá en tu código. En otras palabras, el scope decide a 
qué variables tienes acceso en cada parte del código. 
Existen dos tipos de scope, el scope global y el scope local. */

//Scope local
/**Cuando puedes acceder a una variable únicamente en cierta parte del código, se dice que 
 * esa variable está declarada en el scope local. Estas también son 
 * conocidas como variables locales. Un ejemplo de esto es cuando una 
 * variable está declarada dentro de un bloque o una función. Si tratas 
 * de acceder a esta variable fuera de esta función o bloque, 
 * tendrás un error que dirá que la variable no está definida. */

function platzi() {
	const soyEstudiante = true;
	console.log(soyEstudiante);
}

platzi(); // true
console.log(soyEstudiante); // soyEstudiante is not defined

//Scope global
/**cuando está declarada fuera de una función o 
 * de un bloque. También son conocidas como 
 * variables globales. Puedes acceder a este tipo 
 * de variables desde cualquier parte de tu código, 
 * ya sea dentro o fuera de una función. */
const soyEstudiante = true;

function platzi() {
	console.log(soyEstudiante);
}

platzi(); //true
console.log(soyEstudiante); //true
