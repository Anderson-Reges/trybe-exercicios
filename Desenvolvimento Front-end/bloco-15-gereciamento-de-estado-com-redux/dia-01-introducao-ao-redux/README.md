# DIA 01 - INTRODUÇÃO AO REDUX

Nesse dia foi passado de como funciona o **Redux**, explicado como funciona todo ciclo desda **`actions`** até o **`store`**, nesse dia utilizamos JavaScript Vanilla para fixar o contéudo.

# EXERCICIO 1

1 - Crie uma store para a nossa aplicação.

2 - Crie um reducer, implementando um switch que retorne apenas o estado inicial como default.

⚠️ Não se esqueça de colocar o reducer como parâmetro para o createStore, feito na etapa anterior.

3 - Incremente o switch criado no passo anterior com os cases NEXT_COLOR e PREVIOUS_COLOR. Essas actions devem alterar o valor index guardado no INITIAL_STATE.

⚠️ Atente-se aos limites de tamanho do array: as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

4 - Crie eventListeners que escutam os cliques de cada botão, o Previous color e o Next color, e realizam um dispatch com as respectivas actions.

5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

# EXERCICIO 2

1 - Combine os reducers existentes com a função combineReducers e salve-o em uma constante.

2 - Crie uma store com a combinação dos reducers.

3 - Adicione um case dentro do switch de cada um dos reducers para alterar os estados theme e status. O objetivo do themeReducer é alternar o theme entre ‘light’ e ‘dark’. O objetivo do statusReducer é alternar o status entre ‘offline’ e ‘online’.

4 - Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

5 - Adicione um store.subscribe() para atualizar as seguintes informações na página:

    Se o tema for light, o body deverá possuir uma cor de fundo escura e uma letra clara.
    Se o tema for dark, deverá possuir uma cor de fundo clara e uma letra escura.
    Se o status for online, o #status deverá possuir o texto Online. Se o status for offline, o #status deverá possuir o texto Offline.
    Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.