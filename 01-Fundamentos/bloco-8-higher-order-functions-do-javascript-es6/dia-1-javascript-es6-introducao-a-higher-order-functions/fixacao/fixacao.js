const wakeUp = () => 'Acordando!!'
const coffee= () => 'Bora tomar café!!'
const sleep = () => 'Partiu dormir!!'

const doingThings = (teste) =>  teste()
// Ao chamar a função doingThings:

console.log(doingThings(wakeUp))
console.log(doingThings(coffee))
console.log(doingThings(sleep))
// Ela deve retornar o valor do respectivo parâmetro