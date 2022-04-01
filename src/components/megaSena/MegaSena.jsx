import React, { useState } from "react";

function MegaSena(props) {

    const [numeros, setNumeros] = useState(Array(props.qtd).fill(0))

    function gerarNumerosNaoContido(array) {
        const max = 60
        const min = 1
        const novoNum = parseInt(Math.random() * (max - min)) + min
        return [].includes(novoNum) ? gerarNumerosNaoContido(array) : novoNum
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtd)
        .fill(0)
        .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
        .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <div>
            <h3>Mega Sena</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </div>
    )
}

export default MegaSena