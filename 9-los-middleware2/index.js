/*

Middleware:
Vamos a ver como los middleware pueden en funcion de su código redireccionarnos a una ruta u otra.

Utilizando un middleware yo puedo proteger algunas rutas.

*/

const express = require('express');

const app = express();

// Middleware que muestra por consola la ruta visitada:
app.use((request, response, next) => {
  console.log(`Ruta: ${request.url}\nMétodo: ${request.method}`);
  next();
});

// Rutas sin protección:
// http://127.0.0.1:3000/
app.get('/', (req, resp) => {
  resp.send('Home page');
});

// http://127.0.0.1:3000/about/
app.get('/about', (req, resp) => {
  resp.send('About page');
});

// http://127.0.0.1:3000/profile/
app.get('/profile', (req, resp) => {
  resp.send('Profile page');
});

// Middleware:
// Con este middleware evaluamos el acceso: Este middleware evalua todas las rutas y solo dara acceso si accedemos con un logging para este caso pero podemos poner lo que necesitemos:
app.use((request, response, next) => {
  if (request.query.logging === 'alfred3ks') {
    next();
  } else {
    response.send('Access denied');
  }
});

// Rutas protegida:
// http://127.0.0.1:3000/dashboard/?logging=alfred3ks
app.get('/dashboard', (req, resp) => {
  resp.send('Dashboard page');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
