# CURSO HTML AND CSS

-   Optimizacion de imagenes
Tamaño máximo recomendado para una imágen:

70kb
.
Herramientas para optimizar imágenes:

(Tiny PNG)[https://tinypng.com/]: Comprime el tamaño de una imagen, para hacerla más ligera.

Verefix: Elimina los metadatos de una imagen, para reducir su tamaño.


#### Tag

-   Img colocar imagenes
-   Figure - agregar pequeña descripcion a la imagen ademas que es un contenedor donde va la imagen para colocarle tamaño
-   figcaption : colocarle el texto a la de forma semagtica o descripcion en footer

### Formulario
Es importante utilizar la etiqueta <form></form> para indicar que utilizaremos un formulario, ademas de la semantica y buenas practicas.
Dentro de estas etiquetas indicaremos los elementos del Formulario como lo son…
<label></label> que sera como nuestro “Contenedor” en esta ocasión. dentro de el pondremos la etiqueta <span></span> (No es necesario) para colocar un texto haciendo alusión al contenido esperado (nombre, contraseña, fecha etc…) y viene una de las etiquetas importantes la cual es <input> aqui es importante aclarar que hay muchos tipos de Input, los que veran en este ejemplo son text, password, date, time pero hay muchos mas…
Tambien esta el atributo placeholder para colocar un texto como guia dentro de la caja (Input) y este al hacer click sobre el se eliminara.



-   Usos
input para formularios
button para cualquier tipo de botón que necesitemos en nuestro proyecto

-   https://developer.mozilla.org/es/docs/Web/HTML/Atributos/autocomplete


¿Que es CSS?

```
/*Algunos Pseudo-classes:*/
:root{}
//representa elemento HTML, con la especificidad de clase //usado para anidar variables CSS
:active
//se activa al hacer clic down
:visited
//cambio visual cuando se visita un enlace
:hover
//permite cambiar el estado de un elemento cuando elmause se sobrepone sobre él
:first-child // para afectar solo al primer hijo // se coloca en el padre (ul) para afectar a su primer hijo (li)
:last-child // para afectar solo al ultimo hijo
:not  //negar una codiciones (ignorar una condicion) //ejemplo .clase:not(last-child)
//afecto a todos menos el ultimo
:empty 
//ayuda a detectar cuando un elemento esta vacio. //ejemplo .class:empty{background:yellow;} //resaltar
:nth-child() 
// tag:nth-child(2){} //afectara al segundo elemento
```

### Herencia y sus valores:
Inherit. Este es un valor por medio de una keyword que especifica que, a la propiedad que se la apliquemos debe de heredar los valores de su elemento padre. Podemos decir que la palabra Inherit significa “Usa el valor de mi padre”, si el elemento padre no tiene definido dicho valor el navegador seguirá el DOM hasta que encuentre un elemento superior que lo contenga, y en ultima instancia de no tenerlo ningún elemento superior se aplicara el valor por defecto.

Initial. Este valor pertenece a la especificación CSS3 y cuando aplicamos a una propiedad el valor initial estamos dando el valor inicial y predefinido por el navegador en cuestión.

Upset. Este valor unset es una combinación entre inherit y initial, cuando utilizamos este valor en una propiedad esta tratara de heredar el valor de su elemento padre si este esta disponible, de no ser así este valor colocará el valor de la propiedad en su valor inicial, como si usáramos inherit e initial juntos.

### Demo de especificidad y orden en selectores

Los !important estarán por encima de los demás estilos. Sin embargo, son mala práctica y no se deberían usar.
Los estilos embebidos en el HTML, es decir inline styles están por encima de las clases y IDs. Sin embargo, también se deberían evitar.
Los IDs están por encima de las clases. Los IDs son específicos, si se usa uno en un archivo HTML ya no se podrá repetir más en ese mismo archivo. Mientras que las clases si se pueden repetir en cualquier elemento.
Un estilo de etiqueta es el último valor que el navegador tiene en cuenta antes de tomar los estilos por defecto de esa etiqueta. Los estilos de etiqueta son los que menos peso tienen.


## Recuerden.
-   1- Evitar usar !important
-   2- Evitar usar estilos embebidos (Estilos en la etiqueta html).
-   3- Evitar usar ID para dar estilos en CSS por que tienen mas peso y dan conflictos.

Si usan Visual Studio Code pueden ver que peso tiene el o los selectores que están usando.
Solo pongan el mouse sobre los selectores y podrán verlo de la siguiente manera (ID, Class, Elemento HTML)

### Selectores de Hermanos Adyacentes
Se hace referencia a este selector como selector adyacente o selector del próximo hermano. Sólo seleccionará un elemento especificado que esté inmediatamente después de otro elemento especificado.

Sintaxis:
```
elemento_anterior + elemento_afectado { estilos }
```

### General Sibling

Lo que estamos haciendo es un ok como hermano general vamos a modificar todas las etiquetas de párrafo que tengan como hermano general un h2. De forma general existen párrafos juntos con etiquetas h2 eso es lo que hace sibling en general va a aplicarle el estilo siempre y cuando existan a la misma línea como hermanos esa etiqueta que tu estas modificando con la tilde o el signo equivalencia.

### The child combinator (>)
se coloca entre dos selectores CSS. Solo coincide con los elementos que coinciden con el segundo selector que son hijos directos de los elementos que coinciden con el primero.
.
https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator
.

### The descendant combinator
típicamente representado por un único carácter de espacio ( ), combina dos selectores de modo que los elementos que coinciden con el segundo selector se seleccionan si tienen un elemento antepasado (padre, padre del padre, padre del padre, etc.) que coincida con el primer selector. Los selectores que utilizan un combinador descendiente se denominan selectores descendientes .
.
https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator
.

(Combinator css)[https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators]

### Medidas en Css

#### medida absoluta:
el valor de este no cambia y siempre sera el mismo asi la pagina cambie su tamaño, las medidas absolutas son:
.
-   mm = milimetros
-   cm = centimetros
-   in = pulgada
-   pc = picas
-   px = pixel


####   las medidas relativas:
estas medidas heredan el tamaño o se basan en algun tamaño que se alla seleccionado y el valor ira cambiando segun si la pagina cambia de tamaño, las medidas relativas son :
-   %
Esta medida se refiere al porcentaje de su tamaño original (dado por html(puede ser modificado))
-   em
Esta medida es relativa a su padre donde 1em es exactamente igual a su padre, llegando hasta el padre de todos html que tiene medidas por defecto , usar esta medida puede llegar a usar complicado por lo que no es tan recomendada
-   rem
Esta es la medida más usada ya que esta es la mas practica, esta siempre referencia a una la medida que esté en html , es similar al porcentaje
-   vh y vw
Esta medida es relativa al dispositivo, vh es la medida de la altura del dispositivo y vw la anchura. Se utiliza como 100vw o 100vh siendo la pantalla completa


##### Medida em
es un acronimo de elemento y lo que hace es tomar el tamaño de fuente que tenga el padre directo ejemplo:
```
.container {
   font-size: 20px
   }

.container div {
    font-size: 2em
   }
```
aqui los el tamaño del div que esta dentro de la clase container tenda un tamaño de 40px, ya que
.
1em = 20px
.
y como estamos asignandole 2 em seria como 20px + 20px
.
y si por ejemplo tenemos el siguiente caso :
```
.container {
   font-size: 20px
   }

.container div {
    font-size: 2em
   }

.container div p {
   font-size: 1.5em
   }
```
a continuacion veremos que la etiqueta p tendra un tamaño de fuente de 60px
ya que toma como referencia el tamaño de su padre ( 40px ) y haria la siguiente operacion 40*1.5 que es igual a 60, es por eso que la etiqueta p tomo el valor de 60px

##### Medidas REM
funciona igual que el em, con la diferencia que es relativo al valor de la fuente del elemento html, y no tiene en cuenta el valor heredado o del elemento que lo contiene.

Por defecto el html viene con un tamaño de fuente de 16px asi que siempre
.
1 REM = 16PX
.
Si queremos aplicar rem de una forma mas sencilla para no tener que hacer tantos calculos asemos lo siguiente
.
vamos a reescribir en css nuestro html
```
html {
      font-size: 62.5%; 
     }
```
esto lo que hara es darle a el html un valor de 10px ya que 16px - 62.5% = 10px

ahora si por ejemplo a una etiqueta le asignamos 2rem este hara referencia a 20px, o si por ejemplo le damos un valor de 1.5rem su valor sera de 15px

##### Meidas VW AND VH
Pero vw y vh sera una medida que dependerá del Viewport es decir del tamaño de la ventana del navegador.
Del tamaño que el dispositivo dará.
Recuerda que Width es el ancho y Height es el alto.
Así que el tamaño que estos tengan como te comente dependerá del viewport que como ya te lo dije igual es el tamaño de tu ventana, en ese dispositivo donde veas dicha pagina 

#### Display
En esta clase vimos los 3 tipos de display Base.
Los cuales fueron:

Block: Estos toman el 100% del width, por lo que un elemento no puede posicionarse a un lado de el.
Se le puede poner el width deseado, height deseado, añadir margin, padding sin problema. Pero recordando que ocupara este elemento todo el largo de una Fila por asi decirlo.

Inline: Estos elementos solo ocuparan el ancho dependiento de su contenido. Por lo tanto estos elementos si permiten que si un elemento cabe a lado suyo, se posicione este ahi.
Las *desventajas es que no se les puede modificar el width, height, ni colocar margin u padding tanto top, como bottom.

inline-block: Este tiene la combinación de los 2 anteriores. Haciéndolo un mejor candidato para usarlo.
Permite modificar su width, height, añadirle margin, padding sin problemas y lo mejor es que mientras que haya espacio a un lado suyo, este permitirá posicionar mas elementos ahi.

------------------------------------------------------------------
Etiquetas como p y div vienen por Default con un display:block
Etiquetas como span viene por Default con un display:inline
------------------------------------------------------------------

display:flex; permite que los hijos de el elemento se desplieguen en la misma fila. flex-direction: row es por default flex-direction: row-reverse flex-direction: colum


#### Variables (Custom properties)



#### fonts
La “puntitas al final” en la tipografias serif se llaman serifas.

En realidad al grosor no se le dice muy gorditas 😁, se le dice peso de la tipografía.

Tal como indicó Diego en la clase, no es bueno cargar muchas tipografías, normalmente se usan un máximo de 2 tipografías. Pero también es bueno no cargar muchos pesos distintos de una tipografía porque eso compromete el rendimiento, solo agrega a la importación los pesos que necesites.

Para que el renderizado de la tipografía sea mas eficiente es buen practica colocarlo en el head antes de cargar el CSS, de modo que cuando el CSS cargue ya tiene disponible las tipografías.


#### ¿Qué es Responsive Design?
Son todas esas técnicas que usamos para adaptar nuestras aplicaciones web a la mayor cantidad de pantallas
250px-Diseno-web-responsive-design.jpg
Patrones en Reponsive Design:

Mostly Fluid
Colocación de columnas
Layout shifter
Tiny tweaks
Off canvas
Para mas información: https://mediaqueri.es

Conceptos nuevos:

Viewport: área visible del navegador
Portrait: vertical
Landscape: horizontal
Mobile first: empezar un websit desde la menor resolución soportada
Deskto first: empezar un websit desde la mayor resolución soportada
