const express = require('express'); // importanto biblioteca express
const fs = require('fs').promises; // importando modulo fs
const path = require('path'); // importando modulo path

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

module.exports = app; // exportando a variavel