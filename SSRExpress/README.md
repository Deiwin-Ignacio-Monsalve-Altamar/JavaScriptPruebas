## Curso de Server Side Render con Express

#### Client Side Rendering (CSR)
Es lo habitual, el navegador descarga la aplicación y una vez procesada se presenta. Lo cual puede tomar algún tiempo en suceder y aburrir al usuario.
     
#### Server Side Rendering (SSR)
Es un proceso similar, pero entre los datos que envía el servidor hay un pre renderizado de la aplicación en un String el cual se interpreta como HTML para ofrecerle una preview al usuario.

Las ventajas de SSR son:

Hace que la primera carga sea mas rapida.
Mejora el SEO.
Look and Feel --> No pasa de una pantalla en blanco a de repente toda la aplicación, sino que con un primer renderizado se va gradualmente haciendo interactiva.

### Atualizando dependencias en NPM

Buscamos un proyecto que contenga react, react-router y redux.

Creamos una nueva rama del proyecto con:
git checkout -b nombre_rama

Verificar las ramas que hay que actualizar: npm outdated

Para actualizar la aplicación ingresamos: npm update

Para verificar si hubo actualización de paquetes, lo hacemos con: git status

Para verificar las dependencias actualizadas, ingresamos: git diff

Volvemos a verificar las dependencias que tenemos que actualizar con: git outdated

Hay dependencias que no se pueden actualizar directamente con el comando git update, porque estas dependencias tienen otras dependencias que pueden estar siendo utilizadas por otras dependencias.

Corremos la aplicación (npm run start) para verificar que todavia funciona la aplicación y que el proceso de actualización de dependencias se realizó exitosamente.

### Creación del servidor en Express
Creamos 2 carpetas dentro de la carpeta src, src/server: fuentes con toda la lógica relacionada con el servidor src/frontend: fuentes con toda la lógica relacionada con la app.

Movemos todos los archivos de nuestra app en react ubicada actualmente en la carpeta src, hacia src/frontend.

Creamos en la carpeta src/server 2 archivos, index.js y server.js.

Instalamos la siguiente dependencia: npm install @babel/register

En el archivo src/server/index.js, agregamos la siguiente configuración:
require(’@babel/register’)({
presets: [’@babel/preset-env’, ‘@babel/preset-react’],
})
require(’./server’)

Instalamos más dependencias: npm install express dotenv.

Express sirve para poder instalar nuestro servidor local y dotenv se utiliza para manejar nuestras variables de entorno.

Agregamos todo el código necesario para correr el servidor de express en el archivo src/server/server.js.

Creamos un nuevo script en el archivo package.json, para poder ejecutar nuestro servidor:
“scripts”: { “start:dev” : “node src/server/index” }

Ejecutamos nuestro servidor desde la consola con:
npm run start:dev.

Desde el navegador de Google Chrome, ingremos a la dirección 127.0.0.1:3000 o localhost:3000 para verificar que esta funcionando nuestro servidor de express.

### Usando Nodemon y Dotenv

Comparto mis notas, con algunos aportes agregados. Agradezco feedback:

Nodemon: nodemon es una herramienta que ayuda a desarrollar aplicaciones. Cuando se detecten cambios de archivo en el directorio Nodemon reiniciara automáticamente la aplicación de node.

npm install nodemon --dev
Teniendo instalado nodemon, podemos utilizarlo en nuestro script de desarrollo en el archivo de package.json
```
"start:dev": "nodemon src/server/index"
```
Dotenv: es un modulo de dependencia que carga variables de entorno desde un archivo .env para utilizarlas con process.env. esto permite que podamos tener la configuración del entorno almacenada y separada del código

```
npm install dotenv
```

para configurar dotenv tenemos que crear el archivo .env que es donde irán todas nuestras variables de entorno
```
ENV=development // Entorno de desarrollo en el cual estaremos trabajando
PORT=3000 // Puerto donde sera ejecutada la aplicacion
```

<h1>Abstrayendo React Router, creando history y haciendo initialState mas accesible</h1>
Primero debes abstraer React Router. Para ello, instalamos las siguientes dependencias
```
npm install history react-router-config react-router
```
history permite mantener un historial mediante sesiones

react-router permite manejar rutas dentro de react

react-router-config permite añadir configuracion extra al enrutador, en esta caso React Router

Después de instalar nuestras dependencias, debemos proceder a agregar las siguientes líneas al archivo index.js de nuestro frontend (src/frontend/index.js)
```
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
```

Con esto, creamos una historia en nuestro frontend logrando que la SPA sea la misma al momento de ir moviéndonos entre rutas.

Luego debemos agregar las siguientes líneas y modificar el ReactDOM.render justo como se muestra
```
import { Router } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
		<Router history={history}>
	    <App />
		</Router>
  </Provider>,
  document.getElementById('app')
);
```
Con esto, agregamos un router a toda nuestra app de React que cuenta con una history. Con esto podemos persistir datos a lo largo de las diferentes rutas

Ahora debemos crear el archivo de configuración de rutas que ocupará Express, este archivo lo creamos en la ruta src/frontend/routes y lo llamaremos serverRoutes.js

Dentro de este archivo, colocaremos lo siguiente:
```
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {
    exact: true,
    path: '/player:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

```
export default routes;
Básicamente estamos reescribiendo el sistema de rutas pero en este caso, para que Express pueda interpretarlas correctamente.

Por último, pero no menos importante, vamos a colocar el initialState en un archivo individual pues mas adelante accederemos a el en varias partes de nuestro código.

Para esto simplemente movemos el initialState que se encuentra en src/frontend/index.js a un nuevo archivo en esta misma ruta, lo llamaremos initialState.js

Ya para finalizar, exportamos el archivo y lo importamos en el index.js ya que es requerido aquí:
```
import initialState from './initialState';
```