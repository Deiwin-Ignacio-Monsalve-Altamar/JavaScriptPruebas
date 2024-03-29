# Curso Práctico de React JS

### DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.

Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

### Create React App y Tipos de Componentes
Inicialización de un proyecto en React
Creación de nuestro sitio web usando la plantilla por defecto de create-react-app:
```
npx create-react-app nombre-de-tu-proyecto
```

Iniciar el servidor de desarrollo:

```
npm start
```
No olvides que puedes aprender a manejar de forma las diferentes herramientas de desarrollo en el Curso de Prework: Buenas Prácticas y Entorno de Desarrollo.

Creación y Tipos de Componentes
Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.

Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

### JSX: JavaScript + HTML
Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.

React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.

### Props: Comunicación entre Componentes

Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

## ¿Qué son los métodos del ciclo vida?
Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje:
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

### Actualización:
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

### Desmontaje:
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

### Manejo de Errores:
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

#### Montado:
Constructor()

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

getDerivedStateFromProps()

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

render()

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

ComponentDidMount()

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

#### Actualización:
getDerivedStateFromProps()

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

shouldComponentUpdate()

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

render()

Se llama el método render que representa los cambios en el DOM.

componentDidUpdate()

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

#### Desmontado
componentWillUnmount()

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

#### Manejo de Errores:
getDerivedStateFromError()

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

componentDidCatch()

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

### State - Events
"React nos permite responder a las interacciones de los usuarios con propiedades como onClick, onChange, onKeyPress, onFocus, onScroll, entre otras.

Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

```
class Button extends React.Component {
  state = { count: 0 }

  handleClick = () => (
     this.setState({ count: this.state.count + 1 })
  );

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Manzanas: {count}</h1>
        <button onClick{this.handleClick}>Sumar</button>
      </div>
    );
  }
}
```


Recuerda que los nombres de estos eventos deben seguir la nomenclatura camelCase: primera palabra en minúsculas, iniciales de las siguientes palabras en mayúsculas y el resto también en minúsculas.

### Agregando compatibilidad con todos los navegadores usando Babel
Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.


Instalación de Babel y otras herramientas para que funcione con React:
```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
Configuración de Babel (.babelrc):
```
{
  ""presets"": [
    ""@babel/preset-env"",
    ""@babel/preset-react""
  ],
}
```

### Webpack: Empaquetando nuestros módulos
"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:
```
npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
```

Configuración de Webpack (webpack.config.js):

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
Script para ejecutar las tareas de Webpack (package.json):

{
  ""scripts"": {
    ""build"": ""webpack --mode production""
  },
}
```

### Webpack Dev Server: Reporte de errores y Cambios en tiempo real
Instalación de Webpack Dev Server:

```
npm install --save-dev webpack-dev-server
```
Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):
```
{
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack serve --mode development --env development"
  },
}
```

### Estilos con SASS
Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

```
npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
```

Configuración de Sass en Webpack (webpack.config.js):

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


// ...

module: {
  rules: [
    {
      test: /\.(s*)css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader',
      ],
    }, 
  ],
},

// ...

plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
],`
```

### Configuración final: ESLint y Git Ignore
El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.
Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.
Instalación de ESLint:

npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
Podemos configurar las reglas de ESLint en el archivo .eslintrc.

### Añadiendo imágenes con Webpack
Vamos a usar File Loader para acceder a las imágenes de nuestro proyecto desde el código.

Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.

Instalación de File Loader:
```
npm install --save-dev file-loader
```

Configuración de File Loader en Webpack (webpack.config.js):
```
rules: [
  {
    test: /\.(png|gif|jpg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
```
Uso de File Loader con React:

```
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;
```

### Imports, Variables y Fuentes de Google en Sass
Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.
```
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```
Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.
```
# Vars.scss
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;
```
```
# App.scss
@import ""./Vars.scss""

`body {
  background: $main-color;
  font-family: $theme-font;
}
```
También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.
```
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)
```

Recuerda que puedes tomar el Curso de Sass para estudiar esta herramienta a profundidad.

### React Hooks: useEffect y useState
React Hooks: una característica de React disponible a partir de la versión 16.8 que nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones.

React es una librería desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: páginas web, aplicaciones móviles o de escritorio, experiencias de realidad virtual, entre otras.

##### El Hook useState
nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).
```
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}</div>;
}
```
#### El Hook useEffect
nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.

```
import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}</div>;
}
```
No olvides importar las funciones de los hooks desde la librería de React. También puedes usarlos de esta forma: React.useNombreDelHook.

###  Al agregar Rutas

Debemos modificar nuestra configuración del entorno de desarrollo local para que pueda funcionar con el uso de rutas, debemos ir al archivo webpack.config.js y añadir este fragmento de código antes de plugins:
```
module.exports = {
  {/*...*/}
  devServer: {  
    historyApiFallback: true,  
  },
  {/*...*/}
}
```

#### Qué es Redux
Redux es una librería escrita en JavaScript, basada en la arquitectura Flux y creada por Dan Abramov, se basa en 3 principios fundamentales:

Solamente hay una fuente de la verdad.
El estado es de solo lectura.
Solamente podemos utilizar funciones puras.
Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

### Instalación de Redux
Vamos a instalar las dependencias para poder trabajar con Redux:
```
npm install redux react-redux --save
```
Dentro de nuestro proyecto vamos a crear una carpeta para nuestros actions y otra para los reducers que utilizaremos en Redux.

El paquete react-redux nos proporciona un Provider para poder encapsular nuestros componentes por medio de un connect para poder transmitir la información que necesitemos del store a cada componente.

### Provider:
Recuerden que se tiene que encapsular nuestra aplicación dentro de un provider, porque nada fuera del provider podrá acceder al store
.
El <Provider /> hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect().
.
Dado que cualquier componente React en una aplicación React Redux se puede conectar, la mayoría de las aplicaciones mostrarán un <Provider> 'en el nivel superior, con el árbol de componentes completo de la aplicación dentro de él. . Normalmente, no puede usar un componente conectado a menos que esté anidado dentro de un<Provider>.

### Creando el Store de Redux
Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.

Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:

mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.

### Creando los reducers
Un action de Redux va a contener dos elementos:

type: para indicar la acción que se va a ejecutar.
payload: es la información que estamos mandando al reducer.
Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.


### Creando un Servicio para Gravatar
Muchas veces la mejor opción no es descargar un paquete de npm ya que podemos ver la documentación, entender cómo funciona y nosotros implementar el código necesario para nuestro caso, ya que instalar todo el paquete puede volver más pesado nuestro proyecto.

Para nuestro servicio que llamará a Gravatar vamos a crear la carpeta utils y dentro añadir el archivo gravatar.js.

### Debug con Redux Devtools
Redux Dev Tools nos va a servir mucho para entender mejor el flujo de nuestra información en nuestra aplicación y poder realizar debugging de manera sencilla.

Solamente necesitas instalar la extensión según el navegador que tengas:

Chrome
Firefox
Una vez instalado dentro de nuestro index.js vamos a añadir el siguiente código:
```
// importamos compose  
import { createStore, compose } from ‘redux’;  
...  
  
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
  
const store = createStore(reducer, initialState, composeEnhancers
```


RECORDAR GIT https://github.com/manuelojeda/escuela-js-platzi-video/tree/feature/router-redux