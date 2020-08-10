/**Es una manera rapida y sencilla que se repita sin necesidad de forma o manual
 * Mientras se cumpla cierta condicion
 */

//Formas de ciclo en JavaScript
var estudiantes = ["maria", "sergio", "daniel", "rosa"];
//Tarea a llamar para realizar
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    /*Recorre todas las pocisiones */
    //console.log(estudiantes[i]);
    /*LLamando la area a realizar uno a uno donde se manda el parametro del indice*/
    saludarEstudiantes(estudiantes[i]);
}

/*Estructura similar a la de for */
/*Tenemos un array de estudiantes estamos llamando cada estudiante 
el estudiante es de forma singular del array hasta que que no encuentre nada
*/
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}