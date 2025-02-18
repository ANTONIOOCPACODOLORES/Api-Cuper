// src/database.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://TonyCrz03:unamanzana@api-mobile.txb03.mongodb.net/?retryWrites=true&w=majority&appName=API-MOBILE';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB', err));
