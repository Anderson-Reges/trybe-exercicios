# DESENVOLVIMENTO FRONT-END

## JAVASCRIPT, REACT, REDUX E CONTEXT API.

Nesse modulo aprendi um pouco mais sobre `JavaScript`, foi mostrado a assincronicidade da linguagem com a aprensentação das `Promises` e o `Fetch` de requisiçôes e logo em seguida para completar o conteudo de requisições foi aprensentado o `Async` e `Await`, dois elementos importantes para execução de assincronicidade em funções.

Ainda nesse modulo fui introduzido a famosa biblioteca **`React`**, com um conteudo detalhado sobre cada parte da biblioteca: 

- Primeiro foi passado sobre o que são os `componentes`, `state`, `props`.
- Segundo foi explicado como funcionam os ciclos de vida do `React` passando a forma antiga de mexer com os ciclos, que era utilizando as funções `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` e `shouldComponentUpdate` para futuramento apresentar um novo jeito de mexer com os ciclos sem usar essas funções. E tambem foi aprensentado um companheiro do React chamando `React Router` que sua principal responsabilidade é controlar as rotas das páginas dentro do app, a qual vem acompanhando com algumas funções que podem acabar agregando a logica do app, como a passagem de `props` via caminhos, `redirecionamentos`, `Links` entre outros, com o conteudo de `React Router` veio a explição do que é `Single Page Application` (`SPA`) ja que o `React Router` faz uso desse conceito.
- Terceiro aprendi como utilizar o `Redux` como gerenciador de estado global do app, criando e utilizando um `reducer` para mandar um `action` para `store` que é onde ficaria o estado de toda aplicação guardada, como ele gerencia o estado essa biblioteca acaba com o famoso `Prop Drilling` que em um certo estagio do desenvolvimento acaba acontecendo para isso temos o `Redux`.
- Quarto e ultimo aprendi outro meio de gerenciamento de estado global chamado `Context API`, a qual que no lugar do `Redux` criamos um `contexto` que sera a nossa `store` e um `Provider` que ira prover essa `store` a toda nosssa aplicação, em seguida foi passado a diferença entre `class` e `function`, que foi necessario para aprender a usar os `Hooks` do React, a qual foi apresentado logo em seguida, fui ensiando a usar `useState`, `useContext` e `useEffect`
    - `useState`: usado para criar `states` para qualquer uso na aplicação.
    - `useContext`: usado para retirar dados dos `states` para qualquer uso na aplicação.
    - `useEffect`: é a maneira mais moderna de se usar o ciclo de vida do `React` dependendo da forma que for contruido ele virou ou `DidMount` ou `DidUpdate` ou `WillUnmount`. 

## TESTES.

Junto com o conteudo de `React`, aprendi sobre `React Testing Library`(`RTL`) é biblioteca de testes do React a qual testa componentes do app, simulando comportamentos e outras funcionalidades do navegador e do usuario, aprendi a usar `Mocks` para simular dados e funções para testes e tambem foi passado como testar Rotas do `React Router`

Tendo isso em mente, esta pasta contém todas as atividades de aprendizagem que desenvolvi ao longo do módulo de `Desenvolvimento Front-End` do curso da [Trybe](https://www.betrybe.com/).