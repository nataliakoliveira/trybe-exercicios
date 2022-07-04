function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //exercicio1
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function listaDeDias(){
    let daysList = document.querySelector('#days'); //selecionei o elemento que possui o ID 'days' que é a lista

    //esse loop vai ocorrer enquanto o index for menor que o tamanho de decemberDaysList
    for(let index = 0; index < decemberDaysList.length; index += 1){ //for é para percorrer a lista
        //a cada iteração do loop FOR, selecione o dia atual armazenando-o na variavel 'day', ao mesmo tempo em que a variavel 'dayItem' armazena a criação de novas 'li';
        let day = decemberDaysList[index]; 
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day; //adicione o valor do dia atual para cada li criado
           
        //caso o dia for 4,11,18
        if(day === 4 || day === 11 || day === 18){
            dayItem.className = "day friday" // atribua a classe ''friday' ao li criado;
            daysList.appendChild(dayItem)
        }//caso o dia for 24 ou 31
        else if(day === 24 || day === 31){
            dayItem.className = "day holiday"; //atribua a classe 'holiday' ao li criado
            daysList.appendChild(dayItem)
        }//caso o dia for 25
        else if(day === 25){
            dayItem.className = "day holiday friday"; //atribua a classe 'holiday friday' ao li criado;
            daysList.appendChild(dayItem)
        }//caso seja qualquer outro dia adicione a classe day ao li criado
        else{
            daysList.appendChild(dayItem)
        }
    }
  }
  listaDeDias(); //chamando a função para ela ser executada.
//----------------------------------------------------------------

//Exercício 2:
//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//Sua função deve receber um parâmetro com a string 'Feriados'
//Adicione a este botão a ID "btn-holiday"
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function holidayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container'); //variavel que armazena o valor do container do botão
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    
    buttonContainer.appendChild(newButton);
}
holidayButton('feriados');

        