/*

Métodos en express:
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

app.get('/products', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('List of products');
});

// Peticion POST: Ruta es la misma pero cambia el método:
app.post('/products', (req, resp) => {
  // Ejecutariamos nuestra lógica, bien sea consulta a la BD, etc.
  // code
  //Usamos el método send de express: Metodo importante:
  resp.send('Created product');
});

app.put('/products', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('Updated product');
});

app.delete('/products', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('Delete product');
});

app.patch('/products', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('An updated part of product');
});

// Ruta que no existe: Cuando solicita algo que no existe respondemos esto: OJO al método use()
app.use((req, resp) => {
  //Usamos el método send de express: Método importante:
  // Mandamos un codigo de estado con el metodo status encadenado:
  resp.status(404).send('The page does not exist');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
