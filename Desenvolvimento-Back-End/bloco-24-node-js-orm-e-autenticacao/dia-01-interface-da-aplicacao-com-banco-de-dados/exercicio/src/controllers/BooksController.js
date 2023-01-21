const { getAllBooks, getBookById, createABook, updateABook, deleteABook } = require('../services/BooksService');

const getAllBooksController = async (_req, res) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getBookByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const book = await getBookById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createAbookController = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body
    const book = await createABook(title, author, pageQuantity);
    if (!book) return res.status(404).json({ message: 'Erro livro nao criado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updateAbookController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body
    const book = await updateABook(id, title, author, pageQuantity);
    if (!book) return res.status(404).json({ message: 'Erro livro nao atualizado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const deleteAbookController = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await deleteABook(id);
    if (!book) return res.status(404).json({ message: 'Erro livro nao foi deletado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAllBooksController,
  getBookByIdController,
  createAbookController,
  updateAbookController,
  deleteAbookController,
}