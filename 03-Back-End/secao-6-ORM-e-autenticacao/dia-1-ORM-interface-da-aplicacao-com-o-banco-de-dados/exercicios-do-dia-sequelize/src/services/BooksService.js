const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
}

const create = async (title, author, pageQuantity) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
}

const update = async (id, title, author, pageQuantity) => {
  const book = await Book.update({ title, author, pageQuantity }, { where: { id } }); // { where: { id } } é o mesmo que { id } no caso de um objeto com apenas uma chave e valor
  return book;
}

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
}

const getByAuthor = async (author) => {
  const books = await Book.findAll({ where: { author } });
  return books;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor
};