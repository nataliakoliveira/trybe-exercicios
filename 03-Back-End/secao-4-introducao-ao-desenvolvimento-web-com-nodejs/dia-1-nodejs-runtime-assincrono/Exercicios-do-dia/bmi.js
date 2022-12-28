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

const BMI_MAX_AND_MIN = {
  'Magreza': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Sobrepeso': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obesidade grau I': {
    minBMI: 30,
    maxBMI: 34.9,
  },
  'Obesidade grau II': {
    minBMI: 35.0,
    maxBMI: 39.9,
  },
  'Obesidade grau III e IV': {
    minBMI:40,
    maxBMI: 200,
  },
}

function handleBMIResult(bmi) {
  const statuses = Object.keys(BMI_MAX_AND_MIN);

  const resultFind = statuses.find((status) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[status];

    return bmi >= minBMI && bmi <= maxBMI;
  })

  return resultFind;
}

function main() {
  const peso = readine.questionFloat('What’ your weight? (kg)')
  const altura = readine.questionInt('What’ your height? (cm)')

  const bmi = handleBmi(peso, altura);
  const bmiResult = handleBMIResult(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`situação: ${bmiResult}`)
}

main()