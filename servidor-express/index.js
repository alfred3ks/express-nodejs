/*

Servidor con express

*/
// Requerimos express, para eso lo instalamos:
const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.sendFile('./static/index.html', {
    root: __dirname,
  });
});

const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
