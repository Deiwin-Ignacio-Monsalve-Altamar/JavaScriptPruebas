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

## Author
-   Deiwin Ignacio Monsalve Altamar
