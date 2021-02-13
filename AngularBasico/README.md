# Curso de Angular

### ¿Qué es Angular?

Es un Framework para desarrollo Frontend con tecnología JavaScript escrito con TypeScript y hecho por Google.


### CLI
comandos básicos para usar Angular:
ng --version -> versiones que tienes en tu proyecto
ng serve -> para levantar el servidor (puedes enviarle mas datos como puerto o dominio donde quieres que corra, normalmente usa el puerto 4200)
ng build --prod -> similar a serve, se usa para alistar la aplicación para producción, te genera una capeta en tu proyecto llamada “dist” donde crea lo necesario para montar en producción.

### String interpolation
Los templates de Angular utilizan html como lenguaje de maquetación donde se puede ejecutar interpolación de strings mediante una implementación de moustache donde dentro de los corchetes puedes hacer una sentencia que se resolverá como un string para ser renderizado en el DOM.

Nuestros templates tienen acceso a las variables exportadas en el arc.ts con el mismo nombre, mismas que podemos renderizar mediante los string interpolation, por ejemplo:
```
<h1>{{ title }}</h1> <!-- Renderiza el título exportado en el archiv ts -->
<p>
  Las suma de 2 + 2 = {{ 2 + 2 }} <!-- 4 -->
</p>
```
Angular divide la lógica de la vista, pero puedes hacer uso de los elementos de uno o del otro en las 2 partes.

### Data Binding

El enlace de datos en aplicaciones (Data-Binding) en AngularJS es la sincronización automática de datos entre el modelo y los componentes de la vista. La forma en que AngularJS implementa el enlace de datos le permite tratar el modelo como la única fuente de verdad en su aplicación. La vista es una proyección del modelo en todo momento. Cuando el modelo cambia, la vista refleja el cambio, y viceversa.

### ¿Qué son las directivas estructurales?
Las directivas estructurales son responsables del diseño HTML. Dan forma o remodelan la estructura del DOM, generalmente agregando, quitando o manipulando elementos.

Al igual que con otras directivas, aplica una directiva estructural a un elemento host. Luego, la directiva hace lo que se supone que debe hacer con ese elemento de host y sus descendientes.

Las directivas estructurales son fáciles de reconocer. Un asterisco (*) precede al nombre del atributo de la directiva como en este ejemplo.

#### ngForOf
Una directiva estructural que genera una plantilla para cada elemento de una colección. La directiva se coloca en un elemento, que se convierte en el padre de las plantillas clonadas.

#### Descripción
La directiva ngForOf se usa generalmente en la forma abreviada * ngFor. De esta forma, la plantilla que se representará para cada iteración es el contenido de un elemento de ancla que contiene la directiva.

Se utilizan los [] corchetes para decirle a Angular que debe manejar determinada propiedad o atributo.
Siempre que requieras que Angular maneje Algo por ti, utiliza los [] y de esta forma podrás utilizar el Property Binding.

Property Binding: Es uno de los 4 tipos de Data Binding de Angular. Permite enviar información desde la vista/HTML hacia nuestro controlador/TS. Este tipo de enlace de datos se representa con los [], mientras que el Event Binding se representa con los () paréntesis. Es por ello que el Two Way Data Binding o enlace de doble canal se utilizar con [( ngModul )].

#### Decoradores:
Un decorador angular es una clase especial de declaración que puede acoplarse a una clase, método, propiedad o parámetro. Los decoradores se declaran de la siguiente manera @expression. Gracias al parámetro @ podemos reconocer fácilmente que estamos hablando de un decorador.

Generalmente usamos los decoradores para extender servicios de terceros, de esta manera evitamos modificar el código original del módulo y en tiempo de ejecución agregamos el funcionamiento que necesitamos.

#### Input
Para comunicar de un componente padre a un componente hijo usamos Input
Para pasar argumentos, desde el template padre podemos utilizar los corchetes cuadrados con el Input para pasar el argumento

#### Output
Para comunicar de un componente hijo a un componente padre usamos Output.
Los Output son eventos que podemos cachar desde nuestro componente hijo por parte del padre.
Para declararlos en nuestro componente tenemos que usar el decorador @Output sobre un EventEmitter

### Ciclo de vida de componente
Angular tiene unos eventos que ejecuta en un orden en especifico haciendo el ciclo de vida de un componente

-   constructor:
Utilizado para crear nuestro componente y ponerlo en interfaz

-   ngOnChanges
Detecta el cambio cada vez que tenemos un input. Cada vez que cambiamos la data podamos detectar esos cambios y ver el estado anterior y el estado nuevo.

-   ngOnInit
Se ejecuta una vez y es cuando el componente ya está listo en interfaz gráfica, aquí es buena idea hacer llamadas a componentes como a una REST API

-   ngDoCheck
Detecta cuando los elementos hijos de ese componente también son creados y puestos en interfaz, contiene submétodos.

-   ngOnDestroy
Detecta cuando el elemento es quitado desde la interfaz.

### Uso de generate y ng lint
-   ng lint
Revisa el código del proyecto para ver si se están cumpliendo las reglas definidas en el archivo tslint.json

-   ng lint --format json
Nos permite visualizar el resultado de la revisión con un formato json.

-   ng lint --fix
Corrige automáticamente, dentro de lo posible, los errores encontrados.

### Pipes | tuberías o transformaciones
Los pipes en Angular son transformaciones que se le puede hacer a un dato dentro de una template-expression sirve para formatear data como se desee.

Los pipes pueden ser anidados, por lo que puede ser bastante poderoso.
La sintaxis es {{ variableName | pipeName:argumentos }}

Nosotros podemos crear nuestros pipes, pero Angular por defecto provee muchos pipes que podemos implementar sin muchas complicaciones, mismos que pueden ser configurables en el app.module.ts.

-   Para buenas practicas es recomendable lo siguiente:
ng generate pipe pipes/exponential/exponential
ng generate pipe pipes/exponential/exponential

### NgModule
-   Core: Guarda toda la funcionalidad de la aplicación que va a ser compartida, es decir que genera una sóla referencia de la funcionalidad, siguiendo el principio Singleton de SOLID, facilitando así el traslado de funcionalidad entre aplicaciones.

-   Shared: Encapsula los componentes y servicios compartidos para la aplicación.

### RUTAS EN ANGULAR
En el archivo app-routing-module.ts se encuentra un objeto Route el cual sirve para incrustar las rutas del proyecto.

La sintaxis dentro del router (app-routing-module.ts):
```
import { componentName } from './url/to/componentName.component';

const routes: Routes = [
  {
    path = ‘routeName’,
    component = componentName
  },
]

```
Donde:

path = ruta relativa al home (’/’) de nuestra app
component = componente importado desde componentName.component.ts
La forma de implementar el router en un template.html es con el componente router-outlet:
```
<!-- app.component.html -->

<router-outlet></router-outlet>
```
Donde el router-outlet se reemplazará por el contenido del componente según la URL en la que estés

Páginas no encontradas (not-found)
Para definir una página no encontrada podemos utilizar la ruta '**' que simboliza cualquier ruta diferente a las anteriormente definidas, el componente también deberá de ser el objeto del componente importado.
```
  {
    path: '**',
    component: NotFoundComponent
  }
```
Nota: El orden de las rutas es importante, si algo matchea una ruta, no se segirá a la siguiente, por lo que el not-found, debería de ser la última ruta, siempre

Redirecciones
Para las redirecciones tenemos que usar las propiedades redirectTo:'route' y pathMatch:'full'
```
  {
    path: 'from',
    redirectTo: 'to',
    pathMatch: 'full'
  },
```
Donde:

path: Página actual
redirectTo: página a la que se redireccionará
pathMatch: tipo de match, en el caso de ‘full’ será con una relación exacta
Redirecciones sin recargar routerLink
Para poder movernos entre rutas sin recargar nuestra página (tipo single page application) debemos agregar a nuestras anclas ‘<a>’ la directiva routerLink envés del atributo href para que Angular determine que no haga una recarga de la página.
```
<div>
     <a routerLink="/home">Home</a> <!-- Antes <a href="/home">Home</a> -->
</div>
```
Ancla activa routerLinkActive
Puedes definir una clase para cuando una ruta matchee completamente al agregar la directiva routerLinkActive, misma que agregará una clase al elemento que contenga un routerLink, de esta manera en los estilos podrás acceder al elemento seleccionado.
.
La recomendación es llamar “active” al routerLinkActive (routerLinkActive="active">), de esta manera podrás acceder desde el css mediante la clase .active

#### routerLink

En Angular existe una directiva llamada routerLink, con ella se evita que se recargue la pagina cada vez que navegamos entre las rutas, manteniendo nuestro proyecto como una ‘Single Page Application’. La forma de aplicarlo es cambiar las referencias href en html por routerLink.

Inicial:
```
<div>
    <a href="/home">Home</a>
</div>
```
routerLink
```
<div>
    <a routerLink="/home">Home</a>
</div>
```
routerLinkActive

Esta directiva le asigna una clase determinada a la etiqueta html si y solo si esta parado en la ruta definida con routerLink, por lo general esta es “active”. Con esto podemos asignar estilos para esta clase en particular.

html
```
<nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/products" routerLinkActive="active">Products</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
</nav>
```
css
```
nav > a {
    padding: 5px;
    text-decoration: none;
}

nav > a.active {
    background-color: blue;
}
```
En este ejemplo las etiquetas ‘nav > a’ aplican un estilo en particular, pero cuando tienen asignado la clase ‘active’ se les aplica un decorador adicional.

### Servicios
Los servicios proveen datos esencialmente. La forma de crear un servicio es en la terminal con los comandos ‘ng g s nombreServicio’.
Por lo general tenemos 2 métodos esenciales en los servicios, uno para obtener todos los objetos guardados en una variable, y otro para obtener 1 objeto especifico.

### Componente para objetos
A veces es necesario crear componentes para desplegar la información de un solo objeto que provee un servicio. Para eso creamos un componente en la terminal con el comando ‘ng g c nombreComponente’

Luego de esto debemos asignarle una ruta en el archivo de routing, pero en esta ocasión tendrá un parámetro dinámico que se enviará.

### Vistas Anidadas
A veces existen componentes que se utilizan en varios otros componentes, para esto existe la técnica de vistas anidadas, la cual consiste en crear un componente que albergue los elementos que se repiten y los otros componentes que los utilizan serán rutas hijas del componente creado anteriormente.

Primero creamos el componente que almacena los elementos con el comando ‘ng g c nombreComponente’

Luego en los archivos del componente se almacenan los elementos que se utilizaran repetitivamente en otros componentes. En el archivo html se utiliza la etiqueta router-oulet para renderizar los componentes que se quieren cargar, y los elementos repetitivos se especifican.

#### Modularizacion
Un modulo encapsula varios elementos de una aplicación. Por lo general se modulariza cada vista de nuestra aplicación. Para crear un modulo se utiliza el comando ‘ng g m nombreModulo’

Es buena practica crear un modulo por vista, y dentro este una carpeta ‘components’ con los componentes que utilizara

#### Lazy Loading
Ésta técnica se encarga de fragmentar el archivo generado main.js para que cargue más rápido la aplicación, basada en la técnica “divide y vencerás”, cargando siempre el código JavaScript necesario para que la vista funcione de manera adecuada.

Con ésto claro, un pre-requisito fundamental es modularizar la aplicación. Un módulo encapsula varios elementos de la aplicación (components, directivas, servicios, etc)

#### Shared Module
Módulo compartido, donde se guardan componentes, directivas y pipes, en la cual se necesita importarlo en los otros módulos que seran utilizados.

DATO: Es una buena práctica en el “share module” guardar componentes, directivas y pipes o como tal todas las cuestiones de artefactos graficos.
.
#### Core Module
Segmenta o agrupa componentes y servicios, si o solo si se van a compartir a traves de toda la aplicación pero solo generando una referencia única. Es decir por defecto va estar en todos los módulos sin necesidad de importarlos.

DATO: Es una buena práctica en el “core module” guardar solo servicios que tengan una sola
referencia de los datos.
DATOS_2: El modulo Core sigue el patrón Singleton.
Variable global, una única instancia.

#### Guardianes
Si quieren saber mas de guardianes visiten este link guardianes , les dejo una parte del contenido que me pareció interesante

CanActivate : Mira si el usuario puede acceder a una página determinada.
CanActivateChild :  Mira si el usuario puede acceder a las páginas hijas de una determinada ruta.
CanLoad :Sirve para evitar que la aplicación cargue los módulos perezosamente si el usuario no está autorizado a hacerlo.

####  Peticiones HTTP
Se puede recibir información a través de las peticiones HTTP, haciendo el uso del método GET.
Se puede probar los resultados que se obtendrán a través de la aplicación de Postman, pero esto es sólo para revisar que estamos recibiendo la data.
Para hacer uso de las peticiones HTTP dentro de Angular se tiene que importar el HttpClientModule en el app.module.ts.

→ [ app.module.ts ]

#### Ambientes en Angular
Un entorno de aplicación en Angular (environment) es información de configuración JSON que le dice al sistema de compilación qué archivos cambiar cuando usa ng build y ng serve.
.
La recomendación es hacer ambientes dentro del directorio environments/environment.[nombre].ts, y para registrarlo necesitas modificar el archivo angular.json
.
Para agregar un nuevo ambiente al angular.json se necesitan duplicar el environment de build y de serve dentro de projects.<project-name>.architect.build.configurations.nameOfNewEnvironment y de projects.<project-name>.architect.serve.configurations.production y cambiar production por el nombre que quieras que reciba tu environment, como staging o local, etc.
.
Recuerda que es muy delicado este archivo y que lo tienes que hacer a conciencia, además de que tienes que colocar la ruta de tu archivo de environments en fileReplacements, porque lo que hace este archivo es reemplazar las ocurrencias de importación de src/environments/environment.ts por el archivo de ambiente que le indiques.

