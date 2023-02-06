import { Router } from 'express';
import BooksController from '../controllers/book.controller';

const router = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

router.get(booksSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);
router.patch(booksSlashId, booksController.partialUpdate);

export default router;