// src/app.js
import express from 'express';
import './database.js'; // Importa la configuración de la base de datos
import teachersRouter from './routes/teachers.routes.js';
import studentsRouter from './routes/students.routes.js';

const app = express();
app.use(express.json());
app.use('/api/teachers', teachersRouter);
app.use('/api/students', studentsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
