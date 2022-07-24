//construçãoMinha
const notas = {
    portugues: 4,
    matematica: 4,
    historia: 4,
};

const verifyNotas = (notasDoEstudante) => {
    return Object.values(notasDoEstudante).every((notas1) => notas1 === 4)
}

console.log(verifyNotas(notas));
//------------------------------------------------------------------------------
//exercicio1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((element) => element === name);
}

console.log(hasName(names, 'Ana'))
//exercicio2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((people) => people.age >= 18)
  }
  
  console.log(verifyAges(people, 18));