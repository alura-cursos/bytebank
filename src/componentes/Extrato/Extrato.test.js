import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transações', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
    {
      transacao: 'Depósito',
      valor: 200,
    },
    {
      transacao: 'Transferência',
      valor: 50,
    }
  ];

  render(<Extrato transacoes={transacoes} />);

  const lista = screen.getAllByRole('listitem');
  expect(lista).toHaveLength(3);
  expect(lista).not.toHaveLength(1);
  expect(screen.getAllByText('Depósito')).toHaveLength(2);
  expect(screen.getAllByText('Transferência')).toHaveLength(1);
  expect(screen.getByText('R$ 100')).toBeInTheDocument();
  expect(screen.getByText('- R$ 50')).toBeInTheDocument();
  expect(screen.getByText('- R$ 50')).not.toHaveClass('transacao');
});

test('Deve renderizar uma lista vazio', () => {
  const transacoes = [];

  render(<Extrato transacoes={transacoes} />);
  
  const lista = screen.queryByRole('listitem');
  expect(lista).not.toBeInTheDocument();
});