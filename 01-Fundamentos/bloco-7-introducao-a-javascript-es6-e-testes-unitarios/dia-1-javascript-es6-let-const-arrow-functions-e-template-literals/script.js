 //exercicio1
 const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope =`${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
      /* console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.   */
 }

  testingScope(true);  
  //------------------------------------------------------------------------------------------------------------------------
//exercicio2
 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a-b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
//-----------------------------------------------------------------------------------------------------------------------------
//exercicio1 parte II
const fatorial = n => n > 1 ? n * fatorial(n - 1) : n
 
console.log(fatorial(7)); 
//------------------------------------------------------------------------------------------------------------------------------
//exercicio2 parte II
//String que será avaliada
 let string = "Natália foi no banheiro e não sabemos o que aconteceu";
//Declaro a maior string vazia
let big = "";
//Transformo a string em uma lista com o split, separando por espaços em branco
string.split(" ").forEach(word => {
  if (word.trim().length > big.length) {
    big = word.trim();
  }
});
console.log(big);  
//-------------------------------------------------------------------------------------------------------------------------------
//exercicio3 parte II
window.onload = function () {
  let click = document.getElementById("click");
  click.addEventListener('click', incrementClick);
}
var clickCount = 0;

function incrementClick() {
    updateDisplay(++clickCount);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
//-------------------------------------------------------------------------------------------------------------------------------
//exercicio4 parte II
const substituir = (nome) => {
  const frase = 'Tryber x aqui!'
  const newFrase = frase.replace('x',nome)
  return newFrase;
}

const minhasSkills =  (func) => {
  const skills = ['Css', 'HTML', 'DOM'];
  
  let result = `${func}
  Minhas três principais habilidades são:`;
  skills.forEach((skill) => {
    result = `${result}
    * ${skill}`;
  });
  return result;
};

console.log(minhasSkills(substituir('Natália')));