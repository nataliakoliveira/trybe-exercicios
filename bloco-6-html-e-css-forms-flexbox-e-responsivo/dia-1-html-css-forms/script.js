const btnEnviar = document.getElementById('btnEnviar');
const btnLimpar = document.getElementById('btnLimpar');
const concordarDivulgacao = document.querySelector('#concordarDivulgacao');

btnEnviar.addEventListener('click', function(event){
    event.preventDefault(); 
    const validation = validarTexto(); //inserindo a função para validar formulário
    if(validation === false){
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
});
//exercicioBonus
//somente se autorizar o uso de imagens, poderá enviar suas infos
function enableSubmit() {
    const agreement = document.querySelector('#concordarDivulgacao');
    btnEnviar.disabled = !agreement.checked; //operador bang
  }
  concordarDivulgacao.addEventListener('change', enableSubmit);
//-----------------------------------------------------------------------
//exercicioBonus2
//função para validar os dados
function validarTexto() {
    const email = document.querySelector('#input-email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nome-completo').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }
