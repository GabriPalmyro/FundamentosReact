import React from "react";

function Filho(props) {

    function acao(){
        props.onClicar(Math.random(), 'Gerado:')
    }

    return (
        <div>
            <button onClick={acao} >Alterar</button>
        </div>
    )
}

export default Filho