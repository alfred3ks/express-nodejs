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

El cliente(frontend) realiza una petición HTTP al (servidor)backend. esta operacion de enviar datos del cliente por medio del protocolo HTTP se le conoce como ***request***, una petición. El servidor lo va a procesar y va a retornar una respuesta, retorna tambien datos al cliente, con algun mensaje si todo fue bien o fue mal. Esto es lo que llamamos ***Response*** respuesta.

El servidor lo vamos a hacer con Node.js y Express.js. Encima de Node.js añadiremos a Express.js.

Vamos a ver como seria crear el servidor básico con Node.js lo tenemos en la carpeta servidor-node.
Tambien he creado un servidor en la carpeta servidor-express.

## Proyectos:
Para dar explicación he creado diferentes proyectos donde se pueden ver los diferentes apartados que podemos genrar con Express.js

El tema de routing con express esto lo vemos con el proyecto routing-express:
El tema de metodos http lo tenemos en el proyecto methods-http

Ahora veremos en funcion del tipo de peticion que haga el cliente, que puede responder el servidor.
De momento solo hemos creado rutas que retornan texto plano. Pero podemos enviar archivos HTML, videos, audios, imágenes, o formatos en XML o JSON.
OJO con esto porque las APIs retornan normalmente archivos JSON.

Vamos a ver como retornar otros tipos de archivos en el proyecto peticiones.