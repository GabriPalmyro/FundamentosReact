import React, { useState } from "react";

function Input(props) {

    const [nome, setNome] = useState("Pedro")

    return (
        <div>
            <h3>Nome: {nome}</h3>
            <input type="text" value={nome} 
                onChange={e => setNome(e.target.value)}></input>
        </div>
    )
}

export default Input