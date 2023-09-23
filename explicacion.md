# Explicación:

¿Que es Express.js?
Express es un framework de Node.js. Un Framework es código creado por otros desarrolladores para dejarnos las bases para la creación de proyectos backend.

El desarrollo es mas fácil y nos ahorra la creación de mucho código si lo hicieramos solo con Node.js.
Express es un framework unopinionated, quiere decir que no bos dice como debemos crear nuestra estructura de nuestro proyecto solo nos da código ya hecho y nosotros debemos crear esa estructura. Esto lo hace muy versatil y ligero.

Express esta basado en Node.js por eso aprovecha todas las ventajas de Node.js.

## Instalación de Express.

Para poder instalar Express debemos tener instalado Node.js.

Comprobamos la instalación de Node.js:

`node --version`

Vamos a crear una servidor con Node.js y lo tenemos en una carpeta llamada servidor-node.
Tambien he creado una carpeta llamada express, donde voy a instalar express.
Instalamos express:

`npm i express`

Tambien voy a instalar nodemon a modo desarrollo, tanto en el servidor de node como en express:

`npm i nodemon -D`

## Conceptos básicos cliente-servidor:

Cuando desarrollamos aplicaciones con express, estamos es desarrollando una aplicaciones backend. Por esto es necesario tener muy claro el módelo cleinte servidor, el cual es el usado por muchas aplicaciones frontend y backend para poder comunicarse.

Para que el frontend y backend se puedan comunicar usan el protocolo de cominicación HTTP.

El cliente(frontend) realiza una petición HTTP al (servidor)backend. esta operacion de enviar datos del cliente por medio del protocolo HTTP se le conoce como ***Request***, una petición. El servidor lo va a procesar y va a retornar una respuesta, retorna tambien datos al cliente, con algun mensaje si todo fue bien o fue mal. Esto es lo que llamamos ***Response*** respuesta.

El servidor lo vamos a hacer con Node.js y Express.js. Encima de Node.js añadiremos a Express.js.

Vamos a ver como seria crear el servidor básico con Node.js lo tenemos en la carpeta servidor-node.
Tambien he creado un servidor en la carpeta servidor-express.

## Proyectos:
Para dar explicación he creado diferentes proyectos donde se pueden ver los diferentes apartados que podemos generar con Express.js

1. El tema de routing con express esto lo vemos con el proyecto routing-express.
2. El tema de metodos http lo tenemos en el proyecto metodos-http.

Ahora veremos en funcion del tipo de peticion que haga el cliente, que puede responder el servidor.
De momento solo hemos creado rutas que retornan texto plano. Pero podemos enviar archivos HTML, videos, audios, imágenes, o formatos en XML o JSON.
OJO con esto porque las APIs retornan normalmente archivos JSON.

4. Vamos a ver como retornar otros tipos de archivos en el proyecto peticiones.
En este ejemplo vemos como podemos retornar un JSON y tambien los codigos de estados, como podemos enviar un respuesta de solo códogo de estado por si esta activo o no el servidor.

4. Ahora vamos a ver el objeto request body:
Para esto he creado el proyecto request-body.
Veremos como podemos recibir la informacion que nos envia el cliente por medio de objeto request body.

En este proyecto hemos visto como capturar por medio del objeto req.body lo que nos envia el cliente por medio de una peticion .post, ademas hemos visto los metodos necesarios para procesar la informacioj que vienen.

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

5. Request-params:
Tenemos el proyecto request-params para saber como poder procesar datos que viene por la url en peticiones desde el cliente.
Todas estas son peticiones de tipo get.

6. Queries:
Adicionalmente a los parametros se pueden enviar otro tipo de informacion por la url. El signo de ? se le llama query params, o una consulta, es informacion adicional que el navegador puede enviar al backend para que este la utilice.

http://127.0.0.1:3000/usuario/alfred3ks?x=20&y=22

Las query seria a partir del simbolo de interrogación:

?x=20&y=22

http://127.0.0.1:3000/search/?course=javascript
http://127.0.0.1:3000/search/?user=luis&user=pepe&user=mario&user=pepito

?course=javascript
?user=luis&user=pepe&user=mario&user=pepito

7. Todos los métodos:
A parte de los métodos get, post, put, delete, en express hay una funcion especial que tal vez no es muy usada pero debemos saber que existe.

Es el método all.

Lo vemos en el proyecto todos-los-metodos.

8. Introducción a los Middleware:

Hasta ahra hemos creado rutas que cuando el navegador las solicita el servidor las procesa y muestra algo.

Vamos a tratar de entender un concepto que esta realcionada con las rutas, son los Middleware.

En express este concepto es muy importante.

9. Vamos a ampliar mas el concepto de middleware, para esto tengo el proyecto 9-los-middleware2.
Lo que vemos en este proyecto es como por medio de un middleware podemos proteger las rutas, para poder mostrar las rutas podemos agregar una condicion, como podria ser consultar a una BD y verificar si el usuario existe y mostrarle o no mas información.

Vemos como protegemos el acceso a:

http://127.0.0.1:3000/dashboard/

Aquí lo importante es que el orden como coloquemos las rutas y los middleware importa, porque se iran evaluando unos mostraran un mensaje o responderan a next(). Si alguno ya responde no se evaluaran mas middleware o rutas. OJO con eso.


