/**Estructuras repetitivas: while
 * While se ejecuta únicamente mientras la condición que se está evaluando es verdadera.

En ocasiones nuestro código puede fallar por errores de syntaxis o errores lógicos.
En caso de que quieras verificar tu código, debes utilizar un debugger.
El código se detiene cada vez que lee esta palabra.
 */


var deiwin = {
    nombre: 'Deiwin',
    apellido: 'Monsalve',
    edad: 23,
    peso: 95
}

console.log(`Al inico del año ${deiwin.nombre} pesaba ${deiwin.peso}`);

const INCREMENTO_PESO = 0.3;
const DIAL_DEL_AÑO

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4


const meta = deiwin.peso - 3

while (deiwin.peso > meta) {
    //Para que pare y ver donde esta fallando
    debugger

    if (comeMucho()) {
        aumentarDePeso()
    }
    if (realizaDeporte()) {
        adelgazarPeso()
    }
    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${deiwin.nombre} adelgazo 3 kilos`);



/***Estructura Do while */
/**se ejecuta una vez antes de que se evalúe la expresión condicional. */

var contador = 0

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while (!llueve);


console.log(`Fui a ver si llovia ${contador}`);

var frecuencia = contador === 1 ? 'vez' : 'veces'