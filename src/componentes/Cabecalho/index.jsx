import React from 'react';
import estilos from './Cabecalho.module.css';
import { ReactComponent as Logo } from './bytebank.svg';
import avatarUsuario from './avatar.svg';

export default function Cabecalho({nomeUsuario = 'Joana Fonseca Gomes'}) {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.container}>
        <Logo id='logoByteBank' />
        <div className={estilos.usuario}>
          <p>{nomeUsuario}</p>
          <img src={avatarUsuario} alt="Ícone de um avatar de usuário" />
        </div>
      </div>
    </header>
  );
}
