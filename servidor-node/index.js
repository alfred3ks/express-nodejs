/*

Servidor con Node.js

*/
// Requerimos desde node el módulo de http:
const http = require('http');
// Importamos el modulo file system de node: Para poder leer archivos
const fs = require('fs');

// Creamos un servidor:
const server = http.createServer((req, resp) => {
  const read = fs.createReadStream('./static/index.html');
  read.pipe(resp);
});

// Arrancamos el servidor:
const port = 3000;
server.listen(`${port}`, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
