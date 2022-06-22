/*Exercícios dia 4.1*/
/*<-----questão1------>*/
const a = 2;
const b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/*<-----questão2------>*/
const num1 = 2;
const num2 = 10;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

/*<-----questão3------>*/
const primeiroNum = 2;
const segundoNum = 8;
const terceiroNum = 10;

if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    console.log(primeiroNum);
} if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    console.log(segundoNum);
} else {
    console.log(terceiroNum);
}

/*<-----questão4------>*/
const valor = 5;
if (valor > 0) {
    console.log("positive");
} else if (valor < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

/*<-----questão5------>*/
const angulo1 = 50;
const angulo2 = 40;
const angulo3 = 90;

let soma = angulo1 + angulo2 + angulo3;
let anguloValido = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;
if (soma == 180 && anguloValido) {
    console.log(true);
} else if (soma != 180 & anguloValido) {
    console.log(false);
} else {
    console.log("ângulo inválido");
}