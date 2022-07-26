const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
  //-------------------------------------------------------------------------------------------------

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = products.map((element))