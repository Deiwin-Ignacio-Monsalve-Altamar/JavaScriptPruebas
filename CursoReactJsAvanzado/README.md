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