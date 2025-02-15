import { Router } from 'express';
import booksController from '../controllers/books.controller.js';

const booksRouter = Router();

booksRouter.get('/getall', booksController.getAll);
booksRouter.get('/getOne/:book_id', booksController.getOne);
booksRouter.post('/insert', booksController.insert);

export default booksRouter;
