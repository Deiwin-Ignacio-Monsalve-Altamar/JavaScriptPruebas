### ¿Cómo funcionan las aplicaciones web?

Cuando utilizas una aplicación web puedes interactuar con ella desde una computadora hasta un dispositivo móvil, pero esto no quiere decir que consume el procesamiento de tu dispositivo. Todo lo contrario, se hace en una red de servidores.

Estos servidores unen su poder de procesamiento con el fin transmitir solicitudes a todo el mundo, a su vez utilizar servidores especializados para almacenar los datos con los cuales se está trabajando, así como los datos de los demás usuarios. Como todo esto sucede sin demora alguna, parecerá que la aplicación se está ejecutando de forma nativa en tu dispositivo.

El servidor procesa la información obtenida por el navegador, luego se realizan los procedimientos necesarios de acuerdo a la lógica de negocio de la aplicación para regresar la información solicitada al cliente.

-   Ejemplo:

Cuando utilizamos Google Drive el cual es una aplicación web y abrimos un documento con Google Docs, el navegador se comunica con los servidores para ver y editar el documento.

A medida que vayas editando el documento, tu navegador trabajará de la mano con los servidores para asegurarse que todos los cambios se estén guardando.

-   Ventajas:

Muchas de las aplicaciones web que existen son gratuitas.
Puedes acceder a tu información en cualquier momento y lugar.
No dependes de un dispositivo en específico ya que la aplicación se encuentra almacenada en la web.

## que es flask 
es un microfamework, framework minimalista escrito en python es flexible es lo mas simple.

Estos son los conceptos principales que debes entender antes de hacer un Hello World en Flask:

virtualenv: es una herramienta para crear entornos aislados de Python.

pip: es el instalador de paquetes para Python.

requirements.txt: es el archivo en donde se colocará todas las dependencias a instalar en nuestra aplicación.
- pip install -r requiriment.txt
FLASK_APP: es la variable para identificar el archivo donde se encuentra la aplicación.
-   export FLASK_APP=main.py
Correlo
-   flask run
### HEllo word en flask

-   Para crear el ambiente virtual:
python -m venv venv

-   Para activar el ambiente virtual:
Source venv/bin/activate

-- Escender debuger
para refescar automaticamente cuando hagamos un cambio
crea una variable de entorno
-   export FLASK_DEBUG=1
-   echo $FLASK_DEBUG
-   flask run

### Request y Response
#### Logging:
 es una grabación secuencial en un archivo o en una base de datos de todos los eventos que afectan a un proceso particular.

Se utiliza en muchos casos distintos, para guardar información sobre la actividad de sistemas variados.

Tal vez su uso más inmediato a nuestras actividades como desarrolladores web sería el logging de accesos al servidor web, que analizado da información del tráfico de nuestro sitio. Cualquier servidor web dispone de logs con los accesos, pero además, suelen disponer de otros logs, por ejemplo, de errores.

Los sistemas operativos también suelen trabajar con logs, por ejemplo para guardar incidencias, errores, accesos de usuarios, etc.

A través de el logs se puede encontrar información para detectar posibles problemas en caso de que no funcione algún sistema como debiera o se haya producido una incidencia de seguridad.

### Request-Response:
-   Es uno de los métodos básicos que usan las computadoras para comunicarse entre sí, en el que la primera computadora envía una solicitud de algunos datos y la segunda responde a la solicitud.

-   Por lo general, hay una serie de intercambios de este tipo hasta que se envía el mensaje completo.

-   Por ejemplo: navegar por una página web es un ejemplo de comunicación de request-response.

-   Request-response se puede ver como una llamada telefónica, en la que se llama a alguien y responde a la llamada; es decir hacemos una petición y recibimos una respuesta.

### Template flask
Es un archivo html que nos permite redejar contenido dinamica y estatica

### Estructuras de control
-   Iteración: es la repetición de un segmento de código dentro de un programa de computadora. Puede usarse tanto como un término genérico (como sinónimo de repetición), así como para describir una forma específica de repetición con un estado mutable.

Un ejemplo de iteración sería el siguiente:
```
{% for key, segment in segment_details.items() %}
        <tr>
                <td>{{ key }}td>
                <td>{{ segment }}td>
        tr>
{% endfor %}
```  
En este ejemplo estamos iterando por cada segment_details.items() para mostrar los campos en una tabla {{ key }} {{ segment }} de esta forma dependiendo de cuantos segment_details.items() haya se repetirá el código.

### Herencia de templates
-   Macro: son un conjunto de comandos que se invocan con una palabra clave, opcionalmente seguidas de parámetros que se utilizan como código literal. Los Macros son manejados por el compilador y no por el ejecutable compilado.

-   Los macros facilitan la actualización y mantenimiento de las aplicaciones debido a que su re-utilización minimiza la cantidad de código escrito necesario para escribir un programa.

En este ejemplo nuestra macro se vería de la siguiente manera:
```
{% macro nav_link(endpoint, text) %}
    {% if request.endpoint.endswith(endpoint) %}
        <li class="active"><a href="{{ url_for(endpoint) }}">{{text}}</a></li>
    {% else %}
        <li><a href="{{ url_for(endpoint) }}">{{text}}</a></li>
    {% endif %}
{% endmacro %}
```
Un ejemplo de uso de macros en Flask:
```
{% from "macros.html" import nav_link with context %}
<!DOCTYPE html>
<html lang="en">
    <head>
    {% block head %}
        <title>My application</title>
    {% endblock %}
    </head>
    <body>
        <ul class="nav-list">
            {{ nav_link('home', 'Home') }}
            {{ nav_link('about', 'About') }}
            {{ nav_link('contact', 'Get in touch') }}
        </ul>
    {% block body %}
    {% endblock %}
    </body>
</html>
```
Como podemos observar en la primera línea estamos llamando a macros.html que contiene todos nuestros macros, pero queremos uno en específico así que escribimos import nav_link para traer el macro deseado y lo renderizamos de esta manera en nuestro menú {{ nav_link('home', 'Home') }}.

#### Códigos de error:
100: no son errores sino mensajes informativos. Como usuario nunca los verás, sino que entre bambalinas indica que la petición se ha recibido y se continúa el proceso.

200: estos códigos también indican que todo ha ido correctamente. La petición se ha recibido, se ha procesado y se ha devuelto satisfactoriamente. Por tanto, nunca los verás en tu navegador, pues significan que todo ha ido bien.

300: están relacionados con redirecciones. Los servidores usan estos códigos para indicar al navegador que la página o recurso que han pedido se ha movido de sitio. Como usuario, no verás estos códigos, aunque gracias a ellos una página te podría redirigir automáticamente a otra.

400: corresponden a errores del cliente y con frecuencia sí los verás. Es el caso del conocido error 404, que aparece cuando la página que has intentado buscar no existe. Es, por tanto, un error del cliente (la dirección web estaba mal).

500: mientras que los códigos de estado 400 implican errores por parte del cliente (es decir, de parte tuya, tu navegador o tu conexión), los errores 500 son errores desde la parte del servidor. Es posible que el servidor tenga algún problema temporal y no hay mucho que puedas hacer salvo probar de nuevo más tarde.

### Framework:
Es un conjunto estandarizado de conceptos, prácticas y criterios para enfocar un tipo de problemática particular que sirve como referencia, para enfrentar y resolver nuevos problemas de índole similar.