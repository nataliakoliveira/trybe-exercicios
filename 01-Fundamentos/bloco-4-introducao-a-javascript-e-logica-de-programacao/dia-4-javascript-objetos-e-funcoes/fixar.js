/*let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
};

//diasDaSemana.1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo
//----------------------------------------------------------------------------------------
let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4
//---------------------------------------------------------------------------------------
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque
//-------------------------------------------------------------------------------------------
let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey */
//---------------------------------------------------------------------------------------
//<=================PARA FIXAR================>

let player = {
  nome: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};
console.log(
  "A jogadora " + player.nome,
  player.lastName,
  "tem " + player.age,
  "anos de idade."
);

let medals = "medals";

console.log("A jogadora "+ player.nome + player.lastName, "foi eleita a melhor do mundo por " + [player.bestInTheWorld.length],"vezes");
console.log("A jogadora possui " + [player.medals.golden], "medalhas de ouro e " + [player.medals.silver], "medalhas de prata.")

//--------------------------------------------------------------------------------------------------------------------------------------------

let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}
//----------------------------------------------
//<=================PARA FIXAR================>
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let index in names) {
    console.log("Olá "+ names[index]);
  }
//--------------------------------------------------------
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let index in car) {
    console.log(index, car[index]);
  }