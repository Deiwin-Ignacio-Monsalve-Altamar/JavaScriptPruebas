# curso-platzi-react-avanzado ⚛️

Paso 2: Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con: npm i webpack wepack-cli --save-dev.
Paso 3: Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un console.log('Empezamos el curso!').
Paso 4: Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack
Paso 5: Instalaremos html-webpack-plugin con: npm i html-webpack-plugin --save-dev.
Paso 6: Instalaremos webpack-dev-server con: npm i webpack-dev-server --save-dev.
Paso 8: se añade un nuevo script llamado build: "build": "webpack",. se ejecuta npm run build
Paso 7: Añadiremos un nuevo script llamado dev: "dev": "webpack-dev-server". npm run dev
```
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin()
        ]
}
```

### Instalación de React y Babel
En esta clase vamos a configurar React instalando las dependencias npm i react react-dom y Babel para poder transpilar código jsx a JavaScript Vanilla con: npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev.

Ahora añadiremos en nuestro webpack.config.js lo siguiente:
```
// webpack.config.js

{/*...*/}
module.exports = {
        {/*...*/}
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /node_modules/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: [
                                                        '@babel/preset-env',
                                                        '@babel/preset-react'
                                                ]
                                        }
                                }
                        }
                ]
        }
}
```

#### Linter, extensiones y deploy con Now
En esta clase haremos que el desarrollo sea más ágil y correcto siguiendo los siguientes pasos:

Vamos a instalar StandardJS como dependencia de desarrollo con: npm i standard --save-dev. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React.
Agregaremos un nuevo script en nuestro package.json: ""lint"": ""standard"".
Ahora vamos a ignorar aquellos archivos que no queremos que el Linter arregle, añadiremos en nuestro package.json lo siguiente:
```
""standard"": [
	""ignore"": [
		""/api/**""
	]
]
Ahora, queremos que nuestro Linter nos detecte los errores a medida que vamos escribiendo, para hacer esto añadimos lo siguiente a nuestro package.json:
""eslintConfig"": {
	""extends"": [
		""./node_modules/standard/eslintrc.json""
	]
}
```

Ahora debemos tener lo siguiente en nuestro editor de código para que funcione todo al pie de la letra:
Tener instalada la extensión ESLint
Si quieres que al guardar los cambios se formatee tu código deberás tener instalada la extensión Prettier
Tener las siguientes configuraciones en VSCode:
Format On Save: false
Prettier: Eslint Integration: true
Eslint: Auto Fix On Save: true
Ahora utilizaremos Now para hacer el deploy de nuestro proyecto.
Descargaremos e instalaremos Now para que nos registre de una manera mucho más fácil los tokens de acceso y podamos continuar con el curso.
Entraremos a la carpeta de api y notaremos que ya tiene un archivo now.json que preparamos para ti con toda la configuración necesaria para hacer el deploy.
Para desplegar el proyecto del backend haremos lo siguiente en nuestra terminar:
cd api
Cambiamos el name de la aplicación en el now.json
Finalmente ejecutamos now
Ahora para desplegar nuestro front haremos lo siguiente:
Crearemos un archivo now.json en el root de nuestro proyecto con lo siguiente:
```
{
	""version"": 2,
	""name"": ""petgram"",
	""builds"": [
		{
			""use"": ""@now/static-build"",
			""src"": ""package.json""
		}
	],
	""routes"": [
		{
			""src"": ""(.*).js"",
			""dest"": ""/$1.js""
		},
		{
			""src"": ""(.*).json"",
			""dest"": ""/$1.json""
		},
		{
			""src"": ""/.*"",
			""dest"": ""index.html""
		}
	]
}
```
En nuestro package.json añadiremos el siguiente script: ""now-build"": ""npm run build"".
Finalmente en la raíz de nuestro proyecto ejecutaremos now para que nos dé una URL en la que se verá nuestro proyecto."

#### Styled-components
.
Los styled-components son una de las nuevas formas de usar CSS en JavaScript moderno. Está basado en los CSS modules, una forma de escribir CSS que se enfoca el que el alcance de los estilos funcione por componente y no se filtren a ningún otro elemento de la página.
.
Los styled components se basan en crear componentes de carácter estético para hacer código más semántico y evitar los problemas de especificidad que trae el CSS tradicional.
.
Los styled components le permiten escribir CSS simple en sus componentes sin preocuparte por las colisiones de nombres de clase y haciendo uso del poder de JavaScript para manejar estilos con lógica (basado en props).
.
Nota: en styled components escribes CSS exacto, así que prácticamente todo lo que puedes hacer en CSS lo puedes hacer en styled components y se escribe igual.
.
Es bastante sencillo, sólo tenemos que seguir 3 pasos:


importar styled components
```
import styled from 'styled-components'
```

crear un componente con estilo basado en algún elemento html

```
const DivConEstilo = styled.div`
	color:red;
  background:black;

```
Utilizar el componente como si fuera cualquier componente de React
```
const Contenedor = () =>{
  return (
  	<DivConEstilo>
    	Hola Styled Component
    </DivConEstilo>
  )
}
```