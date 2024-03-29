const uppercase = require('./exercicios/uppercase');
const { getPokemonDetails } = require("./get-pokemon-details");

it('uppercase deve retornar uma string com letras maiúsculas', (done) => {
    try{
    expect(uppercase('hello')).toBe('HELLO');
    done();
    }catch(error){
        done(error);
    }
});

//9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.


describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
      const expectedError = new Error('Não temos esse pokémon para você :(');
  
      function callback(error, result) {
        expect(error).toEqual(expectedError);
        done();
      }
  
      getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
    });
  
    it("retorna um pokemon que existe no banco de dados", (done) => {
      const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
  
      function callback(err, result) {
        expect(result).toBe(expectedString);
        done();
      }
  
      getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
  });

//10  - Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// //R:1 - beforeEach // antes de cada teste
// 1 - test // o teste
// 1 - afterEach // depois de cada teste
// 1 - beforeEach // antes de cada teste
// 2 - beforeEach // antes de cada teste dentro do describe
// 2 - test // o teste dentro do describe
// 2 - afterEach // depois de cada teste dentro do describe
// 1 - afterEach // depois de cada teste