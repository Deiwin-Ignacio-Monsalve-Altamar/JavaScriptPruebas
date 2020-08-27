## Curso de Asincronismo con JavaScript

### Métodos de las promesas

Promise.all(iterable)
Devuelve una de dos promesas:

una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas,

o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada.

Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable.

Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

Promise.race(iterable)
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

Promise.reject(reason)
Devuelve un objeto Promise que es rechazado con la razón dada.

### Conociendo Async/await
Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto

#### Callbacks -->
-   Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
-   Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

####  Promesas -->
-   Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
-   Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

#### Async-Await -->
-   Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
-   Desventajas: No corre en todos los navegadores (se requiere un transpilador).

#### Otras conclusiones
Excelente curso Muchas Gracias
Mis conclusiones son:

Ventajas y Desventajas

Callbacks
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

