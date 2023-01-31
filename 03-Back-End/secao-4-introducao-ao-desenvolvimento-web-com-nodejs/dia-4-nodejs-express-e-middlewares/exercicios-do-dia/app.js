const express = require('express');
const validatePrice = require('./src/middlewares/validatePrice');
const validateName = require('./src/middlewares/validateName');

const app = express();

app.use(express.json());

app.post('/activities', validateName, validatePrice, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' })
});

module.exports = app;