/** CALLBACKS
 * Un callback es una función que se pasa a otra función como
 * un argumento. Esta función se invoca, después,
 * dentro de la función externa para completar alguna acción.
 */
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

/*Para hacer un query de la pagina Url */
/* $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true }) */

//O TAMBIEN
//TRAER EL LA PAGINA Y CAMBIAR LA BUSQUEDAD
/* const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
 */
//VA DIRRECIONAR A OTRA PAGINA
const opts = { crossDomain: true }

//Haciendo el request e imprimierlo el argument es el objeto de datos
/* const onPeopleResponse = function(persona) {
    console.log(`Hola yo soy ${persona.name}`)
}
 */
/* $.get(lukeUrl, opts, function(luke) {
    console.log(`Hola yo soy ${luke.name}`)
}) */

/* $.get(lukeUrl, opts, onPeopleResponse)
 */
/**Haciendo multiples request */


function obtenerPersonaje(id, callback) {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        //MANEJO DE ERRORES
        //nos funciona el fail cuando se caiga laconexion o haya otro problema
    $.get(url, opts, callback).fail(function() {
        console.log(`SUcedio un error`);
    })
}

/*Cuando se obtenga el pérsona 1 venga detra el siguiente para el orden */

obtenerPersonaje(1, function(personaje) {

    console.log(`Hola yo soy ${personaje.name}`);
    obtenerPersonaje(2, function(personaje) {

        console.log(`Hola yo soy ${personaje.name}`);
        obtenerPersonaje(3, function(personaje) {

            console.log(`Hola yo soy ${personaje.name}`);
            obtenerPersonaje(4)
        })
    })
});



/**PROMESAS

Con los callBacks teníamos un problema al anidarlos.
Para este problema existen las ‘promesas’.

Antes era necesario usar librerías externas pero
ahora la mayoría de los browsers soportan las promesas.
Si queremos verificar si las promesas son soportadas
por el usuario se podría usar lo que se llama un ‘polifield’.
Este detecta si el navegador donde está corriendo nuestro
código no soporta las promesas, y si así es, crea las clases de
las promesas por nosotros y así podrían ser utilizadas por
nosotros de manera transparente para nuestro código.

Qué son las promesas?
Tenemos que pensar las promesas como valores que aún no conocemos
Es la promesa de que ahí va a haber un valor cuando una acción 
asíncrona suceda y se devuelva.

Las promesas tienen 3 estados y son como cualquier otro objeto de javascript.

El primero de los estados es ‘pending’. Es el estado cuando las creamos.
Si se resuelve exitosamente pasa al estado ‘fulfilled’.
Si ocurre algún error y no se resuelve pasa al estado de ‘rejected’.

Las promesas pueden no ser asíncronas también.

Para obtener el valor de la resolución de la promesa
llamamos a la función _.then(val =>) _a la que le
vamos a pasar como parámetro otra función en la que
el primer parámetro será el valor que esperábamos.

Si sucede algún error agregamos el método
.catch(err=>) al que se le asigna una
función también como parámetro que va a recibir el error. */