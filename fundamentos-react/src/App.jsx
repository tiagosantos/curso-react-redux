import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametros'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default _ =>
    <div id='app'>
        <h1>Fundamentos ReactJS</h1>
        <Card titulo="#4 - Desafio Aleatório">
            <Aleatorio min={2} max={130}/>
        </Card>

        <Card titulo="#3 - Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#2 - Componente com Parâmetro">
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
        </Card>
        
        <Card titulo="#1 - Primeiro Componente">
         <Primeiro></Primeiro>
        </Card>
    </div>
