# DIA 05 - SOLID: PRINCIPIOS L E I

Nesse dia foi passado os ultimos principios do **SOLID**, o principio de liskov e o principio de interface de agregação, nesse dia eu fui capaz de:

- Substituir objetos em um programa por instâncias de seus subtipos, sem alterar a funcionalidade do programa
- Compreender que muitas interfaces específicas são melhores do que uma para todos os propósitos;
- Aplicar todos os princípios **SOLID**.

# EXERCICIO

**Exercício 1**: - Aplique a técnica de injeção de dependência para que a classe `CepService` diminua seu nível de acoplamento com a dependência `FooCepAPI`.

**Exercício 2**: - A classe `CepService` ainda depende de uma implemenção concreta para as chamadas da Api e CEP. Aplique o princípio da `Inversão de dependência` para fazer com que a classe `CepService` fique completamente desacoplada.

**Exercício 3**: - Implemente uma classe `MockCepApi` usada para realização de testes unitários. Obs: Você não precisa realizar os testes.

**Exercício 4**: - Implemente um novo tipo de veículo com a classe `Car` a partir da interface existente. Esse veículo deve somente ser capaz se mover.

**Exercício 5**: - Implemente um novo tipo de veículo com a classe `AirPlane` a partir da interface existente. Esse veículo deve somente ser capaz de voar.

**Exercício 6**: - Aplique o `Princípio da Segregação de Interfaces` com o objetivo de separar a implementação de cada tipo de veículo.


