/*

Middleware tercera parte: Middleware de terceros:

En la seccion anterior hemos aprendido a crear nuestros propios middleware, hemos visto como proteger las rutas por medio de un middleware.

Veremos como instalar paquetes de terceros que nos permitiran añadir middleware, asi podemos reutilizar el código. No tenemos que estar nosotros creandolo.

Hay tareas comunes que necesitamos procesar, esos modulos ya han sido creados por otros desarrolladores, pues vamos a usar ese código.

El middleware que vamos a instalar es:

morgan.

Este middleware nos muestra por consola las peticiones que nos van llegando pero de manera mas bonita, le pone colores, etc. Lo podemos ver en la página de npm:

https://www.npmjs.com/package/morgan

npm i morgan

Asi ya no tenemos que crear un middleware para hacer log por consola, este ya lo tiene.

Vemos que este middleware es bastante completito.

Existen muchos middleware que podemos usar. Es cuestion de indagar cuales son en funcion de lo que necesitemos.

*/

const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware que muestra por consola la ruta visitada:
// app.use((request, response, next) => {
//   console.log(`Ruta: ${request.url}\nMétodo: ${request.method}`);
//   next();
// });

// Implementamos el middleware de morgan para el log: El formato dev:
app.use(morgan('dev'));

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
