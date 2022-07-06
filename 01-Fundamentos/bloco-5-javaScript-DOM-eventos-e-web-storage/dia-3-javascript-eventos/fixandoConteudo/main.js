//Boa prática de colocar nomes que irão se repetir muito em variáveis, além disso evita que algunhas linhas de código que veremos futuramente fiquem muito extensas.
const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//porque a caixinha1 estava com a classe tech, onde um dos atributos a deixa mais alta

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function mudarElementos(event) { //essa função primeiramente recebe o event como parametro, que é um objeto que contém informações sobre o evento que foi disparado no momento.
  const techElement = document.querySelector(".tech"); //atribui o elemento com a classe tech à uma variavel
  techElement.classList.remove('tech') //removi essa classe do elemento
  event.target.classList.add("tech");//atribui a classe 'tech' ao 'event.target' que é uma referencia ao elemento que deu inicio ao evento
  input.value = ''; //limpando o input, inserindo uma string vazia em seu campo de texto;
}

firstLi.addEventListener("click", mudarElementos); //atribui uma função ao evento de clique das Li's
secondLi.addEventListener("click", mudarElementos);//atribui uma função ao evento de clique das Li's
thirdLi.addEventListener("click", mudarElementos);//atribui uma função ao evento de clique das Li's

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(event){ //criei uma função anonima.  adiciona o evento input na caixa de texto
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value; //o evento 'input' (atribuido no primeiro parametro) irá adicionar o valor do input na 'Li' que estiver com a classe tech, ou seja o bloco    levantado.
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function(){ //a função apenas sera acionada quando houverem dois cliques em sequencia
    window.location.replace('https://nataliakoliveira.github.io/'); //'window.location' é a URL atual e o 'replace' substitui ela por outro link que é o meu portfolio
});
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function(event){
    event.target.style.color = "blue"; //o texto do elemento fica com a cor azul
})
myWebpage.addEventListener('mouseleave', function(event){
    event.target.style.color = "unset"; //o estilo irá resetar a cor do elemento quando o mouse sair dele
});
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
//A propriedade target retorna o elemento que acionou o evento e não necessariamente o elemento do eventlistener.