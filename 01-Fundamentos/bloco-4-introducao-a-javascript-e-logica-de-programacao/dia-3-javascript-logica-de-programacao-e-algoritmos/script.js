/*Exercícios dia 4.3*/

/*<-----questão1------>*/
let fat = 1;

for (let index = 10; index > 0; index -= 1) {
  fat *= index;
}

console.log(fat);
console.log("");

/*<-----questão2------>*/
let word = "tryber";
let reverseword = "";
reverseword = 'word'.split('').reverse().join('');

console.log(reverseword)
console.log("");

/*<-----questão3------>*/
let array = ["java", "javascript", "python", "html1" ,"css"];
let maiorPalavra = array[0];

for (let index = 1; index < array.length; index+=1){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

let menorPalavra = array[0];

for (let index = 1; index < array.length; index+=1){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}

console.log(menorPalavra);
console.log("");

/*<-----questão4------>*/

for (let numero = 2; numero <= 50; numero +=1){
        let ehPrimo = true;
        
        for(let divisor = 2; divisor < numero; divisor+=1){
            if(numero % divisor === 0){
                ehPrimo = false;
                break;
            }
            
        }
        if (ehPrimo) console.log(numero);
    }
   



