/**
 * Comparaciones en JavaScript
Existen varias maneras de comparar variables u objetos dentro de javascript.
En el primer ejemplo le asignamos a X un valor numérico y a Y un string.
Para poder compararlos debemos agregar dos signos de igual (==).
Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===).
Esto permite que JavasScript no iguale las variables que son de distinto tipo.
Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
 */

var deiwin = {
    nombre: "dewiin"
}

var ptraPersona = deiwin

sacha == otro
    // false

sacha === otro
    // false

sacha == otroMas
    // false

sacha === otroMas
    // false

//otro objeto
var otrapersona = {
    ...deiwin
}

/**Otra cosa a tener en cuenta es que si cambiamos el valor del atributo en la variable,
 * automáticamente cambia el valor del objeto también,
 * por el mismo motivo que los operadores dan ‘true’,
 * ambos refieren al mismo espacio en la memoria RAM. */

otroMasTodavia.nombre = "Pepe"

otroMasTodavia.nombre
    // "Pepe"

sacha.nombre
    // "Pepe"