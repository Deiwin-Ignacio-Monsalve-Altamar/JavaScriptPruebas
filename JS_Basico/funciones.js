//Hay dos tipos de funciones
/**var x = functionname(args){
	statement**/

/**Funciones Declarativas:
En las funciones declarativas, utilizamos la palabra reservada 
function al inicio para poder declarar la función/ */

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

//Expresion conparametro que son enviados
/*En la expresión de función, la declaración se inicia con la palabra reservada var,
donde se generará una variable que guardará un función anónima.*/

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');

// DIFERENCIAS
/*Diferencia:
Las declarativas pueden ser llamadas
  => antes de ser declaradas.
Las de expresion no, se deben declarar
  => y luego se pueden llamar*/
