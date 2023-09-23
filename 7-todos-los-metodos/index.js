/*

Todos los metodos: .all()
Existe un metodo en express llamado .all().

Con este método le dice que puede funcionar con todos los metodos http. Es un todo en uno.

Podemos hacer peticiones .get(), .post(), .delete(), .put()

Es como tener multiples rutas en una sola.
Probar con thunder client y veras que funciona con todos los verbos.

*/

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.send('Home');
});

// http://127.0.0.1:3000/info
app.all('/info', (req, resp) => {
  resp.send('Server info');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
