//aqui va la configuracion del servidor 
import express from 'express';
import ejs from 'ejs';
import morgan from 'morgan';
import studentsRoutes from './routes/students.routes.js';
import teachersRouter from './routes/teachers.routes.js';
import booksRouter from './routes/books.routes.js';

const app = express();  //crear un hijo de express para hacer referencia al servidor con app

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', ejs); //es un mootor de vistas

//Midlewares  comunicacion de un cliente con el servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));   //para el mientras este en desarrollo dev

//Routes        
app.use("/api/students", studentsRoutes);
app.use("/api/teachers", teachersRouter);
app.use( "/api/books", booksRouter);

export default app;
