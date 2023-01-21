const { book } = require('../models');

const getAllBooks = async () => {
  const books = await book.findAll();

  return books
}

const getBookById = async (id) => {
  const bookById = await book.findByPk(id);

  return bookById
}

const createABook = async (title, author, pageQuantity) => {
  const createdBook = await book.create({ title, author, pageQuantity });

  return createdBook
}

const updateABook = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updatedBook
}

const deleteABook = async (id) => {
  const deleteResult = await book.destroy(
    { where: { id } },
  );

  console.log(deleteResult);
  return deleteResult;
}


module.exports = {
  getAllBooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook,
}