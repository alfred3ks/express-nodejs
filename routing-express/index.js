/*
Routing en express:
Veremos como nuestro servidor puede enviar ditintas rutas en funcion de la peticion que haga el cliente
*/

// Requerimos express, para eso lo instalamos:
const express = require('express');

const app = express();

// Vemos las diferentes rutas se enviarar a las diferentes rutas creadas: Esto es el routing en Express:
app.get('/', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('Home');
});

app.get('/about', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('About');
});

app.get('/weather', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('The current weather is nice');
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
