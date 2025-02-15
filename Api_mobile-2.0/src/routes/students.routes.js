import {Router} from 'express';
const studentsRouter = Router();
import studentscontrollers from '../controllers/students.Controller.js';
studentsRouter.get('/getall',studentscontrollers.getall);
studentsRouter.post('/getOne/:student_id',studentscontrollers.getOne);
studentsRouter.post('/insert', studentscontrollers.insert);
export default studentsRouter;