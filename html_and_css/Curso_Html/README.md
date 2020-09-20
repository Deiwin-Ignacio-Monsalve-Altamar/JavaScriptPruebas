# CURSO HTML AND CSS

-   Optimizacion de imagenes
Tamaño máximo recomendado para una imágen:

70kb
.
Herramientas para optimizar imágenes:

Tiny PNG: Comprime el tamaño de una imagen, para hacerla más ligera.

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