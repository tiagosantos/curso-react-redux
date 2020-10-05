import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './components/basicos/Primeiro'
const tag = <strong>Olá, ReactJS!</strong>
ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    { tag }
  </div>,
  document.getElementById('root')
);
