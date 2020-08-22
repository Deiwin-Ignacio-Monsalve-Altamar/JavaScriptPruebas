/**Primero vamos a trabajar como se hacia antes de ES6*/
function newFuntion(name, age, country) {
    var name = name || 'dewin'
    var age = age || 23
    var country = country || 'Cg'
    console.log(name, age, country)
}

//Ahora con ES6 se realiza asi
function newFuntion2(name = 'oscar', age = 23, country = 'Co') {
    console.log(name, age, country)
}
//Para llamar la funcion hay dos formas
//Para el primer caso, hay funciones que toman atributos por si mismos entonces se puden dejar vacias
newFuntion2();


//Ahora veamos la concatenacion antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

/*Ahora con los templates se hace mas facil entender es necesario ubicar en nuestros
teclado las comillas invertidas*/
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

/*NOTA Tener en cuenta que cuando escribe ${} estoy trayendo el valor
de dicha variable  pero esto solo funciona cuando uso las comillas invertidas*/

/*-------------------------------------------------------------------------------- */

//Antes para realizar multilíneas se usaba  backslash (alt+92) + n + "" continuar una línea
let Frase = "KANSClnclnsnspan pscapo apso  \n" //Multilíneas
    +
    "ljsndljnvsjd"

//Con los Template literals `` se puede sencillamente realizar un enter para pasar de línea.
let Frase_es6 = `Lknlasknlncs
dksvñsnkvlksnnldkvsnd`;

console.log(Frase);
console.log(Frase_es6);

// Destructuración de elementos:

//Antes los objetos podía ser creados así:
let person = {
    'name': 'Alejandro',
    'nick': 'Etrx',
    'num': '12314125'
};

//Si queríamos llamar  lo que componía ese objeto utilizabamos:
console.log(person.name, person.nick, person.num);

/*Ahora con la destrucción de elementos, sucede una
especie de resumen, donde se extrae un factor común del nombre del objeto, así:*/
let { name, nick, num } = person;

//Si queremos llamar  lo que compone este objeto utilizamos en ES6:
console.log(name, nick);


/*Operador de prolongación: Permite expandir varios elementos.
Tenemos varios elementos en arreglos que queremos unir en un solo
elemento para presentarlos.*/

let conjunto1 = ['a', 'b', 'c'];
let conjunto2 = ['x', 'y', 'z'];

let conjunto_union = ['l', 'm', 'n', ...conjunto1, ...conjunto2]
console.log(conjunto_union);

/*Asiganciones mediante let se pueden inicilizar variables 
cuyo scope está solo en el bloque de código en el que está llamada,
en otras palabras, solo puede existir las variables let dentro de
las llaves en que se llaman. Var se seguirá usando
para variables globales y locales.*/


{
    var VariableGlobal = "...";
}

{
    let VariableLocal = "***";
    console.log(VariableLocal);
    /* Al estar dentro de las llaves o el bloque de código
    console se ejecutará con normalidad*/
}

console.log(VariableGlobal);
console.log(VariableLocal);
// Al ejecutar esta arroja error al estar fuera del scope donde fue declarada.



/*Const, nos permitirá establecer una variable como una constante,
donde el valor declarado no podrá cambiar.*/

const a = "Soy constante";
a = "No soy constante";
// Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse.

console.log(a);

/*-------------------------------------------------------------------------------------- */

/**Arrow Functions, Promesas y Parámetros en objetos*/
//es6
//arrow function

const names = [
    { name: 'Francisco', age: 52 },
    { name: 'Juanda', age: 19 }
]

//si yo quiero iterar por cada uno de estos elementos para mostrarlos en la consola 
//usamos el metodo map.

//antes
let listOfName = names.map(function(item) {
    console.log(item.name);
});

//ahora es6 con funciones anonimas

let listOfName2 = names.map(item => console.log(item.name))

const listOfName3 = (name, age) => {
    //... codigo
}

const listOfName4 = name => {
    //bloque de codigo
}

const square = num => num * num;

//promesas
//algo va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Todo ok');
        } else {
            reject('Ups algo salio mal');
        }
    });
}

//se pueden anidar muchos then
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola mundo'))
    .catch(error => console.log(error));