# DIA 02 - TIPAGEM ESTATICA E GENERICS

Nesse dia foi passado o conteudo sobre as **Tipagens** e **Generics** do `TypeScript`, a qual fui capaz de:

- Declarar tipos em coleções, **Arrays** e **Tuplas**;
- Declarar variáveis de **tipos objeto** do `TypeScript`;
- Compreender o que são **Type Aliases**;
- Compreender o que é uma **Classe**;
- Compreender o que é uma `Interface`;
- Compreender o que são **Type Assertion** e **Generics**;
- Estruturar um **model** que usa os conceitos aprendidos.

# EXERCICIO 

<h2>Exercício 1</h2>
<p>
Crie uma classe <code class="inline">Car</code> cujo objeto representará um carro.</p>
<p>
<strong><em>Propriedades</em>:</strong></p>
<ul>
  <li>
Deve conter uma propriedade do tipo <code class="inline">string</code> chamada <code class="inline">brand</code> que representa a marca.  </li>
  <li>
Deve conter uma propriedade do tipo <code class="inline">string</code> chamada <code class="inline">color</code> que representa a cor.  </li>
  <li>
Deve conter uma propriedade do tipo <code class="inline">number</code> chamada <code class="inline">doors</code> que representa a quantidade de portas.  </li>
</ul>
<p>
<strong><em>Comportamentos</em>:</strong></p>
<ul>
  <li>
Deve conter um método chamado <code class="inline">honk</code> que aciona a buzina do carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">turnOn</code> que liga o carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">turnOff</code> que desliga o carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">speedUp</code> que acelera o carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">speedDown</code> que reduz a velocidade do carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">stop</code> que para o carro.  </li>
  <li>
Deve possuir um método chamado <code class="inline">turn</code> que recebe uma direção do tipo <code class="inline">string</code> e vira o carro.  </li>
</ul>
<h2>
Exercício 2</h2>
<p>
Vamos agora utilizar a classe <code class="inline">Car</code> que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:</p>
<ul>
  <li>
Siga em frente;  </li>
  <li>
Em 600 metros vire a esquerda;  </li>
  <li>
Vire a esquerda;  </li>
  <li>
Em 200 metros na rotatória pegue a segunda saída a direita;  </li>
  <li>
Mantenha em frente pelos próximos 1,2 quilômetros;  </li>
  <li>
Em 300 metros vire a direita;  </li>
  <li>
Vire a direita;  </li>
  <li>
Em 400 metros você chegará ao seu destino;  </li>
  <li>
Você chegou ao seu destino.  </li>
</ul>
<p>
Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.</p>
<ul>
  <li>
Siga em frente;  </li>
  <li>
Em 300 metros vire a direita;  </li>
  <li>
Vire a direita;  </li>
  <li>
Mantenha em frente pelos próximos 2 quilômetros;  </li>
  <li>
Em 200 metros vire a esquerda;  </li>
  <li>
Vire a esquerda;  </li>
  <li>
Em 400 metros vire a direita;  </li>
  <li>
Vire a direita;  </li>
  <li>
Em 100 metros você chegará ao destino.  </li>
  <li>
Você chegou ao destino.  </li>
</ul>
<p>
A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.</p>
<p>
Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.</p>
</article><article class="c-daJEgu"><h2>
Exercício 3</h2>
<p>
Crie uma interface que represente uma pizza. Ela deve conter:</p>
<ul>
  <li>
Uma propriedade do tipo string chamada <code class="inline">flavor</code> que representa o sabor.  </li>
  <li>
Uma propriedade chamada <code class="inline">slices</code> cujo tipo é a união entre os possíveis números de fatias da pizza.    <ul>
      <li>
O número de fatias pode ser 4, 6 ou 8;      </li>
      <li>
Utilize um <code class="inline">type alias</code> para armazenar o tipo dessa propriedade.      </li>
    </ul>
  </li>
</ul>
<p>
<strong>a)</strong> Crie uma pizza sabor Calabresa de 8 fatias;</p>
<p>
<strong>b)</strong> Crie uma pizza sabor Marguerita de 6 fatias;</p>
<p>
<strong>c)</strong> Crie uma pizza sabor Nutella de 4 fatias.</p>
<h2>
Exercício 4</h2>
<p>
Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:</p>
<ul>
  <li>
Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.  </li>
  <li>
Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.  </li>
  <li>
Pizza Doce - seus sabores são “Nutella”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.  </li>
</ul>
<p>
Você deve usar <code class="inline">type alias</code> e <code class="inline">type unions</code> para criar os possíveis sabores de cada tipo de pizza.</p>
<p>
Agora crie:</p>
<ul>
  <li>
3 pizzas do tipo comum;  </li>
  <li>
2 pizzas do tipo vegetariana;  </li>
  <li>
1 pizza do tipo doce.  </li>
</ul>
</article><article class="c-daJEgu"><h2>
Exercício 5</h2>
<p>
Em <strong>JavaScript</strong>, temos a <em>High Order Function</em> <code class="inline">filter</code>. Ela funciona da seguinte forma:</p>
<ul>
  <li>
Recebe como primeiro parâmetro um <em>array</em> que pode ser de qualquer tipo;  </li>
  <li>
Recebe como segundo parâmetro uma função de <em>callback</em>;  </li>
  <li>
Retorna um novo <em>array</em> removendo os itens que não atendem a condição da função de <em>callback</em>;  </li>
  <li>
A função de <em>callback</em> recebe como primeiro parâmetro um item do tipo do <em>array</em>;  </li>
  <li>
A função de <em>callback</em> pode receber como segundo parâmetro um <em>index</em> do tipo inteiro;  </li>
  <li>
A função de <em>callback</em> pode receber como terceiro parâmetro o próprio <em>array</em>;  </li>
  <li>
A função de <em>callback</em> devolve um booleano.  </li>
</ul>
<p>
Usando <code class="inline">generics</code> e os demais conceitos aprendidos em <strong>TypeScript</strong>, recrie a função <code class="inline">filter</code> e nomeie-a como <code class="inline">myFilter</code>.</p>
