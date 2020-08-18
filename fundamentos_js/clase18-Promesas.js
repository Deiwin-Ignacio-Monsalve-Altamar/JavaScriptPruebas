const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function persona(id) {

    return new Promise((resolve, reject) => {
        consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}
//PROMESAS ANIDADAS
persona(1)
    .then(function(personaje) {
        console.log(`El personaje 1 es ${personaje.name}`);
        return persona(2);
    })
    .then(function(personaje) {
        console.log(`El personaje 2 es ${personaje.name}`);
        return persona(3);
    })
    .then(function(personaje) {
        console.log(`El personaje 3 es ${personaje.name}`);
        return persona(4);
    })
    .catch(onError)



/*Para hacer el llamado a múltiples promesas,
nos apoyamos en un array de ids con
el que luego construimos otro arreglo de Promesas,
que pasaremos como parámetro a Promise.all( arregloDePromesas ),
con las promesas podemos encadenar llamadas en paralelo,
algo que no es posible usando callbacks */


const ids = [1, 2, 3, 4, 5, 6]
    /* var promesas = ids.map(function(id){
        return persona(id);
    }) */

var promesas = ids.map(id => persona(1));
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)



//Async-await: lo último en asincronismo
/**Async-await es la manera más simple y clara de
 * realizar tareas asíncronas. Await detiene
 * la ejecución del programa hasta que todas las promesas
 * sean resueltas. Para poder utilizar esta forma,
 * hay que colocar async antes de la definición
 * de la función, y encerrar el llamado a
 * Promises.all() dentro de un bloque try … catch. */

async function obtenerPersonaje() {
    const ids = [1, 2, 3, 4, 5, 6]
    var promesas = ids.map(id => persona(1));

    try {
        /*El codigo va a hacer otras cosas pero la funcion se detiene aquí */
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError
    }
}

obtenerPersonaje();