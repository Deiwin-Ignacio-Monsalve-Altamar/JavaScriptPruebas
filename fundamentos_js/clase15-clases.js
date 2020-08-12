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