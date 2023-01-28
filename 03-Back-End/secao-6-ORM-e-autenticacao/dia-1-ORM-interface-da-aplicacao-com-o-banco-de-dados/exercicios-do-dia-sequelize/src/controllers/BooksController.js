const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  const {author} = req.query;
  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }

  return res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(book);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create(title, author, pageQuantity);
  return res.status(201).json(book);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.update(id, title, author, pageQuantity);
  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(201).json({message: 'Book updated successfully!'});
}

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.remove(id);
  if (!book) return res.status(404).json({ message: 'Not found' }); // se não encontrar o livro, retorna um erro 404
  return res.status(204).end(); // se encontrar o livro, retorna um status 204 (no content)
}

const getByAuthor = async (req, res) => {
  const { author } = req.params;
  const books = await BookService.getByAuthor(author);
  if (!books) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(books);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};