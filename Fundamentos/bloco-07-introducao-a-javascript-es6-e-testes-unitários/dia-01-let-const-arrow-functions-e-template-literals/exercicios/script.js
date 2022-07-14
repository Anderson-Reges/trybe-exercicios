// parte 1

  const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
      } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
      }
  }
  testingScope(true);

// parte 2

const returnFactorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(returnFactorial(5));

const largestWord = (str) => {
    const words = str.split(' ');
    let countLetter = 0;
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > countLetter) {
            countLetter = words[i].length;
            result = words[i];
        }
    }
    return result;
}
console.log(largestWord('O rato roeu a roupa do rei de roma'));

function changeX (string){
  const frase = 'Tryber x aqui!'
  const newFrase = frase.replace('x', string);
  return newFrase;
};

function skills (changeX) {
  const skills = ['JavaScript', 'HTML', 'CSS']
  const newFrase = `${changeX}\nMinhas três principais habilidades são: ${skills.join(', ')} `;
  return newFrase;
}
console.log(skills(changeX('Anderson')));