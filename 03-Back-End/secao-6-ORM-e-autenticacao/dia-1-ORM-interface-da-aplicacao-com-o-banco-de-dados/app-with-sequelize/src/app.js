// src/app.js

const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/user/:id', User.getById);

app.get('/user/search/:id', User.getByIdAndEmail);

app.post('/user', User.create);

app.put('/user/:id', User.updateUser);

app.delete('/user/:id', User.deleteUser);

module.exports = app;