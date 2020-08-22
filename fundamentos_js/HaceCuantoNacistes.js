/*Calcular edad*/
function diasEntreFechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)


    return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1997, 4, 26)


/*FUNCIONES RECURSIVAS*/
/* Una función recursiva es básicamente
aquella que se llama (o se ejecuta) a sí misma de
forma controlada, hasta que sucede una condición base. */

/*
13 / 4

13 - 4 = 9   1
9 - 4  = 5    1
5 - 4  = 1    1
1 - 4 = -3 se acaba aca 0
*/

function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}
/**Memorización: ahorrando cómputo*/
/**La memorización es una técnica de
 * programación que nos permite ahorrar
 * cómputo o procesamiento en JavaScript,
 * al ir almacenando el resultado invariable de
 * una función para que no sea necesario volver
 * a ejecutar todas las instrucciones de nuevo,
 * cuando se vuelva a llamar con los mismos
 * parámetros. Es similar a usar memoria cache. */

//FACTORIAL DE 6
/*
!6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
 !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6
*/

function factorial(n) {

    if (!this.cache) {
        this.cache = {}
    }
    if (n == 1) {
        return 1
    }

    if (this.cache[n]) {
        return this.cache[n]
    }

    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}


/**Entiende los closures de JavaScript*/
/**Un closure, básicamente, es una función que
 * recuerda el estado de las variables al momento
 * de ser invocada, y conserva este estado a través
 * de reiteradas ejecuciones. Un aspecto fundamental
 * de los closures es que son funciones que
 * retornan otras funciones */

function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}
const saludoArgentina = crearSaludo('che')
const saludoMexico = crearSaludo('guey')


saludoArgentina('Deiwin') //Hola Deiwin che
saludoMexico('Deiwin') //Hola Deiwin guey


/*Estructuras de datos inmutables
Las estructuras de datos inmutables forman parte de los
principios de la Programación Funcional y nos
permiten evitar tener efectos colaterales en los datos.
En otras palabras, que hayan modificaciones
en las variables sin nuestro consentimiento,
produciendo comportamientos inesperados en el programa.
*/
const deiwin = {
        nombre: 'Dewin',
        apellido: 'Monsalve',
        edad: 28
    }
    //const graduo = persona => persona.edad++;

const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})


/**Cambiando de contexto al llamar a una función */
const pablo = {
    nombre: 'Pablo',
    apellido: 'Andrés',
}
const mariela = {
    nombre: 'Mariela',
    apellido: 'Riesnik',
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// Si ejecuto:

saludar()
    // Hola, mi nombre es undefined

// Ya que tenemos la función definida dentro de un contexto global el 'this' en saludar() refiere al objeto 'window'. Por lo tanto es lo mismo que:

window.saludar()
    // Hola, mi nombre es undefined

//El método ‘.bind()’ se usa justamente para cambiar en contexto, el ‘this’, en una función.
const saludarASacha = saludar.bind(pablo)

setTimeout(saludar.bind(pablo, 'Hole che'), 1000)

/**La función .bind() no ejecuta la función a la que se agrega,
 * sino que simplemente nos retorna una nueva función con ese contexto cambiado.
Usando el método .bind, enviamos la referencia a la función
sin ejecutarla, pasando el contexto como parámetro.

Otros dos métodos que nos sirven para cambiar el contexto son: .call y .apply.

Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado. */

saludar.call(pablo, 'Hola che')

saludar.apply(pablo, ['Hola che'])


/**Manejar a dónde refiere el ‘.this’ es algo que tenemos que tener muy presente,
 * sobretodo cuando escribimos en modo asíncrono,
 * ya que siempre que ejecutemos una función de esta
 * naturaleza el ‘.this’ siempre cambia y es muy
 * importante atarlo a nuestra clase, objeto o función. */


/**¿Cuándo hace falta poner el punto y coma al final de la línea? */
/**El punto y coma es opcional en JavaScript, excepto en algunos casos:

Cuando usamos varias instrucciones en una mísma línea
Al comenzar la próxima línea con un array
Al comenzar la próxima línea con un template string*/

alert("Hola"); //Es opcional
console.log('Hola deiwin');
//Casos punto en comas
[1, 2, 3].forEach(n => {
    console.log(n * 2)
});
const nombre = 'Deiwin'
console.log('Hola deiwin');
`${nombre} es un desarrolador`


function CalcularDone(numero) {
    return {
        original: numero,
        doble: numero * 2
    }
}