// console.log('Hello, world!');

const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);

//---
function dividirNumeros(num1, num2) {
    const promise = new Promise((resolve, reject) => {
      if (num2 == 0) 
        reject(new Error("Não pode ser feito uma divisão por zero"));
  
      const resultado = num1 / num2;
      resolve(resultado)
    });
  
    return promise;
  }
  
  dividirNumeros(2, 1)
    .then(result => console.log(`sucesso: ${result}`))
    .catch(err => console.log(`erro: ${err.message}`));
//---
const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}
//---
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}