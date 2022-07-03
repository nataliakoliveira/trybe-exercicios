// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó  -> nextSibling retornará o texto "nó" que representa o próximo nó do DOM a partir da div.

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> --> nextElementSibling retornará o próximo elemento propriamente, ou seja, o elemento <p>.