//Boolean

//let mutes = true;
let mutes : boolean = true;
mutes = false;


//NUmeros
/* let numerador = 43;
let denominador = 6;
let resultado = numerador / denominador; */
let numerador: number = 43;
let denominador: number = 6;
let resultado: number = numerador / denominador;

//String
/* let nombre = 'Dewiin'; */
let nombre: string = 'Dewiin';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ['Deiwn', 'Nico', 'Raul'];
people.push['ro']
//Areglos con diferente tipos de datos
let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push('Ramiro');
peopleAndNumbers.push(2);

//Enum
enum Color {
    rojo = 'Rojo',
    verde = 'Verde',
    azul = 'Azul'
}

let colorFavorito: Color = Color.rojo;
console.log(`i color fanvorito es ${colorFavorito}`)

//ANY
let comedi: any = 'Joker';
comedi = {type: 'Wildace'}


//Object
let someObject: Object = {type: 'none'}

//Funciones
function add(a: number, b: number): number{
    return a + b;
}

const sum = add(7, 8);


//Tipar funciones
function createAdder(a: number): (number) => number{
    return function addfour(b: number){
        return b + a;
    }
}

const addfour = createAdder(4);
const foru = addfour(5);

function fullName(firstName: string, lastName?/*Undefind*/: string /*= 'Smith'*/): string{
    return `${firstName} ${lastName}`
}

const richar = fullName("Ricahr");


//Interfaces


interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rectangulo: Rectangulo = {
    ancho: 4,
    alto: 6,
};

function area(r: Rectangulo){
    return r.alto * r.ancho;
}

const areaRec = area(rectangulo);
console.log(areaRec);


rectangulo.toString = function(){
    return `Un rectangulo lo es ${colorFavorito}`;
}