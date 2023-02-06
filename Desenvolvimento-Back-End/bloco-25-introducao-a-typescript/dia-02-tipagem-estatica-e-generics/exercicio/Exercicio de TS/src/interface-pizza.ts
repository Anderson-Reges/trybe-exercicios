type Slices  = 4 | 6 | 8;

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutella" | "Goiabada com Queijo" | "Marshmallow";


interface pizza {
  flavor: string,
  slice: Slices,
}

const calabresa: pizza = {
  flavor: "Calabresa",
  slice: 8
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: 'Frango',
  slice: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: 'Pepperoni',
  slice: 6
}

console.log(pepperoni);

const marguerita: pizza = {
  flavor: "Marguerita",
  slice: 6
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: 'Palmito',
  slice: 8,
}

console.log(palmito);

const cogumelos: PizzaVegetarian = {
  flavor: 'Cogumelos',
  slice: 6
}

console.log(cogumelos);

const nutella: pizza = {
  flavor: "Nutella",
  slice: 4
}

console.log(nutella);

const goiabadaComQueijo: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slice: 4
}

console.log(goiabadaComQueijo);

const marshmallow: PizzaSugar = {
  flavor: 'Marshmallow',
  slice: 4
}

console.log(marshmallow);

interface PizzaCommon extends pizza {
  flavor: Common
}

interface PizzaVegetarian extends pizza {
  flavor: Vegetarian
}

interface PizzaSugar extends pizza {
  flavor: Sugar,
  slice: 4
}