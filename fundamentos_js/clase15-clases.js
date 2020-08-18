/**Heredar con el prototipo */
function heredadDe(prototipohijo, prototipoPadre) {
    var fn = function() {};
    fn.prototype = prototipoPadre.prototype;
    prototipohijo.prototype = new fn;
    prototipohijo.prototype.constructor = prototipohijo;
}


/**clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función,
el valor de this depende de cómo es llamada ésta. */


//a función que define al prototipo retorna implícitamente this,
//es decir retorna el nuevo objeto que se creo.
function Persona(nombre, apellido, altura) {
    //this hace referencia al nuevo objeto que se acaba de crear.
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.esAlto = function() {
    return this.altura > 1.82
}

/*Hablar de objetos en javascript es hablar de prototipos. */
Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

//La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.
var deiqin = new Persona('Deiwin', 'Monsalve', 1.83);
var erika = new Persona('Erika', 'Melo', 1.85);
erika.saludar();
erika.esAlto();


/**Window es el objeto global dentro del navegador.
Cuando this no es lo que esperamos, este es el principal error en JS.
En las Arrow functions, se asigna la función , pero cambia el this dentro de la función,
ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.
Para comprobarlo en consola:
this === window */


/*HERENCIA PROTOTIPAL */
function Desarrollador(nombre, apellido) {
    this.nombre = nombre,
        this.apellido = apellido
};

heredadDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} y soy desarrolador`)
};

/*---------------------------------------------------------------------------------------*/
//CLASES EN JS EMACScript 2015

class Persona {
    /**El método constructor es un método especial
     * para crear e inicializar un objeto creado a partir de una clase */
    constructor(nombre, apellido, altura) {
        //this hace referencia al nuevo objeto que se acaba de crear.
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre}`);
        /*fn representa la funcion */
        if (fn) {
            /*llamando la funcion */
            fn(this.nombre, this.apellido)
        }
    }
    esAlto() {
        return this.altura > 1.82
    }
}

/*Hereda o extiende */
/**La palabra clave extends se usa en declaraciones de clase o
 * expresiones de clase para crear una clase que es hija de otra clase. */
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        //Esta trayendo atrbutos del padre los hereda
        super(nombre, apellido, altura);
    }

    /**Si le estan enviando una funcion */
    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolador`);
        /*fn representa la funcion */
        if (fn) {
            /*llamando la funcion */
            fn(nombre, apellido, true);
        }
    }
}


/*----------------------------------------- */
/**Funciones como parametros */
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`No sabia que esras desarrollador`);
    }
}


var deiqin = new Persona('Deiwin', 'Monsalve', 1.83);
var erika = new Desarrollador('Erika', 'Melo', 1.85);
erika.saludar();