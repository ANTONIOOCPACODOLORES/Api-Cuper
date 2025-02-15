//Aqui va la conexion a la base de datos utilizando mongosee
import mongoose from "mongoose";
//MONGOOOSE tiene un metodo que le da una promesa cuando es exitoso es then y cuando no lo es-es catch
mongoose.connect('mongodb+srv://TonyCrz03:unamanzana@api-mobile.txb03.mongodb.net/school_control_db?retryWrites=true&w=majority&appName=API-MOBILE')
.then((db)=>console.log("Mondo db Atlas Connected"))
.catch((error)=>console.error(error));
export default mongoose;