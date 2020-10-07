import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div id='app'>
        <Aleatorio min={2} max={130}/>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Maria"
            nota={9.7}
        />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={6.3}
        />
        <Fragmento />
        <Primeiro></Primeiro>
    </div>
