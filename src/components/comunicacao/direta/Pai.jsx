import React, { useState } from "react";
import Filho from "./Filho";

function Pai(props) {

    const [label, setLabel] = useState('Valor:')
    const [num, setNum] = useState(0)

    function quandoClicar(valor, texto) {
        setNum(valor)
        setLabel(texto)
    }

    return (
        <div>
            <h4>{label} {num.toPrecision(2)}</h4>
            <Filho onClicar={quandoClicar}></Filho>
        </div>
    )
}

export default Pai