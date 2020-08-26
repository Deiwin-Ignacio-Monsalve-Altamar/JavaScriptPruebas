# CURSO Api Rest
## ¿Qué es un API y para que sirve?
-   API: Application Programming Interface, conjunto de reglas que definen como se van a comunicar dos aplicaciones, por ejemplo qué tipos de request y response se van a utilizar.

-   En POO una API son todos los elemento públicos que están disponibles.

-   Conocer conceptos principales de Rest
-   ¿Qué es y cómo funciona el protocolo HTTP?
-   HTTP: Hytpertext Transfer Protocol, conjunto de reglas en las que se van a comunicar dos entidades.

-   Protocolo: conjunto de reglas.

## ¿Qué significa Rest?
-   REST: Representational State Transfer o bien transferencia de estado representacional.

-   API RESTful es una API diseñada con los conceptos de REST.

-   Recurso: todo dentro de una Api RESTFul debe ser un recurso.
-   URI: Todos los recursos se manipulan a partir de una URL (Identificadores Universales de Recursos).

### Acction: todas las peticiones de un Api Rest debe de estar asociado con un verbo HTTP:

-   Get: para obtener recursos.
-   Post: para escribir un recurso.
-   Put: Para editar un recurso.
-   Delete: para eliminar un recurso.
-   Métodos de autenticación
-   HTTP
-   Mediante HTTP auth user, debe de ir en el encabezado authorization.

### HMAC
HMAC: (Hash Message Authorizarion Code) para lo cual se necesita 3 elementos, Basado en Hash de Mensajes:
Función hash: Difícil de romper y que sea conocida por el cliente y el servidor.
Clave Secreta: para corroborar el HASH
UID: Id de usuario será utilizado dentro del HASH junto con la clave secreta y el timestamp
Es mucho más seguro que la autenticación vía HTTP.

### Acceso mediante Tokens
Roles del servidores:

Uno se encarga de la autenticación.
Otro se encarga de desplegar los recursos del API.
Flujo.

Petición para la solicitud de Token
El servidor devuelve token
El usuario hace una petición para pedir recurso.
El servidor con los recursos hace una petición al servidor de autenticación para verificar token sea valido.
Una vez verificado el token, el servidor devuelve los recursos al cliente.
Manejo de Errores en servicio REST

### Para las respuestas con error se utilizaran los siguientes códigos: en los encabezados HTTP.

400: Bad Request, que el servidor no puede procesar la petición.
404: Not Found, el servidor no encuentra el recurso buscado.
500 Invernal Error Server, la petición no se pudo procesar por un error en el servidor.

### Buenas prácticas
Utilizar sustantivos para nombrar los recursos.
Añadir los nombres en plural para las URLs
Las modificaciones se deben de hacer con su verbo HTTP correspondiente.
Para devolver recursos asociados se debe incorporar sub-recursos
autos/1/choferes
Navegabilida vía vínculos
Cuando devuelva colecciones deben de ser filtrables, ordenables y paginables.
Versionar las api
v1/autos/1/choferes

## ANEXOS

Un protocolo especifica reglas en la comunicacion entre dos entes, en este caso entre dos computudoras.

HTTP (Hyper Text Transfer Protocol) fue creado especificamente para la web.

Una de las cosas que especifica el protocolo HTTP son los verbos:

GET: solicitar datos o algun recurso.
HEAD: traer headers (como una peticion GET pero sin contenidos). Es util cuando vamos a utilizar APIs, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
POST: enviar datos a un recurso para la creación.
PUT: reemplazar por completo un recurso.
PATCH: reemplazar parcialmente un recurso.
DELETE: eliminar un recurso.
Otra de las cosas que especifica el protocolo HTTP son los codigo de estado (status codes). Sirven para describir el estado de la peticion hecha al servidor.

1xx: Indican que la peticion fue recibida y el servidor sigue trabajando en el proceso, es decir, no fue exitosa ni fue errónea, sino que esta siendo procesada aun.
2xx: Indican que la peticion fue recibida y procesada correctamente.
3xx: Indican que hay que tomar acciones adicionales para completar la solicitud. Por lo general estos codigos indican redireccion. Generalmente en los APIs no se usan redirecciones porque no contienen estados, es decir, toda la informacion esta contenida en una solicitud, no se guarda un estado en el servidor con una sesion por ejemplo.
4xx: Indican errores del lado del cliente, por ejemplo: se hizo mal la solicitud, faltan datos, headers o cualquier otro error que pueda ocurrir.
5xx: Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.
Los codigos mas comunes a la hora de interactuar con un API son:

200: Todo esta OK.
201: Todo OK cuando se hizo una solicitud POST, el recurso se creo y se guardo correctamente.
204: Indica que la solicitud se completo correctamente pero no devolvio informacion. Es muy comun cuando se hacen peticiones con el verbo DELETE.
400: Bad Request, algo esta mal en la peticion. Se nos olvido enviar un dato o algo relacionado. Por lo general la respuesta nos especifica cuales fueron los errores a la hora de hacer la peticion.
401: Unauthorized, es decir, no estamos autorizados (autenticados) a realizar la peticion.
403: Forbidden, yo no tengo acceso a ese recurso aunque este autenticado.
404: Not Found, no existe el recurso que se esta intentando acceder.
500: Interna Server Error, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. Por lo general, si no tenemos acceso al backend, no tenemos control sobre los errores 500 que retorna un API.

## Author
-   Deiwin-Ignacio-Monsalve-Altamar
