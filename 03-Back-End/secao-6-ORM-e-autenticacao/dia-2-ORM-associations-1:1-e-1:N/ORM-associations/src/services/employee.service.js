// src/services/employee.service.js

const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const user = await Employee.findByPk(id, {
    include: { model: Address, as: 'addresses' },
  });

  return user;
};

module.exports = { getAll, getById };