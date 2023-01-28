const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);

    if (!user) return res.status(404).json({ message: 'Usuário não existe' });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { fullName, email, phoneNum } = req.body;
    const newUser = await UserService.create(fullName, email, phoneNum);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phoneNum } = req.body;
    const updateUser = await UserService.update(id, fullName, email, phoneNum);

    if (!updateUser) return res.status(404).json({ message: 'Usuário não existe' });

    return res.status(200).json(updateUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.deleteUser(id);
    
    if (!user) return res.status(404).json({ message: 'Usuário não existe' });

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateUser,
  deleteUser,
};