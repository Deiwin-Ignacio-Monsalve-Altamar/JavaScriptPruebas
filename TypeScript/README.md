# Curso de Fundamentos de TypeScript

<h3>Que es TypeScript</h3>
Es un superconjunto tipado de javascript, que compila a javascript.

Lenguaje de programación tipado: Posee un conjunto de tipos para poder usarlos con las variables, pudiendo personalizarlos o extenderlos.

Lenguaje de alto nivel: Entendible por humanos y posee un alto nivel de abstracción del código máquina.

Genera como resultado código JavaScript: Emite código javascript compatible con browsers y otras herramientas de javascript.

Código abierto.

Desarrollo desde cualquier sistema.

El código puede ejecutarse en cualquier navegador o plataforma que soporte javascript.

<h3>Porque usar TypeScript</h3>
Programación orientada a objetos
Potenciar tu código JavaScript
Mayor productividad
Poderoso sistema de tipos
Compila a ES5, ES6 y más
Proyecto muy activo/Open source
Actualizaciones periódicas
Comunidad creciente
Puede prevenir cerca del 15% de bugs
Puede usar TypeScript para backend**__**

##### Instalación de TypeScript
Con el siguiente comando lo instalaremos de manera global:
```
npm install -g typescript
```
Consultar la versión del compilador de TS:
```
tsc -v
```
Compilar nuestros ficheros .ts
```
tsc your_file.ts
```
Compilar de manera ‘automática’ nuestros ficheros .ts
```
tsc --watch your_file.ts
```
No hay que tenerle miedo al TypeScript, ya que este nos creará un archivo: your_file.js.
Es decir un archivo .js compatible con todo.

#### Archivo de configuracion tsconfig.json
El archivo tsconfig. json es el que indica en un proyecto que se está trabajando con TypeScript. Lo colocas en la raíz de carpetas del proyecto y en él situamos un JSON con todas las configuraciones de trabajo para el transpilador de TypeScript.

Especifica la raiz de un proyecto TypeScript

Permite configurar opciones para el compilado


tsc // Busa la configuracion dentro del proyecto
tsc --project platzi // Especifica el directorio donde esta la configuracion
tsc file.ts // Omite la configuracion

#Tipado en TypeScript
Explicito: Define una sintaxis para la creación de variables con tipo de dato
nomVariable : Tipo de dato
Inferido: TypeScript tiene la habilidad de deducir el tipo en funcion de un valor.

-   Tipo de datos primitivos
Number > Boolean > String > Array
Tuple > Enum > Any > Void
Null > Undefined > Never >Object

-   Tipo: Any

Usado para capturar valores dinámicos
Los valores pueren cambiar de tipo en el tiempo:
– APIs externas
– Librerías de terceros

-   Tipo Void:
Representa la ausencia de tipo. usado en funciones que no retornan nada.
-   Tipo Never: 
Representa funciones que lanzan excepciones o nunca retornan un valor.

-   Diferencias entre object y Object.
Object: instancia de la clase Object de Javascript
object: tipo para valores no primitivos. Con este tipo no se puede acceder a las propiedades del objeto.


-   Array.
Al igual que en JavaScript, TypeScript permite definir un arreglo para contener un conjunto de valores, para definir los arreglos se pueden usar nos notaciones [] y Array<type>.

- Tupla
Una tupla en TypeScript es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.

- Enum:
Permiten definir un conjunto de constantes con nombre.
Tienen la ventaja de adaptarse al contexto de la aplicacion.

Las Uniones de typos son usadas en Typescript para declarar una variable que puede almacenar un valor de dos o mas tipos.

-   Unión de tipos
Permite el uso de uno o más tipos. Para unir tipos, se usa el caracter |
Ejemplo:
let userId: string | number;

-   Alias
Sirven para definir un tipo de dato con nombre personalizado. Se usa la palabra reservada type
Ejemplo:
type userId = string | number;
let myUserId: userId;

-   Tipos literales
Permiten definir rápidamente una serie de elementos constantes, se pueden usar con strings, numbers o booleanos.
Ejemplo:
let tileSize: 8 | 16 | 32;
let squareSize: ‘200x200’ | ‘500x500’ | ‘1000x1000’

-   Aserciones de tipos
Mecanismo de conversión de tipos de datos. Se parece al casting de tipos en otros lenguajes de programación.
Usa dos sintaxis.
```
//Angle Bracket: <Type>
let username : any;
username = (<string>'danijazzero').toUpperCase()
///as: variable as type
username = (username as string).toLowerCase()
```
-   Resumen
Usar never cuando vamos a lanzar excepciones en la función.
Al momento de usar la función, ponerlo en un try catch.

null y undefined son subtipos de void. A su vez, null y undefined son subtipos de :

number
boolean
string
array
tuple
enum
any
void
object

### Interfaces

Hasta donde tenia entendido en POO, una interfaz definia unicamente los METODOS de un objeto y no las propiedades como lo muestra el ejemplo que nos da el profesor. Tanto de las propiedades como los metodos se encargan las clases. Aqui es donde entra Typescript, en TS podemos tambien definir propiedades, no unicamente metodos.

Y si es util, creo que esta definicion de interfaz es un poco mas clara: Una interfaz (En TypeScript) es un tipo (como string, boolean, number, etc) mas “complejo”, en el cual defines (como enun contrato) las propiedades y metodos que se deben cumplir de cualquier objeto que lo instancie.

La diferencia entre una interfaz y una clase es que en la interfaz solo hacemos mencion de que esperamos de un objeto, en una clase mencionamos las propiedades (igual que una interfaz) pero definimos los metodos (osea, especificamos que hara ese metodo, en la interfaz solo mencionamos el nombre de la funcion)

##### Propiedades opcionales :
No todas las propiedades de una interfaz podrian ser requeridas. Usamos el simbolo ‘?’ luego del nombre de la propiedad.

```
interface PictureConfig {
	title: string;
	date?: string;
	orientation: PhotoOrientation
}
```

##### Propiedades de solo lectura:
Algunas propiedades de la interfaz podrian no ser modificables una vez creado el objeto. Esto es posible usando readonly antes del nombre de la propiedad.
```
interface User {
	readonly id: number;
	username: string;
	readonly isPro:boolean;
}
```

##### Extendiendo Interfaces.
Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes.
Utilizamos la palabra reservada extends para utilizar herencia.

```
interface Person {
name:string;
lastname:string;
}
interface Student extends Person {
person:Person
}
```

##### Clases
miembros públicos: define un modificador de acceso publico por defecto para los miembros de la clase. También es posible marcar un miembro como publico usando la palabra reservada ```public```
Clases - miembros privados: define una manera propia de declarar o marcar un miembro como privado usando la palabra reservada ```private```
```
class Person{
	private id:number;
	private name: string;
	public constructor(){}
	public getName(){
		return this.name
	}
}
```
Miembros privados ECMAScript: soporta (a partir de la versión 3.8) la nueva sintaxis JavaScript para miembros privados: ```#atributo```. Esta caracteristica puede ofrecer mejores garantias de aislamiento en miembros privados

```
class Person{
	#id:number;
	#name: string;
	public constructor(){}
	public getName(){
		return this.#name
	}
}
```
###### Metodos set y get
Como una forma de interceptar accesos a un miembro de un objeto. Esto le da una forma de tener un control más fino sobre cómo se accede a un miembro en cada objeto.
```
class Person {
	private _name:string
	constructor()
	get name(){
		return this._name
	}
	set name(name: string){
		this._name = name
	}
}
```
En nuestro objeto de clase person hariamos

```
person.name
```

##### Herencia de clases y miembros protegidos
Typescript soporta este patrón común en el mundo de la POO
Implementa la habilidad de extender codigo de clases existentes a través de la herencia.
Utilizamos la palabra extends para heredar

Se heredan solo los atributos public o protected tenemos acceso al constructor de la clase padre super()
```
class Person {
	protected id:number;
	protected name:string;
	constructor(id:number, name:string){
	
	}
}
class Student extends Person {
	private active:boolean
	constructor(id:number, name:string, active:boolean){
		super(id,name)
		this.active = active
	}
}
```
##### Clases abstractas:
Las clases abstractas son la base de donde otras clases podrian derivarse. A diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.
La palabra reservada es ```abstract```

```abstract class myClass{}```
Recordar que las clases abstractas no se pueden instanciar
Propiedades estaticas y de solo lectura

Las clases por lo general definen atributos y métodos aplicables a las instancias de las mismas. A través de la palabra reservada ```static``` se puede definir un miembro visible a nivel de clase
Al igual que las interfaces, podemos usar la palabra reservada readonly para marcar el miembro de una clase como solo lectura
```
class Person {
	static personQuantity: number = 0
	protected readonly id: number
}
```
a las propiedades ```static``` se las accede a través de la clase
```
console.log(Person.personQuantity)
```
a las propiedades ```readonly``` no se las puede modificar

##### Módulos en TypeScript
Los módulos en typescript proveen un mecanismo para una mejor organización del código y promueven su reutilización
A partir de ECMAScript 2015 los módulos son parte nativa del lenguaje Javascript

Importando y exportando modulos: Generalmente se define un modulo con la idea de agrupar codigo relacionado. Podemos tomar criterios en torno a la funcionalidad, features, utilitarios, modelos, etc.

Los miembros de modulo interactúan con el uso de las palabras reservadas import y export

##### Principio de responsabilidad unica
Idealmente un archivo deberia tener un proposito o responsabilidad unica: definir una clase, una interfaz, un enumerado, etc.
Esto mejora la legibilidad de codigo, facilita la lectura, testing y favorece su mantenimiento.

Utilizamos archivos separados y la utilizacion de import, export para lograr un poco mas de mantenibiilidad. Podemos usar tambien carpetas para separar nuestros archivos.

##### Resolviendo Modulos
Typescript resuelve la ubicacion de modulos observando referencias relativas y no relativas.
Posteriormente intenta localizar el modulo usando una estrategia de resolucion de modulos.
```
tsc --moduleResolution node
tsc --moduleResolution classic
```
diferencias
node: Modulos CommonJs o UMD, mas opciones de configuración
classic: Modulos AMD, System, ES2015, poco configurable

en ```tsconfig.json```
```
"moduleResolution": "node|classic"
"traceResolution":true
```
