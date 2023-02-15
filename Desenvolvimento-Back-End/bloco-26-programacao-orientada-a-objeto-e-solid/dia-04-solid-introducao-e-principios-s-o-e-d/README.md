# DIA 04 - SOLID: INTRODUÇÃO E PRINCIPIOS S,O E D

Nesse dia foi passado introdução ao principios do SOLID, a qual fui capaz de:

- Escrever funções e classes que tenham uma única responsabilidade no escopo da sua aplicação.
- Escrever classes com funções que estão abertas para extensão e fechadas para modificação.
- Inverter dependências para dar a quem chama o controle sobre como uma função faz o que precisa.

# EXERCICIO

<article class="c-daJEgu"><p>
Primeiramente você deve analisar todo o código da aplicação para entender como ela funciona.</p>
<p>
Em resumo a aplicação possui os seguintes <em>endpoints</em>:</p>
<ul>
  <li>
<code class="inline">GET /plants</code>: retorna todas as plantas;  </li>
  <li>
<code class="inline">POST /plants</code>: cria uma planta nova.  </li>
</ul>
<p>
Utilizando um <em>client</em> como o Insomnia, Postman ou Thunder Client verifique as informações obtidas em cada endpoint.</p>
<p>
Agora é necessário adaptar o código de modo a transformá-lo em uma API respeitando os princípios do SOLID. Para isso, você deverá:</p>
<ul>
  <li>
    <p>
Modificar o arquivo <code class="inline">./src/services/PlantService.ts</code>, aplicando os conceitos aprendidos;    </p>
  </li>
  <li>
    <p>
Implementar na camada <strong>Model</strong> pelo menos uma classe responsável por manipular as informações que estão armazenadas no diretório <code class="inline">./src/models/database/</code>. Essa classe deverá implementar a interface <code class="inline">IModel</code>:    </p>
    <blockquote>
      <p>
./src/models/interfaces/IModel.ts      </p>
    </blockquote>
    </li></ul></article>

```ts
  export interface IModelReader<T> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | null>
  }

  export interface IModelWriter<T> {
    create(arg: Omit<T, 'id'>): Promise<T>
    update(arg: T): Promise<T>
  }
  export interface IModelDelete {
    removeById(id: string): Promise<boolean>
  }

  export interface IModel<T> extends
    IModelReader<T>,
    IModelWriter<T>,
    IModelDelete {}
```

Adicionar os endpoints:

- `GET /plants/:id:` retorna uma planta específica;
- `PUT /plants/:id:` atualiza as informações de uma específica;
- `DELETE /plants/:id:` deleta uma planta específica;

Realizar as validações necessárias para os novos endpoints;