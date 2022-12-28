const express = require('express'); // importanto biblioteca express
const fs = require('fs').promises; // importando fs
const path = require('path'); // importando path

const app = express(); // criando variavel para instanciar o express

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

app.get('./movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app; // exportando a variavel