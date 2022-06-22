//exercicio 1

const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//exercicio 2

const c = 25
const d = 50

if(c > d){
    console.log("'c' é maior que 'd'")
}
else{
    console.log("'d' é maior que 'c'")
}

//exercicio 3

const f = 78;
const g = 87;
const h = 45;


if(g > f && g > h){
    console.log("O maior número é: " + g + " (g)")
} else if(f > g && f > h){
    console.log("O maior número é: " + f + " (f)")
}else{
    console.log("O maior número é: " + h + " (h)")
}

//exercicio 4

const valor = -25;

if(valor > 0){
    console.log("Positive")
} else if (valor < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}

//exercicio 5

let angulo1 = 100;
let angulo2 = -57;
let angulo3 = 25; 

let somaDosAngulos = angulo1 + angulo2 + angulo3;

let todosOsAngulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(todosOsAngulos){
    if(somaDosAngulos === 180){
        console.log(true)
    } else{
        console.log(false)
    }
}
else{
    console.log("Erro: Angulo Invalido")
}

//exercicio 6

let tableChess = "rei"

switch(tableChess.toLowerCase()){
    case "bispo":
        console.log("bispo -> mover-se por qualquer número de casas, mas somente nas diagonais")
        break
    case "rei":
        console.log("rei -> mover-se para qualquer direção horinzontalmente, verticalmente ou diagonalmente")
        break
    case "rainha":
        console.log("rainha -> mover-se para quantas casas quiser na horizontal, vertical ou diagonal. ")
        break
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
        };

//exercicio 7


const nota = 76;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//exercicio 8

const number1 = 4;
const number2 = 3;
const number3 = 5;

if(number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0){
    console.log(true);
}
else{
    console.log(false);
}

//exercicio 9

const numberA = 2
const numberB = 15
const numberC = 6

if(numberA % 2 >= 1 || numberB % 2 >= 1 || numberC % 2 >= 1){
    console.log(true)
}
else{
    console.log(false)
}

//exercicio 10

const valorCusto = 100;
const valorVenda = 300;
const impostoProduto = valorCusto * 0.20;

if(valorCusto >=0 && valorVenda >= 0){
    let valorCustoTotal = valorCusto + impostoProduto;
    let lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
}
else{
    console.log("Erro: Os valores não podem estar zerados");
};

//exercicio 11

let aliquotInss ;
let aliquotIR ;

const grossSalary = 1500;

if(grossSalary <= 1556.94){
    aliquotInss = grossSalary * 0.080;
} else if(grossSalary <= 2594.92){
    aliquotInss = grossSalary * 0.090;
} else if(grossSalary <= 5189.82){
    aliquotInss = grossSalary * 0.011;
} else{
    aliquotInss = 570.88
}

const basesalary = grossSalary - aliquotInss

if(basesalary <= 1903.98){
    aliquotIR = 0;
}
else if(basesalary <= 2826.65){
    aliquotIR = basesalary * 0.075 - 142.80;
}
else if(basesalary <= 3751.05){
    aliquotIR = basesalary * 0.015 - 354.80
}
else if(basesalary <= 4664.68){
    aliquotIR = basesalary * 0.225 - 636,13
}
else{
    aliquotIR = basesalary * 0.275 - 869.36
}

console.log("Salário: " + (basesalary - aliquotIR));