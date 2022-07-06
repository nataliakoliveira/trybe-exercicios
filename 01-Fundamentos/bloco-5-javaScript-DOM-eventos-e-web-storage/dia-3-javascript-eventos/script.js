function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//exercicio1
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function dias() {
  let getDaysList = document.querySelector("#days");
  //a cada iteração do for selecione o dia atual armazenando-o na variavel 'day' e ao mesmo tempo em que a variavel 'dayItem' armazena a criação de novas li's;
  for (index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement("li");
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayItem.className = "day holiday"; //atribui classe holiday ao li criado
      getDaysList.appendChild(dayItem); //anexe o li criado como elemento filho do ul;
    } else if (day === 4 || day === 11 || day == 18 || day == 25) {
      dayItem.className = "day friday";
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      getDaysList.appendChild(dayItem);
    }
  }
}
dias();
//---------------------------------------------------------------------
//exercicio2
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector(".buttons-container"); //armazenar o seletor do container do botao
  let newButton = document.createElement("button"); //criei um botao
  let newButtonId = "btn-holiday"; //armazenando valor da ID em uma variavel

  newButton.innerHTML = buttonName; //o nome do botao é o mesmo passado como parametro
  newButton.id = newButtonId;

  buttonContainer.appendChild(newButton);
}
createHolidayButton("Feriados");
//-----------------------------------------------------------------------
//exercicio3
function mostrarFeriados() {
  let botaoFeriados = document.querySelector("#btn-holiday");
  let allFeriados = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let newColor = "yellow";

  botaoFeriados.addEventListener("click", function () {
    for (let index = 0; index < allFeriados.length; index += 1) {
      if (allFeriados[index].style.backgroundColor === newColor) {
        allFeriados[index].style.backgroundColor = backgroundColor;
      } else {
        allFeriados[index].style.backgroundColor = newColor;
      }
    }
  });
}
mostrarFeriados();
//-----------------------------------------------------------------------
//exercicio4
function getButtonFriday(nomeBotao) {
  let botaoContainer = document.querySelector(".buttons-container");
  let criarBotao = document.createElement("Button");
  let criarBotaoID = "btn-friday";

  criarBotao.innerHTML = nomeBotao;
  criarBotao.id = criarBotaoID;

  botaoContainer.appendChild(criarBotao); //adicionar botao como filho
}
getButtonFriday("Sexta-feira");
//-------------------------------------------------------------------------
//exercicio5
function mostrarSexta(fridaysArray) {
  let botaoSexta = document.querySelector("#btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let newFriday = "Sextou!!!";
  botaoSexta.addEventListener("click", function () {
    //add um escutador de eventos ao botao
    for (let index = 0; index < fridays.length; index += 1) {
      //loop para verificar os elementos com classe sexta
      if (fridays[index].innerHTML !== newFriday) {
        fridays[index].innerHTML = newFriday;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  });
}
let decemberFridays = [4, 11, 18, 25];
mostrarSexta(decemberDaysList);
//----------------------------------------------------------------------
//exercicio6
function mouseTrue() {
  let daysOn = document.querySelector("#days"); //criei uma variavel que selecionou o id 'days'
  daysOn.addEventListener("mouseover", function (event) {
    //add eventlistener a variavel daysOn
    event.target.style.fontSize = "30px"; //aumentando fontSize
    event.target.style.fontWeight = "600"; //ele pega o evento alvo e altera o estilo de fonteWeight para 600;
  });
}
mouseTrue();
function mouseOff() {
  let daysOff = document.querySelector("#days");
  daysOff.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200"; //ele pega o evento alvo e altera o estilo de fontWeight para 200;
  });
}
mouseOff();
//-----------------------------------------------------------------------
//exercicio7
function tarefaPersonalizada(task){
let tasksContainer = document.querySelector('.my-tasks'); //variavel responsavel por armazenar o elemento com classe igual a 'my-tasks';
let taskName = document.createElement('span'); //armazena a criação de um elemento do tipo 'span'

taskName.innerHTML = task; //atribuindo à task criada, o texto passado como parametro da função
tasksContainer.appendChild(taskName); //anexando task como filha de taskContainer
}
tarefaPersonalizada('projeto') //executando função
//-------------------------------------------------------------------------
//exercicio8
function legendaCollor(color){
let tarefas = document.querySelector('.my-tasks'); //recuperando elementos que tenham a classe 'my-tasks'
let newTask = document.createElement('div'); //criaçao de nova div
newTask.className = 'task'; //add className 'task' a div criada (newTask);
newTask.style.backgroundColor = color //adicionando a cor recebida por parametro como brackground color
tarefas.appendChild(newTask); //adicionando newTask como filha da tasksContainer
}
legendaCollor('orange');
//----------------------------------------------------------------------------
//exercicio9
function selecionarTarefa(){
    let taskSelected = document.getElementsByClassName('task selected');
    let tasksID = document.querySelector('#tasks');
    tasksID.addEventListener('click', function(event){
        if (taskSelected.length === 0) { //caso taskSelected retornar um array com nenhum item
            event.target.className = 'task selected';
        } else { //caso a primeira condição retornar falso
            event.target.className = 'tasks';
        }
    }); 
}
selecionarTarefa();
//----------------------------------------------------------------------------