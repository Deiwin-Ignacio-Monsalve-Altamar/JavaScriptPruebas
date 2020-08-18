/**Diferencias entre var, let y const*/
/**var - let - const

• Cuando declaramos variables con ‘var’ siempre
conviene declararlas ‘arriba’ del código en el que
sea claro cuáles van a ser las variables que se van
a usar dentro de nuestra función o programa.

• Dentro de una función javascript detecta todas
las variables declaradas con ‘var’ y las ‘declara’
por sí solo como si estuvieran ‘arriba’ en el código.
Por lo que si se declara un var dentro de un bloque
else y este no es accedido por el condicional,
la variable ‘var’ declarada dentro de ese else
existe de todas maneras.

• Si utilizamos ‘let’, el alcance de esa variable
se ve reducido únicamente al bloque de código donde es utilizado.

• ‘const’ se comporta parecido a let sólo que no es posible reasignarlo.

• Es posible modificar una variable ‘const’ en el caso de un array[ ]
con el método push() por ejemplo.

• Reducir siempre al mínimo el alcance de nuestras variables.

• Utilizar 'let’ si tenemos que reasignar una variable.

• Si nunca tenemos que reasignar una variable usamos ‘const’. */
// scope global - disponible en todos los scopes
var sacha = "sacha1"

functionmiFuncion() {
    // empieza scope miFuncion

    if (true) {
        // empieza scope if

        var sacha = "sacha2";
        // se declara dentro del scope miFunción
        // está disponible desde el inicio de la función
        // tendrá valor undefined hasta ejecutarse esta linea
        // dejará de estar disponible cuando termine el scope miFuncion

        let sacha2 = "sacha3";
        const sacha3 = "sacha4";
        // se declaran dentro del scope if
        // están disponibles a partir de esta línea con el valor asignado
        // dejan de estar disponibles cuando termine el scope if

        // termina scope if
        // los datos declarados con let y constdentro del scope if dejan de existir
    }
    if (true) {
        // inicia scope if 2

        let sacha = "sacha5";
        let sacha2;
        console.log(sacha, sacha2);
        // imprimirá: sacha5 undefined
        // a pesar de haber tres sacha declaradas
        // (scope global, scope miFunción, scope if 2)
        // console.log tomará la declarada en el scope más cercano
        // (scope if 2 - este)
        // sacha2 no existe en ningún otro scope
        // en este (if 2) fue declarade más no definida
        // por lo que su valor es undefined

        // termina scope if 2
        // los datos declarados con let y const dentro del scope if 2 dejan de existir
    }
    console.log(sacha);
    // imprimirá: sacha2 (declarada en scope miFunción, inicializada en scope if)

    // termina scope miFunción
    // los datos declarados con let, const y var dentro del scope miFunción dejan de existir
}

console.log(sacha);
// imprimirá: sacha1