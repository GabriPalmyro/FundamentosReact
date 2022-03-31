import React from "react";
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParamer from './components/basicos/ComParamer'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";

function App(props) {
    return (
        <div className="App">
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#02 - Componente Com Param">
                <ComParamer
                    titulo="Esse é o título 2"
                    subtitulo="Subtitulo teste 2"
                />
            </Card>
            <Card titulo="#03 - Componente com Filhos">
                <ComFilhos>
                    <ul>
                        <li>Gabriel</li>
                        <li>Carlos</li>
                        <li>Pedro</li>
                        <li>Leonardo</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição">
                <Repeticao/>
            </Card>
            <Card titulo="#05 - Condicional v1">
                <Condicional numero={11}/>
            </Card>
            <Card titulo="#05 - Condicional v2">
                <CondicionalComIf numero={10}/>
            </Card>
        </div>
    )
}

export default App