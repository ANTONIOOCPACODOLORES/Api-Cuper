/*//este es el punto de arranque de mi aplicacion    
import app from './app.js'
import './database.js'
app.listen(app.get('port'), ()=> console.log("Server listening on port "));  //Funcion flecha para idicar que ya esta corriendo mi servidor


//npm run dev para inicializar el servidor*/

import express from 'express';
import booksRouter from './routes/books.routes.js';

const app = express();
app.use(express.json());
app.use('/api/books', booksRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
