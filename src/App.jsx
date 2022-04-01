import React from "react";
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParamer from './components/basicos/ComParamer'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Input from "./components/form/input";
import Contador from "./components/contador/Contador";
import MegaSena from "./components/megaSena/MegaSena";

function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" color="#011f4b">
                    <Primeiro></Primeiro>
                </Card>
                <Card titulo="#02 - Componente Com Param" color="#2ab7ca">
                    <ComParamer
                        titulo="Esse é o título 2"
                        subtitulo="Subtitulo teste 2"
                    />
                </Card>
                <Card titulo="#03 - Componente com Filhos" color="#03396c ">
                    <ComFilhos>
                        <ul>
                            <li>Gabriel</li>
                            <li>Carlos</li>
                            <li>Pedro</li>
                            <li>Leonardo</li>
                        </ul>
                    </ComFilhos>
                </Card>
                <Card titulo="#04 - Repetição" color="#005b96 ">
                    <Repeticao />
                </Card>
                <Card titulo="#05 - Condicional v1" color="#6497b1 ">
                    <Condicional numero={11} />
                </Card>
                <Card titulo="#06 - Condicional v2" color="#851e3e">
                    <CondicionalComIf numero={10} />
                </Card>
                <Card titulo="#07 - Comunicação Indiretab " color="#005b96">
                    <Pai />
                </Card>
                <Card titulo="#08 - Input" color="#2360B1">
                    <Input />
                </Card>
                <Card titulo="#09 - Contador" color="#851e3e">
                    <Contador passo={10} valor={0}/>
                </Card>
                <Card titulo="#10 - Mega Sena" color="#680020">
                    <MegaSena qtd={7}/>
                </Card>
            </div>
        </div>
    )
}

export default App