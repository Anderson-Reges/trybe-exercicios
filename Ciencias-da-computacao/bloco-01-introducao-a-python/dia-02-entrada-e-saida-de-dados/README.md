# DIA 02 - ENTRADA E SAIDA DE DADOS

Nesse dia foi passado como ler e escrever em arquivos com python para manipulação de dados em especial o arquivos de extensão `CSV` e `JSON`, nesse dia eu fui capaz de:

- Preparar um ambiente de projeto em `Python`, definindo sua estrutura de diretórios e criando ambientes isolados;
- Instalar bibliotecas de terceiros num projeto `Python`;
- Entender como lidar com exceções em `Python`;
- Receber dados de pessoas usuárias, assim como enviá-los de volta;
- Ler e escrever arquivos no formato tabular `CSV`;
- Serializar e desserializar dados no formato `JSON`.

# EXERCICIO

**Exercício 1**:
Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo: 

Saída:
```txt
PEDRO
PEDR
PED
PE
P
```

**Exercício 2**:
Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

Para embaralhar uma palavra faça: `scrambled_word = "".join(random.sample(word, len(word)))`

O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: `random.choice(["word1", "word2", "word3"]) -> "word2"`.

**Exercício 3**:
Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

**Exercício 4**:
Dado o seguinte arquivo no formato `JSON`, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato `CSV` como o exemplo abaixo.

Saída:
```csv
categoria,porcentagem
Python,0.23201856148491878
Java,0.23201856148491878
PHP,0.23201856148491878
```