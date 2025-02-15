import { Router } from "express";
import teacherscontrollers from "../controllers/Teachers.controllers.js";

const teachersRouter = Router();

// Define la ruta para obtener todos los profesores
teachersRouter.get("/getAll", teacherscontrollers.getall);

export default teachersRouter;
