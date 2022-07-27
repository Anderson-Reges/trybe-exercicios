// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'kiwi', 'acerola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'maracuja', 'goiaba'];

const fruitSalad = (fruit, additional) => {
  return newfruits = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

const motos = {
    bmw: 'r 1200 gs',
    honda: 'biz',
}
const carros = {
    ford: 'hilux',
    toyota: 'supra',
}

const uniaoDeVeiculos = (parm1, parm2) => uniao = {...parm1, ...parm2};
console.log(uniaoDeVeiculos(motos, carros));