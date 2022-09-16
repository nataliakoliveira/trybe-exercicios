// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />); //Renderizamos a aplicação,

  const EMAIL_USER = 'email@email.com'; //salvamos o email da pessoa usuária em uma variável (o que é uma boa prática)

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:'); //Verificamos se a tag <h2> onde o email aparece na tela está apenas com o texto Valor:

  const btnSend = screen.getByTestId('id-send'); //Procuramos pelo campo de botao que enviará os dados.
  const inputEmail = screen.getByLabelText('Email'); //Procuramos pelo o campo de email que enviará os dados.
  userEvent.type(inputEmail, EMAIL_USER); //Simulamos a digitação da pessoa usuária no campo de email, com o userEvent.type(inputEmail, EMAIL_USER), passando o campo do input como primeiro parâmetro e o valor esperado como segundo parâmetro ('email@email.com').
  userEvent.click(btnSend); //Simulamos um clique no botão com o userEvent.click(btnSend), passando o elemento do botão como parâmetro

  expect(inputEmail).toHaveValue(''); //Verificamos se após o click, o campo de input do email retorna para vazio
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`); //verificamos se a tag <h2>, que anteriormente só exibia Valor:, agora recebe o email passado ao input, resultando em Valor: email@email.com.

});