var miNombre;
miNombre = "Deiwin";
//Funcion que nosa da el navegador para imprimir muchas
// cosas en la consola
console.log(miNombre);

/*Hoisting

Es cuando las variables y las funciones se procesan 
antes de que se ejecute cualquier parte del codigo
Es recomendable declarar todas las variables y funciones
al inicio del codigo */

/*
En el siguiente caso la consola nos arrojará el valor de 
nuestra variable miNombre como undefined. Esto porque JS
al ir leyendo código de arriba hacia abajo y al encontrarse
en este caso con un console.log que está antes de la declaración 
de nuestra variable y debe imprimir dicha variable, lo que hace 
JS es: en segundo plano lleva esta variable 
hasta el principio y la declara como undefined. 
*/

console.log(miNombre);

var miNombre = "Ismael";





/*
Con las funciones sucede algo parecido.
En este código estamos llamando la función 
antes de declararla. En este caso JS localiza 
primero las funciones antes de ejecutar el llamado 
de estas y, al igual que con las variables, las lleva 
hasta arriba y las ejecuta. Como se muestra en la consola, 
nuestra variable miApellido aparece como undefined, 
mas sí se ejecutó la función. 
*/

hey(); //se llama primero a la función

//se declara la función:
functionhey() {
    console.log("Hola " + miApellido);
}

//se declara y se le da un valor a la variable:
var miApellido = "Grimaldo"