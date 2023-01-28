const { User } = require('../models');

const getAll = async () => User.findAll();

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const getByIdAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
};

const create = async (fullName, email, phoneNum) => {
  const user = await User.create({ fullName, email, phoneNum });

  return user;
};

const update = async (id, fullName, email, phoneNum) => {
  const [updateUser] = await User.update(
    { fullName, email, phoneNum },
    { where: { id } },
  );

  console.log(updateUser); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updateUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy({ where: { id } });
  console.log(user); // confira o que é retornado quando o user com o id é ou não encontrado;
  return user;
};
module.exports = {
  getAll,
  getById,
  getByIdAndEmail,
  create,
  update,
  deleteUser,
};