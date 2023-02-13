# DIA 03 - POLIMORFISMO

Nesse dia foi passado conteudo sobre polimorfismo, atributos estaticos e atributos abstratos, a qual fui capaz:

- Descrever, como pilar da Programação Orientada a Objetos, o `Polimorfismo`: múltiplas formas de se implementar um método descrito em uma interface;
- Descrever `Classe Abstrata` como uma classe que não pode ser instanciada, devendo ser usada apenas por suas `Classes Herdeiras`;
- Definir `Métodos Abstratos` , ou `Funções Abstratas`;
- Implementar `Métodos Estáticos` para Classes em TypeScript.

# EXERCICIO

**Exercício 1**

Agora vamos criar uma interface _IAgenda_, que será usada para definir o padrão dos agendamentos das quadras. Para _isso:

_- Crie a interface IAgenda:
  - deve ser criada no caminho src/interfaces/IAgenda.ts,
  - IAgenda que deve receber `um` parâmetro `genérico` do tipo `T`,
  - IAgenda deve possuir 3 atributos:
    - protocolo do tipo `string`;
    - data do tipo `Date`;
    - regras do tipo `T`.

**Exercício 2**

Crie a classe Quadra em `src/Quadra.ts` que não pode ser instanciada (**classe abstrata**). Ela deve possuir um método abstrato `reservar` que recebe um parâmetro do tipo `Date` e que retorna um atributo do tipo IAgenda.

**Exercício 3**

Agora crie um interface chamada _IFutebol_. Ela será usada para implementar as regras da classe que iremos utilizar no exercício 4. A interface _IFutebol_:

- deve ser criada no caminho *src/interfaces/IFutebol.ts*,
- deve possuir uma chave chuteira que será do tipo _string_. _spoiler: aqui serão guardadas as regras referente a chuteira que pode ser usada na Quadra de Futebol_

**Exercício 4**

Como você já criou a classe abstrata _Quadra_ e a interface _IFutebol_, agora você deve criar a classe QuadraFutebol, essa classe deverá:

- ser criada no caminho **src/QuadraFutebol.ts**,
- extender a classe abstrata _Quadra_;
- implementar o método **reservar**, o tipo que esse método recebe deverá ser a interface **IFutebol** que você criou no exercício anterior.
- retornar o método de **reservar** com a seguinte resposta:

```ts
{
  // protocolo é o "id" da reserva, gere de forma aleatória
  protocolo: 'q39tgorea9',
  date: '2022-11-03T17:53:24.393Z',
  regras: { chuteira: 'cravo' }
}
```

**Exercício 5**

Agora no seu arquivo src/index.ts:

- instancie a classe **Clube**,
- instancie a classe **QuadraFutebol**,
- adicione a classe que você acabou de instanciar (classe **QuadraFutebol**), ao clube, com o método adicionarQuadra
- Com sua quadra adicionada ao clube, você já pode reservar essa quadra na data que você quiser. Chame o método reservar da classe QuadraFutebol, com a data que você quer jogar uma bolinha com as pessoas que você gosta.
- Imprima no console o resultado da reserva da quadra.

Exercício 6
Agora que você já sabe como uma nova quadra é criada no nosso clube, repita esse processo e crie uma quadra de tênis. Essa quadra deverá:

- ser criada no caminho **src/QuadraTenis**
- depois de ser criada, deverá ser instanciada e ser adicionada às quadras do nosso clube.
  - dica: não se esqueça de criar uma interface antes de construir essa classe. Da mesma forma que foi feito na classe **QuadraFutebol**