# DIA 03 - PADRÕES - DECORATOR, OBSERVER, FACTORY

Nesse dia foi passado a continuação sobre `Design Patterns`, dessa vez foi a vez do `Decorator`, `Observer`, `Factory`, a qual fui capaz de:


- Definir Padrões de Projeto;
- Utilizar os padrões `Decorator`, `Observer` e `Factory`, entendendo onde eles podem ser aplicados.
- Identificar `Code Smells`.
- Identificar e tratar `Data Clumps` e `Middle Man`.


# EXERCICIO

**Exercício 1**: Em Python, é possível imprimir uma saída colorida. Para isso, basta a string começar com um código da cor antes e terminar com um código que indica o fim da formatação.

```py
ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")
```

> A cor será diferente dependendo da configuração do seu computador.

> O recurso a seguir será utilizado para exibir logs coloridos no sistema. A classe `Log()` abaixo é responsável pela criação dos Logs:

``` py
class Log:
    def dispara_log(message):
        return message
```

- Crie novas classes, `LogError()`, `LogWarning()`, `LogSuccess()` com o padrão Decorator, para imprimir colorido as seguintes frases de Log:

> Success(Verde): O sistema está funcionando

> Warning(Laranja): O sistema está lento

> Error(Vermelho): O sistema está com erros

**Exercício 2**: Você está desenvolvendo um novo despertador para Assistente virtual Alexa, utilizando o `Padrão Observer`. Ao despertar, esse despertador aciona algumas rotinas especiais na casa.

- Implemente um objeto `Alarme` que consiga `acionar` as tarefas de rotina previamente cadastradas, sempre que o alarme `despertar`. Veja alguns exemplos de rotinas:
- Acender as luzes;
- Preparar o café;
- Ligar o computador.

> 👀 De olho na dica: crie um observador para cada rotina e vincule-o dinamicamente por composição ao objeto **Alarme**. Assim, quando o despertador tocar todas as rotinas vinculadas serão disparadas automaticamente.

**Exercício 3**: Você recebeu um convite para ajudar com uma atualização de segurança em um sistema interno de uma empresa. Esse sistema atende os setores de **vendas**, **financeiro** e **suporte**. Para respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa garantir que as informações internas serão expostas somente a quem tem necessidade. Assim devemos ter os seguintes perfis de acesso:

- **Conta de Suporte**: Acesso apenas ao sistema de **suporte**
- **Conta de Suporte e Vendas**: Acesso aos sistemas vendas e **suporte**
- **Conta de Gerente**: Acesso a todos os sistemas **vendas**, **financeiro** e **suporte**

> 👀 De olho na dica: esse problema lembra o de combos na hamburgueria, que você já conhece! Aqui precisamos de uma implementação semelhante, utilizando o padrão Factory.

> 👀 De olho na dica: a Account pode ser sua Interface Criadora, que será herdada pelas fábricas, que podem ser classes referentes aos perfis de acessos.