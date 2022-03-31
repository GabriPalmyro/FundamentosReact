import React from "react"

function ComFilhos(props) {
    return (
        <div>
            <h2>Os Filhos: </h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default ComFilhos