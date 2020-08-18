/*Cómo funciona el asincronismo en JavaScript
JavaScript sólo puede hacer una cosa a la vez,
sin embargo; es capaz de delegar la ejecución de
ciertas funciones a otros procesos. Este modelo
de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas
y les asocia funciones que deberán ser ejecutadas
al ser completadas. Estas funciones se llaman callbacks,
y una vez que el navegador ha regresado con la respuesta,
el callback asociado pasa a la cola de tareas para ser
ejecutado una vez que JavaScript haya terminado todas
las instrucciones que están en la pila de ejecución.

Si se acumulan funciones en la cola de tareas
y JavaScript se encuentra ejecutando procesos
muy pesados, el EventLoop quedará bloqueado
y esas funciones pudieran tardar demasiado
en ejecutarse. */

//Cómo funciona el tiempo en JavaScript
/*En principio, cualquier tarea que se
haya delegado al navegador a través de
un callback, deberá esperar hasta que
todas las instrucciones del programa
principal se hayan ejecutado. Por esta
razón el tiempo de espera definido en
funciones como setTimeout, no garantizan
que el callback se ejecute en ese tiempo
exactamente, sino en cualquier momento
a partir de allí, sólo cuando la cola de tareas
se haya vaciado.*/

/**Primero ejecuta este codigo */
console.log('a');
//Solicitud al navegador asi que lo mete en una lista de tareas
setTimeout(() => console.log('b'), 0);
//Sigue ejecutando el codigo y por ultimo ejecuta el del navegador
console.log('c');


setTimeout(() => console.log('d'), 2000);
/*Debe terminarl el programa principal para el setTime se ejecute */
for (var i = 0; i < 100000000000; i++) {

}