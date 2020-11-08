# Curso de Backend con Node.js

##### ¿Qué es node.js ?
Node.js es un entorno de ejecucion para javascript

##### ¿Qué es un entorno de ejecución?

Un entorno de ejecucion es una capa encima del sistema operativo que ejecuta una pieza de software.

##### ¿Qué nos permite?

Usar javascript para el servidor.

#### Diferencias entre javascript y node.js

-   En javascript

En javascript tenemos el DOM. La interfaz web.
En javascript tambien tenemos el CSSOM
Tambien el fetch API
Toda la capa del web storage
Tambien el canvas API
Las APIs en general del navegador
En Node.js

-   Node
Tiene el modulo de HTTP para crear servidores
El modulo del sistema operativo para comunicarse con el SO
El modulo utiliddes
El modulo debugger

-   En común

Librerias comunes streams
Eventos
Ecmascript modules
Consola


## Arquitectura orientada a eventos

Uno de los paradigmas de programación en nodejs más populares es la arquitectura orientada a eventos, los eventos nos permiten manipular el código asincrono de una mejor manera. Respasemos algunos ejemplos de callback

Concepto **Error First Callback**: _cuando un callback tiene un error lo que vamos a enviar como primer párametro es el error_.

Usando **Callback**
```js
const asyncCallback = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Concepto Error First Callback: 
      return cb(null, 'Hola mundo');
    } else {
      cb(new Error('Hello Error'));
    }
  }, 2000)
}

asyncCallback((err, msg) => {
  // Verificar si existe el error
  if (err) {
    console.log('Error', err);
  } else {
    console.log('mensage', msg);
  }
})
```

Usando **Promesas**:
```js
// resolve: se encarga de resolver la promesa
// reject: se encarga de enviar un error en caso de que algo suceda
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Concepto Error First Callback: 
      // En lugar de retornar un callback podemos llamar a Resolve
      // Como resolve ya no es Callback y ya no es Error First Callback, 
      //ya no hay necesidad de pasar Objeto null
      resolve('Hola mundo');
    } else {
      reject(new Error('Hello Error'));
    }
  }, 2000)
});

// Lo bueno de las promesas es que se pueden encadenar  
// Encadenamos el mensage para que antes de mostrarlo, se muestre en UpperCase
promise.then(msg => msg.toUpperCase())
  .then(msg => console.log('message', msg))
  .catch(err => console.log('Error', err));
```

Aún hay una mejor manera de hacer estó, lo importante de las promesas es que esto se empieza a generar un código en cascada que es dificil de leer con el tiempo, ahora recientemente se puede usar [async await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await) que es una manera de escribir código asincrono que se vea sincrono.

Lo que requiere [async await](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/await) es que nuestra función devuelva una promesa, que es como una serie de **wrapper** que hacemos, en esté caso nosotros vamos a convertir esa promesa en una función:

```js
const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('Hola mundo');
    } else {
      reject(new Error('Hello Error'));
    }
  }, 2000)
});

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log('message', msg);
  } catch (error) {
    console.log('error', error);
  }
}

asyncAwait();
```
<br>
<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Event Emiter

Hay una forma aún más poderosa de ejecutar el código anterior y es con la clase event-emitter. [EventEmitter](https://nodejs.org/dist/latest-v10.x/docs/api/events.html#events_class_eventemitter) no es exclusivo, podemos usar promesas y código asincrono, pero ya vamos a ver cuales son sus ventajas:

```js
// Creamos un Event Emitter
const EventEmitter = require('events');

// Podemos crear un logger propio
class Logger extends EventEmitter {
  // Método execute recibe un callback
  execute(cb) {
    console.log('Before');
    // Emitimos un Evento 
    this.emit('start');
    cb();
    // Emitimos otro evento
    this.emit('finish');
    console.log('Afther');
  }
}

const logger = new Logger();

// Cada vez que ocurra algún evento, hagá algo
logger.on('start', () => console.log('STARTING'));
// Podemos Suscribirnos al evento multiples veces sin niguna restricción 
logger.on('finish', () => console.log('Finishing'));

logger.on('finish', () => console.log("It's Done"));

// logger.execute(() => console.log("Hello World"));

/*
Algo muy importante es que si ejecutamos código asincrono, como un setTimeout,
el orden no va ha permanecer, porque como es código asincrono precisamente se va 
ha ejecutar despues de todas las emisiones, en ese caso la manera de controlarlo es
usando callbacks, si lo ejecutamos veremos que nuestro hello world se ejecuta despues,
porque queda de manera asincrona.
*/
logger.execute(() => setTimeout(() => console.log("Hello World"), 500));
```

#### Introducción a streams
Los Streams son una colección de datos como los arrays o strings sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podemos manejar una gran cantidad de datos de manera óptima.

#### Readable y Writable streams
Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente:

Readable
Eventos
data. Se dispara cuando recibe datos.
end. Se dispara cuando termina de recibir datos.
error. Se dispara cuando hay un error.
Funciones
pipe
unpipe
read
push
Writeable
Eventos
drain. Se dispara cuando emite datos.
finish. Se dispara cuando termina de emitir.
error. Se dispara cuando hay un error.
Funciones
write
end
- Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter.

El propósito de tener distintos tipos de streams no solo es simplificar el código, tienen pequeñas diferencias en su objetivo.

Tipos de streams
Hay cuatro tipos fundamentales de streams en Node.js

Writable: streams en los que los datos pueden ser escritos.
Readable: streams en los que los datos pueden ser leídos.
Duplex: streams que pueden ser leídos y escritos.
Transform: Duplex streams que pueden modificar o transformar los datos cuando son escritos o leídos.

#### Sistema operativo y sistema de archivos
En esta clase vemos dos módulos básicos:

- os. Sirve para consultar y manejar los recursos del sistema operativo.
- fs. Sirve para administrar (copiar, crear, borrar etc.) archivos y directorios.
Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona por default, pero también se pueden ejecutar de forma síncrona, por ejemplo el método readFile() tiene su versión síncrona readFileSync().


#### Consola, Utilidades y debuggin
El módulo útil esta diseñado para resolver las necesidades internas de las API de Node, sin embargo muchas de estas utilidades también son útiles para los módulos de las aplicaciones en desarrollo. Se puede acceder a estas utilidades usando:
const util = require('util');

util.format()
El método util.format () devuelve una cadena formateada utilizando el primer argumento como una cadena de formato tipo printf que puede contener cero o más especificadores de formato. Cada especificador se reemplaza con el valor convertido del argumento correspondiente. Los especificadores compatibles son:

%s - String
%d - Number
%i - parseInt(value, 10)
%f - parseFloat(value)
%j - JSON
%o - Object
%c - Css
%% - signo de '%'
Inspector
cuando se inicia la inspección --inspect, Node escucha a un cliente de depuración , Por defecto escuchara el host y el puerto 127.0.0.1:9229 y a cada proceso se le asigna un id único.
Opciones de la línea de comandos
--inspect: Habilita el agente de inspección y escucha el puerto por defecto 127.0.0.1:9229
--inspect=[host:port]: Habilita el agente de inspección, vincula la dirección y el puerto a la dirección de inspección.

### Clusters y procesos hijos

Una sola instancia de Node.js corre un solo hilo de ejecución. Para tomar ventaja de los sistemas con multiples core, necesitamos lanzar un cluster de procesos de Node.js para manejar la carga.

El módulo cluster nos permite la creación fácil de procesos hijos que comparten el mismo puerto del servidor. Veamos un ejemplo en código:

```
const cluster = require("cluster");
const http = require("http");


// Requerimos la cantidad de CPUs que tiene la maquina actual
const numCPUs = require("os").cpus().length;


if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);


  // Si el cluster es maestro, creamos tantos procesos como numero de CPUS
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }


  // Si por alguna razón el cluster se finaliza hacemos un log
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Los diferentes workers pueden compartir la conexión TCP
  // En este caso es una servidor HTTP
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);


  console.log(`Worker ${process.pid} started`);
}
```

#### ¿Que es Express.js?
Express es un framework o marco de trabajo desarrollado sobre Nodejs, lo que quiere decir que provee toda la funcionalidad que necesitas para hacer aplicaciones web, permitiendo estructurar tu proyecto de una manera más fácil.
Express.js es un Framework, del creador T.J. Holowaychuk, , inspirado en el framework Sinatra de Ruby. Es considerado un framework minimalista, es decir que viene con funcionalidades muy básicas, que luego a medida que crezca la aplicación se puede ir extendiendo a través de los módulos que puedes encontrar en npm, Además que es el framework de Node.js Más popular.

- Template: Como su nombre en espanol lo dice, es una plantilla que podemos usar para apartir de ahi desarrollar nuestro proyecto.

- Routing: Es el sistema de rutas que maneja express.js para manejar las rutas de una manera mas facil y sencilla, asi podremos ejecutar o mostrar un codigo en determinada ruta o proceso.

- Middlewares: Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res), esto quiere decir que es auqella funcion que esta en medio del req y el res, y con la cual podemos manipular los datos antes de que lleguen a su destino.

#### Request y Response Objects

El objeto req (Request) en Express representa el llamado HTTP y tiene diferentes propiedades del llamado, como la cadena de texto query (Query params), los parámetros de la URL (URL params), el cuerpo (Body), los encabezados (HTTP headers), etc.

Para acceder al req basta con acceder al primer parámetro de nuestros router handlers (router middleware) ó middleware.

- req.body
Contiene los pares de llave-valor de los datos enviados en el cuerpo (body) del llamado (request). Por defecto es undefined pero es establecido cuando se usa algún “body-parser” middleware como body-parser y multer.

En Postman cuando hacemos un request y enviamos datos en la pestaña Body, estos middlewares son los que nos ayudan a entender el tipo de datos que vamos a recibir en el req.body.

- req.params
Esta propiedad contiene un objeto con las propiedades equivalentes a los parámetros nombrados en la ruta. Por ejemplo, si tenemos una ruta de la forma /user/:name entonces la propiedad name está disponible como req.params.name y allí podremos ver su valor. Supongamos que llamaramos a la ruta con /user/glrodasz, entonces el valor de req.params.name sería glrodasz. Este objeto por defecto tiene el valor de un objeto vacío {}.

- req.query
Esta propiedad contiene un objeto con las propiedades equivalentes a las cadenas de texto query de la ruta. Si no hay ninguna cadena de texto query tendrá como valor por defecto un objeto vacío {}.

- Response Object
El objeto res representa la respuesta HTTP que envía una aplicación en Express.

Para acceder al res basta con acceder al segundo parámetro de nuestros router handlers (router middleware) o middleware.

Exploremos los métodos más comunes

- res.end()
Finaliza el proceso de respuesta. Este método viene realmente del core de Node.js, específicamente del método response.end() de http.ServerResponse.

Se usa para finalizar el request rápidamente sin ningún dato. Si necesitas enviar datos se debe usar res.send() y res.json().

- res.json()
Envía una respuesta JSON. Este método envía una respuesta (con el content-type correcto) y convierte el parámetro enviado a una cadena de texto JSON haciendo uso de JSON.stringify().

El parámetro puede ser cualquier tipo de JSON, incluido un objeto, un arreglo, una cadena de texto, un boolean, número, null y también puede ser usado para convertir otros valores a JSON.

- res.send()
Envía una respuesta HTTP. El parámetro body puede ser un objeto tipo Buffer, una cadena de texto, un objeto, o un arreglo.

### Mockaroo*
es un servicio que nos permite crear datos simulados a partir de una estructura, por ejemplo para generar la estructura de nuestra película

#### Implementando una capa de servicios
La arquitectura tradicional MVC se queda corta en aplicaciones modernas, por eso necesitamos una arquitectura diferente cómo la Clean Arquitecture que tiene una capa de servicios para manejar la lógica de negocio.


### Implementación de las acciones de MongoDB
Los métodos de MongoDB para implementar un CRUD son:

- Create
insertOne
- Read
find
findOne
- Update
updateOne
- Delete
deleteOne

### ¿Qué es Joi y Boom?
- Joi(Object Schema Validation). Sirve para validar que los datos que recibimos vengan en el formato adecuado.

- Boom(HTTP-friendly error objects). Nos ayuda a imprimir errores comunes en peticiones HTTP de forma sencilla.

#### Boom
Boom nos provee una serie de utilidades para retornar errores HTTP, cada utilidad es un objeto de respuesta de tipo Boom que incluye las siguientes propiedades:

isBoom - si es true indica que es una instancia de Boom.

isServer - si es true indica que el código de respuesta es mayor o igual 500, aquí más informacion de los codigos de respuesta HTTP status Code.

message - el mensaje del error.
typeof - el constructor usado para crear el error (ejemplo: Boom.badRequest).
output - la respuesta formateada (generalmente esta es la que usamos) y contiene las siguientes claves:

statusCode - código de estatus HTTP.
headers - un objeto que contiene encabezados HTTP donde cada clave es un nombre de encabezado y el valor es el contenido del encabezado.
payload - el objeto formateado usado como respuesta y contiene las siguientes claves:
- statusCode - código de estatus HTTP, proviene de statusCode
- error - nombre derivado del error HTTP statusCode.
- message - mensaje de error derivado de error.message


### Creación de tests para nuestros endpoints
mocha: nos ayuda a correr los test
supertest: levanta un servidor temporal
sinon: crea mocks para tests
proxyquire inyecta los mocks cuando se requieren los paquetes

#### Considerando las mejores prácticas para el despliegue
Remover contraseñas quemadas.
Encapsular código spaghetti.
Revisar la estructura del proyecto.
Configurar los scripts de build.
Agregar soporte de caché.
Añadir HTTPS y CORS.
Revisar otras prácticas de seguridad.

### Despligue en VERCEL

Parece que ahora Now se llama Vercel, así que les dejo los pasos que seguí para hacer mi despliegue:

Instalar vercel globalmente: npm i -g vercel
Añadir las variables de entorno para conectarse a la bd de mongo a la lista de variables secretas de vercel:
vercel secrets add platzivideos-db-user ...
vercel secrets add platzivideos-db-password ...
vercel secrets add platzivideos-db-host ...
vercel secrets add platzivideos-db-name ...
En vez de los ... se deben colocar las variables de entorno respectivas (las mismas del archivo .env).
Talvez necesites crear una cuenta en Vercel ya que te pedirá un email cuando hagas esto.
Para ver las variables secretas guardadas (no se ven los valores): vercel secrets ls
Ahora añadimos un archivo vercel.json en la raíz del proyecto con el siguiente contenido:

```
{
  "name": "platzivideo",
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.js"
    }
  ],
  "env": {
    "DB_USER": "@platzivideos-db-user",
    "DB_PASSWORD": "@platzivideos-db-password",
    "DB_HOST": "@platzivideos-db-host",
    "DB_NAME": "@platzivideos-db-name"
  }
}
```
Antes de desplegar podemos probar la app con vercel dev. Una vez ejecutado este comando se nos preguntarán algunas cosas que podemos responder por defecto (dando enter y enter). Al final la aplicación quedará desplegada como si estuviera en producción pero localmente.
Si todo anda bien, hacemos el despliegue: vercel. El proceso tardará unos segundo y cuando finalice se mostrará la URL del proyecto ya desplegado.
Para configurar una URL más amigable: vercel alias <url_actual> <alias>

Para hacer esto es necesario que tengas acceso a la URL alias dentro de tu cuenta.
Aquí esta mi app desplegada https://movies-api-silk.vercel.app/api/movies 