let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web'

console.log('Hola ' + nombre);
console.log('mi web es '+ web);
/* Ejecucion en la consola 
NOMBRE=DEIWIN WEB=pap node conceptos/entorno.js
*/
