import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros'

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
      titulo="Situação do Aluno" 
      aluno="Pedro"
      nota={6.3}
    />
    <ComParametro 
      titulo="Situação do Aluno" 
      aluno="Maria"
      nota={9.7}
    />
  </div>,
  document.getElementById('root')
);
