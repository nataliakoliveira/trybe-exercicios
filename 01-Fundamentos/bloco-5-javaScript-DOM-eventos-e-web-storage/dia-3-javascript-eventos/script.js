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
  function dias(){
    let getDaysList = document.querySelector('#days');
    //a cada iteração do for selecione o dia atual armazenando-o na variavel 'day' e ao mesmo tempo em que a variavel 'dayItem' armazena a criação de novas li's;
    for(index = 0; index < decemberDaysList.length; index +=1){
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;

        if (day === 24 || day === 31) {
            dayItem.className = 'day Holiday' //atribui classe holiday ao li criado
            getDaysList.appendChild(dayItem); //anexe o li criado como elemento filho do ul;
        }else if (day === 4 || day === 11 || day == 18 || day == 25) {
            dayItem.className = 'day friday';
            getDaysList.appendChild(dayItem);
        }else if (day === 25) {
            dayItem.className = 'day holiday friday'
            getDaysList.appendChild(dayItem);
        }else{
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
        
    }
  }
  dias();
  //---------------------------------------------------------------------
  //exercicio2
  function createHolidayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container'); //armazenar o seletor do container do botao
    let newButton = document.createElement('button'); //criei um botao
    let newButtonId = 'btn-holiday'; //armazenando valor da ID em uma variavel
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;

    buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');