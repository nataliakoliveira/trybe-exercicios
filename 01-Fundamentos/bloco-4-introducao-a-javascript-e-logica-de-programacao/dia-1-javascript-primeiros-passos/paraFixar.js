const myName = "Natália";
const birthCity = "Nazaré da Mata";
let birthYear = 1996;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030;
console.log(birthYear);

const birthCity = "São Paulo";
console.log(birthCity);
//Deu erro porque birthCity é uma constante, logo seu valor não pode ser alterado.
/*---------------------------------*/
const base = 5;
let height = 8;
const area = base * height;
const perimeter = base * 2 + height * 2;

console.log(area, perimeter);
/*---------------------------------*/
const nota = 78;
    if (nota >= 80) {
        console.log("Parabéns, você foi aprovada(o)!");
    } else if (nota < 80 && nota >= 60) {
        console.log("Você está na nossa lista de espera");
    } else {
        console.log("Você foi reprovada(o)");
}
const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);
/*----------------------------------*/
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
/*-------------------------------------------------*/
const currentHour = 1;
let message = "";
    if (currentHour >= 22) {
        message = "Não deveríamos comer nada, é hora de dormir";
    } else if (currentHour >= 18 && currentHour < 22) {
        message = "Rango da noite, vamos jantar :D";
    } else if (currentHour >= 14 && currentHour < 18) {
        message = "Vamos fazer um bolo pro café da tarde?";
    } else if (currentHour > 11 && currentHour < 14) {
        message = "Hora do almoço!!!";
    } else if (currentHour < 4 && currentHour < 11) {
        message = "Hmmm, cheiro de café recém passado";
}
console.log(message);
/*-------------------------------------------------*/
let weekDay = "terça-feira";
if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}
/*---------------------------------------------------*/
let candidato = "lista";
switch (candidato) {
  case "aprovada":
    console.log("aprovada");
    break;
  case "lista":
    console.log("lista");
    break;
  case "reprovada":
    console.log("reprovada");
    break;
  default:
    console.log("nao se aplica!");
}
/*---------------------------------------------------*/