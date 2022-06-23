let taskslist = ["Tomar café", "Reunião", "Brincar com o cachorro"];

let searchForFirstTask = taskslist[0];
console.log(searchForFirstTask);

let searchForLastTask = taskslist[taskslist.length -1];
console.log(searchForLastTask);

taskslist.push("Fazer exercicios da Trybe"); //adiciona mais uma tarefa ao final da lista
console.log(taskslist);

taskslist.unshift("Levantar e tomar um banho"); //adiciona mais uma tarefa ao inicio da lista
console.log(taskslist);

taskslist.pop(); //remove o último item da lista
console.log(taskslist);

taskslist.shift(); //remove o primeiro item da lista
console.log(taskslist);

let indexOfTask = taskslist.indexOf("Reunião"); //procurar o índice de um item no array
console.log(indexOfTask);

console.log("");
//-------------------------------------------------------------------------------------------
let menu = ["Home", "serviços", "Portfólio", "Links"];
let menuServices = menu.length["serviços"]; //obter o valor "serviços do array"
let indexOfPortfolio = menu[2]; //procurar indice do valor "portfolio"
menu.push("Contato"); //adicionar valor contato no final do array

console.log(menuServices, indexOfPortfolio, menu);

console.log("");
//------------------------------------------------------
let numero = 7;  //*7
for(let contador = 1; contador<=9;contador+=1)
console.log(numero*contador);

console.log("");
//------------------------------------------------------
let listaDeNomes = ["Natália", "Isa", "Carol", "Aline", "Ebraim", "Kadu"]; //percorrer os valores de uma lista de nomes
for(let indice = 0; indice < listaDeNomes.length; indice+=1){
    let mensagem = "Boas vindas, " + listaDeNomes[indice]+"!";
    console.log(mensagem);
}
console.log("");
//-------------------------------------------------------
let cars = ["Saab", "Volvo", "BMW"]; //acessar valores de uma lista de carros
for(index = 0; index < cars.length; index+=1){
    console.log(cars[index]);
}
console.log("");
//--------------------------------------------------------
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for(index = 0; index<groceryList.length; index+=1){
    console.log(groceryList[index]);
}
console.log("");
//----------------------------------------------------------
let names = ["João","Maria", "Antonio", "Margarida"];  //imprimir os elementos da lista com o FOR/OF
for(let list of names){
    console.log(list);
}