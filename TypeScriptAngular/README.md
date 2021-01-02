# Curso de TypeScript con Angular por Belatrix

#### ✔ 
JavaScript es un lenguaje no tipado, es decir, se tiene la libertad de poder asignar cualquier tipo de valor a nuestras variables.

#### ✔
TypeScript es una librería que extiende la funcionalidad de JavaScript Vanilla mediante la inclusión de types dentro de nuestro código.

## Types, Type Inference y Type keyword
A diferencia de JavaScript, TypeScript es un lenguaje fuertemente tipado. Mientras que en JavaScript declaramos una constante de la siguiente manera:

const a = 'hola'
En TypeScript utilizando el carácter ‘:’ le asignamos un tipo de dato a la variable :

const a: string = 'hola'
En caso de que no le asignemos un tipo de dato a la variable, TypeScript automáticamente le va a asignar un tipo de dato, esto es el Type Inference.

Si le asignamos el tipo de dato any a una variable, esta variable va a poder almacenar cualquier tipo de dato, similar a JavaScript Vainilla.

Dentro de TypeScript contamos con la palabra reservada type que nos va a ser de utilidad cuando hagamos nuestros propios tipos de datos.

## Clases
Dentro de TypeScript podemos realizar programación orientada a objetos y como su nombre lo dice vamos a programar objetos, pero para generar dichos objetos primero debemos crear su plantilla base que recibe el nombre de clase.

Una clase está integrada por propiedades y funciones, estas pueden ser privadas, públicas o protected.

A la variable que le asignamos el valor de un objeto debemos indicarle que su tipo de dato es igual a la clase.

Una característica de la programación orientada a objetos es que podemos crear clases padre que hereden sus propiedades y funciones a una clase hijo, esto es la herencia y dentro de TypeScript se representa con la palabra extends.


## Interfaces
Una interfaz es un tipo abstracto que sirve como contrato para la estructura de un objeto y al igual que las clases puede ser utilizada como un tipo de dato. Para declarar una interfaz en TypeScript utilizamos la palabra clave interface.

Dentro de las interfaces en TypeScript podemos manejar propiedades opcionales añadiendo el signo de pregunta ‘?’ al final del nombre de la propiedad.

## Shapes
Shapes es una forma de comparar dos clases y saber si tienen las mismas propiedades o si una exíste una relacion hijo-padre entre ellas. Por ejemplo, un pediatra es un médico mas no necesariamente un médico debe ser un pediatra

## Union types
Habrá ocasiones en las que necesitemos asignar variables con más de un tipo, para evitar el uso de any debemos usar union types. Utilizando el signo ‘|’ podemos indicarle a TypeScript que utilice uno u otro tipo de dato, por ejemplo:
```
type SumaParameter = string | number;
```

Union types permiten crear tipos de variables e interfaces que representen un u otro tipo de dato. Una variable de suma puede estar representada por un string o number, también una interfáz Transporte puede ser la mezcla de la interfáz Motocicleta o Carro

## Intersection types
La intersección es una mezcla de diferentes tipos de datos, las propiedades involucradas serán requeridas en el momento de realizar la instancia

## Function Type
Los Functions types permiten definir la estructura de nuestra función, como por ejemplo los argumentos y retornos de la mísma.
```
type AreaRectangulo = (altura: number, base: number) => number;

const getAreaRectangulo: AreaRectangulo = (altura: number, base: number ): number => {
    return altura * base;
}
```

## Decorators: aplicación en métodos
Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.

En una función decorator, el parámetro target hace referencia al objeto que posee el decorador y el parámetro propertyKey, o key, hace referencia al elemento que extendemos.

Los decoradores sirven para ampliar la funcionalidad de una clase, método, etc … básicamente es una función que recibe como parámetro otra función y a su vez retorna una función.


## ¿Qué es Angular?
Mas que un Framework, es una Plataforma.

Desarrollado por Google, Angular es más que un framework, es una plataforma que nos da la posibilidad de desarrollar aplicaciones web como aplicaciones mobile. Además, es un framework de estructura que nos va a brindar funcionalidades para extender el template de nuestra aplicación.

- Algunas ventajas que trae Angular son:

Rapidez.
Mayor estructura y control del proyecto.
SPA
Gran comunidad que ayuda con cualquier problema.

- En detalle:
Podemos decir que es un Framework de Estructura. El cual es aquel que nos va a brindar ciertas funcionalidades que podemos agregar a nuestro template para extender y brindar nueva lógica a nuestra app.

- Posee Directivas, como:
ng-if
ng-if-else
ng-for
Las cuales dan una nueva funcionalidad a nuestros tags de nuestro html.

Por otro lado, nos brinda un gran control sobre nuestras aplicaciones. Además de gran rapidez y efectividad a la hora de desarrollar nuestras aplicaciones al igual que una estructura solida.

Angular way > ofrece una gran comunidad que nos dice las mejores practicas. Es denominado un framework opinado.
.
- ¿Qué podemos desarrollar con Angular?

Progressive Web Apps
Native Apps
Desktop Apps

## Angular CLI
Angular CLI es la interfaz de línea de comandos de Angular con la cual desde una terminal puedes crear aplicaciones, generar componentes, montar un servidor local para tu aplicación y testear tu proyecto.

## ¿Qué framework debo utilizar?
Lo primero que te llega a la mente va a ser los tres frameworks más populares:

### Angular
Si tienes un proyecto complejo y robusto Angular es tu mejor opción ya que al estar pensado en trabajar con TypeScript ofrece una gran robustez, estructura y control.

Angular CLI es el CLI más completo para trabajar.

Desventajas:

Al ser un framework tan robusto su curva de aprendizaje es muy elevada y compleja.
Tendremos código repetitivo que genera archivos muy grandes.
### React
Ventajas:

Creado por Facebook, ofrece una gran flexibilidad para trabajar basado en componentes.
Cuenta con una gran comunidad, por lo tanto muchos problemas con los que te encuentres ya habrán sido resueltos por alguien.
Desventajas:

Hay muchas formas de resolver un mismo problema, por lo tanto hay miles de librerías y tal vez pocas sean la solución correcta.
### Vue
También está basado en componentes, cuenta con una gran usabilidad y una curva de aprendizaje muy fácil.

Su mayor desventaja es que al ser muy nuevo, su comunidad es muy nueva y es probable que los problemas con los que te encuentres tendrás que crear tu propia solución.

#### Tip: 
Para tener una buena estructura de nuestro proyecto es recomendable crear una interfaz por cada entidad que tenga el proyecto!