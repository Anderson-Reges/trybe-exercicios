//exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1){
   console.log(numbers[index])
}

//exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let countSum = 0

for(let sum = 0; sum < numbers.length; sum += 1){
    countSum += numbers[sum]
}
console.log(countSum);

//exercicios 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let countSum = 0

for(let sum = 0; sum < numbers.length; sum += 1){
    countSum += numbers[sum]
}
console.log(countSum);

let mediaAritmetica = countSum / numbers.length

console.log(mediaAritmetica)

//exercicios 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let countSum = 0

for(let sum = 0; sum < numbers.length; sum += 1){
    countSum += numbers[sum]
}
console.log(countSum);

let mediaAritmetica = countSum / numbers.length

console.log(mediaAritmetica)

if(mediaAritmetica > 20){
    console.log("valor maior que 20")
}
else{
    console.log("valor menor ou igual a 20")
}

// exercicio 5 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = numbers[0];

for(let compare = 0; compare < numbers.length; compare += 1){
    if(numbers[compare] > maiorValor){
        maiorValor = numbers[compare]
    }
    
}
console.log(maiorValor)

//exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 >= 1 ){
        resultado += 1
    };
};

if(resultado === 0){
    console.log("Nenhum valor impar encontrado");
}
else{
    console.log(resultado);
}

//exercicio 7


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for(let compare = 0; compare < numbers.length; compare += 1){
    if(numbers[compare] < menorValor){
        menorValor = numbers[compare]
    }
    
}
console.log(menorValor)

//exercicio 8

let arraylist = []

for(let index = 1; index <= 25; index += 1){
    if(index <= 25){
        arraylist += index
    }
}
console.log(arraylist)

//exercicio 9

let arraylist = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

for(let multi = 0; multi < arraylist.length; multi += 1){
    console.log(arraylist[multi] / 2)
}