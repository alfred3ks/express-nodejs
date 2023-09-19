/*

Request Body:
Ahora veremos como el cliente puede enviarles diferentes tipos de datos al servidor.
Vamos a ver como poder tomar los datos que nos envia el cliente.
Para enviar datos del cliente al servidor usaremos thunder client: Le mandaremos este JSON:
En el apartado body:

{
  "nombre": "alfredo",
  "email": "alfredo@alfredo.com"
}

Una peticion(REQUETS) que envia un cliente podemos verlo como un archivo(documento) que puede contener:
titulo,-> el endpoint, about por ejemplo:
contenido: JSON, {}, o una imagen, un texto, etc
cabeceras: Informacion de lo que envia, esto es el header, JSON

*/

const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  //Usamos el método send de express: Metodo importante:
  resp.send('Home');
});

// Este metodos permiten a express procesar texto y json recibido en el body:IMPORTANTE!!!!🎈🎈🎈🎈
// OJO Estos metodos simpre antes de las rutas:
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Para procesar los datos que vienen de un formulario Form-encode(thunder client)

// Cuando el cliente nos envia un objeto JSON o un texto plano o datos de un formulario aqui la procesamos:
app.post('/user', (req, resp) => {
  // Con la propiedad body podemos ver el cuerpo de la peticion:
  const dataBody = req.body;
  console.log(dataBody);
  resp.send('New user created');
});

// Ruta que no existe: Cuando solicita algo que no existe respondemos esto: OJO al método use()
app.use((req, resp) => {
  //Usamos el método send de express: Método importante:
  // Mandamos un código de estado con el metodo status encadenado:
  resp.status(404).send('The page does not exist');
});

// Arrancamos el servidor:
const port = 3000;
app.listen(port, '127.0.0.1');
console.log(`Server on http://127.0.0.1:${port}`);
