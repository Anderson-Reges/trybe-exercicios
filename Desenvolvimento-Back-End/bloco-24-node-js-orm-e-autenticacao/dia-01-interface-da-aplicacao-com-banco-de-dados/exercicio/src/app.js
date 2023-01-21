const express = require('express');
const {
  getAllBooksController, getBookByIdController,
  createAbookController, updateAbookController, deleteAbookController } = require('./controllers/BooksController');

const app = express();

app.use(express.json());

app.get('/books', getAllBooksController)
app.get('/books/:id', getBookByIdController)
app.post('/books', createAbookController)
app.put('/books/:id', updateAbookController)
app.delete('/books/:id', deleteAbookController)

module.exports = app;