import { render, screen } from '@testing-library/react';
import Cabecalho from './index';

test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});

test('Deve renderizar o nome do usuário logado por propriedade', () => {
  const nome = 'Michel';
  render(<Cabecalho nomeUsuario={nome}/>);
  const nomeUsuario = screen.getByText(nome);
  expect(nomeUsuario).toBeInTheDocument();
});

test('Deve renderizar imagem do avatar', () => {
  render(<Cabecalho />);
  const textIcone = screen.getByAltText('Ícone de um avatar de usuário');
  expect(textIcone).toBeInTheDocument();
});

test('renders Logo component', () => {
  const { container } = render(<Cabecalho />);
  const logoElement = container.querySelector('svg');
  expect(logoElement).toBeInTheDocument();
});

test('Deve ter o nome do Logo', () => {
  const { container } = render(<Cabecalho />);
  const logo = container.querySelector('#logoByteBank');
  expect(logo).toBeInTheDocument();
});