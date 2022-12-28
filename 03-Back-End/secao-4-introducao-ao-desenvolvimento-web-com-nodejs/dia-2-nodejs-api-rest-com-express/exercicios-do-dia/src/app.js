const express = require('express'); // importanto biblioteca express
const fs = require('fs').promises; // importando fs
const path = require('path'); // importando path

const app = express(); // criando variavel para instanciar o express
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
};

/* app.get('./movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}); */

/* app.post('movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFile();
    const newMovie = {
      id: movies[movie.length - 1].id + 1,
      movie,
      price,
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allMovies);
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}); */

/* app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params; // desestruturando o id do corpo da requisição
    const { movie, price } = req.body; // desestruturando o movie e price do corpo da requisição
    const movies = await readFile(); // chamando a função de leitura do JSON
    const index = movies.findIndex((element) => element.id === Number(id)); // localizando o index correspondente ao id do parametro da requisicao
    movies[index] = { id: Number(id), movie, price };
    const updatedMovies = JSON.stringify(movies, null, 2); // fazendo o parse das infos para string JSON
    await fs.writeFile(moviesPath, updatedMovies); // escrevendo no arquivo movies.json o conteudo atualizado
    res.status(200).json(movies[index]); // utilizando o metodo status para enviar o codigo de resposta HTTP 200 e retornar o filme atualizado em formato json como resposta
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}); */

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params; // desestruturando o id do parametro da requisição
    const movies = await readFile(); // chamando a funcao de leitura do JSON
    const filteredMovies = movies.findIndex((element) => element.id !== Number(id)); // filtrando o array pelos objetos que nao possuem o ud que o fornecido pelo parametro da requisicao
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies); // escrevendo no arquivo movies.json utilizando o modulo fs
    res.status(204).end(); // utilizando o metodo status para enviar o codigo de HTTP 204 como resposta
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app; // exportando a variavel