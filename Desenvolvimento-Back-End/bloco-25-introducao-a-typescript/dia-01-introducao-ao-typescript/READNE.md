# DIA 01 - INTRODUÇÃO A TYPESCRIPT

Nesse dia foi passado a introdução a linguagem de programação `TypeScript` passamos pelo o basico da linguagem, a qual eu fui capaz de:

- Definir o que é o superset `TypeScript`;
- Compreender a relação entre o `TypeScript` e o `JavaScript`;
- Compreender o que é **Tipagem** (Dicas de tipo);
- Compreender a diferença entre **Compilador** e **Transpilador**;
- Compilar o seu código `TypeScript` em código `JavaScript`;
- Compreender o sistema de tipos do `TypeScript`; e
- Declarar variáveis de tipos **primitivos** do `TypeScript`.

# EXERCICIO

### **Exercício 1**
Temos uma `API` que começou a ter diversos erros e apresentar bugs frequentes. Como solução, o CTO do time, avaliou que utilizar o Typescript em suas funções, diminuiria um pouco desses problemas.

Para isso você foi direcionado a modificar as funções abaixo, escritas em Javascript, para que fossem tipadas e executassem sem erros no compilador de `Typescript`:

Observação: Não é necessário alterar o valor dos parâmetros passados.

Dica: utilize o Typescript playground para testar o comportamento de cada função.

**Função 1**

```ts
const numberInput = 7;

const isItAPrime = (param) => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);
Função 2
Copiar
// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))
```

**Função 3**

```Ts
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param) => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));
```

**Função 4**

Dica: leia a documentação


// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
```ts
const peopleInput = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param) => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));
```

**Função 5**

Dica: essa função poderá receber um parâmetro com dois tipos diferentes.

```ts
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param) => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
```

### **Exercício 2**

Crie um script para converter unidades de medida de comprimento:

Esse script deverá se chamar `length.ts`;
Ele deverá possuir uma função chamada convert que recebe como parâmetro:
valor - `number`
unidade base - `string`
unidade para a conversão - `string`

Tabela de conversão:

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilômetro      </td>
      <td style="text-align: left;">
km      </td>
      <td style="text-align: left;">
1000m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectômetro      </td>
      <td style="text-align: left;">
hm      </td>
      <td style="text-align: left;">
100m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decâmetro      </td>
      <td style="text-align: left;">
dam      </td>
      <td style="text-align: left;">
10m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Metro      </td>
      <td style="text-align: left;">
m      </td>
      <td style="text-align: left;">
1m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decímetro      </td>
      <td style="text-align: left;">
dm      </td>
      <td style="text-align: left;">
0,1m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centímetro      </td>
      <td style="text-align: left;">
cm      </td>
      <td style="text-align: left;">
0,01m      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Milímetro      </td>
      <td style="text-align: left;">
mm      </td>
      <td style="text-align: left;">
0,001m      </td>
    </tr>
  </tbody>
</table>

### **Exercício 3**

Crie um script para converter unidades de medida de massa:

- Esse script deverá se chamar `mass.ts`;
- Ele deverá possuir uma função chamada convert que recebe como parâmetro:
- valor - `number`
- unidade base - `string`
- unidade para a conversão - `string`

Tabela de conversão:

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilograma      </td>
      <td style="text-align: left;">
kg      </td>
      <td style="text-align: left;">
1000g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectograma      </td>
      <td style="text-align: left;">
hg      </td>
      <td style="text-align: left;">
100g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decagrama      </td>
      <td style="text-align: left;">
dag      </td>
      <td style="text-align: left;">
10g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Grama      </td>
      <td style="text-align: left;">
g      </td>
      <td style="text-align: left;">
1g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decigrama      </td>
      <td style="text-align: left;">
dg      </td>
      <td style="text-align: left;">
0,1g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centigrama      </td>
      <td style="text-align: left;">
cg      </td>
      <td style="text-align: left;">
0,01g      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Miligrama      </td>
      <td style="text-align: left;">
mg      </td>
      <td style="text-align: left;">
0,001g      </td>
    </tr>
  </tbody>
</table>

### **Exercício 4**

Crie um script para converter unidades de medida de capacidade:

- Esse script deverá se chamar `capacity.ts`;
- Ele deverá possuir uma função chamada convert que recebe como parâmetro:
- valor - `number`
- unidade base - `string`
- unidade para a conversão - `string`

Tabela de conversão:

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilolitro      </td>
      <td style="text-align: left;">
kl      </td>
      <td style="text-align: left;">
1000l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectolitro      </td>
      <td style="text-align: left;">
hl      </td>
      <td style="text-align: left;">
100l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decalitro      </td>
      <td style="text-align: left;">
dal      </td>
      <td style="text-align: left;">
10l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Litro      </td>
      <td style="text-align: left;">
l      </td>
      <td style="text-align: left;">
1l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decilitro      </td>
      <td style="text-align: left;">
dl      </td>
      <td style="text-align: left;">
0,1l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centilitro      </td>
      <td style="text-align: left;">
cl      </td>
      <td style="text-align: left;">
0,01l      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Mililitro      </td>
      <td style="text-align: left;">
ml      </td>
      <td style="text-align: left;">
0,001l      </td>
    </tr>
  </tbody>
</table>

### **Exercício 5**

Crie um script para converter unidades de medida de área:

- Esse script deverá se chamar `area.ts`;
- Ele script deverá possuir uma função chamada convert que recebe como parâmetro:
- valor - `number`
- unidade base - `string`
- unidade para a conversão - `string`

Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.

Tabela de conversão:

<table>
  <thead>
    <tr>
      <th style="text-align: left;">
Nome      </th>
      <th style="text-align: left;">
Símbolo      </th>
      <th style="text-align: left;">
Valor      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">
Quilômetro quadrado      </td>
      <td style="text-align: left;">
km²      </td>
      <td style="text-align: left;">
10⁶ m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Hectômetro quadrado      </td>
      <td style="text-align: left;">
hm²      </td>
      <td style="text-align: left;">
10⁴ m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decâmetro quadrado      </td>
      <td style="text-align: left;">
dam²      </td>
      <td style="text-align: left;">
10² m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Metro quadrado      </td>
      <td style="text-align: left;">
m²      </td>
      <td style="text-align: left;">
1m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Decímetro quadrado      </td>
      <td style="text-align: left;">
dm²      </td>
      <td style="text-align: left;">
10⁻² m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Centímetro quadrado      </td>
      <td style="text-align: left;">
cm²      </td>
      <td style="text-align: left;">
10⁻⁴ m²      </td>
    </tr>
    <tr>
      <td style="text-align: left;">
Milímetro quadrado      </td>
      <td style="text-align: left;">
mm²      </td>
      <td style="text-align: left;">
10⁻⁶ m²      </td>
    </tr>
  </tbody>
</table>

### **Exercício 6**

Crie um script para converter unidades de medida de volume:

- Esse script deverá se chamar `volume.ts`;
- Ele deverá possuir uma função chamada convert que recebe como parâmetro:
- valor - `number`
- unidade base - `string`
- unidade para a conversão - `string`

Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

Tabela de conversão:
<table>
<tr>
  <th>Nome</th>
  <th>Simbolo</th>
  <th>Valor</th>
</tr>
<tr>
  <td>Quilômetro cúbico</td>
  <td>km³</td>
  <td>10⁹ m³</td>
</tr>
<tr>
  <td>Hectômetro cúbico</td>
  <td>hm³</td>
  <td>10⁹ m³</td>
</tr>
<tr>
  <td>Decâmetro cúbico</td>
  <td>dam³</td>
  <td>10³ m³</td>
</tr>
<tr>
  <td>Metro cúbico</td>
  <td>m³</td>
  <td>1m³</td>
</tr>
<tr>
  <td>Metro cúbico</td>
  <td>m³</td>
  <td>1m³</td>
</tr>
<tr>
  <td>Decímetro cúbico</td>
  <td>dm³</td>
  <td>10⁻³ m³</td>
</tr>	
<tr>
  <td>Centímetro cúbico</td>
  <td>cm³</td>
  <td>10⁻⁶ m³</td>
</tr>
<tr>
  <td>Milímetro cúbico</td>
  <td>mm³</td>
  <td>10⁻⁹ m³</td>
</tr>
</table>

### **Exercício 7**

Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote `readline-sync`.

- Em cada script, crie uma função chamada `exec` que:
- Capta as entradas da pessoa usuária via terminal;
- Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
- Exibe uma mensagem com o resultado. Ex: **“1km é igual a 1000m.”**;
- Não se esqueça de chamar a função `exec()`; ao final do script.

### **Exercício 8**

Crie um arquivo `index.ts` que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

- O script deve ser acionado por meio do comando npm start no `package.json`;
- Utilize o `readline-sync` para realizar o input de dados;
- Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
- Você pode utilizar o `require` para executar o script em questão.

### **Exercício Bônus**

Temos um array `characters` que agrupa dados de jogadores em um `MMORPG` (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo `Character` e da função usada para imprimir as informações básicas de todos os jogadores.


``` typescript
type Character = any;

const characters: any = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: any, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);

```