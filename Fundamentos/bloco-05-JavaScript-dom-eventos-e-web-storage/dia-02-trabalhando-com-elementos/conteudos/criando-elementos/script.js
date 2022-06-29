//1

let pai = document.getElementById('pai');
let irmao = document.createElement('section')
irmao.id = 'irmaoElementoOndeEstaVoce'
pai.appendChild(irmao);

//2

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let filho = document.createElement('p')
filho.innerText = 'hello'
elementoOndeVoceEsta.appendChild(filho)

//3

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filho1 = document.createElement('p');
filho1.id = 'filhoFilho'
filho1.innerText = 'hi';
primeiroFilhoDoFilho.appendChild(filho1);

//4

let filhoDoFilhoAcima = document.getElementById('filhoFilho');
let filhoFilhoFilho = document.createElement('p');
filhoFilhoFilho.innerText = 'goodbye.';
filhoDoFilhoAcima.appendChild(filhoFilhoFilho);