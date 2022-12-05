const readine = require('readline-sync')

/* const peso = 65;
const altura = 173; */

function handleBmi(peso, altura) {
  console.log(`O peso é ${peso} e a altura é ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const bmi = peso / alturaAoQuadrado;

  return bmi;
}

function main() {
  const peso = readine.questionFloat('What’ your weight? (kg)')
  const altura = readine.questionInt('What’ your height? (cm)')

  const bmi = handleBmi(peso, altura);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main()