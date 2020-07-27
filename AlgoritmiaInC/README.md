# Algoritmia Conceptos

## ¿Qué es un algoritmo?
- Un algoritmo es un conjunto de instrucciones o pasos que resuelven un problema dado paso a paso y sin generar ambigüedades.

- Las instrucciones de la computadora siempre deben dar los mismos resultados cuando tienen los mismos datos de entrada. Por ejemplo, no importa cuantas veces lo preguntes, la operación 5+5 siempre es igual a 10.

- Además, podemos programar diferentes instrucciones que terminan con el mismo resultado. Nuestro trabajo también es descubrir cuál es la mejor manera de solucionar estos problemas.

- Vamos a crear un diagrama de flujo para realizar un algoritmo que debe resolver el problema de cómo encontrar la ruta más corta para ir de un lugar a otro.

## Metodología para la construcción de un algoritmo
Los pasos recomendados para desarrollar un algoritmo son los siguientes:

Definición del problema
Análisis del problema
Diseño del algoritmo
Verificación o pruebas
Para la definición del problema debemos obtener los siguientes elementos:

Entradas: ¿Qué se necesita para realizar los pasos?
Salidas: ¿Qué se obtiene al final del algoritmo?
Tipos de datos involucrados: Textos, números, listas, etc.


## Lenguajes de programación
-   Los lenguajes de programación son un set de instrucciones que usamos para enseñarle a las computadoras los pasos a seguir para resolver un problema.

-   Existen diversos tipos de lenguajes de programación y los podemos reducir en 2 grandes categorías: lenguajes de bajo nivel y de alto nivel. Esto según su complejidad y nivel de preocupación o acceso al hardware.

-   Lenguajes de bajo nivel: Son los que te permiten hacer modificaciones en el hardware. Entre más bajo es el nivel, más nos debemos preocupar los programadores por el hardware. Por ejemplo, tenemos el lenguaje máquina (solo código binario) como el de más alto nivel, siguiendo por ensamblador (con instrucciones más amigables) y otros lenguajes como C o C++.

-   Lenguajes de alto nivel: Son frecuentemente lenguajes más modernos en los que uno como programador se enfoca en el software, no tanto por el hardware. Por ejemplo, Ruby, JavaScript o Perl.

## Estructuras de datos
-   Las estructuras de datos son una forma eficiente de almacenar y organizar la información de nuestro programa. Existen diferentes estructuras que vamos a estudiar durante el curso, es muy importante trabajar con una buena estructura que nos ayude a resolver nuestros problemas de la mejor manera posible.

Podemos clasificar las estructuras en dos grandes grupos:

-   Lineales: La información se guarda de forma secuencial y podemos personalizar el orden en que se guardan. Por ejemplo, de acuerdo a las fecha, relevancia de la información, entre otras.

-   No lineales: No toda la información está al mismo nivel o almacenada con un orden especifico. Por ejemplo, en la estructura de árbol tenemos un tronco principal con diferentes ramificaciones que surgen a partir de este o, también, la estructura de grafos donde tenemos puntos de información dispersos pero interconectados entre sí.


## User defined data types
-   Los User Defined DataTypes son tipos de datos creados por los desarrolladores de software para realizar múltiples acciones.

-   Estos datos pueden estar compuestos por otro tipo de datos previamente definidos pero, por defecto, no son parte del sistema. Además, dependiendo del lenguaje de programación que manejes, deberás tener claro (o no) el consumo de memoria.

-   Por ejemplo, las aplicación de cobranzas necesitan un tipo de dato personalizado para las personas con deudas.

## Abstract Data Types básicos: Lists, Stacks, Queues
-   Un tipo de dato abstracto (ADT) representa un set particular de comportamientos, aunque no define su implementación.
-   Mientras que una estructura de datos es más concreta. Típicamente es la implementación de un ADT.
-   Los ADT más básicos serían: Lists, Stacks, Queues, Diccionarios, Arrays, Linked Lists, Trees

## Explicación gráfica Data Types básicos
Como vimos en la clase anterior existen diversos Abstract Data Types típicos y los más básicos son los siguientes:

-   List, Conjunto de valores ordenados secuencialmente donde son recuperados mediante un número del 0 al n.

-   Dictionary: Similar a las listas, pero con un índice numérico o no numérico del tipo de datos que se desee (aunque tiene que ser único)

-   Linked List: Cada elemento se vincula (Apunta) con el siguiente nodo, al no estar definidas de un inicio. las linked lists pueden tener el tamaño que sea.

-   Stack (LIFO, Last in First Out): En estos datos se van agregando elementos con la peculiaridad de que el último en agregarse será el primero en recuperarse.

-   Queue (FIFO, First in First Out): Al contrario del stack, los Queue se caracterizan por que la recuperación de datos siga la misma secuencia de la inserción de los datos, así el primer dato será recuperado al principio, y el último al final.


### List ADT
Una lista es un tipo de datos abstracto utilizado para representar un número contable de valores ordenados. El mismo valor puede existir más de una vez, esta es la implementación computacional del concepto matemático de secuencia finita, la lista.

A continuación te comparto las operaciones disponibles en este ADT:

_get() – Retorna un elemento de la lista en cualquier posición especificada.
insert() – Inserta un elemento en cualquier posición de la lista.
remove() – Remueve la primera aparición de cualquier elemento en una lista no-vacía.
removeAt() – Remueve el elemento que se encuentre en la posición especificada en una lista que no esté vacía.
replace() – Reemplaza un elemento en cualquier posición por otro elemento.
size() – Retorna el número de elementos contenidos en la lista.
isEmpty() – Retorna true si la lista está vacía, si no, regresa false.
isFull() – Retorna true si la lista está llena, si no, regresa false.
_
### Stack ADT
Un Stack es un tipo de datos abstracto que sirve como una colección de elementos con dos operaciones principales:
Push: agrega un elemento a la colección
Pop remueve el elemento que se añadió más recientemente y que no ha sido removido, el orden en el que esto funciona como hemos visto en clases sigue la lógica LIFO (last in, first out) que en español sería “último o más reciente en entrar, primero en salir”

A continuación te comparto las operaciones disponibles en este ADT:

push() – Inserta un elemento en un extremo de la pila denominado “cima”.
pop() – Remueve y retorna el elemento en la cima de la pila, si el stack no está vació.
peek() – Retorna el elemento en la cima del stack sin removerlo, si el stack no está vacío.
size() – Retorna el número de elementos en el stack.
isEmpty() – Retorna true si el stack está vacío, si no, retorna false.
isFull() – Retorna true si la lista está llena, si no, regresa false.

### Queue ADT
Una cola es un ADT que sirve para almacenar datos en el orden en el que los datos van llegando, sigue una lógica del tipo FIFO o “primero en llegar, primero en salir” como es en la mayoría de supermercados.

A continuación te comparto las operaciones disponibles en este ADT:

enqueue() – Inserta un nuevo elemento al final de la cola.
dequeue() – Remueve y retorna el primer elemento de la cola si la cola no está vacía.
peek() – Retorna el primer elemento de la cola sin removerlo.
size() – Retorna el número de elementos almacenados en la cola.
isEmpty() – Retorna true si la cola está vacía, si no, retorna false.
isFull() – Retorna true si la cola está vacía, si no, retorna false.


## ALGORITMOS DE ORDENAMIENTO:
-   Es un algoritmo que se encarga de colocar en orden una secuencia dada y pueden ser números o letras.
Un arreglo ordenado es un arreglo que tiene un orden específicamente definido. Ej. [a,b,c,d] = arreglo ordenado alfabéticamente, o [1,2,3,4,5] arreglo de números ordenados de menor a mayor.
-   Tu puedes programar el control y orden de mayor a menos o de la letra A – Z o viceversa.
-   Además, el algoritmo de ordenamiento te da unos pasos a seguir para que el orden que buscas se logre.

### ALGORITMOS DE ORDENAMIENTO MAS UTILIZADOS:

#### MERGE SORT: principio divide y vencerás, este método agarra el array y los separa y va resolviendo problemas pequeños e individuales, después ordena y asegura de que halla quedado bien y es un proceso rápido.
-   Es convenible utilizarlo cuando se tienen demasiados datos y no pocos.

#### INSERTION SORT:
-   Es mas básico, va comparando valores y los va colocando lo valores mas pequeños al lado izquierdo. Este algoritmo es muy fácil de implementar.

#### BUBBLE SORT:
-   Es un elemento básico, se encarga de comparar por pares y repite la secuencia hasta terminar, se utiliza mas en pocos datos para que sea más eficiente.

### QUICK SORT:
-   Va a dividir en problema en dos y así mismo va a ir ordenando el problema, es un algoritmo mas eficiente que la mayoría, es muy bueno en comparación de los demás.

#### S Y N:
-   Son datos que vamos a estar utilizando a menudo cuando estas leyendo o investigando.
-   S= va a ser la secuencia de objetos ordenables (los números a ordenar).
-   N= numero de elementos en S (secuencia de elementos a ordenar).

## Recursividad
-   La recursividad es la capacidad de una función de llamarse a si misma.

-   Las funciones recursivas tienen las siguientes caracteristicas.

-   Se llaman a si mismas.
-   Tienen de argumento un valor que cambio por cada iteración.
-   Regresan algún valor definido en cada iteración.
-   Tienen una condicional que define el fin del ciclo.
-   Manejan un stack que es el órden de las ejecuciones de las iteraciones de la función, empezando por la última a llamar.


## Author

-   Deiwin Ignacio Monsalve Altamar
