// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get('/', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post(booksSlashId, booksController.create);
router.put(booksSlashId, booksController.update);

export default router;