/*Exercícios dia 4.2*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*<-----questão1------>*/
console.log(numbers);

console.log("");

/*<-----questão2------>*/
let som = 0;
for (let index = 0; index < numbers.length; index += 1) {
    som += numbers[index];

}
console.log(som);
console.log("");

/*<-----questão3------>*/
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
    media += numbers[index] / numbers.length;

    console.log(media);
}
console.log("");
/*<-----questão4------>*/

if (media > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}
console.log("");

/*<-----questão5------>*/
let maiorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }

}
console.log(maiorNumero);
console.log("");

/*<-----questão6------>*/
let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        impar += 1

    }
}
if (impar === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(impar);
}

console.log("");
/*<-----questão7------>*/
let menorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }

}
console.log(menorNumero);
console.log("");

/*<-----questão8------>*/

for (let index = 1; index <= 25; index += 1) {
    console.log([index])
}
console.log("");

/*<-----questão9------>*/
for (let index = 1; index <= 25; index += 1) {
    console.log([index] / 2);
}
