const peso = 65;
const altura = 173;

function handleBmi(peso, altura) {
  console.log(`O peso é ${peso} e a altura é ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const bmi = peso / alturaAoQuadrado;

  return bmi;
}

function main() {
  const bmi = handleBmi(peso, altura);

  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main()