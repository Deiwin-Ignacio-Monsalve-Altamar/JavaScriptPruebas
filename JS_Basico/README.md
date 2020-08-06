# Conocimientos Basicos en Js

-   JavaScript es un lenguaje de scripting multiplataforma y orientado a objetos. Es un lenguaje pequeño y liviano. Dentro de un ambiente de host, JavaScript puede conectarse a los objetos de su ambiente y proporcionar control programático sobre ellos.

-   JavaScript contiene una librería estándar de objetos, tales como  Array, Date, y Math, y un conjunto central de elementos del lenguaje, tales como operadores, estructuras de control, y sentencias. El núcleo de JavaScript puede extenderse para varios propósitos, complementándolo con objetos adicionales, por ejemplo:

-   Client-side JavaScript extiende el núcleo del lenguaje proporcionando objetos para controlar un navegador y su modelo de objetos (o DOM, por las iniciales de Document Object Model). Por ejemplo, las extensiones del lado del cliente permiten que una aplicación coloque elementos en un formulario HTML y responda a eventos del usuario, tales como clicks del ratón, ingreso de datos al formulario y navegación de páginas.
Server-side JavaScript extiende el núcleo del lenguaje proporcionando objetos relevantes a la ejecución de JavaScript en un servidor. Por ejemplo, las extensiones del lado del servidor permiten que una aplicación se comunique con una base de datos, proporcionar continuidad de la información de una invocación de la aplicación a otra, o efectuar manipulación de archivos en un servidor.

## VALORES

### PRIMITIVOS: son los valores básicos que se utilizan para poder generar códigos.

-   Número: data sólo de tipo numérico, ejem: 1 2 3 4, etc.
-   Strig: texto, se utiliza entre comillas dobles. “Haciendo esto”, “Diego Hernández”
-   Boolean o Booleano: son valores creados por George Boolean dentro de lenguajes de programación para poder - validar cosas y/o desiciones, por ello se utilizan: true (1) o false (0).
-   Empty values: null o undefined, se les conoce como valores “placeholders”, pero son valores reservados para un tipo de valor que queda faltante en memoria. También pueden ser tomados como valores de errores.

### NO PRIMITIVOS O VALORES TIPO OBJETOS:

-   Array: se genera ocupando corchetes, los cuales dentro ocupan valores primitivos, ejem: [1,2,3] convirtiéndolos en valores tipo objeto.
-   Valor tipo Objeto: se generan con corchetes, los cuales dentro ocupan una data que se transforma en objeto, ejem de sintaxis: { nombre: “Diego”}.

```
/Valores numericos
40;
//valores de tipo string
("Luis");
//valores de tipo Boolean
true;
false;
//valores de tipo vacio:
null;
undefined; //tener cuidado con el undefine
//valores de tipo objeto:
//arrays
[1, 2, 3];
{
  nombre: "Luis";
}

//nota: en el navegador para ver que tipo de valor es colocas typeof ejemplo:
//typeof true
//y te va decir boleaan
```
#### Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

##### Var: 
-   Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

-   o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
-   Var pokemonType = ‘electric’ entonces reinicializar es:
-   Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
-   o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
-   o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

-   const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

##### const:
-   sirve para declarar variables que nunca van a ser modificadas:
-   o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
-   const pokemonType = ‘grass’
-   o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: -  const pokemonType = ‘electric’ no puede ejecutarse:
-   pokemonType = ‘grass’
-   o No es inmutable: osea no puede cambiar con objetos:

##### Let:
-   Son variables que pueden ser modificadas, se pueden cambiar:
-   o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let -  pokemonType = ‘electric’ no puede haber:
-   let pokemonType = ‘grass’
-   o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo:
-   inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
-   o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.



## Author
-   Deiwin Ignacio Monsalve Altamar
