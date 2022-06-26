/*Exercícios bônus dia 4.3*/

/*<-----questão1------>*/
let n = 4;
let symbol = "*";
let inputLine = "";

for(let colunaIndex = 0; colunaIndex < n; colunaIndex +=1){
    inputLine = inputLine + symbol;
};

for(let index = 0; index < n; index+=1){
    console.log("*****");

}
console.log("");

/*<-----questão2------>*/
let size = 5; //tamanho da base do triângulo
let symbol2 = "*"; //simbolo que vamos usar para formar o tringulo
let inputLine2 = ""; //vai nos ajudar a contar a quantidade de asteriscos impressos em uma linha.

for(let lineIndex = 0; lineIndex <= size; lineIndex +=1){
    console.log(inputLine2);
    inputLine2 = inputLine2+symbol2;
}

