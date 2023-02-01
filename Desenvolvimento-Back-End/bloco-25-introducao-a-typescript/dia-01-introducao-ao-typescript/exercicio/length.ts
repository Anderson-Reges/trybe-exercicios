// exercico 2 e exercico 7

import readline from 'readline-sync';
const unitsLength = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsLength.indexOf(fromUnit);
  const toIndex = unitsLength.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(unitsLength, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(unitsLength, 'Escolha um número para a conversão:');

  const toUnitChoice = unitsLength[toUnitChoiceIndex];
  const fromUnitChoice = unitsLength[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();
