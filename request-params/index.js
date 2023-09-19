/*

Request Params:
Vermos como capturar los parametros que vienen por la url.
En express tenemos el objeto params. Los parametros.

*/

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.send('Home');
});

/*
OJO con esto:
/:user'
A partir de los dos puntos express captura eso como parametro.
Todo lo que viene a partir de los dos puntos es un dato cambiante. que vendra por url
El req.params nos devolvera un objeto, ese objeto tendra la propiedad con el nombre que te pasamos por los dos puntos.
{
  user: "dato del la url"
}

NOTA: Los parametros que recibimos por url por medio de req.params es un objeto, y este objeto el valor de la clave es un string.
Sabiendo eso ya sabria como tendria que tratar el dato en funcion de lo que necesite para operar. Sobre todo por numeros.

A continuacion vemos ejemplos:

*/

// http://127.0.0.1:3000/alfred3ks
app.get('/:user', (req, resp) => {
  const userName = req.params.user;
  console.log(userName);
  console.log(typeof userName);
  resp.send(`Hello ${userName}`);
});

// Vemos una ruta mas larga: Recuerda los valores que vendran sera los que vienen despues de los dos puntos :x y :y
// http://127.0.0.1:3000/add/20/30
app.get('/add/:x/:y', (req, resp) => {
  // const x = parseInt(req.params.x);
  // const y = parseInt(req.params.y);
  // const result = x + y;

  // Esto es lo mismo pero con destructuring del objeto:
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  console.log(result);
  resp.send(`Result: ${result}`);
});

// Vemos otro ejemplo:
//http:127.0.0.1:3000/users/alfred3ks/photo
app.get('/users/:username/photo', (req, resp) => {
  const { username } = req.params;
  console.log(username);
  username === 'alfred3ks'
    ? resp.sendFile('./img/logo-js.png', { root: __dirname })
    : resp.send(`Hola ${username} no tienes acceso.`);
});

//http:127.0.0.1:3000/name/alfred3ks/age/23
app.get('/name/:name/age/:age', (req, resp) => {
  const { name, age } = req.params;
  console.log(`El usuario ${name} tiene ${age} años.`);
  resp.send(`El usuario ${name} tiene ${age} años.`);
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
