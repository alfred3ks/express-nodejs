/*

Peticiones:
Veremos como nuestro servidor puede enviar ditintas rutas en funcion de la peticion que haga el cliente.
Tambien veremos como crear las difrentes respuestas en funcion de los metodos usados:

Tenemos los diferentes métodos de peticiones HTTP:

GET: con el cual el cliente hace peticiones al servidor y el servidor retorna informacion.
POST: El cliente realiza tambien peticion al servidor, en esa peticion le envia datos al servidor, este tiene que procesar esta información y tal vez guardarlo, tambien envia respuesta al cliente. Con POST el cliente trata de crear algo en el servidor.
PUT: El cliente mediante una peticion trata de actualizar un recurso en el servidor. Por ejemplo el nombre de un usuario.
DELETE: El cliente envia una peticion para eliminar datos en el servidor.
PATCH: El cliente mediante una peticion quiere actualizar una parte de un dato en el servidor.

Todos estes tipos de peticiones se conocen como verbos HTTP. Estos forman parte de la comunicacion con HTTP.

Las operaciones que mediante un cliente puede crear, leer, actualizar y borrar se conoce como CRUD, Create, Read, Update, Delete.
Para las funciones get que realiza el cliente lo podemos usar con el navegador sin problema, pero para el resto de peticiones tendriamos que crear una app frontend para realizar esas peticones, para eso usaremos un cliente REST de peticiones que puede ser postman o thunder client.

*/

// Requerimos express, para eso lo instalamos:
const express = require('express');

const app = express();

// Vemos las diferentes rutas se enviarar a las diferentes rutas creadas: Esto es el routing en Express:
// Respuestas a peticiones GET:
app.get('/', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('Home');
});

// Vamos a ver como servir una imagen: Ya no usaremos fs, express tiene su propio metodo,
// sendFile(), recibe la ruta y el objeto con la ruta del archivo:
app.get('/myfile', (req, resp) => {
  //Usamos el método sendFile de express, método para servir archivos OJO al objeto como segundo parametro:
  resp.sendFile('./img/logo-js.png', { root: __dirname });
});

// Vamos a ver como responder un objeto JSON:
app.get('/user', (req, resp) => {
  //Usamos el método json() de express, método para servir un objeto JSON:
  // NOTA: El editor me lo transforma a objeto de JS pero el navegador lo lee bien:
  // Tambien vemos que enviamos el código de estado:
  // Tenemos que investigar los diferentes tipos de códigos para enviar
  resp.status(200).json({
    name: 'Alfredo',
    lastname: 'Sánchez',
    age: 48,
    points: [1, 2, 3],
    address: {
      city: 'New York',
      street: 'some street 123',
    },
  });
});

// Para comprobar si el servidor no esta caido:
// No retornamos nada, ningun contenido solo el código de estado.
app.get('/isAlive', (req, resp) => {
  //Usamos el método sendStatus() de express: Metodo importante:
  resp.sendStatus(204);
});

// Ruta que no existe: Cuando solicita algo que no existe respondemos esto: OJO al método use()
app.use((req, resp) => {
  //Usamos el método send de express: Método importante:
  // Mandamos un código de estado con el metodo status encadenado:
  resp.status(404).send('The page does not exist');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
