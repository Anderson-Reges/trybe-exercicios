
function verificaPalindrome (word){
    for(let index = 0; index < word.length; index += 1){
        if(word[index] != word[(word.length - 1) - index]){
            return false
        }
    } return true
}

console.log(verificaPalindrome('arara'));

// 2

function maiorValordoArray (numeros){
    let maiorIndice = 0;
   for(let indice in numeros){
    if(numeros[maiorIndice] < numeros[indice]){
        maiorIndice = indice
    }
   }
   return maiorIndice
}
console.log(maiorValordoArray([2, 3, 6, 7, 10, 1]));

// 3

function menorValordoArray (numeros){
    let menorIndice = 0;
   for(let indice in numeros){
    if(numeros[menorIndice] > numeros[indice]){
        menorIndice = indice
    }
   }
   return menorIndice
}
console.log(menorValordoArray([2, 4, 6, 7, 10, 0, -3]));

// 4

function verificadorCaractere (nomes){
    let maiorPalavra = nomes[0];
    for(let index in nomes){
        if(maiorPalavra.length < nomes[index].length){
            maiorPalavra = nomes[index]
        }
    }
    return maiorPalavra
}

console.log(verificadorCaractere(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }