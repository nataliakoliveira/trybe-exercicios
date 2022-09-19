// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(() => jest.clearAllMocks()); //faz com que após cada teste, o mock seja limpo

//Ao renderizar a página, a primeira piada é exibida na tela e A função fetch foi chamada uma vez
it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({ //simulando o retorno que o fetch teria
    json: jest.fn().mockResolvedValueOnce(joke), //retornando um obj que contem a função .json e criando um mock que retorna a piada
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.'); //espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1); //numero de chamadas ao fetch
  expect(global.fetch).toBeCalledWith( //chamado com os argumentos corretos
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

it('Ao clicar no botão "New joke", uma nova piada é exibida na tela', async() => {
  const joke1 = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const joke2 = {
    id: 'xXSv492wPmb',
    joke: 'What is red and smells like blue paint? Red paint!',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({ //simulando o retorno que o fetch teria
    json: jest.fn().mockResolvedValue(joke1), //retornando um obj que contem a função .json e criando um mock que retorna a piada
  });

  render(<App />);
  const newJokeBtn = screen.getByRole('button', {name: 'New joke'}) 

  expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke2.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1); //numero de chamadas ao fetch
  
  global.fetch.mockResolvedValueOnce({ //simulando o retorno que o fetch teria
    json: jest.fn().mockResolvedValue(joke2), //retornando um obj que contem a função .json e criando um mock que retorna a piada
  });
  userEvent.click(newJokeBtn);

  expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
  expect(screen.queryByText(joke1.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
});
