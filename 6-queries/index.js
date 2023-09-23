/*

Queries:
Con el objeto query obtenemos en un objeto todos los parametros query que le pasamos por la url.
Los parametros query comienzan a partir del simbolo interrogacion (?) y se separan entre ellos con el simbolo de (&).
Como podemos ver son como variables x=20&y=22.
Hay que recordad que estos parametros cuando vienen por la url asi son string.

?course=javascript

Con el objeto req.query podemos leer las query.

Podemos combinar parametros (params) con query.
*/

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.send('Home');
});

// http://127.0.0.1:3000/usuario/alfred3ks?x=20&y=22
app.get('/usuario/:user', (req, resp) => {
  const query = req.query;
  console.log(query); // { x: '20', y: '22' }
  console.log(query.x); // x
  console.log(query.y); // y
  resp.send(`${req.params.user}`);
});

// http://127.0.0.1:3000/search/?course=javascript
// http://127.0.0.1:3000/search/?user=luis&user=pepe&user=mario&user=pepito
app.get('/search', (req, resp) => {
  console.log(req.query);
  console.log(req.query.course);
  if (req.query.course === 'javascript') {
    resp.send('El curso es ' + req.query.course);
  } else {
    resp.send('Página normal.');
  }
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
