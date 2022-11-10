import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const input = screen.getByLabelText('Tarefa:');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    const btn = screen.getByRole('button', { name: 'Adicionar' });
    expect(btn).toBeInTheDocument();

    userEvent.type(input, listTodo[1]);
    expect(input).toHaveValue(listTodo[1]);
    userEvent.click(btn);

    expect(input).toHaveValue('');
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
  });
});
