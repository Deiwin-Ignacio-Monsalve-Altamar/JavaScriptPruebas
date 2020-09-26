# ¿Qué es React.js?


React cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.
En este curso aprenderás las prácticas que la comunidad ha decidido que son buenas.

React es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

JSX es HTML dentro de Javascript

React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

### Create-react-app
Create-react-app es una aplicación moderna que se usa desde una línea de comando. Antes de ella se configuraba todo el entorno manualmente lo cual tomaba mucho tiempo.

Pasos para obtenerlo:
Se debe instalar desde la línea de comando usando
npx install -g create-react-app

Una vez instalado se crea la carpeta del proyecto con
create-react-app -nombre del proyecto-

En este punto se estará instalando React y otras herramientas, también se configurará el entorno usando Webpack.

Una vez se instala todo entra a la carpeta src donde estará todo el código fuente de la aplicación, siendo el más importante index.js que es el punto de entrada a la aplicación.

Finalmente para correr la aplicación se usa el comando
npm run start

Otras herramientas:

-   Babel: Traduce Javascript moderno (JSX) a un Javascript que todos los navegadores puedan interpretar.
-   Eslint: Lee el código y avisa de errores.

## ReactDOM.render
React y ReactDOM trabajarán en conjunto.

React como análogo a createElement
ReactDOM a appendChild
ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.

### JSX
JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

JSX tiene su alternativa que es React.createElement pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

React.createElement recibe 3 argumentos:

-   El tipo de elemento que estamos creando
sus atributos o props
-   y el children que es el contenido.
Ejemplo:
React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

### ¿Qué es un componente?
Los componentes en React son bloques de construcción.
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

##### ”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

-   ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
-   ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

#### Los componentes en React tienen vida; nacen, crecen y desaparecen .

El ciclo de vida de los componentes tiene 3 fases :
-   1- El Montaje es cuando los usuarios llegan a nuestra aplicación, cuando tienen su 1era interacción con él.
-   2- La Actualización , es cuando se ejecuta el render, generando el nuevo DOM, es cuando React manda una señal de actualización componentDidUpdate() .
-   3- Eliminación de los componentes, al entrar a otra página, varios componentes no estarán en ella, React manda la señal componentWIllUnmount(), seguido de la eliminación del código en el DOM.

### Nuestro primer componente
-   Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
-   El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.


Para VSC
```
"emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true

Or 

"emmet.syntaxProfiles": {
   "javascript": "jsx"
}
```

### Cómo aplicar estilos
Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
Para usar los estilos es necesario importarlos con import
React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
Es posible utilizar Bootstrap con React, sólo debe ser instalado con npm install bootstrap y debe ser importado en el index.js
Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

### Enlazando eventos
React dispone de eventos. Cada vez que se recibe información en un input se obtiene un evento onChange y se maneja con un método de la clase this.handleChange
Los elementos button también tienen un evento que es onClick.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo submit. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo button o manejándolo desde el formulario cuando ocurre el evento onSubmit.

### Manejo de estado
Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.
