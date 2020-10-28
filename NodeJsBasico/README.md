# CURSO DE NODE JS

### Instalacion de Node.js
Si vas a trabajar con Node.js, lo primero que tienes que hacer, es instalarlo en tu máquina. Ya sea con Windows, Linux o Mac, si vas a la web de Node.js (https://nodejs.org), la web detectará tu sistema operativo, y te ofrecerá un paquete con el que instalarlo.

Simplemente pulsa en el botón verde de la versión que quieras (mi recomendación es siempre usar las versiones LTS) y completar el proceso de instalación. Dependiendo del sistema operativo, te hará más o menos preguntas, pero con las opciones por defecto se instalará bien.

Como consejo, asegúrate de tener una buena conexión a internet cuando lo instales, para que tarde poco tiempo.

Una vez lo hayas instalado, para comprobar que todo funciona correctamente, abre una terminal (en windows, CMD o PowerShell valen perfectamente) y escribe:
```
node -v
```
Ese comando te devolverá la versión de Node.js que se ha instalado.

También nos habrá instalado NPM, el gestor de paquetes. Para asegurarte de que está instalado, puedes ejecutar:
```
npm -v
```
Y te devolverá la versión de NPM que hay instalada.

Con esto, ya tenemos instalado Node.js y NPM, que es todo lo que necesitamos para empezar con nuestro curso de Fundamentos de Node.js.

## QUE ES NODE?
Noje JS es la forma más rápida de ejecutar código y escalable, corre en servidores.
Es un lenguaje.

## Caracterisitcas

JS es concurrente; Monohilo, entradas y salidas asincronas.
Un unico proceso corrriendo en el nucleo del procesador.
No se queda bloqueante.

NodeJS usa V8 como entorno de ejecución fue creado por google escrito en c++ convierte JS en código máquina en lugar de interpretarlo en tiempo real.

-   Al estar escrito en c++ es muy rápido. Node es open source.
-   Todo lo que no sea sintaxis de programación son módulos.
    Muchos módulos vienen por defecto en el paquete de Node.
-   Puedes crear tus propios módulos.
-   Node está orientado a eventos. Un bucle de eventos que nos permite se programar de manera reactiva. - - 
-   Cualquier evento se puede escuchar.


##### Event Queue
Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

##### Event Loop
Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

#### Thread Pool
 Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

 #### PROCESO DE NODE

    1.- Va a abrirse un proceso, ese proceso es un proceso de node
    2.- Interpreta todo el archivo
    3.- Convertirlo a código maquina
    4.- Prepara todo lo que necesita para ejecutarse
    5.- Se ejecuta
    6.- Se cierra el proceso, y termina

### DESVENTAJAS MONOHILO

    - Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el código

## Importante

Cuando ocurre un error dentro de alguno de los hilos y no se controla apropiadamente (catch); Node detiene todos los hilos ejecución. Esto puede ser muy peligroso, debido a que es dificil determinar fue el origen del problema y en que punto de ejecución se encontraba cada hilo cuando fue detenido.

#### Nodemon.
Demons en linux, puedes tener procesos que ves ejecutandose
nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

sudo npm install -g nodemon

Nodemon
### Producción

sudo npm install -g pm2

PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

Voy a poner monitorizar el código para saber si algo se rompe.
Me permite ver dashboards de mi código, puedo ver que está corriendo.
Puedo ver el rendimiento de mi cpu
Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.
PM2

#### Funciones Callback
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo
```
setTimeout(console.log('Hello'), 1000)
```
setTimeout es una higher-order function y console.log es una callback function

#### Los modulos globales son módulos del core.


Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.

TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas
```
console.log(global) 
/*Object [global] {
    global: [Circular], ---> Dependencias ciruculares.
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
*/


require(); // nos va a permitir acceder a caulqueir módulo.

let i =0; //  Inicializo contador en cero
let intervalo = setInterval(() => {  // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log(" Alejandro "); // Imprimo mi nombre
    if (i === 3){ // Con i ===3 imprima mi nombre hasat que de cero llega a 3 y luego haga clearInterval.
        clearInterval(intervalo); 
    }
    i ++;
}, 1000);


setImmediate(()=>{
    console.log("Ya mismo")
})
```
### El file system
provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.

### Console
Con console podemos imprimir todo tipo de valores por
nuestra terminal.

console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.

### INFORMATION
Con Node podemos manejar los errores de una manera muy optima, pero primero debemos entender como Node maneja los errores por defecto.
Cuando sucede un error en Node, él por defecto terminara todo el proceso de nuestro código para avisar que ha ocurrido un error, esto puede ser fatal para nuestros proyectos, los errores además se notifican por hilos, es decir, que si un error sucede en el hilo principal del event loop, es decir, el evento queue, el error se avisara desde este mismo hilo, pero si un error sucede antes desde otro hilo como el hilo de las funciones asíncronas, el error se avisara desde aquel hilo sin dejar mostrar el error del hilo principal.
Nosotros podemos manejar este flujo de errores para que Node no se detenga al momento de que ocurra uno y lo podamos manejar según nuestros deseos, para esto usamos try y catch. Siendo try el bloque de código que ejecutara la función que puede o no fallar y siendo catch la función que atrapara el error y le especificaremos que hacer con él.

### Errores (Try/Catch)
Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es caputado. si el error no se captura node se detiene.

Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.
```
<h3>Try/Catch</h3>
```
Non permite caputar los errores:
```
const badfunction = () => 5 + z;
try {
    badfunction()
} catch (error) {
    console.log('bad function ha fallado')
    console.error(error.message)
}
console.log('continuamos...')
```
Si deseamos manejar errores asincronos:
```
function badfunction() {
    setImmediate(() => {
        try {
            return 5 + z
        } catch (error) {
            console.log('bad function ha fallado')
            console.error(error.message)
            console.log('continuamos...')
        }
    });
}
badfunction()
```

#### Procesos hijos
El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

- Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
- Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
- Usa spawn cuando quieras recibir datos desde que el proceso arranca.
- Usa exec cuando solo quieras recibir datos al final de la ejecución.

### HTTP
Node nos ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.
En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.
Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.

### OS
El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.  

#### Process
El objecto process es una instancia de EventEmitter; podemos suscribirnos a el para escuchar eventos de node.

UncaughtException: Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.
```
process.on('uncaughtException', (error, origen) => console.log(error, origen));
```
exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
```
process.on('exit', () => console.log('Adios'));
```

### npm (Node Package Manager)
es un administrador de paquetes que permiten ejecutar funciones ya realizadas y validadas y de esta manera acelerar y asegurar la calidad de neustro proceso de desarrollo.

Podemos buscar modulos para casi todo en:

npm
```
// Para instalar un modulo de npm en nuestro proyecto
$ npm install is-odd

// Para requerir el modulo
const isOdd = require('is-odd');
console.log(isOdd(3)); // true

// Para revisar que los paquetes no estan actualizados a nivel global dentro de nuestro proyecto
npm outdated -g --depth=0
/* 
Va a imprimir algo así:
Package         Current  Wanted  Latest  Location
firebase-tools    8.0.1   8.0.2   8.0.2  global
npm              6.13.7  6.14.4  6.14.4  global
*/

// Para actualizar todos los paquetes a nivel global dentro del proyecto
npm update -g
```

#### Construyendo módulos: Require e Import
En Node tenemos una forma de importar módulos la cual es con el método require, el cual es la forma por defecto de importar módulos, ya sean nuestros propios módulos como los de otras personas en nuestros proyectos JS, pero suele haber mucha confusión debido al import.
Import es la forma de importar módulos en Ecmascript, el cual es un estándar de JavaScript para la web, esta forma de importar en teoría Node no la acepta oficialmente, a no ser que usemos su modo de .mjs.
Pero gracias a compiladores como Babel, nosotros podremos utilizar estas normas de Ecmascript en nuestro código para cuando se ejecute se transforme en código que sea aceptable por Node.
Se recomienda en la mayoría de veces la importación con require.


#### Módulos útiles

La función de cifrado de ***bcrypt*** nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt.

***Moment. js*** es una librería que nos permite solventar estos problemas e implementa un sistema de manejo de fechas mucho más cómodo.

***Sharp*** puede convertir imágenes grandes en imágenes JPEG, PNG más pequeñas y compatibles con la web de diferentes dimensiones.


#### Datos almacenados vs en memoria

-   La información en memoria esta pensada para ser escrita rapida pero borrada tambien rapida.
-   La información almacenada en disco puede ser almacenada durante mucho mas tiempo pero es mucho mas lento escribir y leer en ellos.


#### Buffer
Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
En la consola, los datos se muestran en formato hexadecimal.


<h3>Creacion de un bufer básico</h3>
Para crear un buffer, con 4 espacios por ejemplo, podemos hacerlo con la siguiente sintaxis.
```
let buffer = Buffer.alloc(4);
console.log(buffer); 
// Output:
//<Buffer 00 00 00 00>
```

#### Las Streams
son colecciones de datos, como matrices o cadenas. La diferencia es que las transmisiones pueden no estar disponibles de una vez y no tienen que caber en la memoria. Esto hace que las transmisiones sean realmente poderosas cuando se trabaja con grandes cantidades de datos, o datos que provienen de una fuente externa o un fragmento a la vez.

```
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
```

Cuando un cliente solicita ese archivo grande, lo transmitimos un fragmento a la vez, lo que significa que no lo almacenamos en la memoria intermedia.

#### Benchmarking (console time y timeEnd)
La función console.time(‘nombre’) inicia un temporizador que se puede usar para rastrear cuánto tiempo dura una operación. El temporizador sera identificado por el nombre dado a la consola. Ese mismo nombre se utilizara cuando se llame a console.timeEnd(‘nombre’) para detener el temporizador y obtener el tiempo demorado durante el proceso.
```
console.time("Temporizador");
for (var i = 0; i < 10000; i++) {
  // Nuestro codigo entre los temporizadores puede ser cualquier cosa.
}
console.timeEnd("Temporizador");
```

#### Los Error First Callbacks
Se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo salió mal y puedes manejarlo. En caso de que no haya ningún error, puedes utilizar los argumentos posteriores y seguir adelante.
```
fs.readFile('/text.txt', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	} 
});
```

#### Web scraping
Es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

### Que es gulp.js? 📖🖥💥

Es una herramienta de construcción en JavaScript construida sobre flujos de nodos . Estos flujos facilitan la conexión de operaciones de archivos a través de canalizaciones . Gulp lee el sistema de archivos y canaliza los datos disponibles de un complemento de un solo propósito a otro a través del .pipe()operador, haciendo una tarea a la vez. Los archivos originales no se ven afectados hasta que se procesan todos los complementos. Se puede configurar para modificar los archivos originales o para crear nuevos. Esto otorga la capacidad de realizar tareas complejas mediante la vinculación de sus numerosos complementos. Los usuarios también pueden escribir sus propios complementos para definir sus propias tareas.



