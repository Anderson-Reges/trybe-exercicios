//1

const acess = document.getElementById('elementoOndeVoceEsta')
console.log(acess);

//2

const changeColor = document.getElementById('elementoOndeVoceEsta').parentElement
changeColor.style.color = 'red';

//3

const addText = document.getElementById('primeiroFilhoDoFilho').innerText = 'Hello';

//4

const acess2 = pai.firstElementChild;
console.log(acess2);

//5

const acess3 = elementoOndeVoceEsta.primeiroFilho;
console.log(acess3);

//6 

const acessText = elementoOndeVoceEsta.nextSibling;
console.log(acessText);

// 7
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// 8
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;