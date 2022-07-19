//exercicio1
function verifyIsNumber(value1, value2){
    if(!value1 || !value2){
        throw new Error('Preencha os campos para realizar a soma'); //lançando erro descritivo
    }
    if(isNaN(value1) || isNaN(value2)){
        throw new Error('Informe dois números para realizar a soma'); //lançando erro descritivo
    }
}
function sum() {
    try{
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        verifyIsNumber(value1, value2); //executa a função verifyIsNumber
        const result = Number(value1) + Number(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch(error){
        document.getElementById('result').innerHTML = `Erro: ${error.message}`
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
  }

    window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }
