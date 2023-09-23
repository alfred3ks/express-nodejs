/*

Middleware: Para eso tenemos el metodo en express llamado use()

Cuando el navegador realiza una peticion al servidor, se recibe esa informacion y antes de procesar las rutas  sepuede hacer algo mas.
Podriamos ejecutar una funcion especial, una creada hasta por nosotros mismos.

Primero pasaria por la funcion especial y luego pasaria a la ruta.

Aqui vemos el tercer parametro next(), si no respondemos debemos usar next()

El nombre de Middleware viene porque es una funcion especial que esta entre el navegador y las rutas.
Este es un concepto de muchos framework de backend.

Como vemos con los Middleware podemos obtener bastante informacion tenemos los objetos response, request.

*/

const express = require('express');

const app = express();

// Middleware: Cualquier ruta pasara primero por aqui:
// Parametro extra, una funcion, next()
// Ya que no respondemos, es solo un console.
app.use((request, response, next) => {
  console.log('Paso por aqui...');
  console.log(`Ruta ${request.url} y el método es ${request.method}`);
  next();
});

// Rutas
app.get('/', (req, resp) => {
  resp.send('Home');
});

// http://127.0.0.1:3000/about
app.all('/about', (req, resp) => {
  resp.send('About page');
});

// http://127.0.0.1:3000/profile
app.all('/profile', (req, resp) => {
  resp.send('Profile page');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
