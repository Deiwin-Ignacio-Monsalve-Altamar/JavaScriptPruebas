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


### Levantamiento del estado
Levantar el estado es una técnica de React que pone el estado en una localización donde se le pueda pasar como props a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

#### Introducción a React Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

- Multi Page Apps: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

- Single Page Apps (SPA): Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

React Router (v4): Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- Browser Router. Es necesario colocar el componente en la parte superior de la aplicación, lo que esté dentro de este va a servir como una Single Page App y les va a permitir al resto de las herramientas funcionar. Ya que fuera de él NO Funciona.
- Route. Representa una dirección de Internet, el path es donde va a renderizar el componente y el componente es el componente que va a renderizar, usualmente es un a página.
- Switch. Componente que nos sirve para representar 1 sola ruta de varias que podemos poner dentro del componente.
- Link. Toma el lugar del elemento ancla, evita que se recargue completamente la página, actualiza la URL sin recargar la página completa.

#### División de la aplicación en rutas
Para instalar React Router lo hacemos desde la terminal con npm install react-router-dom. Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

Link internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.

#### Mejorando la User Interface con un Layout
Aquí encuentras el archivo para hacer el reto que propone el profesor al final de la clase

React.Fragment es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:
```
import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />
```

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

#### Introducción del ciclo de vida de un componente
Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.

- Montaje:

Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: constructor, render, componentDidMount.

- Actualización:

Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos: render, componentDidUpdate.

- Desmontaje:

Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: componentWillUnmount.

```
Constructor(props){
	/*Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del 		componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferente*/
}

componentWillMonunt(){
	/*Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización (y por lo tanto no renderizar dos veces el componente).*/
}

render(){
	/*En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente*/
}

componentDidMount(){
	/*Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador y nos permite interactuar con el DOM o las otras APIs del navegador (geolocation, navigator, notificaciones, etc.).*/
}

componentWillReceiveProps(nextProps){
	/*Este método se ejecuta inmediatamente después que el componente reciba nuevas propiedades. En este punto es posible actualizar el estado para que refleje el cambio de propiedades, ya sea reiniciando su valor inicial o cambiándolo por uno nuevo.*/
}

shouldComponentUpdate(nextProps, nextState){
	/*Este método (el cual debe ser puro) se ejecuta antes de empezar a actualizar un componente, cuando llegan las nuevas propiedades (nextProps) y el nuevo estado (nextState).

Acá es posible validar que estos datos sean diferentes de los anteriores (this.props y this.state) y devolver true o false dependiendo de si queremos volver a renderizar o no el componente.*/
}

componentWillUpdate(nextProps, nextState){
	/*Una vez el método anterior devolvió true se ejecuta este método, acá es posible realizar cualquier tipo de preparación antes de que se actualice de la UI*/
}	
```

### Introducción llamadas a un API
Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

Loading: cuando la petición se envía y estamos esperando.
Error: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
Data: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

#### Enviando datos (POST)
MD5 es una pequeña librería a la cual se le da un texto y ella regresa un hash.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio MD5 Online

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c


#### Manejando los estados de la petición durante el POST
De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.


#### UI Components y Container Components
En la programación es bueno separar las tareas en diferentes funciones y en React sucede lo mismo. Cuando un componente hace demasiado, probablemente es mejor dividirlo en dos.

Esta técnica de componentes presentacionales y componentes container es común, útil y hace parte de las buenas prácticas.
-	 Tener en cuenta
Hablando de buenas prácticas de programación también se debe considerar el orden de tu código. Un ejemplo de ésto es en los imports, a mí me gusta dividirlos en: Dependencias, Componentes y Assets.

#### Portales
Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.


##### ¿Qué es, para qué es y como podemos usar un portal modal?

Un portal es un contenido HTML que está fuera del contenedor (el div id="app") de tu aplicación principal

Nos resulta especialmente relevante para crear Modales sin complicaciones extremas en el diseño ya que el nodo se encuentra a la misma altura que el de la App

-	¿Cómo lo implemementamos?

Crea el contenedor de tu modal en tu archivo index.html
<div id="modal"> </div>

En el componente donde lo vayas a utilizar importa el ReactDOM ya que a través de su método createPortal() invocaremos el contenedor externo que acabamos de crear

Crea el Portal al componente a través de ReactDOM.createPortal()

Pasa por parametro Qué renderizara y donde lo hará

#### Modales
La técnica de usar componentes genéricos para crear uno nuevo especializado se llama composición y es una herramienta que todo buen programador debe saber utilizar.

#### Hooks
Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado Hooks que permite que las funciones también tengan features que solamente tienen las clases.

Hooks: Permiten a los componentes funcionales tener características que solo las clases tienen:

useState: Para manejo de estado.
useEffect: Para suscribir el componente a su ciclo de vida.
useReducer: Ejecutar un efecto basado en una acción.
Custom Hooks: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).

useState regresa un arreglo de dos argumentos.
