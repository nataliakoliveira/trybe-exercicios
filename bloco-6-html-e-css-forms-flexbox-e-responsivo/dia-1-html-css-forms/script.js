const btnEnviar = document.getElementById('btnEnviar');
const btnLimpar = document.getElementById('btnLimpar');
const concordarDivulgacao = document.querySelector('#concordarDivulgacao');

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
});
//exercicioBonus
//somente se autorizar o uso de imagens, poderá enviar suas infos
concordarDivulgacao.addEventListener('change', enableSubmit);

function enableSubmit() {
    
    const agreement = document.querySelector('#concordarDivulgacao');
    btnEnviar.disabled = !agreement.checked; //operador bang
  }
