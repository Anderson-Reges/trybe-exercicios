//exercicio 1

let fatorial = 10;
let resultado = fatorial

for(let index = 1; index < fatorial; index += 1 ){
    resultado = resultado * index
}

console.log(resultado)

//exercicio 2

let word = 'tryber';

let invertido = word.split("").reverse().join("");

console.log(invertido)

//exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0]
let menorPalavra = array[0]

for(let index = 0; index < array.length; index += 1){
    if(maiorPalavra.length < array[index].length){
        maiorPalavra = array[index]
    }
}
console.log(maiorPalavra)

for(let index = 0; index < array.length; index += 1){
    if(array[index].length < menorPalavra.length){
        menorPalavra = array[index]
    }
}
console.log(menorPalavra)

//exercicio 4
//4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorPrimo = 0;

for(let i = 2; i <= 50; i += 1){
    let numDivisiveis = 0;
    for(let j = 1; j <= i; j += 1){
        if(i % j === 0){
            numDivisiveis++
        }
    }
    if(numDivisiveis === 2){
        maiorPrimo = i
    }
}
console.log(maiorPrimo);
