/*
Coerción es la forma en la que podemos cambiar un tipo de valor a otro.

Existen dos tipos:
Implícita: El lenguaje cambia los tipos de valores para que funcione el código.
Explicita: Es cuando nosotros obligamos a que una variable cambia de un tipo de valor a otro tipo.
*/

/*
    4 + "7"; = 47
    4 * "7"; = 28
    2 + true; = true
    false -3; = -3
*/


//COERCIÓN IMPLÍCITA

var a = 4 + "7"; //el operador de + en valores de tipos diferentes genera la concatenación (juntar) 
console.log("a = " + a);

var b = 4 * "7"; //Operador de número. JS supone que no queríamos ocupar un 7 string, sino un 7 número. Convierte el 7 string a número y hace la operación.
console.log("b = " + b);



//COERCIÓN EXPLÍCITA

var c = 20;
vard = a + "";

console.log("c = " + c + ", es un string");

vare = String(c);
console.log("e = " + e + ", el comando String(c) convirtió a la variable a de un 20 tipo número a un 20 tipo string");

var f = Number(e);
console.log("f = " + f + ", Number(e) convirtió el 20 tipo string a 20 tipo número ");