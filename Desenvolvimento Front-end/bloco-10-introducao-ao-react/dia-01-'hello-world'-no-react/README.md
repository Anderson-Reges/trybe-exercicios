# PARA FIXA:    

Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:

1. Crie um novo projeto utilizando `npx create-react-app nome-app`

* **⚠️ Substitua o `nome-app` pelo que você desejar para seu app ⚠️**

2. Na pasta `src`, acesse `App.js` e remova todo o seu conteúdo do função `App`, de modo que ela fique assim:

```javascript
import React from 'react';

  class App extends React.Component {
    render() {
      return ();
    }
  }

export default App;
```

3. Na pasta src, crie um arquivo chamado About.js. Em seguida, acesse o arquivo About.js e crie um componente que retorne um `<h1>` com o seu nome e um parágrafo `<p>` com uma breve descrição sobre você.

* Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>`.

4. Vamos criar uma lista das habilidades que você já aprendeu no curso dentro do componente About.

* Adicione dentro da função render do componente About o código abaixo. Mas atenção: esse código deve ser adicionado antes do retorno, senão ele nunca será executado 😉:

```javascript
const skills = ['HTML'] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
```

* Esse código cria uma lista em JSX das habilidades (`jsxSkills`) usando a array de strings `skills`.

* Adicione na array `skills` mais habilidades que você já aprendeu no curso!

* Adicione um `<h2>` com o título **"Minhas Habilidades"**

* Adicione uma lista não ordenada depois do título e coloque nela a array `jsxSkills`

5. Importe seu componente em `App.js` de modo que ele seja renderizado na tela quando a aplicação for iniciada, `npm start`.

* Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo `About.js` deverá ficar da seguinte forma:

```javascript
    export default About;
```
6. Execute sua aplicação, npm start, e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns! 🎉


# EXERCICIO:

O exercicio foi feito em um repositorio no link abaixo:

_[Repositorio do Exercicio](https://github.com/tryber/sd-024-b-exercise-frontend-content/tree/Anderson-Reges-sd-0x-exercise-frontend-content)_