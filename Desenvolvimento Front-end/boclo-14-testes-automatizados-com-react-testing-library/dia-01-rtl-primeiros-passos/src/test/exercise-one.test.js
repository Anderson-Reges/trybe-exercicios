import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Adicionar' });
    expect(button).toBeInTheDocument();
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const btn = screen.getByRole('button');
    const input = screen.getByLabelText('Tarefa:');
    expect(input).toBeInTheDocument();
    expect(input).toHaveProperty('type', 'text');
    userEvent.type(input, 'correr');
    userEvent.click(btn);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Adicionar');
  });
});
